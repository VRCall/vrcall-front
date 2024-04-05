import axios from "axios";

export interface RegisterData {
	pseudo: string;
	email: string;
	password: string;
	confirmPassword: string;
	profilePicture: File | null;
}

export const registerUser = async (data: RegisterData) => {
	const formData = new FormData();
	console.log(data);

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

	const jsonData = JSON.stringify({
		pseudo: data.pseudo,
		email: data.email,
		password: data.password,
		confirmPassword: data.confirmPassword
	});

	// await fetch(`${import.meta.env.VITE_API_URL}/users/signup`, {
	//     method: "POST",
	//     body: formData
	// })
	// .then((response) => response.json())
	// .then((result) => {
	//     console.log(result);
	// })

	return await axios.post(
		`${import.meta.env.VITE_API_URL}/users/signup`,
		formData
	);
};
