import React from "react";
import { RigidBody } from "@react-three/rapier";
import { Sky } from "@react-three/drei";

export default function Map() {
	return (
		<>
			<RigidBody type="fixed" colliders="cuboid" ccd>
				<group dispose={null}>
					<group>
						<mesh position-y={-3}>
							<boxGeometry args={[25, 3, 25]} />
							<meshBasicMaterial color={"red"} />
						</mesh>
					</group>
				</group>
			</RigidBody>
			<Sky />
		</>
	);
}
