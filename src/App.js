import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthLandingPage from './pages/AuthLandingPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLandingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  )
}
export default App;