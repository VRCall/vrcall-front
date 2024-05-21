import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { Environment, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function NightMap() {
	const moonTexture = useTexture("/textures/moon.jpg");

	const texturetree = useTexture("/textures/feuille.jpg");
	const texturegrass = useTexture("/textures/herbe.jpg");
	texturegrass.repeat.set(14, 14);
	texturegrass.wrapS = THREE.RepeatWrapping;
	texturegrass.wrapT = THREE.RepeatWrapping;

	const mapSize = 75;

	const wallThickness = 0.5;
	const wallPosition = mapSize / 2 + wallThickness / 2;

	return (
		<>
			<RigidBody type="fixed" colliders="cuboid" ccd>
				<group>
					<mesh position={[0, -1, 0]}>
						<boxGeometry args={[mapSize, 1, mapSize]} />
						<meshBasicMaterial map={texturegrass} />
					</mesh>
				</group>
			</RigidBody>

			{/* <RigidBody type="fixed"> */}
			<mesh position={[10, 20, 30]}>
				<sphereGeometry args={[3, 32, 32]} />
				<meshBasicMaterial map={moonTexture} />
			</mesh>
			{/* </RigidBody> */}

			{Array.from({ length: 100 }).map((_, index) => (
				<RigidBody
					key={index}
					type="fixed"
					colliders="cuboid"
					ccd
					position={[
						Math.random() * mapSize - mapSize / 2,
						0,
						Math.random() * mapSize - mapSize / 2
					]}>
					<group>
						<mesh>
							<cylinderGeometry args={[0.5, 0.5, 2, 10]} />
							<meshBasicMaterial color="maroon" />
						</mesh>
						<mesh position={[0, 2, 0]}>
							<sphereGeometry args={[1.5, 9, 7]} />
							<meshBasicMaterial map={texturetree} />
						</mesh>
					</group>
				</RigidBody>
			))}

			<Environment background files={["/textures/night.hdr"]} />
		</>
	);
}
