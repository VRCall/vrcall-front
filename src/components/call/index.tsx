import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Socket } from "socket.io-client";
import "./index.scss";
import Peer from "peerjs";
import { checkFriendship } from "../../services/checkFriendship";
import { MdCallEnd } from "react-icons/md";
import {
	BsFillCameraVideoFill,
	BsFillCameraVideoOffFill
} from "react-icons/bs";
import { PiMicrophoneFill, PiMicrophoneSlashFill } from "react-icons/pi";

type CallProps = {
	socket: Socket;
};

export default function Index({ socket }: CallProps) {
	const remoteVideoRef = useRef(null);
	const currentUserVideoRef = useRef(null);
	const [localStream, setLocalStream] = useState<MediaStream>();
	const [audio, setAudio] = useState<boolean>(true);
	const [video, setVideo] = useState<boolean>(true);
	const peerInstance = useRef(null);

	const { roomId } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();

	const fetchData = async () => {
		try {
			await checkFriendship(roomId);
		} catch (error) {
			console.error("Error checking friendship:", error);
			window.close();
		}
	};

	useEffect(() => {
		fetchData();
		const peer = new Peer();

		peer.on("open", (id) => {
			socket.emit("join-room", `call-${roomId}`, id);
		});

		peer.on("call", (call) => {
			let camera = searchParams.get("camera");
			let isCam = false;
			if (camera === "true") isCam = true;

			navigator.mediaDevices
				.getUserMedia({ video: isCam, audio: true })
				.then((stream: MediaStream) => {
					setLocalStream(stream);

					currentUserVideoRef.current.srcObject = stream;
					currentUserVideoRef.current.play();
					call.answer(stream);
					call.on("stream", function (remoteStream) {
						remoteVideoRef.current.srcObject = remoteStream;
						remoteVideoRef.current.play();
					});
				});
		});
		peerInstance.current = peer;

		socket.on("user-connected", (userId: string) => {
			console.log("user joined your room");

			call(userId);
		});

		return () => {
			socket.emit("leave-room", `call-${roomId}`);
			localStream?.getTracks()[0].stop();
		};
	}, []);

	const call = (remotePeerId: string) => {
		let camera = searchParams.get("camera");
		let isCam = false;
		if (camera === "true") isCam = true;
		navigator.mediaDevices
			.getUserMedia({ video: isCam, audio: true })
			.then((stream: MediaStream) => {
				setLocalStream(stream);
				currentUserVideoRef.current.srcObject = stream;
				currentUserVideoRef.current.play();

				const call = peerInstance.current.call(remotePeerId, stream);

				call.on("stream", (remoteStream: MediaStream) => {
					remoteVideoRef.current.srcObject = remoteStream;
					remoteVideoRef.current.play();
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

	const toggleDisconnect = () => {
		window.close();
	};

	return (
		<div className="App">
			<div className="container">
				<div className="video-container">
					<video
						className="video self"
						muted
						ref={currentUserVideoRef}
					/>
				</div>
				<div className="video-container">
					<video className="video remote" ref={remoteVideoRef} />
				</div>
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
				<button className="raccrocher" onClick={toggleDisconnect}>
					<MdCallEnd className="iconracc" />
				</button>
			</div>
		</div>
	);
}
