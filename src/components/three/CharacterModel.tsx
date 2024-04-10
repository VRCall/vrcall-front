import { KeyboardControls } from "@react-three/drei";
import Ecctrl from "ecctrl";
import { DataConnection } from "peerjs";
import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";

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
};

export default function CharacterModel({ socket }: EnvironmentProps) {
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
			<mesh position={position}>
				<capsuleGeometry />
				<meshBasicMaterial />
			</mesh>
		</>
	);
}
