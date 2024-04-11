import { Socket, io } from "socket.io-client";
import { getProfile } from "../services/getProfile";
import { toast } from "react-toastify";

const socket: Socket = io(`${import.meta.env.VITE_API_URL}`);

export const notifications = () => {
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
					case "message":
						notif();
						break;

					case "friend-request":
						notif();
						break;

					case "call":
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

					default:
						break;
				}
			});
		});
	} catch (e) {
		console.error("Error getting profile:", e);
	}
};
