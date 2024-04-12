import { useVideoTexture } from "@react-three/drei";
import { Perf } from "r3f-perf";
import React, { useEffect, useRef } from "react";
import Environment from "./Environment";
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
			{/* <Perf /> */}

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
