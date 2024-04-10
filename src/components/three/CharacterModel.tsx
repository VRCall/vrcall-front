import { KeyboardControls, useVideoTexture } from "@react-three/drei";
import Ecctrl from "ecctrl";
import { DataConnection } from "peerjs";
import { Suspense, useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { DoubleSide } from "three";

const keyboardMap = [
	{ name: "forward", keys: ["ArrowUp", "KeyW"] },
	{ name: "backward", keys: ["ArrowDown", "KeyS"] },
	{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
	{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
	{ name: "jump", keys: ["Space"] },
	{ name: "run", keys: ["Shift"] }
];

type EnvironmentProps = {
	socket: Socket;
	remoteStream: MediaStream;
};

export default function CharacterModel({
	socket,
	remoteStream
}: EnvironmentProps) {
	const character = useRef(null);
	const [position, setPosition] = useState([0, 1, 2]);

	useEffect(() => {
		setInterval(() => {
			socket.emit("position", character.current.translation());
		}, 32);

		socket.on("remote-position", (data) => {
			setPosition([data.x, data.y, data.z]);
		});
	}, []);

	return (
		<>
			<KeyboardControls map={keyboardMap}>
				<Ecctrl
					ref={character}
					// debug
					camInitDis={-0.01}
					camMinDis={-0.01}
					camFollowMult={100}
					turnVelMultiplier={1}
					turnSpeed={100}
					mode="cameraBasedMovement">
					<mesh position={[0, 1, 0]}>
						<capsuleGeometry />
						<meshBasicMaterial />
					</mesh>
				</Ecctrl>
			</KeyboardControls>
			<group position={position}>
				{/* <mesh>
					<capsuleGeometry />
					<meshBasicMaterial />
				</mesh> */}
				<mesh scale={3}>
					<planeGeometry />
					<Suspense fallback={null}>
						<VideoMaterial src={remoteStream} type={"remote"} />
					</Suspense>
				</mesh>
			</group>
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
	return (
		<meshBasicMaterial side={DoubleSide} map={texture} toneMapped={false} />
	);
}
