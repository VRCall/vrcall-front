import { useEffect, useState } from "react";
import { FriendListData, getFriendList } from "../../services/friendList";
import "./FriendList.scss";

export default function SimplifedFriendList({
  page,
  friendshipId,
}: {
  page: (string: string) => void;
  friendshipId: (string: string) => void;
}) {
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

  const openMessage = (friendship: string) => {
    page("message");
    friendshipId(friendship);
  };

  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {friendList!.length === 0
          ? null
          : friendList!.map((friend, index) => (
              <li key={index}>
                <button onClick={() => openMessage(friend.friendship_id)} className="friend">
                  <img src={friend.img} alt={friend.pseudo} />
                  <p>{friend.pseudo}</p>
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
}
