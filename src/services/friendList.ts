import axios from "axios";

export interface FriendListData {
  id: string;
  pseudo: string;
  img: string;
}

export const getFriendList = async (token: string) => {
  if (!token) throw new Error("No token provided");
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/users/friends/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data as FriendListData[];
};
