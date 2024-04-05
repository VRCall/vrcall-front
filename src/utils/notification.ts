import { Socket } from "socket.io-client";
import { getProfile } from "../services/getProfile";

export const notifications = (socket: Socket) => {
  try {
    getProfile().then((data) => {
      socket.emit("join-notification", data!.pseudo);
      socket.on("send-notification", (data) => {
        console.log("Notification sent");
        console.log(data);
  
        switch (data.type) {
          case "message":
            console.log("Message notification", data.receiverName);
            break;
  
          default:
            break;
        }
      });
    });
  } catch (e) {
    console.error("Error getting profile:", e);
  }
  
};
