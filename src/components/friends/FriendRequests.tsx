import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import {
	FriendRequest,
	getFriendRequests
} from "../../services/getFriendRequest";
import { acceptRequest } from "../../services/addFriends";

export default function FriendRequests() {
	const [friendRequest, setFriendRequest] = useState<
		FriendRequest[] | undefined
	>([]);

	useEffect(() => {
		getFriendRequests()
			.then((res) => {
				setFriendRequest(res);
			})
			.catch((e) => {
				return console.error(e);
			});
	}, []);

	return (
		<>
			<h1>Pending requests</h1>

			{friendRequest && friendRequest!.length === 0 ? (
				<p>no requests</p>
			) : (
				<ul>
					{friendRequest &&
						friendRequest!.map(
							(friendRequest: FriendRequest, index) => {
								return (
									<li key={index}>
										<div>
											<img
												src={friendRequest.img}
												alt={friendRequest.pseudo}
											/>

											<b>{friendRequest.pseudo}</b>

											<button
												onClick={() =>
													acceptRequest(
														friendRequest.friendship_id,
														true
													)
												}>
												<IoMdCheckmark />
											</button>

											<button
												onClick={() =>
													acceptRequest(
														friendRequest.friendship_id,
														false
													)
												}>
												<RxCross2 />
											</button>
										</div>
									</li>
								);
							}
						)}
				</ul>
			)}
		</>
	);
}
