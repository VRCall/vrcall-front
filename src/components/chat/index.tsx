import React, { useState, useEffect, useRef } from "react";
import {
	sendMessage,
	getMessages,
	Message,
	getCurrentUser
} from "../../services/chat";
import { Link, useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import { checkFriendship } from "../../services/checkFriendship";
import "./indexChat.scss";
import { getProfileByFriendshipId, Profile } from "../../services/getProfile";
import { FiPhoneCall } from "react-icons/fi";
import { PiVideoCameraBold } from "react-icons/pi";
import { BsBadgeVr } from "react-icons/bs";

const socket = io(`${import.meta.env.VITE_API_URL}`, {
	extraHeaders: {
		"ngrok-skip-browser-warning": "true"
	}
});

export default function ChatFriend() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [currentUser, setCurrentUser] = useState({});
	const [newMessage, setNewMessage] = useState("");
	const [error, setError] = useState("");
	const { id } = useParams();
	const chatContainerRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();
	const [sender, setSender] = useState<Profile>();

	useEffect(() => {
		const fetchProfile = async () => {
			await getProfileByFriendshipId(id!).then((data) => {
				setSender(data);
			});
		};
		fetchProfile();

		const fetchData = async () => {
			try {
				await checkFriendship(id!);
				await loadMessages();
				getUser();
				socket.emit("join-chat", `chat-${id}`);
				socket.on("receiveMessage", (data: any) => {
					setMessages((prevMessages) => [
						...prevMessages,
						{
							text: data.text,
							id: id!,
							senderName: data.senderName
						}
					]);
				});
			} catch (error) {
				navigate("/");
				console.error("Error checking friendship:", error);
				setError("Error checking friendship");
			}
		};
		fetchData();

		return () => {
			socket.off("receiveMessage");
		};
	}, [id]);

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const loadMessages = async () => {
		try {
			const existingMessages = await getMessages(id!);
			setMessages(existingMessages);
		} catch (error) {
			console.error("Error loading messages:", error);
			setError("Error loading messages");
		}
	};

	const getUser = async () => {
		const user = await getCurrentUser();
		setCurrentUser(user);
		socket.emit("join-chat", id, user.id);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewMessage(event.target.value);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (newMessage.trim() !== "") {
			try {
				await sendMessage({ text: newMessage, friendship_id: id! });

				socket.emit("sendMessage", {
					text: newMessage,
					senderName: currentUser.pseudo,
					chatId: id,
					receiverName: sender?.pseudo
				});

				setMessages((prevMessages) => [
					...prevMessages,
					{
						text: newMessage,
						id: id!,
						senderName: currentUser.pseudo
					}
				]);
				setNewMessage("");
			} catch (error) {
				console.error("Error sending message:", error);
				setError("Error sending message");
			}
		}
	};

	const scrollToBottom = () => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop =
				chatContainerRef.current.scrollHeight;
		}
	};

	return (
		<div className="chat">
			<div className="headerChat">
				<div className="headerG">
					<h1>{sender?.pseudo}</h1>
				</div>
				<div className="headerD">
					<Link
						to={`/call/${id}?camera=false`}
						target="_blank"
						style={{ display: "inherit" }}>
						<button className="btncall">
							<FiPhoneCall />
						</button>
					</Link>
					<Link
						to={`/call/${id}?camera=true`}
						target="_blank"
						style={{ display: "inherit" }}>
						<button className="btnvisio">
							<PiVideoCameraBold />
						</button>
					</Link>
					<Link
						to={`/three`}
						target="_blank"
						style={{ display: "inherit" }}>
						<button className="btn3D">
							<BsBadgeVr />
						</button>
					</Link>
				</div>
			</div>
			<div className="chat-input">
				<div className="chat-container" ref={chatContainerRef}>
					{messages &&
						messages.map((message, index) => (
							<div className="message" key={index}>
								<img
									className="petitePP"
									src="/default.png"
									// src={friend.img}
								/>
								<div className="container">
									<b>{message.senderName}</b>
									<span
										style={{
											color: "rgb(215, 183, 2)",
											wordBreak: "break-word"
										}}>
										{message.text}
									</span>
								</div>
							</div>
						))}
				</div>

				<form className="message-input" onSubmit={handleSubmit}>
					<input
						type="text"
						value={newMessage}
						onChange={handleInputChange}
						placeholder="Type your message..."
					/>
					<button type="submit">Send</button>
				</form>
			</div>
			{error && <div className="error">{error}</div>}
		</div>
	);
}
