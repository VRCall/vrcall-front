import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import {
	FriendRequest,
	getFriendRequests
} from "../../services/getFriendRequest";
import { acceptRequest } from "../../services/addFriends";
import "./friendReq.scss";

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
		<div className="friend-requests-container">
			<h1 className="friend-requests-title">Pending requests</h1>

			{friendRequest && friendRequest!.length === 0 ? (
				<p>no requests</p>
			) : (
				<ul className="friend-request-list">
					{friendRequest &&
						friendRequest!.map(
							(friendRequest: FriendRequest, index) => {
								return (
									<li
										key={index}
										className="friend-request-item">
										<div className="friend-request-info">
											<div className="friend-request-details">
												<img
													className="friend-request-img"
													src="/default.png"
													alt="Friend Avatar"
												/>
												<b className="friend-request-name">
													{friendRequest.pseudo}
												</b>
											</div>

											<div className="friend-request-buttons-container">
												<button
													className="friend-request-button"
													onClick={() =>
														acceptRequest(
															friendRequest.friendship_id,
															true
														)
													}>
													<IoMdCheckmark />
												</button>

												<button
													className="friend-request-button"
													onClick={() =>
														acceptRequest(
															friendRequest.friendship_id,
															false
														)
													}>
													<RxCross2 />
												</button>
											</div>
										</div>
									</li>
								);
							}
						)}
				</ul>
			)}
		</div>
	);
}
