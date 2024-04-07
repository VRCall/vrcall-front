import {
	PointerLockControls,
	OrbitControls,
	Html,
	useVideoTexture
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import React, { Suspense, useEffect, useRef } from "react";

type ExperienceProps = {
	localStream: MediaStream;
	remoteStream: MediaStream;
};

export default function Experience({
	localStream,
	remoteStream
}: ExperienceProps) {
	const localRef = useRef(null);
	const remoteRef = useRef(null);
	//const plane = useRef(null);

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

	const addLocalVideo = () => {
		console.log("local");

		localRef.current.srcObject = localStream;
		localRef.current.play();
	};

	const addRemoteVideo = () => {
		console.log("remote");

		remoteRef.current.srcObject = remoteStream;
		remoteRef.current.play();
	};

	return (
		<>
			<Perf position={"top-left"} />

			{/* <OrbitControls makeDefault /> */}
			{/* <PointerLockControls /> */}

			{/* <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry />
                <meshBasicMaterial ref={ plane } color={"green"} />
            </mesh> */}

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
