import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.scss";
import AuthGuard from "./components/guards/AuthGuard";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import NavBar from "./components/navBar/NavBar";
import Requests from "./pages/Requests";
import Profile from "./pages/Profile";
import Call from "./pages/Call";
import Three from "./pages/Three";
import { notifications } from "./utils/notification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";
import MapMaker from "./pages/MapMaker";

const socket = io(`${import.meta.env.VITE_API_URL}`);

function App() {
	return (
		<BrowserRouter>
			<AuthGuard>
				<Routes>
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
					<Route path="*" element={<CustomLayout />} />
					<Route
						path="call/:roomId"
						element={<Call socket={socket} />}
					/>
					<Route
						path="three/:roomId"
						element={<Three socket={socket} />}
					/>
					<Route path="map-maker" element={<MapMaker />} />
				</Routes>
			</AuthGuard>
		</BrowserRouter>
	);
}

function CustomLayout() {
	notifications(socket);
	return (
		<div className="layout">
			<ToastContainer />
			<NavBar />
			<div className="routes">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Home />} />
					<Route
						path="/friendship/:id"
						element={<Chat socket={socket} />}
					/>
					<Route
						path="/friendships/requests"
						element={<Requests socket={socket} />}
					/>
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
