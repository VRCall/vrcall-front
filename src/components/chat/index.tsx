import React, { useState, useEffect } from "react";
import { sendMessage, getMessages, Message } from "../../services/chat";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import "./indexChat.scss";

const socket = io.connect(`${import.meta.env.VITE_API_URL}`);

export default function ChatFriend() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [error, setError] = useState("");

    const {id}= useParams()

    useEffect(() => {
        loadMessages();
        console.log("sendMessage");
        
        socket.on("receiveMessage", (message: string) => {
            console.log(message);
            console.log(messages);
            
            setMessages(prevMessages => [...prevMessages, {text: message, id: id!}]);
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

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newMessage.trim() !== "") {
            try {
                await sendMessage({ text: newMessage, friendship_id: id!});
                
                socket.emit("sendMessage", newMessage);

                setNewMessage("");
            } catch (error) {
                console.error("Error sending message:", error);
                setError("Error sending message");
            }
        }
    };

    return (
        <div className="main">
          <h1>Chat</h1>
          <div className="chat-container">
            {messages && messages.map((message, index) => (
              <div className="message" key={index}>
                {message.text}
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
