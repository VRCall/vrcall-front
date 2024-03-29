import FriendList from "../components/friendList/FriendList";
import AddFriends from "../components/friends/AddFriends";
import FriendRequests from "../components/friends/FriendRequests";

export default function Home() {
  return (
    <>
      <FriendList />
      <AddFriends />
      <FriendRequests />
    </>
  );
}
