import { useVideoTexture } from "@react-three/drei";
import { Perf } from "r3f-perf";
import React, { Suspense, useEffect, useRef } from "react";
import Environment from "./Environment";
import { DataConnection } from "peerjs";
import { Socket } from "socket.io-client";

type ExperienceProps = {
	localStream: MediaStream;
	remoteStream: MediaStream;
	socket: Socket;
};

export default function Experience({
	localStream,
	remoteStream,
	socket
}: ExperienceProps) {
	const localRef = useRef(null);
	const remoteRef = useRef(null);

	useEffect(() => {
		if (localRef.current && localStream && !localRef.current.srcObject) {
			localRef.current.srcObject = localStream;
			//const localTexture = useVideoTexture(localStream)
			//plane.current.map = localTexture
		}

		if (remoteRef.current && remoteStream && !remoteRef.current.srcObject) {
			remoteRef.current.srcObject = remoteStream;
		}
	}, [localStream, remoteStream]);

	return (
		<>
			<Perf />

			{/* <mesh position={[3, 2.5, -3]} scale={5}>
				<planeGeometry />
				<Suspense fallback={null}>
					<VideoMaterial src={localStream} type={"local"} />
				</Suspense>
			</mesh> */}
			{/* <mesh position={[-3, 2.5, -3]} scale={5}>
				<planeGeometry />
				<Suspense fallback={null}>
					<VideoMaterial src={remoteStream} type={"remote"} />
				</Suspense>
			</mesh> */}

			<Environment socket={socket} remoteStream={remoteStream} />
		</>
	);
}

type VideoMaterialProps = {
	src: MediaStream;
	type: string;
};

function VideoMaterial({ src, type }: VideoMaterialProps) {
	const texture = useVideoTexture(src, {
		muted: type === "local"
	});
	return <meshBasicMaterial map={texture} toneMapped={false} />;
}
