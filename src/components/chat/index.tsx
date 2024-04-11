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

const socket = io(`${import.meta.env.VITE_API_URL}`);

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
							senderName: data.senderName,
							sent_at: data.sent_at
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
		//Date.parse("HH:mm DD/MM/YYYY");

		if (newMessage.trim() !== "") {
			try {
				await sendMessage({ text: newMessage, friendship_id: id! });

				socket.emit("sendMessage", {
					text: newMessage,
					senderName: currentUser.pseudo,
					chatId: id,
					receiverName: sender?.pseudo,
					sent_at: new Date()
				});

				setMessages((prevMessages) => [
					...prevMessages,
					{
						text: newMessage,
						id: id!,
						senderName: currentUser.pseudo,
						sent_at: new Date()
					}
				]);
				setNewMessage("");
			} catch (error) {
				console.error("Error sending message:", error);
				setError("Error sending message");
			}
		}
	};

	const formatDate = (date: string) => {
		const formattedDate = new Date(date);
		const hours = String(formattedDate.getHours()).padStart(2, "0");
		const minutes = String(formattedDate.getMinutes()).padStart(2, "0");
		const day = String(formattedDate.getDate()).padStart(2, "0");
		const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
		const year = formattedDate.getFullYear();

		return `${hours}:${minutes} ${day}/${month}/${year}`;
	};

	const scrollToBottom = () => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop =
				chatContainerRef.current.scrollHeight;
		}
	};

	const handleNotification = (path: string) => {
		socket.emit("send-call-notification", {
			type: "call",
			text: "Incoming call from " + currentUser.pseudo,
			path: path,
			senderName: currentUser.pseudo,
			receiverName: sender?.pseudo
		});
	};

	return (
		<div className="chat">
			<div className="headerChat">
				<div className="headerG">
					<h1>{sender?.pseudo}</h1>
				</div>
				<div className="headerD">
					<Link
						onClick={() =>
							handleNotification(`/call/${id}?camera=false`)
						}
						to={`/call/${id}?camera=false`}
						target="_blank"
						style={{ display: "inherit" }}>
						<button className="btncall">
							<FiPhoneCall />
						</button>
					</Link>
					<Link
						onClick={() =>
							handleNotification(`/call/${id}?camera=true`)
						}
						to={`/call/${id}?camera=true`}
						target="_blank"
						style={{ display: "inherit" }}>
						<button className="btnvisio">
							<PiVideoCameraBold />
						</button>
					</Link>
					<Link
						onClick={() => handleNotification(`/call/${id}`)}
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
									<div className="textMessage">
										<b>{message.senderName}</b>
										<span
											style={{
												color: "lightgrey",
												wordBreak: "break-word"
											}}>
											{message.text}
										</span>
									</div>
									<div className="dateMessage">
										<p>{formatDate(message.sent_at)}</p>
									</div>
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
