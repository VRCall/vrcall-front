import {
	PointerLockControls,
	OrbitControls,
	Html,
	useVideoTexture
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense, useEffect, useRef } from "react";

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
			<PointerLockControls />

			<mesh scale={1.5}>
				<boxGeometry />
				<meshBasicMaterial color={"red"} />
				{/* <Html position={ [1, 1, 0] }
                        distanceFactor={ 5 }>
                    <p style={ { color: "blue" } }>
                        gello
                    </p>
                    <video style={{ border: "2px solid black" }} onLoad={ addLocalVideo } ref={ localRef } />
                    <video style={{ border: "2px solid black" }} onLoad={ addRemoteVideo } ref={ remoteRef } />
                </Html> */}
			</mesh>

			{/* <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry />
                <meshBasicMaterial ref={ plane } color={"green"} />
            </mesh> */}

			<mesh position={[3, -1, -3]} scale={5}>
				<planeGeometry />
				<Suspense fallback={null}>
					<VideoMaterial src={localStream} />
				</Suspense>
			</mesh>
			<mesh position={[-3, -1, -3]} scale={5}>
				<planeGeometry />
				<Suspense fallback={null}>
					<VideoMaterial src={remoteStream} />
				</Suspense>
			</mesh>
		</>
	);
}

type VideoMaterialProps = {
	src: MediaStream;
};

function VideoMaterial({ src }: VideoMaterialProps) {
	const texture = useVideoTexture(src);
	return <meshBasicMaterial map={texture} toneMapped={false} />;
}
