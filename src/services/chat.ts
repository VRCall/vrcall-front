import axios from "axios";

export interface Message {
	id: string;
	text: string;
	senderName: string;
	sent_at: Date;
}

interface GetMessagesResponse {
	messages: Message[];
}

export const getMessages = async (id: string): Promise<Message[]> => {
	try {
		const response = await axios.get<GetMessagesResponse>(
			`${import.meta.env.VITE_API_URL}/chat/messages/${id}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
					"ngrok-skip-browser-warning": true
				}
			}
		);

		// const messagesWithSenderName = await Promise.all(response.data.messages.map(async (message) => {
		//     const senderInfo = await axios.get(`${import.meta.env.VITE_API_URL}/user/current`);
		//     return { ...message, senderName: senderInfo.data.user.pseudo };
		// }));

		return response.data.messages;
	} catch (error) {
		console.error("Error getting messages:", error);
		throw error;
	}
};

export const sendMessage = async (data: {
	text: string;
	friendship_id: string;
	sent_at: Date;
}): Promise<Message> => {
	try {
		const response = await axios.post<Message>(
			`${import.meta.env.VITE_API_URL}/chat`,
			data,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
					"ngrok-skip-browser-warning": true
				}
			}
		);

		return response.data;

		// const senderInfo = await axios.get(`${import.meta.env.VITE_API_URL}/user`);
		// return { ...response.data, senderName: senderInfo.data.user.pseudo };
	} catch (error) {
		console.error("Error sending message:", error);
		throw error;
	}
};

export const getCurrentUser = async () => {
	const senderInfo = await axios.get(
		`${import.meta.env.VITE_API_URL}/users/current`,
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				"ngrok-skip-browser-warning": true
			}
		}
	);

	return senderInfo.data;
};
