import {
	PointerLockControls,
	OrbitControls,
	Html,
	useVideoTexture
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import React, { Suspense, useEffect, useRef } from "react";
import Environment from "./Environment";
import { DataConnection } from "peerjs";
import { useFrame } from "@react-three/fiber";

type ExperienceProps = {
	localStream: MediaStream;
	remoteStream: MediaStream;
	dataConnection: DataConnection;
};

export default function Experience({
	localStream,
	remoteStream,
	dataConnection
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
			<Perf position={"top-left"} />

			<mesh position={[3, 2.5, -3]} scale={5}>
				<planeGeometry />
				<Suspense fallback={null}>
					<VideoMaterial src={localStream} type={"local"} />
				</Suspense>
			</mesh>
			<mesh position={[-3, 2.5, -3]} scale={5}>
				<planeGeometry />
				<Suspense fallback={null}>
					<VideoMaterial src={remoteStream} type={"remote"} />
				</Suspense>
			</mesh>

			<Environment dataConnection={dataConnection} />
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
