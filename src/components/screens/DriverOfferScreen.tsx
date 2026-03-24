"use client";

import { useState, useEffect } from "react";
import type { Screen } from "../MuvyApp";
import MapView from "../MapView";

interface Props {
  navigate: (s: Screen) => void;
}

export default function DriverOfferScreen({ navigate }: Props) {
  const [timer, setTimer] = useState(20);
  const [counterOffer, setCounterOffer] = useState("");
  const [phase, setPhase] = useState<"offer" | "accepted" | "countered">("offer");
  const passengerOffer = 4000;

  useEffect(() => {
    if (phase !== "offer") return;
    if (timer <= 0) {
      navigate("driverHome");
      return;
    }
    const t = setInterval(() => setTimer((p) => p - 1), 1000);
    return () => clearInterval(t);
  }, [timer, phase, navigate]);

  const handleAccept = () => {
    setPhase("accepted");
    setTimeout(() => navigate("driverHome"), 2000);
  };

  const handleCounter = () => {
    if (!counterOffer) return;
    setPhase("countered");
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      <div className="absolute inset-0">
        <MapView />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

      {/* Timer */}
      {phase === "offer" && (
        <div className="absolute top-4 right-4 z-20">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg shadow-lg ${
              timer > 10 ? "bg-white text-gray-800" : "bg-red-500 text-white"
            }`}
          >
            {timer}
          </div>
        </div>
      )}

      {/* New request label */}
      {phase === "offer" && (
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-orange-500 text-white px-3 py-1.5 rounded-xl font-bold text-xs shadow-lg flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Nueva solicitud
          </div>
        </div>
      )}

      {/* Bottom card */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white rounded-t-3xl shadow-2xl">
        {phase === "offer" && (
          <div className="p-5">
            <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4" />

            {/* Passenger info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-base">
                JD
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-800">Juan Diego P.</p>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className={`w-3 h-3 fill-current ${s <= 4 ? "text-yellow-400" : "text-gray-200"}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-400 ml-1">4.6 · Pasajero frecuente</span>
                </div>
              </div>
              {/* Offer price */}
              <div className="text-right">
                <p className="text-xs text-gray-400">Ofrece</p>
                <p className="text-3xl font-black text-orange-500">${passengerOffer.toLocaleString()}</p>
              </div>
            </div>

            {/* Route info */}
            <div className="bg-gray-50 rounded-2xl p-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-orange-500" />
                  <div className="w-px h-5 bg-gray-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-gray-700">Mi ubicación actual</p>
                  <p className="text-xs font-medium text-gray-700 mt-1.5">Centro Comercial Éxito</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">2.3 km</p>
                  <p className="text-xs text-gray-400 mt-1.5">~12 min</p>
                </div>
              </div>
            </div>

            {/* Progress bar for timer */}
            <div className="w-full bg-gray-100 rounded-full h-1.5 mb-4">
              <div
                className={`h-1.5 rounded-full transition-all ${timer > 10 ? "bg-orange-500" : "bg-red-500"}`}
                style={{ width: `${(timer / 20) * 100}%` }}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => navigate("driverHome")}
                className="flex-1 border-2 border-gray-200 text-gray-600 py-3.5 rounded-2xl font-semibold text-sm"
              >
                Rechazar
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 bg-orange-500 text-white py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-orange-200"
              >
                Aceptar ${passengerOffer.toLocaleString()}
              </button>
            </div>

            {/* Counter offer */}
            <div className="flex items-center gap-2 border-2 border-gray-200 rounded-2xl px-4 focus-within:border-orange-400 transition-colors">
              <span className="text-gray-400 text-sm">$</span>
              <input
                type="number"
                value={counterOffer}
                onChange={(e) => setCounterOffer(e.target.value)}
                placeholder="Contra-ofertar precio"
                className="flex-1 py-3 text-sm outline-none bg-transparent text-gray-700"
              />
              <button
                onClick={handleCounter}
                className="text-orange-500 font-semibold text-sm"
              >
                Enviar
              </button>
            </div>
          </div>
        )}

        {phase === "accepted" && (
          <div className="p-5 flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl">
              ✅
            </div>
            <h3 className="text-xl font-bold text-gray-800">¡Viaje aceptado!</h3>
            <p className="text-sm text-gray-400 text-center">Dirígete al punto de recogida del pasajero</p>
            <div className="w-full bg-orange-50 rounded-2xl p-3 text-center">
              <p className="text-3xl font-black text-orange-500">${passengerOffer.toLocaleString()}</p>
              <p className="text-xs text-orange-400">Precio acordado</p>
            </div>
          </div>
        )}

        {phase === "countered" && (
          <div className="p-5 flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-3xl">
              🤝
            </div>
            <h3 className="text-xl font-bold text-gray-800">Contra-oferta enviada</h3>
            <p className="text-sm text-gray-400 text-center">
              Ofreciste <span className="font-bold text-orange-500">${parseInt(counterOffer).toLocaleString()}</span>. Esperando respuesta del pasajero...
            </p>
            <div className="flex gap-2 w-full">
              <button onClick={() => navigate("driverHome")} className="flex-1 border-2 border-gray-200 text-gray-600 py-3 rounded-2xl font-semibold text-sm">
                Cancelar
              </button>
              <button onClick={handleAccept} className="flex-1 bg-orange-500 text-white py-3 rounded-2xl font-bold text-sm">
                Aceptar $4.000 igual
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
