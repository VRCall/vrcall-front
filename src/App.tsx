import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import './App.scss'
import AuthGuard from './components/guards/AuthGuard'
import Home from './pages/Home'

function App() {
  
  return (
    <BrowserRouter>
      <AuthGuard>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="" element={<Home />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  )
}

export default App
