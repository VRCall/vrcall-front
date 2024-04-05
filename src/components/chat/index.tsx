import React, { useState, useEffect, useRef } from "react";
import { sendMessage, getMessages, Message, getCurrentUser } from "../../services/chat";
import { useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import { checkFriendship } from "../../services/checkFriendship"; 
import Notification from "../notification/Notification";
import "./indexChat.scss";

const socket = io(`${import.meta.env.VITE_API_URL}`, {
    extraHeaders: {
        "ngrok-skip-browser-warning": "true"
    }
});

const ChatFriend = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentUser, setCurrentUser] = useState({});
    const [newMessage, setNewMessage] = useState("");
    const [error, setError] = useState("");
    const [notifications, setNotifications] = useState<string[]>([]); 
    const { id } = useParams();
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await checkFriendship(id!); 
                loadMessages(); 
                getUser();
                socket.emit("join-chat", id);
                socket.on("receiveMessage", (data: any) => {
                    setMessages(prevMessages => [...prevMessages, { text: data.text, id: id!, senderName: data.senderName }]);
                    setNotifications(prevNotifications => [...prevNotifications, `Nouveau message de ${data.senderName}`]); 
                });

            } catch (error) {
                navigate('/') 
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
        const user = await getCurrentUser()
        setCurrentUser(user)
        socket.emit("join-chat", id, user.id)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (newMessage.trim() !== "") {
            try {
                await sendMessage({ text: newMessage, friendship_id: id! });

                socket.emit("sendMessage", { text: newMessage, senderName: currentUser.pseudo, chatId: id });

                setMessages(prevMessages => [...prevMessages, { text: newMessage, id: id!, senderName: currentUser.pseudo }]);
                setNewMessage("");
            } catch (error) {
                console.error("Error sending message:", error);
                setError("Error sending message");
            }
        }
    };

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    return (
        <div className="chat">
            {notifications && notifications.map((notification, index) => (
                <Notification key={index} text={notification} />
            ))}
            <div className="chat-container" ref={chatContainerRef}>
                {messages && messages.map((message, index) => (
                    <div className="message" key={index}>
                        {message.senderName} : {message.text}
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
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default ChatFriend;
