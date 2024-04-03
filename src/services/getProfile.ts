import axios from "axios";

export interface Profile {
  pseudo: string;
  img: string;
  is_validated: boolean;
  email: string;
  created_at: Date;
  modified_at: Date;
}

export const getProfile = async (friendshipId: string) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/profile/${friendshipId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data as Profile;
    } else {
      console.error("Error getting profile:", response.data.message);
      return undefined;
    }
  } catch (e) {
    console.error(e);
    return undefined;
  }
};
