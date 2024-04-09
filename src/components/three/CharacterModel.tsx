import { KeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Ecctrl from "ecctrl";
import { DataConnection } from "peerjs";
import { useEffect, useRef } from "react";

const keyboardMap = [
	{ name: "forward", keys: ["ArrowUp", "KeyW"] },
	{ name: "backward", keys: ["ArrowDown", "KeyS"] },
	{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
	{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
	{ name: "jump", keys: ["Space"] },
	{ name: "run", keys: ["Shift"] }
];

type EnvironmentProps = {
	dataConnection: DataConnection;
};

export default function CharacterModel({ dataConnection }: EnvironmentProps) {
	const character = useRef(null);
	const remoteCharacter = useRef(null);

	useFrame(() => {
		if (dataConnection.open) {
			//dataConnection.send(character.current.translation())
			//console.log("sending data");
		}
	});

	useEffect(() => {
		console.log(dataConnection);

		dataConnection.on("data", (data) => {
			console.log(data);
			//remoteCharacter.current.position.set(new Vector3({x: data.x, y: data.y, z: data.z}))
		});
		dataConnection?.on("open", () => {
			console.log("daaaaat connection open");
		});
	}, []);

	return (
		<>
			<KeyboardControls map={keyboardMap}>
				<Ecctrl
					ref={character}
					// debug
					// camInitDis={ -0.01 }
					// camMinDis={ -0.01 }
					// camFollowMult={ 100 }
					// turnVelMultiplier={ 1 }
					// turnSpeed={ 100 }
					mode="cameraBasedMovement">
					<mesh position={[0, 1, 0]}>
						<capsuleGeometry />
						<meshBasicMaterial />
					</mesh>
				</Ecctrl>
			</KeyboardControls>
			<mesh ref={remoteCharacter}>
				<capsuleGeometry />
				<meshBasicMaterial />
			</mesh>
		</>
	);
}
