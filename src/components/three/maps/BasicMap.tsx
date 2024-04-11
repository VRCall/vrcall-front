import { RigidBody } from "@react-three/rapier";

export default function BasicMap() {
	return (
		<RigidBody type="fixed" colliders="cuboid" ccd>
			<group dispose={null}>
				<group>
					<mesh position-y={-3}>
						<boxGeometry args={[75, 3, 75]} />
						<meshBasicMaterial color="red" />
					</mesh>
				</group>
			</group>
		</RigidBody>
	);
}
