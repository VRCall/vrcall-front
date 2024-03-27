import axios from "axios";

export interface FriendListData {
  pseudo: string;
  img: string;
  friendship_id: string;
}

export const getFriendList = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/friends/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if(response.status === 200)
    return response.data as FriendListData[];
  } catch (e) {
    console.error(e);
    return [] as FriendListData[];
  }
};
