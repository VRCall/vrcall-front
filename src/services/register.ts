import axios, { AxiosResponse } from "axios";

export interface RegisterData {
	pseudo: string;
	email: string;
	password: string;
	confirmPassword: string;
	profilePicture: File | null;
}

export const registerUser = async (data: RegisterData) => {
	const formData = new FormData();

	formData.append("pseudo", data.pseudo);
	formData.append("email", data.email);
	formData.append("password", data.password);
	formData.append("confirmPassword", data.confirmPassword);

	if (data.profilePicture) {
		formData.append(
			"profilePicture",
			data.profilePicture!,
			data.profilePicture?.name
		);
	} else {
		formData.append("profilePicture", new Blob());
	}

	let result;

	await axios
		.post(`${import.meta.env.VITE_API_URL}/users/signup`, formData)
		.then((response: AxiosResponse) => {
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
