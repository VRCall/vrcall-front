import React, { useState, useEffect, useRef } from "react";
import {
  sendMessage,
  getMessages,
  Message,
  getCurrentUser,
} from "../../services/chat";
import { useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import { checkFriendship } from "../../services/checkFriendship";
import "./indexChat.scss";
import { getProfile, Profile } from "../../services/getProfile";

const socket = io.connect(`${import.meta.env.VITE_API_URL}`);

export default function ChatFriend() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentUser, setCurrentUser] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [sender, setSender] = useState<Profile>();

  console.log(messages);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await checkFriendship(id!);
        await loadMessages();
        getUser();
        socket.emit("join-chat", id);
        socket.on("receiveMessage", (data: any) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.text, id: id!, senderName: data.senderName },
          ]);
        });
      } catch (error) {
        navigate("/");
        console.error("Error checking friendship:", error);
        setError("Error checking friendship");
      }
    };
    fetchData();

    const fetchProfile = async () => {
      await getProfile(id!).then((data) => {
        setSender(data);
      });
    };
    fetchProfile();

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
    setCurrentUser(user.user);
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
          roomId: id,
        });

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: newMessage, id: id!, senderName: currentUser.pseudo },
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
      <div className="chat-container" ref={chatContainerRef}>
        {messages &&
          messages.map((message, index) => (
            <>
              <div className="message" key={index}>
                <img
                  className="petitePP"
                  src="../../../public/default.png"
                  // src={friend.img}
                />
                <div className="container">
                  <b>{message.senderName}</b>
                  <span
                    style={{
                      color: "grey",
                      wordBreak: "break-word",
                    }}
                  >
                    {message.text}
                  </span>
                </div>
              </div>
            </>
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
