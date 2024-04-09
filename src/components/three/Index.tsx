import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import "./index.scss";

import socketIO, { Socket } from "socket.io-client";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Peer, { DataConnection } from "peerjs";

const socket: Socket = socketIO(import.meta.env.VITE_API_URL);

export default function Index() {
	const [localStream, setLocalStream] = useState<MediaStream>();
	const [remoteStream, setRemoteStream] = useState<MediaStream>();
	const peerInstance = useRef<Peer>(null);
	const [dataConnection, setDataConnection] = useState<DataConnection>();

	const { roomId } = useParams();

	useEffect(() => {
		const peer = new Peer();

		peer.on("open", (id) => {
			socket.emit("join-room", roomId, id);
		});

		peer.on("call", (call) => {
			navigator.mediaDevices
				.getUserMedia({ video: true, audio: true })
				.then((stream: MediaStream) => {
					setLocalStream(stream);
					call.answer(stream);
					call.on("stream", (remoteStream: MediaStream) => {
						setRemoteStream(remoteStream);
					});

					let dataConnectionTemp = peerInstance.current.connect(
						call.peer
					);
					dataConnectionTemp?.on("open", () => {
						console.log("daat connection open");
						setDataConnection(dataConnectionTemp);
					});
				});
		});

		peer.on("connection", (conn) => {
			setDataConnection(conn);
		});
		peerInstance.current = peer;

		socket.on("user-connected", (userId: string) => {
			call(userId);
		});

		dataConnection?.on("open", () => {
			console.log("daat connection open");
			dataConnection?.on("data", (data: any) => {
				console.log(data);
			});
		});

		setInterval(() => {
			dataConnection?.send("Hello World!");
		}, 1000);

		dataConnection?.on("data", (data: any) => {
			console.log(data);
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

				const call = peerInstance.current.call(remotePeerId, stream);

				call.on("stream", (remoteStream: MediaStream) => {
					setRemoteStream(remoteStream);
				});

				let dataConnectionTemp =
					peerInstance.current.connect(remotePeerId);
				dataConnectionTemp?.on("open", () => {
					console.log("daat connection open");
					setDataConnection(dataConnectionTemp);
				});
			});
	};

	const toggleCamera = () => {
		let videoTrack = localStream
			.getTracks()
			.find((track) => track.kind === "video");

		videoTrack!.enabled = !videoTrack?.enabled;
	};

	const toggleMic = () => {
		let audioTrack = localStream
			.getTracks()
			.find((track) => track.kind === "audio");

		audioTrack!.enabled = !audioTrack?.enabled;
	};

	return (
		<div
			className="canvas-div"
			style={{ position: dataConnection ? "fixed" : "initial" }}>
			{dataConnection ? (
				<>
					<Canvas
						onPointerDown={(e) => {
							if (e.pointerType === "mouse") {
								(
									e.target as HTMLCanvasElement
								).requestPointerLock();
							}
						}}>
						{/* <Environment /> */}
						<Experience
							localStream={localStream}
							remoteStream={remoteStream}
							dataConnection={dataConnection}
						/>
					</Canvas>
					<div
						style={{
							position: "absolute",
							left: "50%",
							top: "90%"
						}}>
						<button onClick={toggleCamera}>Camera</button>
						<button onClick={toggleMic}>Audio</button>
					</div>
				</>
			) : (
				<div
					style={{
						position: "absolute",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)"
					}}>
					En attente du correpondant...
				</div>
			)}
		</div>
	);
}
