import axios, { AxiosResponse } from "axios";

export const verifyAccount = async (id: string) => {
	let result = false;

	await axios
		.patch(`${import.meta.env.VITE_API_URL}/users/verify/${id}`)
		.then((response: AxiosResponse) => {
			if (response.status === 200) {
				result = true;
			} else {
				result = false;
			}
		})
		.catch((error) => {
			console.error(error);
		});

	return result;
};
