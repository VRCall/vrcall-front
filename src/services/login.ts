import axios, { AxiosResponse } from "axios";

export interface LoginData {
	email: string;
	password: string;
}

export const loginUser = async (data: LoginData) => {
	const jsonData = JSON.stringify({
		email: data.email,
		password: data.password
	});

	let result;

	await axios
		.post(`${import.meta.env.VITE_API_URL}/users/login`, jsonData, {
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then((response: AxiosResponse) => {
			localStorage.setItem("token", response.data.token);
			result = {
				message: response.data.message,
				status: response.status
			};
		})
		.catch((error) => {
			console.log(error);
			result = {
				message: error.response.data.message,
				status: error.response.status
			};
		});

	return result;
};
