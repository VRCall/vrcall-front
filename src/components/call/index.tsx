import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Socket } from "socket.io-client"
import "./index.scss"
import Peer from "peerjs";

type CallProps = {
    socket: Socket
}

export default function Index({ socket }: CallProps) {

    const [peerId, setPeerId] = useState('');
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
    const remoteVideoRef = useRef(null);
    const currentUserVideoRef = useRef(null);
    const peerInstance = useRef(null);

    useEffect(() => {
        const peer = new Peer();
    
        peer.on('open', (id) => {
          setPeerId(id)
        });
    
        peer.on('call', (call) => {
          navigator.mediaDevices.getUserMedia({ video: true, audio: true })
          .then((stream: MediaStream) => {
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
    }, [])

    const call = (remotePeerId: string) => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true})
        .then((stream) => {
            currentUserVideoRef.current.srcObject = stream;
            currentUserVideoRef.current.play();
      
            const call = peerInstance.current.call(remotePeerId, stream)
      
            call.on('stream', (remoteStream) => {
              remoteVideoRef.current.srcObject = remoteStream
              remoteVideoRef.current.play();
            });
        })
      }

    return (
        <div className="App">
          <h1>Current user id is {peerId}</h1>
          <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
          <button onClick={() => call(remotePeerIdValue)}>Call</button>
          <div className="video-container">
            <div>
              <video className="video" muted ref={currentUserVideoRef} />
            </div>
            <div>
              <video className="video" ref={remoteVideoRef} />
            </div>
          </div>
        </div>
      );

}