import React, { useState } from "react";
import { LoginData, loginUser } from "../../services/login";
import "./index.scss";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
	const [formData, setFormData] = useState<LoginData>({
		email: "",
		password: ""
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const response = await loginUser(formData);

		if (response === 200) {
			navigate("/");
		}
	};

	return (
		<div className="main">
			<div className="main-login">
				<form className="login-form" onSubmit={handleSubmit}>
					Login
					<div className="textual-input-div">
						<FaEnvelope />
						<input
							placeholder="Email address"
							className="textual-input"
							required
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
						/>
					</div>
					<div className="textual-input-div">
						<FaLock />
						<input
							placeholder="Password"
							className="textual-input"
							required
							type="password"
							id="password"
							name="password"
							value={formData.password}
							onChange={handleInputChange}
						/>
					</div>
					<span>
						Don't have an account ?{" "}
						<Link to={"/register"}>Sign Up</Link>
					</span>
					<button>Submit</button>
				</form>
			</div>
		</div>
	);
}
