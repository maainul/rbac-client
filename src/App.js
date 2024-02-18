import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthLandingPage from './pages/AuthLandingPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLandingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}
export default App;