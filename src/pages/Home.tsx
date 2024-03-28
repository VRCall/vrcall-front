import AddFriends from "../components/friends/AddFriends";
import FriendRequests from "../components/friends/FriendRequests";
import NavBar from "../components/navBar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <AddFriends />
      <FriendRequests />
    </>
  );
}
