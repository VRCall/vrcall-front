import { useEffect, useState } from "react";
import { FriendListData, getFriendList } from "../../services/friendList";

export default function FriendList() {
  const [friendList, setFriendList] = useState<FriendListData[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/login";
    getFriendList(token!)
      .then((response) => {
        setFriendList(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Friend List</h1>
      <ul>
        {friendList.map((friend) => (
          <li key={friend.id}>
            <img src={friend.img} alt={friend.pseudo} />
            <p>{friend.pseudo}</p>
            {/* add chat button and online status ? */}
          </li>
        ))}
      </ul>
    </>
  );
}
