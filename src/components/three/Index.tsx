import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import Experience from "./Experience";
import "./index.scss";

import socketIO, { Socket } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getCurrentUser } from "../../services/chat";
import Peer from "peerjs";

const socket: Socket = socketIO(import.meta.env.VITE_API_URL, {
    extraHeaders: {
        "ngrok-skip-browser-warning": "true"
    }
});

export default function Index() {

    const [peerId, setPeerId] = useState('');
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
	const [localStream, setLocalStream] = useState<MediaStream>()
	const [remoteStream, setRemoteStream] = useState<MediaStream>()
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
            call.answer(stream)
            call.on('stream', (remoteStream: MediaStream) => {
              setRemoteStream(remoteStream)
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
      
            const call = peerInstance.current.call(remotePeerId, stream)
      
            call.on('stream', (remoteStream: MediaStream) => {
              setRemoteStream(remoteStream)
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

    return(

        <div className="canvas-div">
            <KeyboardControls map={ [
                { name: "forward", keys: ["ArrowUp", "w", "W"] },
                { name: "backward", keys: ["ArrowDown", "s", "S"] },
                { name: "left", keys: ["ArrowLeft", "a", "A"] },
                { name: "right", keys: ["ArrowRight", "d", "D"] },
                { name: "jump", keys: ["Space"] }
            ] }>
                <Canvas>
                    <Experience localStream={localStream} remoteStream={remoteStream} />
                </Canvas>
            </KeyboardControls>
        </div>
        
    )

}