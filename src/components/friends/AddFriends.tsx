import React, { useState } from "react";
import { addFriend } from "../../services/addFriends";
import "./addFriends.scss";

export const AddFriends: React.FC = () => {
	const [friendName, setFriendName] = useState<string>("");

	const handleAddFriend = async () => {
		if (!friendName) {
			alert("Please enter a friend name");
		}
		friendName.trim();

		const newFriend = await addFriend(friendName);
		alert(newFriend.message);
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
