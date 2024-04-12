import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Island(props) {
	const { nodes, materials } = useGLTF("./Island10.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube.geometry}
				material={materials["Material.011"]}
				position={[-0.083, 0.155, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube001.geometry}
				material={materials.Material}
				position={[0, 0.107, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube002.geometry}
				material={materials["Material.001"]}
				position={[0, 0.425, -0.582]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder.geometry}
				material={materials["Material.001"]}
				position={[0.035, 0.337, -0.779]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder001.geometry}
				material={materials["Material.001"]}
				position={[-0.036, 0.337, -0.779]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder002.geometry}
				material={materials["Material.001"]}
				position={[0.035, 0.337, -0.582]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder003.geometry}
				material={materials["Material.001"]}
				position={[-0.036, 0.337, -0.582]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube003.geometry}
				material={materials["Material.007"]}
				position={[0.459, 0.352, -0.631]}
				rotation={[-2.632, -1.447, -0.953]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube004.geometry}
				material={materials["Material.007"]}
				position={[0.204, 0.389, 0.578]}
				rotation={[-0.47, 1.507, 0.966]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube005.geometry}
				material={materials["Material.007"]}
				position={[-0.256, 0.412, -0.579]}
				rotation={[0.304, -0.475, -2.729]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube006.geometry}
				material={materials["Material.007"]}
				position={[0.533, 0.336, -0.582]}
				rotation={[0, -0.769, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube007.geometry}
				material={materials["Material.007"]}
				position={[-0.523, 0.415, 0.192]}
				rotation={[-0.708, 0.768, 0]}
				scale={[0.62, 1, 1]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube008.geometry}
				material={materials["Material.007"]}
				position={[-0.821, 0.19, -0.809]}
				rotation={[1.217, -1.129, 2.674]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube009.geometry}
				material={materials["Material.007"]}
				position={[0.626, 0.363, 0.103]}
				rotation={[0, -0.769, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube010.geometry}
				material={materials["Material.007"]}
				position={[-0.242, 0.241, -0.784]}
				rotation={[0, -0.769, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube011.geometry}
				material={materials["Material.007"]}
				position={[0.347, 0.155, -0.876]}
				rotation={[2.007, 0.156, -Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube012.geometry}
				material={materials["Material.007"]}
				position={[-0.876, 0.166, 0.578]}
				rotation={[-1.503, 1.009, 1.51]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder004.geometry}
				material={materials["Material.001"]}
				position={[0.392, 0.493, -0.291]}
				scale={0.533}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder005.geometry}
				material={materials["Material.001"]}
				position={[-0.22, 0.494, 0.194]}
				scale={0.603}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder006.geometry}
				material={materials["Material.001"]}
				position={[-0.301, 0.477, 0.255]}
				scale={0.571}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder007.geometry}
				material={materials["Material.001"]}
				position={[-0.325, 0.495, 0.147]}
				scale={0.596}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder008.geometry}
				material={materials["Material.001"]}
				position={[0.353, 0.504, -0.008]}
				scale={0.578}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder009.geometry}
				material={materials["Material.001"]}
				position={[0.182, 0.47, -0.483]}
				scale={0.617}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder010.geometry}
				material={materials["Material.001"]}
				position={[0.236, 0.493, -0.395]}
				scale={0.569}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder011.geometry}
				material={materials["Material.001"]}
				position={[-0.386, 0.49, -0.267]}
				scale={0.667}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder012.geometry}
				material={materials["Material.001"]}
				position={[-0.448, 0.48, -0.147]}
				scale={0.576}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder013.geometry}
				material={materials["Material.001"]}
				position={[0.381, 0.494, 0.259]}
				scale={0.594}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder014.geometry}
				material={materials["Material.001"]}
				position={[0.349, 0.492, 0.293]}
				scale={0.569}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder015.geometry}
				material={materials["Material.001"]}
				position={[0.432, 0.481, 0.25]}
				scale={0.483}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder016.geometry}
				material={materials["Material.001"]}
				position={[0.423, 0.499, 0.122]}
				scale={0.61}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder017.geometry}
				material={materials["Material.001"]}
				position={[0.323, 0.507, -0.119]}
				scale={0.648}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder018.geometry}
				material={materials["Material.001"]}
				position={[0.229, 0.487, 0.318]}
				scale={0.722}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder019.geometry}
				material={materials["Material.001"]}
				position={[0.283, 0.486, 0.309]}
				scale={0.556}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder020.geometry}
				material={materials["Material.001"]}
				position={[0.197, 0.473, 0.343]}
				scale={0.683}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder021.geometry}
				material={materials["Material.001"]}
				position={[0.136, 0.48, 0.356]}
				scale={0.634}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder022.geometry}
				material={materials["Material.001"]}
				position={[0.053, 0.481, 0.378]}
				scale={0.636}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder023.geometry}
				material={materials["Material.001"]}
				position={[0.165, 0.447, 0.459]}
				scale={0.683}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder025.geometry}
				material={materials["Material.001"]}
				position={[0.233, 0.457, 0.419]}
				scale={0.695}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder026.geometry}
				material={materials["Material.001"]}
				position={[0.051, 0.457, 0.438]}
				scale={0.562}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder028.geometry}
				material={materials["Material.001"]}
				position={[-0.049, 0.469, 0.415]}
				scale={0.616}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder030.geometry}
				material={materials["Material.001"]}
				position={[-0.252, 0.447, 0.385]}
				scale={0.562}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder031.geometry}
				material={materials["Material.001"]}
				position={[-0.298, 0.459, 0.327]}
				scale={0.597}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder032.geometry}
				material={materials["Material.001"]}
				position={[-0.059, 0.48, 0.351]}
				scale={0.595}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder033.geometry}
				material={materials["Material.001"]}
				position={[-0.16, 0.479, 0.324]}
				scale={0.591}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder024.geometry}
				material={materials["Material.001"]}
				position={[0.358, 0.498, -0.081]}
				scale={0.588}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder027.geometry}
				material={materials["Material.001"]}
				position={[0.421, 0.49, -0.04]}
				scale={0.578}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder029.geometry}
				material={materials["Material.001"]}
				position={[-0.432, 0.489, -0.052]}
				scale={0.571}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder034.geometry}
				material={materials["Material.001"]}
				position={[-0.414, 0.492, 0.054]}
				scale={0.544}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder035.geometry}
				material={materials["Material.001"]}
				position={[-0.442, 0.485, 0.003]}
				scale={0.478}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder036.geometry}
				material={materials["Material.001"]}
				position={[-0.51, 0.467, -0.027]}
				scale={0.62}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder037.geometry}
				material={materials["Material.001"]}
				position={[-0.508, 0.466, -0.1]}
				scale={0.582}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder038.geometry}
				material={materials["Material.001"]}
				position={[-0.475, 0.468, -0.248]}
				scale={0.648}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube013.geometry}
				material={materials["Material.009"]}
				position={[0.353, 0.562, -0.007]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube014.geometry}
				material={materials["Material.008"]}
				position={[0.423, 0.55, -0.039]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube015.geometry}
				material={materials["Material.009"]}
				position={[0.422, 0.557, 0.122]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube016.geometry}
				material={materials["Material.010"]}
				position={[0.28, 0.539, 0.304]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube017.geometry}
				material={materials["Material.010"]}
				position={[0.351, 0.552, 0.295]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube018.geometry}
				material={materials["Material.009"]}
				position={[0.384, 0.554, 0.263]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube019.geometry}
				material={materials["Material.008"]}
				position={[0.431, 0.537, 0.251]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube020.geometry}
				material={materials["Material.010"]}
				position={[0.395, 0.547, -0.292]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube021.geometry}
				material={materials["Material.008"]}
				position={[0.176, 0.517, -0.482]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube022.geometry}
				material={materials["Material.009"]}
				position={[0.232, 0.531, -0.391]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube023.geometry}
				material={materials["Material.010"]}
				position={[0.323, 0.562, -0.121]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube024.geometry}
				material={materials["Material.009"]}
				position={[0.362, 0.557, -0.079]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube025.geometry}
				material={materials["Material.008"]}
				position={[0.222, 0.551, 0.311]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube026.geometry}
				material={materials["Material.008"]}
				position={[0.233, 0.51, 0.42]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube027.geometry}
				material={materials["Material.009"]}
				position={[0.194, 0.527, 0.346]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube028.geometry}
				material={materials["Material.009"]}
				position={[0.137, 0.534, 0.358]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube029.geometry}
				material={materials["Material.009"]}
				position={[0.049, 0.527, 0.377]}
				rotation={[0.003, -0.002, -0.004]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube030.geometry}
				material={materials["Material.008"]}
				position={[0.162, 0.497, 0.458]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube031.geometry}
				material={materials["Material.008"]}
				position={[0.049, 0.507, 0.437]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube032.geometry}
				material={materials["Material.010"]}
				position={[-0.06, 0.526, 0.349]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube033.geometry}
				material={materials["Material.009"]}
				position={[-0.051, 0.508, 0.413]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube034.geometry}
				material={materials["Material.009"]}
				position={[-0.159, 0.524, 0.323]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube035.geometry}
				material={materials["Material.008"]}
				position={[-0.324, 0.546, 0.146]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube036.geometry}
				material={materials["Material.008"]}
				position={[-0.221, 0.544, 0.192]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube037.geometry}
				material={materials["Material.009"]}
				position={[-0.303, 0.518, 0.256]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube038.geometry}
				material={materials["Material.010"]}
				position={[-0.302, 0.494, 0.325]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube039.geometry}
				material={materials["Material.008"]}
				position={[-0.251, 0.483, 0.379]}
				rotation={[0.363, -0.079, -0.204]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube040.geometry}
				material={materials["Material.008"]}
				position={[-0.418, 0.541, 0.056]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube041.geometry}
				material={materials["Material.008"]}
				position={[-0.433, 0.537, -0.054]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube042.geometry}
				material={materials["Material.010"]}
				position={[-0.443, 0.541, -0.144]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube043.geometry}
				material={materials["Material.008"]}
				position={[-0.386, 0.538, -0.266]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube044.geometry}
				material={materials["Material.009"]}
				position={[-0.444, 0.537, 0.01]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube045.geometry}
				material={materials["Material.009"]}
				position={[-0.477, 0.525, -0.247]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube046.geometry}
				material={materials["Material.009"]}
				position={[-0.508, 0.523, -0.103]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube047.geometry}
				material={materials["Material.010"]}
				position={[-0.511, 0.518, -0.027]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube048.geometry}
				material={materials["Material.001"]}
				position={[0.193, 0.511, 0.044]}
				rotation={[-0.001, 0.353, -0.001]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube049.geometry}
				material={materials["Material.002"]}
				position={[0.193, 0.511, 0.044]}
				rotation={[-0.001, 0.361, -0.001]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube050.geometry}
				material={materials["Material.002"]}
				position={[0.193, 0.511, 0.044]}
				rotation={[3.137, 1.21, -3.138]}
				scale={1.136}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder039.geometry}
				material={materials["Material.003"]}
				position={[0.193, 0.511, 0.044]}
				rotation={[-0.024, 1.013, 0.049]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder040.geometry}
				material={materials["Material.003"]}
				position={[0.193, 0.511, 0.044]}
				rotation={[0.714, 0.563, -1.419]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube051.geometry}
				material={materials["Material.002"]}
				position={[0.193, 0.511, 0.044]}
				rotation={[-0.001, 0.353, -0.001]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube052.geometry}
				material={materials["Material.004"]}
				position={[0.193, 0.511, 0.044]}
				rotation={[-0.001, 0.353, -0.001]}
				scale={1.136}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Torus.geometry}
				material={materials["Material.004"]}
				position={[0.193, 0.511, 0.044]}
				rotation={[-1.574, -0.001, 0.385]}
				scale={1.136}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube053.geometry}
				material={materials["Material.002"]}
				position={[0.193, 0.511, 0.044]}
				rotation={[-0.001, 0.353, -0.001]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube054.geometry}
				material={materials["Material.005"]}
				position={[0.193, 0.511, 0.044]}
				rotation={[-0.001, 0.353, -0.001]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube055.geometry}
				material={materials["Material.002"]}
				position={[0.193, 0.511, 0.044]}
				rotation={[3.137, 1.218, -3.138]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube056.geometry}
				material={materials["Material.005"]}
				position={[0.193, 0.511, 0.044]}
				rotation={[3.137, 1.218, -3.138]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube057.geometry}
				material={materials["Material.001"]}
				position={[-0.023, 0.501, 0.226]}
				rotation={[-0.004, -0.252, -0.039]}
				scale={1.328}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube058.geometry}
				material={materials["Material.002"]}
				position={[-0.023, 0.501, 0.226]}
				rotation={[-0.004, -0.244, -0.039]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube059.geometry}
				material={materials["Material.002"]}
				position={[-0.023, 0.501, 0.226]}
				rotation={[0.157, 1.324, -0.156]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder041.geometry}
				material={materials["Material.003"]}
				position={[-0.023, 0.501, 0.226]}
				rotation={[0.008, 0.408, -0.005]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder042.geometry}
				material={materials["Material.003"]}
				position={[-0.023, 0.501, 0.226]}
				rotation={[0.597, 0.055, -1.066]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube060.geometry}
				material={materials["Material.002"]}
				position={[-0.023, 0.501, 0.226]}
				rotation={[-0.004, -0.252, -0.039]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube061.geometry}
				material={materials["Material.004"]}
				position={[-0.023, 0.501, 0.226]}
				rotation={[-0.004, -0.252, -0.039]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Torus001.geometry}
				material={materials["Material.004"]}
				position={[-0.023, 0.501, 0.226]}
				rotation={[-1.568, 0.037, -0.219]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube062.geometry}
				material={materials["Material.002"]}
				position={[-0.023, 0.501, 0.226]}
				rotation={[-0.004, -0.252, -0.039]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube063.geometry}
				material={materials["Material.005"]}
				position={[-0.023, 0.501, 0.226]}
				rotation={[-0.004, -0.252, -0.039]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube064.geometry}
				material={materials["Material.002"]}
				position={[-0.023, 0.501, 0.226]}
				rotation={[0.152, 1.316, -0.151]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube065.geometry}
				material={materials["Material.005"]}
				position={[-0.023, 0.501, 0.226]}
				rotation={[0.152, 1.316, -0.151]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube066.geometry}
				material={materials["Material.001"]}
				position={[-0.166, 0.503, -0.089]}
				rotation={[-3.035, -1.301, -3.075]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube067.geometry}
				material={materials["Material.002"]}
				position={[-0.166, 0.503, -0.089]}
				rotation={[-3.033, -1.309, -3.073]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube068.geometry}
				material={materials["Material.002"]}
				position={[-0.166, 0.503, -0.089]}
				rotation={[0.038, -0.261, -0.018]}
				scale={1.136}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder044.geometry}
				material={materials["Material.003"]}
				position={[-0.166, 0.503, -0.089]}
				rotation={[1.5, -0.997, 0.45]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube069.geometry}
				material={materials["Material.002"]}
				position={[-0.166, 0.503, -0.089]}
				rotation={[-3.035, -1.301, -3.075]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube070.geometry}
				material={materials["Material.004"]}
				position={[-0.166, 0.503, -0.089]}
				rotation={[-3.035, -1.301, -3.075]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Torus002.geometry}
				material={materials["Material.004"]}
				position={[-0.166, 0.503, -0.089]}
				rotation={[-1.53, 0.02, -1.808]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube071.geometry}
				material={materials["Material.002"]}
				position={[-0.166, 0.503, -0.089]}
				rotation={[-3.035, -1.301, -3.075]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube072.geometry}
				material={materials["Material.005"]}
				position={[-0.166, 0.503, -0.089]}
				rotation={[-3.035, -1.301, -3.075]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube073.geometry}
				material={materials["Material.002"]}
				position={[-0.166, 0.503, -0.089]}
				rotation={[0.038, -0.269, -0.018]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube074.geometry}
				material={materials["Material.005"]}
				position={[-0.166, 0.503, -0.089]}
				rotation={[0.038, -0.269, -0.018]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube075.geometry}
				material={materials["Material.006"]}
				position={[-0.289, 0.533, 0.062]}
				rotation={[-0.003, -0.083, -0.208]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube076.geometry}
				material={materials["Material.006"]}
				position={[-0.215, 0.532, 0.064]}
				rotation={[0.039, -0.112, 0.15]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube077.geometry}
				material={materials["Material.006"]}
				position={[-0.251, 0.534, 0.096]}
				rotation={[-0.152, -0.015, -0.023]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube078.geometry}
				material={materials["Material.006"]}
				position={[-0.251, 0.534, 0.033]}
				rotation={[0.143, -0.084, -0.014]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube079.geometry}
				material={materials["Material.006"]}
				position={[-0.252, 0.596, 0.064]}
				rotation={[0, -0.788, -0.026]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube080.geometry}
				material={materials["Material.006"]}
				position={[-0.268, 0.549, 0.049]}
				rotation={[0.923, 0.352, 0.911]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube081.geometry}
				material={materials["Material.006"]}
				position={[-0.267, 0.548, 0.079]}
				rotation={[1.08, -0.558, 2.118]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube082.geometry}
				material={materials["Material.006"]}
				position={[-0.233, 0.531, 0.048]}
				rotation={[1.08, -0.558, 2.118]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube083.geometry}
				material={materials["Material.006"]}
				position={[-0.233, 0.527, 0.08]}
				rotation={[0.923, 0.352, 0.911]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube089.geometry}
				material={materials["Material.006"]}
				position={[-0.237, 0.604, 0.047]}
				rotation={[0.012, -1.049, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube101.geometry}
				material={materials["Material.006"]}
				position={[-0.301, 0.494, 0.037]}
				rotation={[1.086, 0.654, 0.745]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube110.geometry}
				material={materials["Material.001"]}
				position={[0.288, 0.546, -0.239]}
				rotation={[-Math.PI, 1.36, -Math.PI]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube111.geometry}
				material={materials["Material.002"]}
				position={[0.258, 0.492, -0.223]}
				rotation={[-3.128, 1.351, 3.121]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube112.geometry}
				material={materials["Material.004"]}
				position={[0.254, 0.5, -0.232]}
				rotation={[-3.128, 1.351, 3.121]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Torus003.geometry}
				material={materials["Material.004"]}
				position={[0.253, 0.498, -0.232]}
				rotation={[-1.576, -0.006, 1.823]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube113.geometry}
				material={materials["Material.002"]}
				position={[0.288, 0.546, -0.239]}
				rotation={[-3.122, 1.354, 3.121]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube114.geometry}
				material={materials["Material.005"]}
				position={[0.288, 0.546, -0.239]}
				rotation={[-3.122, 1.354, 3.121]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube115.geometry}
				material={materials["Material.002"]}
				position={[0.288, 0.546, -0.239]}
				rotation={[-3.122, 1.354, 3.121]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube116.geometry}
				material={materials["Material.005"]}
				position={[0.288, 0.546, -0.239]}
				rotation={[-3.122, 1.354, 3.121]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube117.geometry}
				material={materials["Material.002"]}
				position={[0.288, 0.546, -0.237]}
				rotation={[0, 0.211, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube118.geometry}
				material={materials["Material.005"]}
				position={[0.288, 0.546, -0.237]}
				rotation={[0, 0.211, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube119.geometry}
				material={materials["Material.002"]}
				position={[0.288, 0.569, -0.239]}
				rotation={[-Math.PI, 1.36, -Math.PI]}
				scale={[1.171, 1.9, 0.712]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube120.geometry}
				material={materials["Material.002"]}
				position={[0.288, 0.569, -0.239]}
				rotation={[Math.PI, -0.211, Math.PI]}
				scale={[0.809, 2.158, 1.33]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder045.geometry}
				material={materials["Material.003"]}
				position={[0.288, 0.546, -0.239]}
				rotation={[-0.338, -0.651, 0.079]}
				scale={0.924}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder046.geometry}
				material={materials["Material.003"]}
				position={[0.313, 0.598, -0.226]}
				rotation={[-2.787, 0.646, -3.043]}
				scale={0.924}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube121.geometry}
				material={materials["Material.001"]}
				position={[0.139, 0.544, 0.197]}
				rotation={[0, 0.472, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube122.geometry}
				material={materials["Material.002"]}
				position={[0.118, 0.49, 0.174]}
				rotation={[-0.003, 0.481, -0.006]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube123.geometry}
				material={materials["Material.004"]}
				position={[0.125, 0.498, 0.168]}
				rotation={[-0.003, 0.481, -0.006]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Torus004.geometry}
				material={materials["Material.004"]}
				position={[0.125, 0.496, 0.168]}
				rotation={[-1.578, 0.003, 0.514]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube124.geometry}
				material={materials["Material.002"]}
				position={[0.139, 0.544, 0.197]}
				rotation={[-0.005, 0.478, 0.001]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube125.geometry}
				material={materials["Material.005"]}
				position={[0.139, 0.544, 0.197]}
				rotation={[-0.005, 0.478, 0.001]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube126.geometry}
				material={materials["Material.002"]}
				position={[0.139, 0.544, 0.197]}
				rotation={[-0.005, 0.478, 0.001]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube127.geometry}
				material={materials["Material.005"]}
				position={[0.139, 0.544, 0.197]}
				rotation={[-0.005, 0.478, 0.001]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube128.geometry}
				material={materials["Material.002"]}
				position={[0.138, 0.544, 0.197]}
				rotation={[0, -1.099, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube129.geometry}
				material={materials["Material.005"]}
				position={[0.138, 0.544, 0.197]}
				rotation={[0, -1.099, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube130.geometry}
				material={materials["Material.002"]}
				position={[0.139, 0.567, 0.197]}
				rotation={[0, 0.472, 0]}
				scale={[1.171, 1.9, 0.712]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube131.geometry}
				material={materials["Material.002"]}
				position={[0.139, 0.567, 0.197]}
				rotation={[-Math.PI, 1.099, -Math.PI]}
				scale={[0.809, 2.158, 1.33]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder047.geometry}
				material={materials["Material.003"]}
				position={[0.139, 0.544, 0.197]}
				rotation={[-2.548, -1.079, -2.316]}
				scale={0.924}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder048.geometry}
				material={materials["Material.003"]}
				position={[0.134, 0.596, 0.225]}
				rotation={[-0.621, 1.074, 0.879]}
				scale={0.924}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube135.geometry}
				material={materials["Material.007"]}
				position={[0.025, 0.49, -0.055]}
				rotation={[1.1, 0.992, -2.276]}
				scale={0.06}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube136.geometry}
				material={materials["Material.007"]}
				position={[0.03, 0.49, -0.053]}
				rotation={[2.383, -0.248, 1.978]}
				scale={0.063}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube137.geometry}
				material={materials["Material.007"]}
				position={[0.019, 0.491, -0.053]}
				rotation={[-1.227, -0.944, -2.551]}
				scale={0.063}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube138.geometry}
				material={materials["Material.007"]}
				position={[0.024, 0.491, -0.038]}
				rotation={[-1.994, -0.315, 2.124]}
				scale={[0.059, 0.063, 0.05]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube139.geometry}
				material={materials["Material.007"]}
				position={[0.018, 0.491, -0.041]}
				rotation={[-1.347, -0.475, -2.729]}
				scale={0.063}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube140.geometry}
				material={materials["Material.007"]}
				position={[0.018, 0.49, -0.046]}
				rotation={[-1.426, 0.174, 1.21]}
				scale={0.063}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube141.geometry}
				material={materials["Material.007"]}
				position={[0.029, 0.49, -0.041]}
				rotation={[-0.601, -1.329, -1.877]}
				scale={0.063}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube143.geometry}
				material={materials["Material.007"]}
				position={[0.031, 0.49, -0.05]}
				rotation={[-1.347, -0.475, -2.729]}
				scale={0.063}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube144.geometry}
				material={materials["Material.007"]}
				position={[0.033, 0.49, -0.046]}
				rotation={[-1.293, 0.769, -3.029]}
				scale={0.063}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube142.geometry}
				material={materials["Material.006"]}
				position={[0.023, 0.495, -0.051]}
				rotation={[0.389, -0.084, -0.014]}
				scale={[0.381, 0.074, 0.235]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube145.geometry}
				material={materials["Material.006"]}
				position={[0.027, 0.494, -0.051]}
				rotation={[0.477, -0.558, 0.226]}
				scale={[0.381, 0.074, 0.235]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube146.geometry}
				material={nodes.Cube146.material}
				position={[0.028, 0.495, -0.045]}
				rotation={[1.979, -0.927, 1.913]}
				scale={[0.381, 0.074, 0.235]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube147.geometry}
				material={materials["Material.006"]}
				position={[0.025, 0.495, -0.042]}
				rotation={[2.845, -0.116, 3.099]}
				scale={[0.381, 0.101, 0.237]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube148.geometry}
				material={materials["Material.006"]}
				position={[0.021, 0.494, -0.048]}
				rotation={[0.898, 0.928, -0.972]}
				scale={[0.383, 0.085, 0.246]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube149.geometry}
				material={materials["Material.006"]}
				position={[0.023, 0.495, -0.043]}
				rotation={[-0.476, -0.084, -0.014]}
				scale={[0.381, 0.131, 0.293]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube150.geometry}
				material={materials["Material.006"]}
				position={[0.029, 0.495, -0.047]}
				rotation={[0.891, -1.189, 0.874]}
				scale={[0.381, 0.103, 0.237]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube151.geometry}
				material={materials["Material.006"]}
				position={[0.025, 0.494, -0.047]}
				rotation={[0.143, -0.084, -0.014]}
				scale={[0.381, 0.108, 0.238]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube152.geometry}
				material={materials["Material.006"]}
				position={[0.021, 0.495, -0.044]}
				rotation={[2.171, 1.173, -2.192]}
				scale={[0.381, 0.096, 0.237]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane.geometry}
				material={materials["Material.009"]}
				position={[0.298, 0.49, 0.09]}
				rotation={[-0.86, 0.153, -0.039]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane001.geometry}
				material={materials["Material.009"]}
				position={[0.301, 0.489, 0.094]}
				rotation={[-1.435, -0.605, -1.284]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane002.geometry}
				material={materials["Material.009"]}
				position={[0.293, 0.491, 0.093]}
				rotation={[-1.421, 0.882, 1.265]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane003.geometry}
				material={materials["Material.009"]}
				position={[0.293, 0.49, 0.09]}
				rotation={[-1.139, 0.507, 0.559]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane004.geometry}
				material={materials["Material.009"]}
				position={[0.296, 0.49, 0.099]}
				rotation={[-2.408, 0.157, -3.107]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane005.geometry}
				material={materials["Material.009"]}
				position={[0.3, 0.491, 0.091]}
				rotation={[-1.029, -0.345, -0.623]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane006.geometry}
				material={materials["Material.009"]}
				position={[0.295, 0.493, 0.098]}
				rotation={[-2.318, 0.566, 2.7]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane007.geometry}
				material={materials["Material.009"]}
				position={[0.3, 0.491, 0.098]}
				rotation={[-2.187, -0.405, -2.42]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane008.geometry}
				material={materials["Material.008"]}
				position={[0.296, 0.487, 0.169]}
				rotation={[-0.805, 0, 0]}
				scale={0.016}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane009.geometry}
				material={materials["Material.008"]}
				position={[0.3, 0.486, 0.176]}
				rotation={[-1.42, -0.754, -1.352]}
				scale={0.016}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane010.geometry}
				material={materials["Material.008"]}
				position={[0.289, 0.487, 0.174]}
				rotation={[-1.317, 0.731, 1.201]}
				scale={0.016}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane011.geometry}
				material={materials["Material.008"]}
				position={[0.289, 0.486, 0.17]}
				rotation={[-1.079, 0.35, 0.554]}
				scale={0.016}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane012.geometry}
				material={materials["Material.008"]}
				position={[0.292, 0.486, 0.183]}
				rotation={[-2.33, 0.113, 3.024]}
				scale={0.016}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane013.geometry}
				material={materials["Material.008"]}
				position={[0.299, 0.489, 0.171]}
				rotation={[-0.966, -0.502, -0.608]}
				scale={0.016}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane014.geometry}
				material={materials["Material.008"]}
				position={[0.29, 0.49, 0.181]}
				rotation={[-2.175, 0.503, 2.531]}
				scale={0.016}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane015.geometry}
				material={materials["Material.008"]}
				position={[0.298, 0.488, 0.182]}
				rotation={[-2.196, -0.476, -2.576]}
				scale={0.016}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane016.geometry}
				material={materials["Material.008"]}
				position={[-0.127, 0.485, 0.139]}
				rotation={[-0.837, -0.053, -0.025]}
				scale={0.008}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane017.geometry}
				material={materials["Material.008"]}
				position={[-0.124, 0.484, 0.142]}
				rotation={[-1.5, -0.781, -1.423]}
				scale={0.008}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane018.geometry}
				material={materials["Material.008"]}
				position={[-0.13, 0.485, 0.141]}
				rotation={[-1.308, 0.696, 1.139]}
				scale={0.008}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane019.geometry}
				material={materials["Material.008"]}
				position={[-0.13, 0.484, 0.139]}
				rotation={[-1.098, 0.305, 0.515]}
				scale={0.008}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane020.geometry}
				material={materials["Material.008"]}
				position={[-0.129, 0.484, 0.146]}
				rotation={[-2.354, 0.134, 2.97]}
				scale={0.008}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane021.geometry}
				material={materials["Material.008"]}
				position={[-0.125, 0.486, 0.14]}
				rotation={[-1.016, -0.55, -0.646]}
				scale={0.008}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane022.geometry}
				material={materials["Material.008"]}
				position={[-0.13, 0.486, 0.145]}
				rotation={[-2.174, 0.516, 2.466]}
				scale={0.008}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane023.geometry}
				material={materials["Material.008"]}
				position={[-0.126, 0.485, 0.145]}
				rotation={[-2.255, -0.46, -2.639]}
				scale={0.008}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane024.geometry}
				material={materials["Material.010"]}
				position={[-0.082, 0.449, -0.479]}
				rotation={[-1.08, 0, 0]}
				scale={0.012}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane025.geometry}
				material={materials["Material.010"]}
				position={[-0.078, 0.449, -0.474]}
				rotation={[-1.695, -0.754, -1.352]}
				scale={0.012}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane026.geometry}
				material={materials["Material.010"]}
				position={[-0.087, 0.449, -0.476]}
				rotation={[-1.593, 0.731, 1.201]}
				scale={0.012}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane027.geometry}
				material={materials["Material.010"]}
				position={[-0.087, 0.448, -0.479]}
				rotation={[-1.354, 0.35, 0.554]}
				scale={0.012}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane028.geometry}
				material={materials["Material.010"]}
				position={[-0.085, 0.45, -0.469]}
				rotation={[-2.605, 0.113, 3.024]}
				scale={0.012}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane029.geometry}
				material={materials["Material.010"]}
				position={[-0.079, 0.45, -0.479]}
				rotation={[-1.241, -0.502, -0.608]}
				scale={0.012}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane030.geometry}
				material={materials["Material.010"]}
				position={[-0.087, 0.453, -0.471]}
				rotation={[-2.45, 0.503, 2.531]}
				scale={0.012}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane031.geometry}
				material={materials["Material.010"]}
				position={[-0.08, 0.452, -0.47]}
				rotation={[-2.471, -0.476, -2.576]}
				scale={0.012}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane032.geometry}
				material={materials["Material.008"]}
				position={[-0.392, 0.471, -0.309]}
				rotation={[-0.803, 0.081, 0.035]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane033.geometry}
				material={materials["Material.008"]}
				position={[-0.388, 0.47, -0.304]}
				rotation={[-1.35, -0.705, -1.253]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane034.geometry}
				material={materials["Material.008"]}
				position={[-0.397, 0.471, -0.305]}
				rotation={[-1.382, 0.782, 1.3]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane035.geometry}
				material={materials["Material.008"]}
				position={[-0.397, 0.471, -0.308]}
				rotation={[-1.099, 0.418, 0.616]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane036.geometry}
				material={materials["Material.008"]}
				position={[-0.394, 0.47, -0.299]}
				rotation={[-2.334, 0.081, 3.107]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane037.geometry}
				material={materials["Material.008"]}
				position={[-0.39, 0.472, -0.308]}
				rotation={[-0.938, -0.427, -0.555]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane038.geometry}
				material={materials["Material.008"]}
				position={[-0.396, 0.473, -0.3]}
				rotation={[-2.217, 0.483, 2.629]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane039.geometry}
				material={materials["Material.008"]}
				position={[-0.389, 0.472, -0.3]}
				rotation={[-2.146, -0.494, -2.478]}
				scale={0.011}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane040.geometry}
				material={materials["Material.010"]}
				position={[0.33, 0.554, -0.396]}
				rotation={[-1.138, -1.489, -1.271]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder049.geometry}
				material={materials["Material.002"]}
				position={[0.329, 0.503, -0.399]}
				rotation={[-3.039, 0.804, 3.061]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane041.geometry}
				material={materials["Material.010"]}
				position={[0.326, 0.552, -0.39]}
				rotation={[-2.635, -0.344, 2.918]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane042.geometry}
				material={materials["Material.010"]}
				position={[0.32, 0.552, -0.394]}
				rotation={[-2.02, 1.001, 2.251]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane043.geometry}
				material={materials["Material.010"]}
				position={[0.321, 0.553, -0.399]}
				rotation={[-0.217, 0.415, 0.386]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane044.geometry}
				material={materials["Material.010"]}
				position={[0.328, 0.553, -0.391]}
				rotation={[-2.97, -0.752, 3.097]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane045.geometry}
				material={materials["Material.010"]}
				position={[0.321, 0.551, -0.391]}
				rotation={[-2.482, 0.444, 2.615]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane046.geometry}
				material={materials["Material.010"]}
				position={[0.321, 0.552, -0.398]}
				rotation={[-0.727, 0.832, 0.787]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane047.geometry}
				material={materials["Material.010"]}
				position={[0.325, 0.553, -0.401]}
				rotation={[-0.166, -0.413, 0.194]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane048.geometry}
				material={materials["Material.009"]}
				position={[0.439, 0.553, -0.161]}
				rotation={[-2.965, 0.727, 2.932]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder050.geometry}
				material={materials["Material.002"]}
				position={[0.443, 0.502, -0.163]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane049.geometry}
				material={materials["Material.009"]}
				position={[0.438, 0.551, -0.167]}
				rotation={[-0.886, 0.969, 0.457]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane050.geometry}
				material={materials["Material.009"]}
				position={[0.445, 0.551, -0.169]}
				rotation={[-0.489, -0.43, -0.088]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane051.geometry}
				material={materials["Material.009"]}
				position={[0.448, 0.551, -0.165]}
				rotation={[-2.544, -1.183, -2.353]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane052.geometry}
				material={materials["Material.009"]}
				position={[0.437, 0.552, -0.165]}
				rotation={[-1.467, 1.438, 1.374]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane053.geometry}
				material={materials["Material.009"]}
				position={[0.442, 0.55, -0.17]}
				rotation={[-0.534, 0.216, -0.05]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane054.geometry}
				material={materials["Material.009"]}
				position={[0.447, 0.551, -0.166]}
				rotation={[-1.102, -1.072, -0.917]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane055.geometry}
				material={materials["Material.009"]}
				position={[0.447, 0.552, -0.161]}
				rotation={[-2.91, -0.385, -2.826]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane056.geometry}
				material={materials["Material.010"]}
				position={[0.292, 0.561, -0.342]}
				rotation={[-2.645, 1.291, 2.57]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder051.geometry}
				material={materials["Material.002"]}
				position={[0.296, 0.51, -0.341]}
				rotation={[0, -0.589, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane057.geometry}
				material={materials["Material.010"]}
				position={[0.295, 0.559, -0.348]}
				rotation={[-0.525, 0.508, -0.058]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane058.geometry}
				material={materials["Material.010"]}
				position={[0.301, 0.559, -0.345]}
				rotation={[-0.776, -0.915, -0.53]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane059.geometry}
				material={materials["Material.010"]}
				position={[0.301, 0.559, -0.341]}
				rotation={[-2.873, -0.638, -2.752]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane060.geometry}
				material={materials["Material.010"]}
				position={[0.293, 0.56, -0.347]}
				rotation={[-0.23, 0.955, 0.097]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane061.geometry}
				material={materials["Material.010"]}
				position={[0.299, 0.559, -0.348]}
				rotation={[-0.546, -0.294, -0.35]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane062.geometry}
				material={materials["Material.010"]}
				position={[0.301, 0.559, -0.342]}
				rotation={[-2.196, -1.016, -2.144]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane063.geometry}
				material={materials["Material.010"]}
				position={[0.298, 0.56, -0.338]}
				rotation={[-2.923, 0.19, -2.957]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane064.geometry}
				material={materials["Material.008"]}
				position={[0.556, 0.514, 0.226]}
				rotation={[0.369, 0.754, -0.728]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder052.geometry}
				material={materials["Material.002"]}
				position={[0.531, 0.47, 0.23]}
				rotation={[-1.612, -1.024, -1.606]}
				scale={[-0.003, -0.044, -0.003]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane065.geometry}
				material={materials["Material.008"]}
				position={[0.561, 0.51, 0.225]}
				rotation={[-0.609, -0.093, -1.009]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane066.geometry}
				material={materials["Material.008"]}
				position={[0.562, 0.509, 0.232]}
				rotation={[-2.08, -0.473, -1.919]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane067.geometry}
				material={materials["Material.008"]}
				position={[0.559, 0.511, 0.234]}
				rotation={[-3.132, 0.406, -2.408]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane068.geometry}
				material={materials["Material.008"]}
				position={[0.56, 0.512, 0.224]}
				rotation={[-0.131, 0.038, -0.638]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane069.geometry}
				material={materials["Material.008"]}
				position={[0.563, 0.508, 0.229]}
				rotation={[-1.348, -0.483, -1.527]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane070.geometry}
				material={materials["Material.008"]}
				position={[0.56, 0.511, 0.234]}
				rotation={[-2.654, 0.054, -2.428]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane071.geometry}
				material={materials["Material.008"]}
				position={[0.556, 0.514, 0.233]}
				rotation={[2.457, 1.093, -2.088]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane072.geometry}
				material={materials["Material.009"]}
				position={[-0.429, 0.554, 0.146]}
				rotation={[-0.184, 0.807, 0.037]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder053.geometry}
				material={materials["Material.002"]}
				position={[-0.427, 0.503, 0.15]}
				rotation={[-2.837, -1.548, -2.837]}
				scale={[-0.003, -0.044, -0.003]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane073.geometry}
				material={materials["Material.009"]}
				position={[-0.422, 0.552, 0.146]}
				rotation={[-0.495, -0.382, -0.538]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane074.geometry}
				material={materials["Material.009"]}
				position={[-0.421, 0.552, 0.152]}
				rotation={[-2.358, -0.911, -2.34]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane075.geometry}
				material={materials["Material.009"]}
				position={[-0.424, 0.552, 0.155]}
				rotation={[-2.916, 0.341, -2.985]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane076.geometry}
				material={materials["Material.009"]}
				position={[-0.424, 0.553, 0.144]}
				rotation={[-0.132, -0.034, -0.103]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane077.geometry}
				material={materials["Material.009"]}
				position={[-0.419, 0.552, 0.149]}
				rotation={[-1.199, -1.001, -1.314]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane078.geometry}
				material={materials["Material.009"]}
				position={[-0.424, 0.552, 0.154]}
				rotation={[-2.69, -0.196, -2.91]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane079.geometry}
				material={materials["Material.009"]}
				position={[-0.429, 0.553, 0.154]}
				rotation={[-2.616, 1.146, 2.885]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane080.geometry}
				material={materials["Material.009"]}
				position={[-0.129, 0.526, -0.528]}
				rotation={[3.065, 1.11, 2.786]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder054.geometry}
				material={materials["Material.002"]}
				position={[-0.125, 0.478, -0.51]}
				rotation={[-0.372, -0.393, -0.003]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane081.geometry}
				material={materials["Material.009"]}
				position={[-0.128, 0.522, -0.534]}
				rotation={[-0.965, 0.676, 0.066]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane082.geometry}
				material={materials["Material.009"]}
				position={[-0.121, 0.522, -0.532]}
				rotation={[-1.007, -0.763, -0.342]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane083.geometry}
				material={materials["Material.009"]}
				position={[-0.12, 0.524, -0.529]}
				rotation={[3.092, -0.826, -2.673]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane084.geometry}
				material={materials["Material.009"]}
				position={[-0.129, 0.523, -0.533]}
				rotation={[-0.69, 1.145, 0.199]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane085.geometry}
				material={materials["Material.009"]}
				position={[-0.123, 0.521, -0.535]}
				rotation={[-0.896, -0.123, -0.249]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane086.geometry}
				material={materials["Material.009"]}
				position={[-0.12, 0.523, -0.529]}
				rotation={[-2.25, -1.103, -1.782]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane087.geometry}
				material={materials["Material.009"]}
				position={[-0.123, 0.526, -0.525]}
				rotation={[2.985, -0.001, -2.912]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane088.geometry}
				material={materials["Material.010"]}
				position={[-0.557, 0.524, -0.171]}
				rotation={[3.108, -0.028, 2.716]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder055.geometry}
				material={materials["Material.002"]}
				position={[-0.539, 0.476, -0.167]}
				rotation={[-0.444, 0.671, 0.433]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane089.geometry}
				material={materials["Material.010"]}
				position={[-0.561, 0.52, -0.174]}
				rotation={[-2.109, 0.727, 1.633]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane090.geometry}
				material={materials["Material.010"]}
				position={[-0.557, 0.521, -0.18]}
				rotation={[-0.658, 0.062, 0.535]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane091.geometry}
				material={materials["Material.010"]}
				position={[-0.553, 0.522, -0.179]}
				rotation={[0.087, -1.175, 0.585]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane092.geometry}
				material={materials["Material.010"]}
				position={[-0.561, 0.522, -0.172]}
				rotation={[-2.78, 0.734, 2.448]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane093.geometry}
				material={materials["Material.010"]}
				position={[-0.56, 0.519, -0.179]}
				rotation={[-1.124, 0.537, 0.722]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane094.geometry}
				material={materials["Material.010"]}
				position={[-0.554, 0.522, -0.18]}
				rotation={[-0.469, -0.682, 0.215]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane095.geometry}
				material={materials["Material.010"]}
				position={[-0.552, 0.524, -0.176]}
				rotation={[2.779, -1.115, 3.043]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane096.geometry}
				material={materials["Material.008"]}
				position={[-0.465, 0.544, -0.333]}
				rotation={[-2.698, 1.11, 2.786]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder056.geometry}
				material={materials["Material.002"]}
				position={[-0.461, 0.493, -0.341]}
				rotation={[0.147, -0.393, -0.003]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane097.geometry}
				material={materials["Material.008"]}
				position={[-0.464, 0.543, -0.339]}
				rotation={[-0.446, 0.676, 0.066]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane098.geometry}
				material={materials["Material.008"]}
				position={[-0.457, 0.543, -0.338]}
				rotation={[-0.487, -0.763, -0.342]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane099.geometry}
				material={materials["Material.008"]}
				position={[-0.456, 0.543, -0.334]}
				rotation={[-2.671, -0.826, -2.673]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane100.geometry}
				material={materials["Material.008"]}
				position={[-0.466, 0.544, -0.338]}
				rotation={[-0.17, 1.145, 0.199]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane101.geometry}
				material={materials["Material.008"]}
				position={[-0.459, 0.543, -0.341]}
				rotation={[-0.376, -0.123, -0.249]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane102.geometry}
				material={materials["Material.008"]}
				position={[-0.456, 0.543, -0.335]}
				rotation={[-1.73, -1.103, -1.782]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane103.geometry}
				material={materials["Material.008"]}
				position={[-0.459, 0.543, -0.33]}
				rotation={[-2.779, -0.001, -2.912]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane104.geometry}
				material={materials["Material.009"]}
				position={[-0.156, 0.52, 0.433]}
				rotation={[0.398, -0.683, -0.113]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder057.geometry}
				material={materials["Material.002"]}
				position={[-0.157, 0.475, 0.41]}
				rotation={[-2.631, -0.053, 3.075]}
				scale={[-0.003, -0.044, -0.003]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane105.geometry}
				material={materials["Material.009"]}
				position={[-0.155, 0.516, 0.438]}
				rotation={[-1.745, -1.055, -2.686]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane106.geometry}
				material={materials["Material.009"]}
				position={[-0.162, 0.515, 0.44]}
				rotation={[-2.127, 0.351, 3.018]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane107.geometry}
				material={materials["Material.009"]}
				position={[-0.164, 0.516, 0.437]}
				rotation={[-0.294, 1.181, 1.015]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane108.geometry}
				material={materials["Material.009"]}
				position={[-0.154, 0.518, 0.437]}
				rotation={[-0.513, -1.494, -1.115]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane109.geometry}
				material={materials["Material.009"]}
				position={[-0.158, 0.514, 0.441]}
				rotation={[-2.104, -0.296, 3.06]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane110.geometry}
				material={materials["Material.009"]}
				position={[-0.164, 0.516, 0.437]}
				rotation={[-1.555, 0.988, 2.256]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane111.geometry}
				material={materials["Material.009"]}
				position={[-0.163, 0.519, 0.433]}
				rotation={[0.247, 0.421, 0.4]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane112.geometry}
				material={materials["Material.010"]}
				position={[0.37, 0.531, 0.408]}
				rotation={[-2.704, 0.849, 3.136]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder058.geometry}
				material={materials["Material.002"]}
				position={[0.366, 0.485, 0.386]}
				rotation={[0.398, -0.106, -0.156]}
				scale={[-0.003, -0.044, -0.003]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane113.geometry}
				material={materials["Material.010"]}
				position={[0.37, 0.532, 0.401]}
				rotation={[-0.197, 0.996, 0.119]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane114.geometry}
				material={materials["Material.010"]}
				position={[0.377, 0.531, 0.4]}
				rotation={[-0.171, -0.443, -0.296]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane115.geometry}
				material={materials["Material.010"]}
				position={[0.379, 0.53, 0.404]}
				rotation={[-2.025, -1.003, -2.225]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane116.geometry}
				material={materials["Material.010"]}
				position={[0.369, 0.532, 0.404]}
				rotation={[0.599, 1.448, -0.294]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane117.geometry}
				material={materials["Material.010"]}
				position={[0.374, 0.532, 0.398]}
				rotation={[-0.088, 0.199, -0.242]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane118.geometry}
				material={materials["Material.010"]}
				position={[0.379, 0.53, 0.403]}
				rotation={[-0.945, -0.96, -1.208]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane119.geometry}
				material={materials["Material.010"]}
				position={[0.377, 0.529, 0.408]}
				rotation={[-2.463, -0.243, -2.696]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube132.geometry}
				material={materials["Material.007"]}
				position={[0.008, 0.436, -0.509]}
				rotation={[-0.406, 0.031, 0.024]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube133.geometry}
				material={materials["Material.007"]}
				position={[-0.032, 0.44, -0.495]}
				rotation={[-0.406, 0.031, 0.024]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube134.geometry}
				material={materials["Material.007"]}
				position={[-0.005, 0.447, -0.475]}
				rotation={[2.805, -1.303, -3.107]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube153.geometry}
				material={materials["Material.007"]}
				position={[-0.03, 0.453, -0.463]}
				rotation={[-0.383, 0.21, -0.081]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube154.geometry}
				material={materials["Material.007"]}
				position={[0.03, 0.456, -0.454]}
				rotation={[-0.406, 0.031, 0.024]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube156.geometry}
				material={materials["Material.007"]}
				position={[0.018, 0.463, -0.42]}
				rotation={[2.665, -1.259, 2.88]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube157.geometry}
				material={materials["Material.007"]}
				position={[-0.008, 0.46, -0.435]}
				rotation={[-0.261, 0.21, -0.081]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube158.geometry}
				material={materials["Material.007"]}
				position={[0.162, 0.485, -0.286]}
				rotation={[-0.166, 0.031, 0.024]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube159.geometry}
				material={materials["Material.007"]}
				position={[0.11, 0.48, -0.305]}
				rotation={[-0.166, 0.031, 0.024]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube160.geometry}
				material={materials["Material.007"]}
				position={[0.146, 0.482, -0.306]}
				rotation={[3.045, -1.303, -3.107]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube161.geometry}
				material={materials["Material.007"]}
				position={[0.126, 0.485, -0.282]}
				rotation={[-0.235, 0.218, 0.033]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube165.geometry}
				material={materials["Material.007"]}
				position={[0.142, 0.486, -0.264]}
				rotation={[-0.021, 0.21, -0.081]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube167.geometry}
				material={materials["Material.007"]}
				position={[0.009, 0.47, -0.385]}
				rotation={[-0.233, 0.041, -0.014]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube168.geometry}
				material={materials["Material.007"]}
				position={[0.037, 0.472, -0.365]}
				rotation={[3.121, -1.307, -2.957]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube169.geometry}
				material={materials["Material.007"]}
				position={[0.012, 0.475, -0.351]}
				rotation={[-0.203, 0.219, -0.12]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube170.geometry}
				material={materials["Material.007"]}
				position={[0.072, 0.476, -0.342]}
				rotation={[-0.125, 0.041, -0.014]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube171.geometry}
				material={materials["Material.007"]}
				position={[0.028, 0.479, -0.295]}
				rotation={[-0.178, 0.038, -0.015]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube172.geometry}
				material={materials["Material.007"]}
				position={[0.061, 0.479, -0.309]}
				rotation={[2.958, -1.269, 3.008]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube173.geometry}
				material={materials["Material.007"]}
				position={[0.026, 0.476, -0.325]}
				rotation={[-0.081, 0.214, -0.121]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube155.geometry}
				material={materials["Material.007"]}
				position={[0.045, 0.468, -0.393]}
				rotation={[3.121, -1.307, -2.957]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube163.geometry}
				material={materials["Material.007"]}
				position={[0.177, 0.487, -0.209]}
				rotation={[-3.094, -1.303, -3.107]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube164.geometry}
				material={materials["Material.007"]}
				position={[0.148, 0.489, -0.23]}
				rotation={[-0.133, 0.21, -0.081]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube166.geometry}
				material={materials["Material.007"]}
				position={[0.226, 0.482, -0.223]}
				rotation={[0.025, 0.031, 0.024]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube174.geometry}
				material={materials["Material.007"]}
				position={[0.184, 0.484, -0.169]}
				rotation={[-2.775, -1.245, -2.779]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube175.geometry}
				material={materials["Material.007"]}
				position={[0.157, 0.488, -0.187]}
				rotation={[-0.011, 0.21, -0.081]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube176.geometry}
				material={materials["Material.007"]}
				position={[0.171, 0.484, -0.13]}
				rotation={[0.017, 0.041, -0.014]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube177.geometry}
				material={materials["Material.007"]}
				position={[0.203, 0.481, -0.102]}
				rotation={[-2.912, -1.307, -2.957]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube178.geometry}
				material={materials["Material.007"]}
				position={[0.175, 0.483, -0.089]}
				rotation={[0.047, 0.219, -0.12]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube179.geometry}
				material={materials["Material.007"]}
				position={[0.214, 0.484, -0.132]}
				rotation={[-2.912, -1.307, -2.957]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube162.geometry}
				material={materials["Material.007"]}
				position={[0.172, 0.488, -0.243]}
				rotation={[3.045, -1.303, -3.107]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube180.geometry}
				material={materials["Material.007"]}
				position={[0.171, 0.487, -0.018]}
				rotation={[-0.303, -1.139, -0.262]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube181.geometry}
				material={materials["Material.007"]}
				position={[0.192, 0.482, -0.066]}
				rotation={[-0.241, -1.136, -0.171]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube182.geometry}
				material={materials["Material.007"]}
				position={[0.142, 0.487, -0.047]}
				rotation={[3.116, -0.129, -3.018]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube183.geometry}
				material={materials["Material.007"]}
				position={[0.163, 0.484, -0.064]}
				rotation={[-0.307, -0.957, -0.267]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube184.geometry}
				material={materials["Material.007"]}
				position={[0.123, 0.489, -0.026]}
				rotation={[-0.036, -0.965, -0.115]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube185.geometry}
				material={materials["Material.007"]}
				position={[0.092, 0.485, 0.034]}
				rotation={[-3.129, -0.128, 3.131]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube186.geometry}
				material={materials["Material.007"]}
				position={[0.093, 0.489, -0.01]}
				rotation={[-0.225, -0.951, -0.293]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube187.geometry}
				material={materials["Material.007"]}
				position={[0.057, 0.486, 0.05]}
				rotation={[-3.026, -0.089, -3.118]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube188.geometry}
				material={materials["Material.007"]}
				position={[0.065, 0.488, 0.016]}
				rotation={[-0.019, -0.965, -0.098]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube189.geometry}
				material={materials["Material.007"]}
				position={[0.017, 0.488, 0.052]}
				rotation={[0.04, -1.135, 0.022]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube190.geometry}
				material={materials["Material.007"]}
				position={[0.003, 0.483, 0.093]}
				rotation={[-3.082, -0.138, 3.112]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube191.geometry}
				material={materials["Material.007"]}
				position={[-0.02, 0.484, 0.072]}
				rotation={[0.079, -0.955, -0.045]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube192.geometry}
				material={materials["Material.007"]}
				position={[0.029, 0.482, 0.096]}
				rotation={[-3.082, -0.138, 3.112]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube193.geometry}
				material={materials["Material.007"]}
				position={[0.122, 0.488, 0.01]}
				rotation={[3.107, -0.127, -3.085]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube195.geometry}
				material={materials["Material.007"]}
				position={[0.119, 0.482, 0.099]}
				rotation={[-3.088, -1.33, -3.102]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube196.geometry}
				material={materials["Material.007"]}
				position={[0.077, 0.482, 0.082]}
				rotation={[-0.026, 0.237, -0.077]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube197.geometry}
				material={materials["Material.007"]}
				position={[0.113, 0.48, 0.143]}
				rotation={[-3.063, -1.293, -3.08]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube198.geometry}
				material={materials["Material.007"]}
				position={[0.091, 0.479, 0.118]}
				rotation={[-0.011, 0.238, -0.081]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube199.geometry}
				material={materials["Material.007"]}
				position={[0.106, 0.484, 0.064]}
				rotation={[3.112, -1.327, 3.065]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube194.geometry}
				material={materials["Material.007"]}
				position={[0.009, 0.478, 0.131]}
				rotation={[-3.129, -0.128, 3.131]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube200.geometry}
				material={materials["Material.007"]}
				position={[-0.011, 0.478, 0.147]}
				rotation={[-3.026, -0.089, -3.118]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube201.geometry}
				material={materials["Material.007"]}
				position={[-0.019, 0.479, 0.113]}
				rotation={[-0.019, -0.965, -0.098]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube205.geometry}
				material={materials["Material.007"]}
				position={[-0.042, 0.486, 0.046]}
				rotation={[-3.046, -0.394, -3.104]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube206.geometry}
				material={materials["Material.007"]}
				position={[-0.035, 0.489, 0.015]}
				rotation={[-3.12, -0.383, 3.065]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube207.geometry}
				material={materials["Material.007"]}
				position={[-0.083, 0.482, -0.034]}
				rotation={[-0.133, 1.475, 0.12]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube208.geometry}
				material={materials["Material.007"]}
				position={[-0.051, 0.487, -0.02]}
				rotation={[-3.001, -0.381, 3.085]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube209.geometry}
				material={materials["Material.007"]}
				position={[-0.107, 0.482, -0.074]}
				rotation={[-0.716, 1.395, 0.721]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube210.geometry}
				material={materials["Material.007"]}
				position={[-0.067, 0.484, -0.059]}
				rotation={[-3.13, -0.383, 3.063]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube211.geometry}
				material={materials["Material.007"]}
				position={[-0.091, 0.484, -0.114]}
				rotation={[-3.022, -0.232, -3.112]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube212.geometry}
				material={materials["Material.007"]}
				position={[-0.127, 0.486, -0.136]}
				rotation={[-0.611, 1.467, 0.571]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube213.geometry}
				material={materials["Material.007"]}
				position={[-0.102, 0.488, -0.154]}
				rotation={[3.092, -0.391, 3.012]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube215.geometry}
				material={materials["Material.007"]}
				position={[-0.072, 0.483, -0.002]}
				rotation={[0.265, 1.473, -0.136]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube216.geometry}
				material={materials["Material.007"]}
				position={[-0.11, 0.486, -0.224]}
				rotation={[-3.043, 0.962, 3.118]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube217.geometry}
				material={materials["Material.007"]}
				position={[-0.122, 0.489, -0.173]}
				rotation={[-2.963, 0.968, 3.043]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube218.geometry}
				material={materials["Material.007"]}
				position={[-0.076, 0.487, -0.2]}
				rotation={[0.027, 0.301, 0.119]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube219.geometry}
				material={materials["Material.007"]}
				position={[-0.094, 0.489, -0.18]}
				rotation={[-2.892, 0.791, 2.948]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube220.geometry}
				material={materials["Material.007"]}
				position={[-0.061, 0.484, -0.224]}
				rotation={[-3.113, 0.792, 3.036]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube221.geometry}
				material={materials["Material.007"]}
				position={[-0.041, 0.481, -0.289]}
				rotation={[-0.013, 0.3, -0.008]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube222.geometry}
				material={materials["Material.007"]}
				position={[-0.035, 0.481, -0.245]}
				rotation={[-3.043, 0.788, 3.033]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube223.geometry}
				material={materials["Material.007"]}
				position={[-0.009, 0.479, -0.311]}
				rotation={[-0.119, 0.26, 0.044]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube224.geometry}
				material={materials["Material.007"]}
				position={[-0.011, 0.48, -0.276]}
				rotation={[-3.126, 0.793, 3.048]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube225.geometry}
				material={materials["Material.007"]}
				position={[-0.066, 0.481, -0.259]}
				rotation={[0.036, 0.299, 0.05]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane120.geometry}
				material={materials["Material.010"]}
				position={[-0.02, 0.569, -0.188]}
				rotation={[-2.859, 1.11, 2.786]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder059.geometry}
				material={materials["Material.002"]}
				position={[-0.015, 0.518, -0.188]}
				rotation={[-0.013, -0.393, -0.003]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane121.geometry}
				material={materials["Material.010"]}
				position={[-0.018, 0.568, -0.195]}
				rotation={[-0.607, 0.676, 0.066]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane122.geometry}
				material={materials["Material.010"]}
				position={[-0.011, 0.568, -0.193]}
				rotation={[-0.648, -0.763, -0.342]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane123.geometry}
				material={materials["Material.010"]}
				position={[-0.01, 0.568, -0.189]}
				rotation={[-2.832, -0.826, -2.673]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane124.geometry}
				material={materials["Material.010"]}
				position={[-0.02, 0.569, -0.193]}
				rotation={[-0.331, 1.145, 0.199]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane125.geometry}
				material={materials["Material.010"]}
				position={[-0.013, 0.567, -0.196]}
				rotation={[-0.537, -0.123, -0.249]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane126.geometry}
				material={materials["Material.010"]}
				position={[-0.01, 0.568, -0.19]}
				rotation={[-1.891, -1.103, -1.782]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane127.geometry}
				material={materials["Material.010"]}
				position={[-0.013, 0.569, -0.185]}
				rotation={[-2.94, -0.001, -2.912]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane128.geometry}
				material={materials["Material.009"]}
				position={[0.109, 0.571, -0.106]}
				rotation={[0.119, 0.764, -0.402]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder060.geometry}
				material={materials["Material.002"]}
				position={[0.095, 0.522, -0.102]}
				rotation={[-1.807, -1.248, -1.794]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane129.geometry}
				material={materials["Material.009"]}
				position={[0.115, 0.568, -0.106]}
				rotation={[-0.603, -0.265, -0.844]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane130.geometry}
				material={materials["Material.009"]}
				position={[0.116, 0.567, -0.099]}
				rotation={[-2.208, -0.643, -2.114]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane131.geometry}
				material={materials["Material.009"]}
				position={[0.113, 0.569, -0.097]}
				rotation={[-3.05, 0.442, -2.664]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane132.geometry}
				material={materials["Material.009"]}
				position={[0.114, 0.569, -0.107]}
				rotation={[-0.154, -0.042, -0.415]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane133.geometry}
				material={materials["Material.009"]}
				position={[0.118, 0.566, -0.102]}
				rotation={[-1.37, -0.719, -1.524]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane134.geometry}
				material={materials["Material.009"]}
				position={[0.113, 0.568, -0.097]}
				rotation={[-2.673, -0.011, -2.656]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane135.geometry}
				material={materials["Material.009"]}
				position={[0.109, 0.571, -0.099]}
				rotation={[2.871, 1.245, -2.561]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder061.geometry}
				material={materials["Material.001"]}
				position={[0.086, 0.501, -0.232]}
				scale={0.688}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube202.geometry}
				material={materials["Material.009"]}
				position={[0.092, 0.555, -0.233]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube203.geometry}
				material={materials["Material.007"]}
				position={[-0.328, 0.48, 0.031]}
				rotation={[-2.362, 1.486, 2.326]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube204.geometry}
				material={materials["Material.007"]}
				position={[-0.305, 0.48, 0.012]}
				rotation={[3.088, -0.536, 3.004]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube214.geometry}
				material={materials["Material.007"]}
				position={[-0.325, 0.482, -0.059]}
				rotation={[-3.059, 0.818, 3.139]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube226.geometry}
				material={materials["Material.007"]}
				position={[-0.331, 0.48, -0.006]}
				rotation={[-2.993, 0.824, 3.081]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube227.geometry}
				material={materials["Material.007"]}
				position={[-0.289, 0.481, -0.039]}
				rotation={[0.028, 0.446, 0.115]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube228.geometry}
				material={materials["Material.007"]}
				position={[-0.304, 0.481, -0.017]}
				rotation={[-2.921, 0.649, 2.993]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube229.geometry}
				material={materials["Material.007"]}
				position={[-0.279, 0.482, -0.069]}
				rotation={[-3.116, 0.647, 3.041]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube230.geometry}
				material={materials["Material.007"]}
				position={[-0.266, 0.48, -0.134]}
				rotation={[-0.014, 0.446, -0.006]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube231.geometry}
				material={materials["Material.007"]}
				position={[-0.254, 0.48, -0.092]}
				rotation={[-3.055, 0.643, 3.051]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube232.geometry}
				material={materials["Material.007"]}
				position={[-0.238, 0.483, -0.16]}
				rotation={[-0.089, 0.39, 0.107]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube233.geometry}
				material={materials["Material.007"]}
				position={[-0.235, 0.481, -0.125]}
				rotation={[-3.128, 0.647, 3.05]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube234.geometry}
				material={materials["Material.007"]}
				position={[-0.287, 0.483, -0.101]}
				rotation={[0.038, 0.444, 0.044]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube235.geometry}
				material={materials["Material.007"]}
				position={[-0.144, 0.489, -0.182]}
				rotation={[3.028, 0.19, -3.087]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube236.geometry}
				material={materials["Material.007"]}
				position={[-0.132, 0.488, -0.21]}
				rotation={[-0.189, -1.246, -0.174]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube237.geometry}
				material={materials["Material.007"]}
				position={[-0.181, 0.49, -0.188]}
				rotation={[-0.455, -1.409, -0.449]}
				scale={[0.012, 0.002, 0.012]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube238.geometry}
				material={materials["Material.007"]}
				position={[-0.198, 0.487, -0.158]}
				rotation={[-3.121, 0.155, -3.103]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube239.geometry}
				material={materials["Material.007"]}
				position={[-0.215, 0.488, -0.181]}
				rotation={[-0.134, -1.244, -0.239]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube240.geometry}
				material={materials["Material.007"]}
				position={[-0.169, 0.488, -0.153]}
				rotation={[-3.121, 0.155, -3.103]}
				scale={[0.008, 0.002, 0.008]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane136.geometry}
				material={materials["Material.012"]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder043.geometry}
				material={materials["Material.003"]}
				position={[-0.166, 0.502, -0.089]}
				rotation={[1.708, 0.978, -2.675]}
			/>
		</group>
	);
}

useGLTF.preload("./Island10.glb");
