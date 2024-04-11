import AddFriends from "../components/friends/AddFriends";
import FriendRequests from "../components/friends/FriendRequests";
import SocketProps from "../utils/socket";

export default function Requests({ socket }: SocketProps) {
	return (
		<>
			<AddFriends socket={socket} />
			<FriendRequests socket={socket} />
		</>
	);
}
