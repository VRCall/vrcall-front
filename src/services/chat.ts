import axios from "axios";

export interface Message {
    id: string;
    text: string;
}

interface GetMessagesResponse {
    messages: Message[];
}

export const getMessages = async (id: string): Promise<Message[]> => {
    try {
        const response = await axios.get<GetMessagesResponse>(`${import.meta.env.VITE_API_URL}/chat/messages/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        console.log(response);
        
        return response.data.messages;
    } catch (error) {
        console.error("Error getting messages:", error);
        throw error;
    }
};

export const sendMessage = async (data: { text: string, friendship_id: string}): Promise<Message> => {
    try {
        const response = await axios.post<Message>(`${import.meta.env.VITE_API_URL}/chat`, data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error sending message:", error);
        throw error;
    }
};
