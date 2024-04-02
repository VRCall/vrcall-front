import axios from "axios";

export const checkFriendship = async (friendshipId: string): Promise<boolean> => {
  try {
    const authToken = localStorage.getItem("token");
    const response = await axios.get<boolean>(
      `${import.meta.env.VITE_API_URL}/friendships/checkfriendship/${friendshipId}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    
    return response.data;
  } catch (error) {
    console.error("Error checking friendship:", error);
    console.log(error);
    //throw error;
    
  }
};
