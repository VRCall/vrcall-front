import React, { useMemo } from "react";
import { RigidBody } from "@react-three/rapier";
import { Sky } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Map: React.FC = () => {
	const texture = useLoader(
		THREE.TextureLoader,
		"../textures/forest_floor_diff_1k.jpg"
	);

	const platformSize = [100, 1, 100];

	const sectionSize = [
		platformSize[0] / 4,
		platformSize[1],
		platformSize[2] / 4
	];

	const size = 100;
	const segments = 100;

	const geometry = useMemo(() => {
		const geometry = new THREE.PlaneGeometry(
			size,
			size,
			segments,
			segments
		);
		const vertex = new THREE.Vector3();
		for (let i = 0; i < geometry.attributes.position.count; i++) {
			vertex.fromBufferAttribute(geometry.attributes.position, i);
			const x = vertex.x / size;
			const y = vertex.y / size;

			const amplitude = 20;
			const frequency = 20;

			const noise = THREE.MathUtils.randFloat(0, amplitude) * 0.1;
			const perlinValue =
				(Math.sin(x * frequency) + Math.cos(y * frequency)) * noise;

			vertex.z = perlinValue;
			geometry.attributes.position.setXYZ(
				i,
				vertex.x,
				vertex.y,
				vertex.z
			);
		}

		geometry.rotateX(-Math.PI / 2);

		return geometry;
	}, [size, segments]);

	return (
		<>
			<RigidBody type="fixed" colliders="hull" ccd>
				<mesh geometry={geometry}>
					<meshBasicMaterial color={"red"} />
				</mesh>
				{[...Array(16)].map((_, index) => (
					<mesh
						key={index}
						position={[
							-sectionSize[0] * 1.5 +
								sectionSize[0] * (index % 4),
							0,
							-sectionSize[2] * 1.5 +
								sectionSize[2] * Math.floor(index / 4)
						]}>
						<boxGeometry args={sectionSize} />
						<meshBasicMaterial map={texture} />
					</mesh>
				))}
			</RigidBody>

			<Sky />
		</>
	);
};

export default Map;
