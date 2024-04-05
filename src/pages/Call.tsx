import Index from "../components/call";
import socketIO, { Socket } from "socket.io-client";

const socket: Socket = socketIO(import.meta.env.VITE_API_URL, {
	extraHeaders: {
		"ngrok-skip-browser-warning": "true"
	}
});

export default function Call() {
	return <Index socket={socket} />;
}
