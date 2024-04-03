import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Socket } from "socket.io-client"
import "./index.scss"
import Peer from "peerjs";
import { getCurrentUser } from "../../services/chat";

type CallProps = {
    socket: Socket
}

export default function Index({ socket }: CallProps) {

    const [peerId, setPeerId] = useState('');
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
	const [localStream, setLocalStream] = useState<MediaStream>()
    const peerInstance = useRef(null);

    const { roomId } = useParams();

    const getUser = async (id: string) => {
        const user = await getCurrentUser();
        console.log(user);
        socket.emit("join-room", roomId, id)
    }

    useEffect(() => {
        const peer = new Peer();
    
        peer.on('open', (id) => {
          getUser(id)
          setPeerId(id)
        });
    
        peer.on('call', (call) => {
          navigator.mediaDevices.getUserMedia({ video: true, audio: true })
          .then((stream: MediaStream) => {
			setLocalStream(stream);
			
            currentUserVideoRef.current.srcObject = stream;
            currentUserVideoRef.current.play();
            call.answer(stream)
            call.on('stream', function(remoteStream) {
              remoteVideoRef.current.srcObject = remoteStream
              remoteVideoRef.current.play();
            });
          })
        })
      peerInstance.current = peer;

      socket.on("user-connected", (userId: string) => {
        call(userId)
      })
    }, [])

    const call = (remotePeerId: string) => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then((stream: MediaStream) => {
			setLocalStream(stream)
			console.log(localStream);
            currentUserVideoRef.current.srcObject = stream;
            currentUserVideoRef.current.play();
      
            const call = peerInstance.current.call(remotePeerId, stream)
      
            call.on('stream', (remoteStream) => {
              remoteVideoRef.current.srcObject = remoteStream
              remoteVideoRef.current.play();
            });
        })
    }

    const toggleCamera = () => {
		console.log(localStream);
		
		let videoTrack = localStream.getTracks().find(track => track.kind === "video")

		videoTrack!.enabled = !videoTrack?.enabled
    } 

    const toggleMic = () => {
		let audioTrack = localStream.getTracks().find(track => track.kind === "audio")

		audioTrack!.enabled = !audioTrack?.enabled
    } 

    return (
        <div className="App">
          {/* <h1>Current user id is {peerId}</h1>
          <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
          <button onClick={() => call(remotePeerIdValue)}>Call</button> */}
          <div className="container">
            <div className="video-container">
              <video className="video self" muted ref={currentUserVideoRef} />
            </div>
            <div className="video-container">
              <video className="video remote" ref={remoteVideoRef} />
            </div>
          </div>
		  <div className="button-container">
			<button onClick={ toggleCamera }>Camera</button>
			<button onClick={ toggleMic }>Audio</button>
		  </div>
        </div>
      );

}