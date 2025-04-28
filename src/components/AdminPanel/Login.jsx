import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/v1/login", {
          email,
          password,
        });
  
        console.log("Respuesta:", response.data);
        localStorage.setItem("token", response.data.access_token);
        navigate("/dir/dashboard/endpoint");
      } catch (error) {
        console.error("Error de login:", error.response ? error.response.data : error.message);
        alert("Error al iniciar sesión. Verifica tus credenciales.");
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className="relative min-h-screen bg-black">
        {/* Contenido principal */}
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center relative pb-24">
          <div className="absolute inset-0 bg-black/70 z-0" />
          <Card className="relative z-10 w-full max-w-md bg-[#000000] text-white shadow-2xl border border-gray-700">
            <CardHeader className="flex flex-row items-center justify-center gap-4">
              <img src="/logo.png" alt="logo" className="w-10 h-10" />
              <p className="text-gray-400 text-sm font-bold">Make Moneeey with M€</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6 mt-4">
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white border-gray-600 text-black placeholder-gray-400"
                  />
                  <Input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-white border-gray-600 text-black placeholder-gray-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-3 rounded transition"
                  disabled={loading}
                >
                  {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Ingresar"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
  
        {/* Footer fijo */}
        <footer className="absolute bottom-0 left-0 w-full text-center text-white p-4 text-xs">
          <p>© Since 2022 Making Moneeey with M€€€€.</p>
          <p className="mt-1 text-gray-400">Desarrollado por samM</p>
        </footer>
      </div>
    );
  }
  
