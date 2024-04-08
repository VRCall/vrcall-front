import { useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Socket } from "socket.io-client";
import "./index.scss";
import Peer from "peerjs";
import { getCurrentUser } from "../../services/chat";
import { checkFriendship } from "../../services/checkFriendship";

type CallProps = {
	socket: Socket;
};

export default function Index({ socket }: CallProps) {
	const [peerId, setPeerId] = useState("");
	const [remotePeerIdValue, setRemotePeerIdValue] = useState("");
	const remoteVideoRef = useRef(null);
	const currentUserVideoRef = useRef(null);
	const [localStream, setLocalStream] = useState<MediaStream>();
	const peerInstance = useRef(null);
	const mirrorVideo = (videoElement: HTMLVideoElement) => {
		videoElement.style.transform = "rotateY(0deg)";
	};

	const { roomId } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams.get("camera"));

	const getUser = async (id: string) => {
		const user = await getCurrentUser();
		socket.emit("join-room", `call-${roomId}`, id);
	};

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
			getUser(id);
			setPeerId(id);
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

				call.on("stream", (remoteStream) => {
					remoteVideoRef.current.srcObject = remoteStream;
					remoteVideoRef.current.play();
				});
			});
	};

	const shareScreen = () => {
		navigator.mediaDevices
			.getDisplayMedia({ video: true })
			.then((screenStream) => {
				const call = peerInstance.current.call(
					remotePeerIdValue,
					screenStream
				);

				call.on("stream", (remoteStream) => {
					remoteVideoRef.current.srcObject = remoteStream;
					remoteVideoRef.current.play();
					mirrorVideo(remoteVideoRef.current);
				});

				setLocalStream(screenStream);
				currentUserVideoRef.current.srcObject = screenStream;
				currentUserVideoRef.current.play();
				mirrorVideo(currentUserVideoRef.current);
			})
			.catch((error) => {
				console.error("Error accessing screen sharing:", error);
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
				<button onClick={toggleCamera}>Camera</button>
				<button onClick={toggleMic}>Audio</button>
				<button onClick={shareScreen}>Share Screen</button>
			</div>
		</div>
	);
}
