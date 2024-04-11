import { useEffect, useState } from "react";
import { FriendListData, getFriendList } from "../../services/friendList";
import "./FriendList.scss";
import { useNavigate } from "react-router-dom";
import DeleteFriendship from "./DeleteFriendship";

export default function FriendList() {
	const [friendList, setFriendList] = useState<FriendListData[] | undefined>(
		[]
	);
	const [search, setSearch] = useState("");
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	const navigate = useNavigate();

	useEffect(() => {
		getFriendList()
			.then((response) => {
				setFriendList(response);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const handleDropdownClick = (friendship_id: string) => {
		if (activeDropdown === friendship_id) {
			setActiveDropdown(null);
		} else {
			setActiveDropdown(friendship_id);
		}
	};

	return (
		<>
			<h1 className="tittle">Friend List</h1>
			<div className="container-search-friend">
				<input
					className="search"
					placeholder="Search Friend"
					onChange={(e) => setSearch(e.target.value)}
					style={{ color: "rgba(255, 255, 255, 0.87)" }}
				/>
			</div>
			{friendList && friendList.length === 0 ? (
				<p>No friends to display</p>
			) : (
				<ul className="friendUl">
					{friendList &&
						friendList
							.filter((friend) =>
								friend.pseudo
									.toLowerCase()
									.includes(search.toLowerCase())
							)
							.map((friend, index) => (
								<li key={index} className="friendLI">
									<div
										onClick={() =>
											navigate(
												`/friendship/${friend.friendship_id}`
											)
										}
										className="friendLink">
										<div className="friendImg">
											<img
												className="petitePP"
												width={35}
												src="/default.png"
												// src={friend.img}
												alt={friend.pseudo}
											/>
										</div>
										<div className="friendsName">
											<p className="friendName">
												{friend.pseudo}
											</p>
										</div>
									</div>
									<DeleteFriendship
										friendship_id={friend.friendship_id}
										active={
											activeDropdown ===
											friend.friendship_id
										}
										onClick={handleDropdownClick}
									/>
								</li>
							))}
				</ul>
			)}
		</>
	);
}
