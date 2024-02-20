import { Routes, Route } from 'react-router-dom';

import AuthLandingPage from './pages/AuthLandingPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';

import axios from 'axios';
import './App.css';

axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLandingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}
export default App;