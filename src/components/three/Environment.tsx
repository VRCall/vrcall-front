import React, { Suspense } from "react";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { Physics } from "@react-three/rapier";
import { KeyboardControls, PointerLockControls } from "@react-three/drei";
import CharacterModel from "./CharacterModel";
import Map from "./Map";

const keyboardMap = [
	{ name: "forward", keys: ["ArrowUp", "KeyW"] },
	{ name: "backward", keys: ["ArrowDown", "KeyS"] },
	{ name: "leftward", keys: ["ArrowLeft", "KeyA"] },
	{ name: "rightward", keys: ["ArrowRight", "KeyD"] },
	{ name: "jump", keys: ["Space"] }
	// { name: "run", keys: ["Shift"] },
	// // Optional animation key map
	// { name: "action1", keys: ["1"] },
	// { name: "action2", keys: ["2"] },
	// { name: "action3", keys: ["3"] },
	// { name: "action4", keys: ["KeyF"] },
];

export default function Environment() {
	return (
		<>
			<Physics timeStep={"vary"}>
				<Suspense fallback={null}>
					<KeyboardControls map={keyboardMap}>
						<Ecctrl debug mode="cameraBasedMovement">
							<CharacterModel />
						</Ecctrl>
					</KeyboardControls>
					<Map />
				</Suspense>
			</Physics>
		</>
	);
}
