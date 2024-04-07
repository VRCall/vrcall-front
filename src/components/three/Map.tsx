import React from "react";
import { RigidBody } from "@react-three/rapier";

export default function Map() {
	return (
		<RigidBody type="fixed" colliders="trimesh" ccd>
			<group dispose={null}>
				<group rotation={[-Math.PI / 2, 0, 0]} scale={11}>
					<mesh>
						<planeGeometry />
						<meshBasicMaterial color={"red"} />
					</mesh>
				</group>
			</group>
		</RigidBody>
	);
}
