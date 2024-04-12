import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import "./index.scss";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Peer from "peerjs";
import {
	BsFillCameraVideoFill,
	BsFillCameraVideoOffFill
} from "react-icons/bs";
import { PiMicrophoneFill, PiMicrophoneSlashFill } from "react-icons/pi";
import { MdCallEnd } from "react-icons/md";
import SocketProps from "../../utils/socket";
import { checkFriendship } from "../../services/checkFriendship";

export default function Index({ socket }: SocketProps) {
	const [localStream, setLocalStream] = useState<MediaStream>();
	const [remoteStream, setRemoteStream] = useState<MediaStream>();
	const peerInstance = useRef<Peer>(null);
	const currentUserVideoRef = useRef(null);
	const [audio, setAudio] = useState<boolean>(true);
	const [video, setVideo] = useState<boolean>(true);

	const { roomId } = useParams();

	const friendship = async () => {
		try {
			await checkFriendship(roomId);
		} catch (error) {
			console.error("Error checking friendship:", error);
			window.close();
		}
	};

	useEffect(() => {
		friendship();
		const peer = new Peer();

		peer.on("open", (id) => {
			socket.emit("join-room", roomId, id);
		});

		peer.on("call", (call) => {
			navigator.mediaDevices
				.getUserMedia({ video: true, audio: true })
				.then((stream: MediaStream) => {
					setLocalStream(stream);
					currentUserVideoRef.current.srcObject = stream;
					currentUserVideoRef.current.play();
					call.answer(stream);
					call.on("stream", (remoteStream: MediaStream) => {
						setRemoteStream(remoteStream);
					});
				});
		});

		peerInstance.current = peer;

		socket.on("user-connected", (userId: string) => {
			call(userId);
		});

		return () => {
			peer.destroy();
		};
	}, []);

	const call = (remotePeerId: string) => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then((stream: MediaStream) => {
				setLocalStream(stream);
				currentUserVideoRef.current.srcObject = stream;
				currentUserVideoRef.current.play();

				const call = peerInstance.current.call(remotePeerId, stream);

				call.on("stream", (remoteStream: MediaStream) => {
					setRemoteStream(remoteStream);
				});
			});
	};

	const toggleCamera = () => {
		let videoTrack = localStream
			.getTracks()
			.find((track) => track.kind === "video");

		videoTrack!.enabled = !videoTrack?.enabled;
		setVideo(!video);
	};

	const toggleMic = () => {
		let audioTrack = localStream
			.getTracks()
			.find((track) => track.kind === "audio");

		audioTrack!.enabled = !audioTrack?.enabled;
		setAudio(!audio);
	};

	return (
		<div
			className="canvas-div"
			style={{ position: true ? "fixed" : "initial" }}>
			<Canvas
				onPointerDown={(e) => {
					if (e.pointerType === "mouse") {
						(e.target as HTMLCanvasElement).requestPointerLock();
					}
				}}>
				<Experience
					localStream={localStream}
					remoteStream={remoteStream}
					socket={socket}
				/>
			</Canvas>
			<div className="video-container">
				<video className="video self" muted ref={currentUserVideoRef} />
			</div>
			<div className="button-container">
				<button className="camera" onClick={toggleCamera}>
					{video ? (
						<BsFillCameraVideoFill className="iconcam" />
					) : (
						<BsFillCameraVideoOffFill className="iconcam" />
					)}
				</button>
				<button className="micro" onClick={toggleMic}>
					{audio ? (
						<PiMicrophoneFill className="iconmic" />
					) : (
						<PiMicrophoneSlashFill className="iconmic" />
					)}
				</button>
				<button
					className="raccrocher"
					onClick={() => {
						window.close();
					}}>
					<MdCallEnd className="iconracc" />
				</button>
			</div>
		</div>
	);
}
