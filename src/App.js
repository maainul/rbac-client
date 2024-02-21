import axios from 'axios';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import MyRoutes from './MyRoutes';

axios.defaults.withCredentials = true

function App() {
  return (
    <AuthContextProvider>
      <MyRoutes />
    </AuthContextProvider>
  )
}
export default App;
