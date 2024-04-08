import React, { useState } from "react";
import { addFriend } from "../../services/addFriends";
import "./addFriends.scss";
import { Socket, io } from "socket.io-client";

const socket: Socket = io(`${import.meta.env.VITE_API_URL}`, {
	extraHeaders: {
		"ngrok-skip-browser-warning": "true"
	}
});

export const AddFriends: React.FC = ({
	setFriendRequest,
	friendRequest
}: {
	setFriendRequest: any;
	friendRequest: any;
}) => {
	const [friendName, setFriendName] = useState<string>("");

	const handleAddFriend = async () => {
		if (!friendName) {
			alert("Please enter a friend name");
		}
		friendName.trim();

		const newFriend = await addFriend(friendName);

		if (newFriend) {
			const NotificationData = {
				type: "friend-request",
				text: "You have a new friend request !",
				receiver: friendName
			};

			socket.emit("send-friend-request", NotificationData);
			setFriendRequest(!friendRequest);
			return;
		}
	};

	return (
		<div className="add-friends-container">
			<h1 className="add-friends-title">Add Friends</h1>
			<input
				type="text"
				className="add-friends-input"
				placeholder="Enter friend name"
				value={friendName}
				onChange={(e) => setFriendName(e.target.value)}
			/>
			<button
				className="add-friends-button"
				onClick={() => handleAddFriend()}>
				Enregistrer
			</button>
		</div>
	);
};

export default AddFriends;
