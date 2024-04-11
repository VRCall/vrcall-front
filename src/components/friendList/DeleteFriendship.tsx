import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoTrashOutline } from "react-icons/io5";
import { deleteFriend } from "../../services/deleteFriend";

interface DeleteFriendshipProps {
	friendship_id: string;
	active: boolean;
	onClick: (friendship_id: string) => void;
}

export default function DeleteFriendship({
	friendship_id,
	active,
	onClick
}: DeleteFriendshipProps) {
	const handleDelete = (friendship_id: string) => {
		console.log("Delete friendship", friendship_id);
		deleteFriend(friendship_id).then((res) => {
			if (res == true) {
				console.log("Friendship deleted");
			}
		});
	};

	const handleBlock = (friendship_id: string) => {
		console.log("Block friendship", friendship_id);
	};

	return (
		<div className="buttonList">
			<button
				className="friendParamLink"
				onClick={() => onClick(friendship_id)}>
				<HiOutlineDotsVertical />
			</button>
			{active && (
				<div className="deleteLink">
					<button onClick={() => handleDelete(friendship_id)}>
						<IoTrashOutline />
						<span>Delete</span>
					</button>
					<button onClick={() => handleBlock(friendship_id)}>
						<IoTrashOutline />
						<span>Block</span>
					</button>
				</div>
			)}
		</div>
	);
}
