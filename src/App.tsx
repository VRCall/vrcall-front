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
import Call from './pages/Call'

function App() {
  return (
    <BrowserRouter>
      <AuthGuard>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<CustomLayout />} />
          <Route path="call/:roomId" element={<Call />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  );
}

function CustomLayout() {
  return (
    <div className="layout">
      <NavBar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/friendship/:id" element={<Chat />} />
          <Route path="/friendships/requests" element={<Requests />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
