import { useEffect, useState } from "react";
import { FriendListData, getFriendList } from "../../services/friendList";
import "./FriendList.scss";
import { Link } from "react-router-dom";
import "./SimplifiedFriendList.scss";

export default function SimplifedFriendList() {
	const [friendList, setFriendList] = useState<FriendListData[] | undefined>(
		[]
	);
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
		<div>
			<ul className="sFriendList">
				{friendList &&
					friendList.map((friend, index) => (
						<li key={index}>
							<Link
								to={`/friendship/${friend.friendship_id}`}
								className="sFriend"
							>
								<img
									width={35}
									src={friend.img}
									alt={friend.pseudo}
								/>
								<p>{friend.pseudo}</p>
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
}
