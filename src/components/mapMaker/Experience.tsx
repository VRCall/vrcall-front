import { OrbitControls, Sky, PivotControls } from "@react-three/drei";
import { button, useControls } from "leva";
import { useEffect, useState } from "react";
import * as THREE from "three";
import CustomMesh from "./CustomMesh";

export default function Experience() {
	const [meshes, setMeshes] = useState<THREE.Mesh[]>([]);

	const { color } = useControls("Ground color", {
		color: "#b9ff49"
	});

	const addCube = () => {
		let mesh: THREE.Mesh;
		console.log("meshType : " + meshType);

		switch (meshType) {
			case "Cube":
				mesh = new THREE.Mesh(
					new THREE.BoxGeometry(1, 1, 1),
					new THREE.MeshBasicMaterial({ color: "red" })
				);
				break;
			case "Sphere":
				mesh = new THREE.Mesh(
					new THREE.SphereGeometry(1, 32, 16),
					new THREE.MeshBasicMaterial({ color: "red" })
				);
				break;
			default:
				mesh = new THREE.Mesh(
					new THREE.BoxGeometry(1, 1, 1),
					new THREE.MeshBasicMaterial({ color: "red" })
				);
				break;
		}
		mesh.position.set(
			(Math.random() - 0.5) * 15,
			1,
			(Math.random() - 0.5) * 15
		);
		//console.log(mesh);

		setMeshes((meshes) => [...meshes, mesh]);
	};

	const { meshType } = useControls("Add mesh to scene", {
		meshType: { options: ["Cube", "Sphere", "Cylinder", "Cone", "Torus"] },
		click: button(addCube)
	});

	// useEffect(() => {
	//     console.log("mesh type changed : now is " + meshType);
	// }, [meshType])

	return (
		<>
			<OrbitControls makeDefault />

			{/* <PivotControls anchor={ [0, 0, 0] } depthTest={ false }>
                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial />
                </mesh>
            </PivotControls> */}
			<mesh position-y={-3}>
				<boxGeometry args={[75, 3, 75]} />
				<meshBasicMaterial color={color} />
			</mesh>

			{meshes &&
				meshes.map((mesh) => {
					return <CustomMesh key={mesh.uuid} mesh={mesh} />;
				})}

			<Sky />
		</>
	);
}
