import Index from "../components/call";
import SocketProps from "../utils/socket";

export default function Call({ socket }: SocketProps) {
	return <Index socket={socket} />;
}
