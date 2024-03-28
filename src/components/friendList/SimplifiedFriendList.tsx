import { useEffect, useState } from "react";
import { FriendListData, getFriendList } from "../../services/friendList";
import "./FriendList.scss";
import { Link } from "react-router-dom";

export default function SimplifedFriendList() {
  const [friendList, setFriendList] = useState<FriendListData[] | undefined>(
    []
  );
  useEffect(() => {
    getFriendList()
      .then((response) => {
        setFriendList(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {friendList && friendList!.map((friend, index) => (
              <li key={index}>
                <Link to={`/friendship/${friend.friendship_id}`} className="friend">
                  <img src={friend.img} alt={friend.pseudo} />
                  <p>{friend.pseudo}</p>
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
}
