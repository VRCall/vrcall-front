import { useEffect, useState } from "react";
import { FriendListData, getFriendList } from "../../services/friendList";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import "./FriendList.scss";
import { Link } from "react-router-dom";

export default function FriendList() {
  const [friendList, setFriendList] = useState<FriendListData[] | undefined>(
    []
  );
  const [search, setSearch] = useState("");

  useEffect(() => {
    getFriendList()
      .then((response) => {
        setFriendList(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const openMessage = (friendship: string) => {
  //   page("message");
  //   friendshipId(friendship);
  // };

  return (
    <>
      <h1>Friend List</h1>
      <input placeholder="friend" onChange={(e) => setSearch(e.target.value)} />
      {friendList!.length === 0 ? (
        <p>No friends to display</p>
      ) : (
        <ul style={{ listStyleType: "none" }}>
          {friendList && friendList!
            .filter((friend) => friend.pseudo.includes(search))
            .map((friend, index) => (
              <li key={index}>
                <div className="friend">
                  <img src={friend.img} alt={friend.pseudo} />
                  <p>{friend.pseudo}</p>
                  <button>
                    <Link to={`/friendship/${friend.friendship_id}`}>{friend.pseudo}</Link>
                  </button>
                </div>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
