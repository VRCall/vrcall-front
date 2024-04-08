import { useState } from "react";
import AddFriends from "../components/friends/AddFriends";
import FriendRequests from "../components/friends/FriendRequests";

export default function Requests() {
	const [friendRequest, setFriendRequest] = useState(false);
	return (
		<>
			<AddFriends
				setFriendRequest={setFriendRequest}
				friendRequest={friendRequest}
			/>
			<FriendRequests friendRequest={friendRequest} />
		</>
	);
}
