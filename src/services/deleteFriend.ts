import axios from "axios";

export const deleteFriend = async (friendshipId: string) => {
	try {
		const token = localStorage.getItem("token");
		const response = await axios.delete(
			`${import.meta.env.VITE_API_URL}/friendships/delete-friend/${friendshipId}`,
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		);
		if (response.status === 200) return true;
	} catch (e) {
		console.log(e);
		return false;
	}
};
