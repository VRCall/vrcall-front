import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Sky } from "@react-three/drei";
import { useSearchParams } from "react-router-dom";
import BasicMap from "./maps/BasicMap";
import FirstMap from "./maps/FirstMap";
import EgyptMap from "./maps/EgyptMap";

export default function Map() {
	const [searchParams, setSearchParams] = useSearchParams();

	const maps = {
		basic: <BasicMap />,
		first: <FirstMap />,
		egypt: <EgyptMap />
	};

	const mapNames = ["basic", "first", "egypt"];

	return (
		<>
			{!searchParams.get("map") ? (
				<BasicMap />
			) : mapNames.includes(searchParams.get("map")) ? (
				maps[searchParams.get("map")]
			) : (
				<BasicMap />
			)}
			<Sky />
			<RigidBody type="fixed">
				<CuboidCollider args={[37.5, 2, 0.5]} position={[0, 0, 38]} />
				<CuboidCollider args={[37.5, 2, 0.5]} position={[0, 0, -38]} />
				<CuboidCollider args={[0.5, 2, 37.5]} position={[38, 0, 0]} />
				<CuboidCollider args={[0.5, 2, 37.5]} position={[-38, 0, 0]} />
			</RigidBody>
		</>
	);
}
