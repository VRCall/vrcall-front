import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsCameraVideoFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import "../navBar/NavBar.scss";

const QuickCall = () => {
	const [roomId, setRoomId] = useState(uuidv4());

	const handleCopy = () => {
		alert(
			"Le lien a été copié dans le presse-papiers. Merci de le partager avec la personne concernée."
		);
		window.open(`${window.location.origin}/call/${roomId}?camera=true`);
	};

	const handleRegenerate = () => {
		setRoomId(uuidv4());
	};

	return (
		<>
			<CopyToClipboard
				text={`${window.location.origin}/call/${roomId}?camera=true`}
				onCopy={handleCopy}>
				<a className={"links"}>
					<div onClick={handleRegenerate} className="linkIcon">
						<BsCameraVideoFill />
					</div>
					<p className="linkText">QuickCall</p>
				</a>
			</CopyToClipboard>
		</>
	);
};

export default QuickCall;
