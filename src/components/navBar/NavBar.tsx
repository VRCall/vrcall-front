import { Link, useNavigate } from "react-router-dom";
import SimplifedFriendList from "../friendList/SimplifiedFriendList";
import "./NavBar.scss";

export default function NavBar() {
  const navigate = useNavigate();

  const handleDisconnection = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navBarBody">
      <div className="linksMessages">
        <div>
          <Link to={""} className="links">
            Friends
          </Link>

          <Link to={"/profile"} className="links">
            Profile
          </Link>
        </div>
        <div className="messages">
          <h2>Messages</h2>
          <SimplifedFriendList />
        </div>
      </div>
      <button
        className="disconnectButton"
        onClick={() => handleDisconnection()}
      >
        Disconnect
      </button>
    </div>
  );
}
