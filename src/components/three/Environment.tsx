import React, { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import CharacterModel from "./CharacterModel";
import Map from "./Map";
import { Socket } from "socket.io-client";

type EnvironmentProps = {
	socket: Socket;
	remoteStream: MediaStream;
};

export default function Environment({
	socket,
	remoteStream
}: EnvironmentProps) {
	return (
		<>
			<Physics timeStep={"vary"}>
				<Suspense fallback={null}>
					<CharacterModel
						socket={socket}
						remoteStream={remoteStream}
					/>
				</Suspense>
				<Map />
			</Physics>
		</>
	);
}
