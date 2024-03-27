import { useState } from "react";
import FriendList from "../friendList/FriendList";

export default function NavBar() {
  const [page, setPage] = useState("home");
  const handleButtonClick = (page: string) => {
    switch (page) {
      case "home":
        setPage("home");
        break;
      case "profile":
        setPage("profile");
        break;
        // add more cases here if needed
      default:
        setPage("home");
    }
  };
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => handleButtonClick("home")}>home</button>
        </li>
        <li>
          <button onClick={() => handleButtonClick("profile")}>profile</button>
        </li>
      </ul>
      <main>
        {page === "home" && <FriendList />}
        {page === "profile" && <h1>Profile</h1>}
      </main>
    </div>
  );
}
