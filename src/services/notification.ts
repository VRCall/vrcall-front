import axios from "axios";

export const fetchNotifications = async () => {
	try {
		const response = await axios.get(
			`${process.env.VITE_API_URL}/notification`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			}
		);
		return response.data.notifications;
	} catch (error) {
		throw new Error("Error fetching notifications");
	}
};
