import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import './App.scss'
import AuthGuard from './components/guards/AuthGuard'
import Chat from './pages/Chat'

function App() {
  
  return (
    <BrowserRouter>
      <AuthGuard>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="" element={<Home />} />
          <Route path="/friendship/:id" element={<Chat />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  )
}

export default App