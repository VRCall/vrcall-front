import { Socket } from "socket.io-client";
import { getProfile } from "../services/getProfile";
import { toast } from "react-toastify";

export const notifications = (socket: Socket) => {
	try {
		getProfile().then((data) => {
			socket.emit("join-notification", data!.pseudo);
			socket.on("send-notification", (data) => {
				console.log("Notification sent");
				console.log(data);

				const notif = () =>
					toast(data.text, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark"
					});

				switch (data.type) {
					case "message":
						notif();
						break;

					case "friend-request":
						notif();
						break;

					case "call":
						console.log("Call notification", data);
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
