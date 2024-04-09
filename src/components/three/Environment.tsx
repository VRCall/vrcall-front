import React, { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import CharacterModel from "./CharacterModel";
import Map from "./Map";
import { DataConnection } from "peerjs";

type EnvironmentProps = {
	dataConnection: DataConnection;
};

export default function Environment({ dataConnection }: EnvironmentProps) {
	return (
		<>
			<Physics timeStep={"vary"}>
				<Suspense fallback={null}>
					<CharacterModel dataConnection={dataConnection} />
				</Suspense>
				<Map />
			</Physics>
		</>
	);
}
