import React, { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import CharacterModel from "./CharacterModel";
import Map from "./Map";
import { Socket } from "socket.io-client";

type EnvironmentProps = {
	socket: Socket;
};

export default function Environment({ socket }: EnvironmentProps) {
	return (
		<>
			<Physics debug timeStep={"vary"}>
				<Suspense fallback={null}>
					<CharacterModel socket={socket} />
				</Suspense>
				<Map />
			</Physics>
		</>
	);
}
