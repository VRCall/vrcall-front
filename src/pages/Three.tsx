import Index from "../components/three/Index";
import SocketProps from "../utils/socket";

export default function Three({ socket }: SocketProps) {
	return <Index socket={socket} />;
}
