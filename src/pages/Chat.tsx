import ChatFriend from "../components/chat";
import SocketProps from "../utils/socket";

export default function Chat({ socket }: SocketProps) {
	return <ChatFriend socket={socket} />;
}
