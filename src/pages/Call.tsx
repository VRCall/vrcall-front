import Index from "../components/call";
import socketIO, { Socket } from "socket.io-client";

const socket: Socket = socketIO.connect(import.meta.env.VITE_API_URL);

export default function Call() {

    return (

        <Index socket={socket} />

    )

}