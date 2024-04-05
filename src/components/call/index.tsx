import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Socket } from "socket.io-client";
import "./index.scss";
import Peer from "peerjs";
import { getCurrentUser } from "../../services/chat";
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

	const getUser = async (id: string) => {
		const user = await getCurrentUser();
		socket.emit("join-room", roomId, id);
	};

	useEffect(() => {
		const peer = new Peer();

		peer.on("open", (id) => {
			getUser(id);
		});

		peer.on("call", (call) => {
			navigator.mediaDevices
				.getUserMedia({ video: true, audio: true })
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
	}, []);

	const call = (remotePeerId: string) => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
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
		if (call) {
			call.close();
			setCall(null);
		}
	};

	return (
		<div className="App">
			{/* <h1>Current user id is {peerId}</h1>
          <input type="text" value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} />
          <button onClick={() => call(remotePeerIdValue)}>Call</button> */}
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

// /* -----------------------------------JUJU Test appel a plusieurs ----------------------------- */

// import { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Socket } from "socket.io-client";
// import "./index.scss";
// import Peer from "peerjs";
// import { getCurrentUser } from "../../services/chat";
// import { MdCallEnd } from "react-icons/md";
// import {
// 	BsFillCameraVideoFill,
// 	BsFillCameraVideoOffFill
// } from "react-icons/bs";
// import { PiMicrophoneFill, PiMicrophoneSlashFill } from "react-icons/pi";

// type CallProps = {
// 	socket: Socket;
// };

// export default function Index({ socket }: CallProps) {
// 	const remoteVideoRefs = useRef<any[]>([]);
// 	const currentUserVideoRef = useRef(null);
// 	const [localStream, setLocalStream] = useState<MediaStream>();
// 	const [audio, setAudio] = useState<boolean>(true);
// 	const [video, setVideo] = useState<boolean>(true);
// 	const peerInstance = useRef(null);

// 	const { roomId } = useParams();

// 	const getUser = async (id: string) => {
// 		const user = await getCurrentUser();
// 		socket.emit("join-room", roomId, id);
// 	};

// 	useEffect(() => {
// 		const peer = new Peer();

// 		peer.on("open", (id) => {
// 			getUser(id);
// 		});

// 		peer.on("call", (call) => {
// 			navigator.mediaDevices
// 				.getUserMedia({ video: true, audio: true })
// 				.then((stream: MediaStream) => {
// 					setLocalStream(stream);

// 					currentUserVideoRef.current.srcObject = stream;
// 					currentUserVideoRef.current.play();
// 					call.answer(stream);
// 					call.on("stream", function (remoteStream) {
// 						const index = remoteVideoRefs.current.length;
// 						remoteVideoRefs.current[index].srcObject = remoteStream;
// 						remoteVideoRefs.current[index].play();
// 					});
// 				});
// 		});
// 		peerInstance.current = peer;

// 		socket.on("user-connected", (userId: string) => {
// 			call(userId);
// 		});
// 	}, []);

// 	const call = (remotePeerId: string) => {
// 		navigator.mediaDevices
// 			.getUserMedia({ video: true, audio: true })
// 			.then((stream: MediaStream) => {
// 				setLocalStream(stream);
// 				currentUserVideoRef.current.srcObject = stream;
// 				currentUserVideoRef.current.play();

// 				const call = peerInstance.current.call(remotePeerId, stream);

// 				call.on("stream", (remoteStream) => {
// 					const videoElement = document.createElement("video");
// 					videoElement.srcObject = remoteStream;
// 					videoElement.play();

// 					remoteVideoRefs.current.push(videoElement);
// 				});
// 			});
// 	};

// 	const toggleCamera = () => {
// 		let videoTrack = localStream
// 			.getTracks()
// 			.find((track) => track.kind === "video");

// 		videoTrack!.enabled = !videoTrack?.enabled;
// 		setVideo(!video);
// 	};

// 	const toggleMic = () => {
// 		let audioTrack = localStream
// 			.getTracks()
// 			.find((track) => track.kind === "audio");

// 		audioTrack!.enabled = !audioTrack?.enabled;
// 		setAudio(!audio);
// 	};

// 	const toggleDisconnect = () => {
// 		if (peerInstance.current) {
// 			peerInstance.current.destroy();
// 		}
// 	};

// 	return (
// 		<div className="App">
// 			<div className="container">
// 				<div className="video-container">
// 					<video
// 						className="video self"
// 						muted
// 						ref={currentUserVideoRef}
// 					/>
// 				</div>
// 				{remoteVideoRefs.current.map((videoRef, index) => (
// 					<div className="video-container" key={index}>
// 						<video className="video remote" ref={videoRef} />
// 					</div>
// 				))}
// 			</div>
// 			<div className="button-container">
// 				<button className="camera" onClick={toggleCamera}>
// 					{video ? (
// 						<BsFillCameraVideoFill className="iconcam" />
// 					) : (
// 						<BsFillCameraVideoOffFill className="iconcam" />
// 					)}
// 				</button>
// 				<button className="micro" onClick={toggleMic}>
// 					{audio ? (
// 						<PiMicrophoneFill className="iconmic" />
// 					) : (
// 						<PiMicrophoneSlashFill className="iconmic" />
// 					)}
// 				</button>
// 				<button className="raccrocher" onClick={toggleDisconnect}>
// 					<MdCallEnd className="iconracc" />
// 				</button>
// 			</div>
// 		</div>
// 	);
// }
