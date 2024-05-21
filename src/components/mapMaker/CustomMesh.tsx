import { useEffect, useState } from "react";
import * as THREE from "three";

export default function CustomMesh({ mesh }: { mesh: THREE.Mesh }) {
	const [geometry, setGeometry] = useState<any>();

	useEffect(() => {
		switch (mesh.geometry.type) {
			case "BoxGeometry":
				setGeometry(
					<boxGeometry
						scale={[mesh.scale.x, mesh.scale.y, mesh.scale.z]}
					/>
				);
				break;
			case "SphereGeometry":
				setGeometry(
					<sphereGeometry
						scale={[mesh.scale.x, mesh.scale.y, mesh.scale.z]}
					/>
				);
				break;
			default:
				setGeometry(
					<boxGeometry
						scale={[mesh.scale.x, mesh.scale.y, mesh.scale.z]}
					/>
				);
				break;
		}
	}, []);

	return (
		<mesh position={mesh.position}>
			{geometry}
			<meshBasicMaterial color={mesh.material.color} />
		</mesh>
	);
}
