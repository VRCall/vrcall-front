import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

const QuickCall = () => {
	const [roomId, setRoomId] = useState(uuidv4());
	import.meta.env.QUICK_CALL_URL;

	const handleCopy = () => {};

	const handleRegenerate = () => {
		setRoomId(uuidv4());
	};

	const location = useLocation();
	console.log(window.location.origin);

	return (
		<div>
			<CopyToClipboard
				text={`${window.location.origin}/call/${roomId}?camera=true`}
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
