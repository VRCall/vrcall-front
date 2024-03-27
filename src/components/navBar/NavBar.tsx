import { useState } from "react";
import FriendList from "../friendList/FriendList";
import { useNavigate } from "react-router-dom";
import SimplifedFriendList from "../friendList/SimplifiedFriendList";
import "./NavBar.scss";

export default function NavBar() {
  const [page, setPage] = useState("home");
  const [friendshipId, setfriendshipId] = useState("");
  const navigate = useNavigate();
  const handleButtonClick = (page: string) => {
    switch (page) {
      case "home":
        setPage("home");
        break;
      case "profile":
        setPage("profile");
        break;
      case "param":
        setPage("param");
        break;
      case "message":
        setPage("message");
        break;
      // add more cases here if needed
      default:
        setPage("home");
    }
  };

  const handleDisconnection = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navBarBody">
      <div>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <button onClick={() => handleButtonClick("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleButtonClick("profile")}>
              Profile
            </button>
          </li>
          <li>
            <button onClick={() => handleButtonClick("param")}>Settings</button>
          </li>
        </ul>
        <div>
          <h2>Messages</h2>
          <SimplifedFriendList page={setPage} friendshipId={setfriendshipId} />
        </div>
        <button onClick={() => handleDisconnection()}>Disconnect</button>
      </div>

      <main>
        {page === "home" && <FriendList page={setPage} friendshipId={setfriendshipId} />}
        {page === "profile" && <h1>Profile</h1>}
        {page === "param" && <h1>Settings</h1>}
        {/* faire passer le componenent chat ici adam avec l'id du friendship
        en tant que parametre */}
        {page === "message" && <h1>{friendshipId}</h1>}
      </main>
    </div>
  );
}
