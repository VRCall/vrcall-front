import { useEffect, useState } from "react";
import { FriendListData, getFriendList } from "../../services/friendList";
import "./FriendList.scss";
import { Link } from "react-router-dom";
import { HiOutlineDotsVertical } from "react-icons/hi";

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

	return (
		<>
			<h1>Friend List</h1>
			<input
				className="search"
				placeholder="friend"
				onChange={(e) => setSearch(e.target.value)}
				style={{ color: "rgba(255, 255, 255, 0.87)" }}
			/>
			{friendList && friendList!.length === 0 ? (
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
									<div className="friend">
										<img
											className="petitePP"
											width={35}
											src="/default.png"
											// src={friend.img}
											alt={friend.pseudo}
										/>
										<p className="friendName">
											{friend.pseudo}
										</p>
										<button>
											<Link
												className="friendLink"
												to={`/friendship/${friend.friendship_id}`}>
												<HiOutlineDotsVertical />
											</Link>
										</button>
									</div>
								</li>
							))}
				</ul>
			)}
		</>
	);
}
