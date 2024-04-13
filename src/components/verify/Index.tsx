import { useNavigate, useParams } from "react-router-dom";
import { verifyAccount } from "../../services/verifyAccount";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { createNotification } from "../../utils/createNotification";

export default function Index() {
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			const checkAccount = async () => {
				const res = await verifyAccount(id.toString());
				if (res) {
					createNotification(
						"Account verified, you can now login",
						"success"
					);
					navigate("/login");
				} else {
					createNotification(
						"Failed to verify account, please try again",
						"error"
					);
					navigate("/register");
				}
			};
			checkAccount();
		} else {
			createNotification(
				"Failed to verify account, please try again",
				"error"
			);
			navigate("/register");
		}
	}, [id, navigate]);

	return (
		<>
			<p>Verifying account...</p>
		</>
	);
}
