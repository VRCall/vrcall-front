import AddFriends from "../components/friends/AddFriends";
import FriendRequests from "../components/friends/FriendRequests";
import io from "socket.io-client";

const socket = io(`${import.meta.env.VITE_API_URL}`, {
	extraHeaders: {
		"ngrok-skip-browser-warning": "true"
	}
});

export default function Requests() {
	return (
		<>
			<AddFriends socket={socket} />
			<FriendRequests socket={socket} />
		</>
	);
}
