import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

const generateRoomId = () => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const roomIdLength = 8;
	let result = "";
	for (let i = 0; i < roomIdLength; i++) {
		result += characters.charAt(
			Math.floor(Math.random() * characters.length)
		);
	}
	return result;
};

const QuickCall = () => {
	const [roomId, setRoomId] = useState(generateRoomId());

	const handleCopy = () => {};

	const handleRegenerate = () => {
		setRoomId(generateRoomId());
	};

	return (
		<div>
			<CopyToClipboard
				text={`http://localhost:5173/call/${roomId}?camera=true`}
				onCopy={handleCopy}>
				<button onClick={handleRegenerate}>
					<FaVideo />
					<span>Quick Call</span>
				</button>
			</CopyToClipboard>
		</div>
	);
};

export default QuickCall;
