import React from "react";
import { RigidBody } from "@react-three/rapier";

export default function Map() {
	return (
		<RigidBody type="fixed" colliders="cuboid" ccd>
			<group dispose={null}>
				<group>
					<mesh>
						<boxGeometry args={[10, 0.5, 10]} />
						<meshBasicMaterial color={"red"} />
					</mesh>
				</group>
			</group>
		</RigidBody>
	);
}
