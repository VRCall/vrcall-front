import React, { useState, useEffect, useRef } from "react";
import { sendMessage, getMessages, Message, getCurrentUser } from "../../services/chat";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import "./indexChat.scss";

const socket = io.connect(`${import.meta.env.VITE_API_URL}`);

export default function ChatFriend() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentUser, setCurrentUser] = useState({});
    const [newMessage, setNewMessage] = useState("");
    const [error, setError] = useState("");

    const { id } = useParams();
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        loadMessages();
        getUser();
        console.log("sendMessage");

        socket.on("receiveMessage", (data: any) => {
            console.log(data);
            setMessages(prevMessages => [...prevMessages, { text: data.text, id: id!, senderName: data.senderName }]);
            setTimeout(scrollToBottom, 100); 
        });

        return () => {
            socket.off("newMessage");
        };

    }, []);

    const loadMessages = async () => {
        try {
            const existingMessages = await getMessages(id!);
            setMessages(existingMessages);
            console.log(existingMessages);
        } catch (error) {
            console.error("Error loading messages:", error);
            setError("Error loading messages");
        }
    };

    const getUser = async () => {
        const user = await getCurrentUser()
        setCurrentUser(user.user)
        console.log(user);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newMessage.trim() !== "") {
            try {
                await sendMessage({ text: newMessage, friendship_id: id! });
                console.log(currentUser);

                socket.emit("sendMessage", { text: newMessage, senderName: currentUser.pseudo });

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
        <div className="main">
            <h1>Chat</h1>
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
