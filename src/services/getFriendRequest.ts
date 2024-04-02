import axios from "axios";

export interface FriendRequest {
  friendship_id: string;
  id: string;
  pseudo: string;
  img: string;
  sent_at: Date;
}

export const getFriendRequests = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/friendships/friend-requests`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "ngrok-skip-browser-warning": true
        },
      }
    );

    if (response.status === 200) {
      return response.data as FriendRequest[];
    } else {
      console.error("Error adding friend:", response.data.message);
      return [] as FriendRequest[];
    }
  } catch (error) {
    console.log(error);
    return [] as FriendRequest[];
  }
};
