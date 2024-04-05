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

	let r;

	await axios
		.post(`${import.meta.env.VITE_API_URL}/users/login`, jsonData, {
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then((response: AxiosResponse) => {
			localStorage.setItem("token", response.data.token);
			r = response.status;
		});

	console.log(r);

	return r;
};
