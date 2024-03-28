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
      <div>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={"/profile"}>
              Profile
            </Link>
          </li>
          <li>
            <Link to={"/param"}>
            Settings
            </Link>
          </li>

        </ul>
        <div>
          <h2>Messages</h2>
          <SimplifedFriendList />
        </div>
        <button onClick={() => handleDisconnection()}>Disconnect</button>
      </div>
    </div>
  );
}
