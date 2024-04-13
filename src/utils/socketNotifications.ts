import { Socket } from "socket.io-client";
import { getProfile } from "../services/getProfile";
import { toast } from "react-toastify";

export const socketNotifications = (socket: Socket) => {
	try {
		getProfile().then((data) => {
			socket.emit("join-notification", data!.pseudo);
			socket.on("send-notification", (data) => {
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
					case "message": {
						const location = window.location.pathname.split("/");
						if (!data.chatId) break;
						if (location[2] === data.chatId) {
							break;
						}
						toast(data.text, {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "dark",
							onClick: () => {
								window.location.href = `/friendship/${data.chatId}`;
							}
						});
						break;
					}
					case "friend-request":
						notif();
						break;

					case "call": {
						if (!data.path) break;
						toast(data.text, {
							position: "top-right",
							autoClose: 5000,
							hideProgressBar: false,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
							progress: undefined,
							theme: "dark",
							onClick: () => {
								window.open(data.path);
							}
						});
						break;
					}

					default:
						break;
				}
			});
		});
	} catch (e) {
		console.error("Error getting profile:", e);
	}
};
