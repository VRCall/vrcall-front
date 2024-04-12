import { Sky } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import Island from "./Island";

export default function Map() {
	return (
		<>
			{/* <RigidBody type="fixed" colliders="cuboid" ccd>
				<group dispose={null}>
					<group>
						<mesh position-y={-3}>
							<boxGeometry args={[25, 3, 25]} />
							{/* <meshBasicMaterial color={"red"} /> 
						</mesh>
					</group>
				</group>
			</RigidBody> */}
			<RigidBody type="fixed" colliders="trimesh" ccd>
				<Island position-y={-50} scale={[100, 100, 100]} />
			</RigidBody>
			<ambientLight intensity={4} />
			<Sky />
		</>
	);
}
