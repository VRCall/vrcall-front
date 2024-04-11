import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function FirstMap() {
	const grassTexture = useTexture("/textures/grass.jpg");
	const woodTexture = useTexture("/textures/sakura_bark_diff_1k.png");
	woodTexture.colorSpace = THREE.SRGBColorSpace;
	grassTexture.repeat.set(16, 16);
	grassTexture.wrapS = THREE.RepeatWrapping;
	grassTexture.wrapT = THREE.RepeatWrapping;

	return (
		<>
			<RigidBody type="fixed" colliders="cuboid" ccd>
				<group dispose={null}>
					<group>
						<mesh position-y={-3}>
							<boxGeometry args={[75, 3, 75]} />
							<meshBasicMaterial map={grassTexture} />
						</mesh>
					</group>
				</group>
			</RigidBody>
			{Array.from({ length: 100 }).map(() => {
				return (
					<group
						position={[
							(Math.random() - 0.5) * 75,
							0,
							(Math.random() - 0.5) * 75
						]}>
						<mesh position-y={-1} scale={[0.5, 3, 0.5]}>
							<cylinderGeometry args={[0.5, 1, 1, 6]} />
							<meshBasicMaterial map={woodTexture} />
						</mesh>
						<mesh
							position-y={0.75}
							scale={[0.75, Math.random() + 0.5, 0.75]}>
							<sphereGeometry args={[1.5, 5, 5]} />
							<meshBasicMaterial color="green" />
						</mesh>
					</group>
				);
			})}
		</>
	);
}
