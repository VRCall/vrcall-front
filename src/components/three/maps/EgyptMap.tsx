import * as THREE from "three";
import { useTexture, Sky } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function EgyptMap() {
	const sandTexture = useTexture("/textures/sandstone_cracks_diff_1k.jpg");
	sandTexture.repeat.set(16, 16);
	sandTexture.wrapS = THREE.RepeatWrapping;
	sandTexture.wrapT = THREE.RepeatWrapping;
	const pyramidTexture = useTexture(
		"/textures/medieval_blocks_03_diff_1k.jpg"
	);
	pyramidTexture.repeat.set(16, 16);
	pyramidTexture.wrapS = THREE.RepeatWrapping;
	pyramidTexture.wrapT = THREE.RepeatWrapping;

	return (
		<>
			<RigidBody type="fixed" colliders="cuboid" ccd>
				<group dispose={null}>
					<group>
						<mesh position-y={-3}>
							<boxGeometry args={[75, 3, 75]} />
							<meshBasicMaterial map={sandTexture} />
						</mesh>
					</group>
				</group>
			</RigidBody>
			<mesh position={[10, 0, 15]}>
				<coneGeometry args={[14, 12, 4]} />
				<meshBasicMaterial map={pyramidTexture} />
			</mesh>
			<mesh position={[-15, 0, -15]}>
				<coneGeometry args={[14, 12, 4]} />
				<meshBasicMaterial map={pyramidTexture} />
			</mesh>
			<Cactus position={[3, 0, 5]} />
			<Cactus position={[-10, 0, -8]} />
			<Cactus position={[15, 0, -13]} />
			<Cactus position={[-15, 0, 13]} />
		</>
	);
}

function Cactus({ position }: { position: [x: number, y: number, z: number] }) {
	return (
		<>
			<group position={position}>
				<mesh>
					<capsuleGeometry args={[0.4, 5, 3]} />
					<meshBasicMaterial color="green" />
				</mesh>
				<group position={[0, 0, 0.9]}>
					<mesh rotation-x={Math.PI * 0.5}>
						<capsuleGeometry args={[0.2, 1.25, 1]} />
						<meshBasicMaterial color="green" />
					</mesh>
					<mesh position={[0, 0.5, 0.5]}>
						<capsuleGeometry args={[0.15, 1, 1]} />
						<meshBasicMaterial color="green" />
					</mesh>
				</group>
				<group position={[0, 0.75, -0.9]}>
					<mesh rotation-x={Math.PI * 0.5}>
						<capsuleGeometry args={[0.2, 1.25, 1]} />
						<meshBasicMaterial color="green" />
					</mesh>
					<mesh position={[0, 0.5, -0.5]}>
						<capsuleGeometry args={[0.15, 1, 1]} />
						<meshBasicMaterial color="green" />
					</mesh>
				</group>
			</group>
			<Sky />
		</>
	);
}
