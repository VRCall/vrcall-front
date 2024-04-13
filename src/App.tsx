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
import { socketNotifications } from "./utils/socketNotifications";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";
import Verify from "./pages/Verify";

const socket = io(`${import.meta.env.VITE_API_URL}`);

function App() {
	return (
		<BrowserRouter>
			<ToastContainer />
			<AuthGuard>
				<Routes>
					<Route path="verify/:id" element={<Verify />} />
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
				</Routes>
			</AuthGuard>
		</BrowserRouter>
	);
}

function CustomLayout() {
	socketNotifications(socket);
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
