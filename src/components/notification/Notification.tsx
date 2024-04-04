import React, { useState, useEffect } from 'react';
import { fetchNotifications } from "../../services/notification"; 

interface Notification {
  text: string; 
}

const Notification = ({ text }: Notification) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotificationsData = async () => {
      try {
        const fetchedNotifications = await fetchNotifications();
        setNotifications(fetchedNotifications);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotificationsData();
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            <strong>{notification.sender.pseudo}</strong>: {text} 
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
