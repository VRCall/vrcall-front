import { Link, useNavigate } from "react-router-dom";
import SimplifedFriendList from "../friendList/SimplifiedFriendList";
import "./NavBar.scss";
import { FaUserFriends } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { ImExit } from "react-icons/im";
import QuickCall from "../call/quickCall";

export default function NavBar() {
	const navigate = useNavigate();

	const handleDisconnection = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<div className="navBarBody">
			<div className="linksMessages">
				<div className="messages">
					<h2>Messages</h2>
					<div className="listFriends">
						<SimplifedFriendList />
					</div>
				</div>
			</div>
			<div className="parameters">
				<Link to={""} className="links">
					<div className="linkIcon">
						<FaUserFriends />
					</div>
					<p className="linkText">Friends</p>
				</Link>
				<Link to={"friendships/requests"} className="links">
					<div className="linkIcon">
						<FaUserFriends />
					</div>
					<p className="linkText">Friend requests</p>
				</Link>

				<Link to={"/profile"} className="links">
					<div className="linkIcon">
						<CgProfile />
					</div>
					<p className="linkText">Profile</p>
				</Link>

				<QuickCall />
			</div>
			<button
				className="disconnectButton"
				onClick={() => handleDisconnection()}>
				<div className="buttonLinkIcon">
					<ImExit />
					<p className="buttonText">Disconnect</p>
				</div>
			</button>
		</div>
	);
}
