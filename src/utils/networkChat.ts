import { Client, Room } from "colyseus.js";

export default class Network {
	public client: Client;
	public room?: Room;

	constructor() {
		const endpoint =
			process.env.NODE_ENV === "production"
				? import.meta.env.VITE_SERVER_URL
				: `${import.meta.env.VITE_API_URL}`;
		this.client = new Client(endpoint);
	}

	async createOrJoin(chatId: string, userId: string) {
		this.room = await this.client.joinOrCreate(chatId, { userId });
	}
}
