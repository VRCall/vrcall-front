import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import './App.scss'
import AuthGuard from './components/guards/AuthGuard'
import Home from './pages/Home'
import Chat from './pages/Chat'
import NavBar from './components/navBar/NavBar'

function App() {
  
  return (
    <BrowserRouter>
      <AuthGuard>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<CustomLayout />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  )
}

function CustomLayout() {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/friendship/:id" element={<Chat />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
