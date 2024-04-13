import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface AuthGuardProps {
	children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
	const navigate = useNavigate();
	const location = useLocation();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const checkAuth = () => {
		// Check if current location is login or signup
		const isLoginPage = location.pathname === "/login";
		const isRegisterPage = location.pathname === "/register";
		const isVerifyPage = location.pathname.startsWith("/verify/");

		const hasToken = !!localStorage.getItem("token");

		if (!hasToken && !isLoginPage && !isRegisterPage) {
			if (isVerifyPage && location.pathname.split("/")[2] !== "") {
				setIsLoading(false);
			} else {
				navigate("/login");
				setIsLoading(false);
			}
		}

		const authToken = localStorage.getItem("token") || "";

		axios
			.post(
				`${import.meta.env.VITE_API_URL}/users/auth`,
				{},
				{
					headers: {
						Authorization: `Bearer ${authToken}`
					}
				}
			)
			.then((response) => {
				if (response.data && (isLoginPage || isRegisterPage)) {
					navigate("/");
				} else if (!response.data && !isLoginPage && !isRegisterPage) {
					navigate("/login");
				}
				setIsLoading(false);
			});
	};

	useEffect(() => {
		checkAuth();
	}, [navigate]);

	return <>{isLoading ? <p>Loading...</p> : children}</>;
}
