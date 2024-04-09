import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { FriendRequest } from "./getFriendRequest";

export const addFriend = async (friendName: string) => {
	try {
		const authToken = localStorage.getItem("token");

		const response = await axios.post(
			`${import.meta.env.VITE_API_URL}/friendships`,
			{
				pseudo: friendName
			},
			{
				headers: {
					Authorization: `Bearer ${authToken}`
				}
			}
		);

		if (response.status === 200) {
			return response.data;
		} else {
			console.error("Error adding friend:", response.data.message);
			return null;
		}
	} catch (error) {
		console.log(error);
	}
};

export const acceptRequest = async (
	id: string,
	accept: boolean,
	setFriendRequest: Dispatch<SetStateAction<FriendRequest[] | undefined>>
) => {
	const token = localStorage.getItem("token");
	try {
		const response = await axios.patch(
			`${import.meta.env.VITE_API_URL}/friendships/accept-friends/${id}`,
			{ accept: accept },
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		);

		if (response.status === 200) {
			setFriendRequest([]);
		} else {
			console.error("Error accepting request:", response.data.message);
			return null;
		}
	} catch (error) {
		console.error("Error accepting request:", error);
		return null;
	}
};
