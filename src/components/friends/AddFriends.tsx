import { useState } from "react";
import { addFriend } from "../../services/addFriends";
import "./addFriends.scss";
import { Socket } from "socket.io-client";

export const AddFriends = ({ socket }: { socket: Socket }) => {
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
			//socket.emit("update-friend-request", { receiver: friendName });
			return;
		}
	};

	return (
		<>
			<h1 className="add-friends-title">Add Friends</h1>
			<div className="add-friends-container">
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
		</>
	);
};

export default AddFriends;
