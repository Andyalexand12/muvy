"use client";

import { useState } from "react";
import type { Screen } from "../MuvyApp";
import MapView from "../MapView";

interface Props {
  navigate: (s: Screen) => void;
}

export default function DriverHomeScreen({ navigate }: Props) {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      <div className="absolute inset-0">
        <MapView />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

      {/* Top bar */}
      <div className="relative z-10 px-4 pt-3 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur rounded-2xl px-3 py-2 shadow-md">
          <svg viewBox="0 0 64 64" className="w-5 h-5" fill="none">
            <ellipse cx="16" cy="46" rx="10" ry="10" stroke="#f97316" strokeWidth="3" fill="none" />
            <ellipse cx="48" cy="46" rx="10" ry="10" stroke="#f97316" strokeWidth="3" fill="none" />
            <ellipse cx="16" cy="46" rx="4" ry="4" fill="#f97316" />
            <ellipse cx="48" cy="46" rx="4" ry="4" fill="#f97316" />
            <path d="M16 46 L26 30 L38 30 L48 46" stroke="#f97316" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="36" cy="16" r="5" fill="#f97316" />
            <path d="M34 21 L34 30" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="font-black text-gray-800 text-sm">muvy</span>
          <span className="text-xs bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded-lg font-semibold">Conductor</span>
        </div>

        <div className="flex items-center gap-2 bg-white/90 backdrop-blur rounded-2xl px-3 py-2 shadow-md">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xs">
            CM
          </div>
          <div>
            <p className="text-xs font-bold text-gray-800">Carlos M.</p>
            <div className="flex items-center gap-1">
              <svg className="w-2.5 h-2.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs text-gray-500">4.9</span>
            </div>
          </div>
        </div>
      </div>

      {/* Earnings today */}
      <div className="relative z-10 mx-4 mt-3">
        <div className="bg-white/90 backdrop-blur rounded-2xl p-3 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">Ganancias hoy</p>
              <p className="text-2xl font-black text-gray-800">$42.500</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400">Viajes</p>
              <p className="text-2xl font-black text-orange-500">9</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400">Horas</p>
              <p className="text-2xl font-black text-gray-800">5.5h</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400">Calif.</p>
              <div className="flex items-center gap-0.5">
                <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="text-base font-black text-gray-800">4.9</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom panel */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white rounded-t-3xl p-5 shadow-2xl">
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4" />

        {/* Online toggle */}
        <div className="flex items-center gap-4 mb-5">
          <div className="flex-1">
            <p className="font-bold text-gray-800 text-base">
              {isOnline ? "En línea" : "Desconectado"}
            </p>
            <p className="text-xs text-gray-400">
              {isOnline
                ? "Recibiendo solicitudes de viaje"
                : "Actívate para recibir solicitudes"}
            </p>
          </div>
          <button
            onClick={() => {
              setIsOnline(!isOnline);
              if (!isOnline) setTimeout(() => navigate("driverOffer"), 1500);
            }}
            className={`w-16 h-9 rounded-full transition-all relative ${
              isOnline ? "bg-orange-500" : "bg-gray-200"
            }`}
          >
            <div
              className={`w-7 h-7 bg-white rounded-full shadow-md absolute top-1 transition-all ${
                isOnline ? "left-8" : "left-1"
              }`}
            />
          </button>
        </div>

        {isOnline && (
          <div className="flex items-center gap-2 bg-green-50 rounded-2xl p-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-sm text-green-700 font-medium">Buscando solicitudes cerca de ti...</p>
          </div>
        )}

        {/* Stats row */}
        <div className="flex gap-2">
          {[
            { label: "Esta semana", value: "$285.000", icon: "💰" },
            { label: "Aceptación", value: "94%", icon: "✅" },
            { label: "Este mes", value: "$1.2M", icon: "📈" },
          ].map((s) => (
            <div key={s.label} className="flex-1 bg-gray-50 rounded-xl p-2 text-center">
              <p className="text-base">{s.icon}</p>
              <p className="text-xs font-bold text-gray-700 mt-0.5">{s.value}</p>
              <p className="text-xs text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("login")}
          className="w-full mt-4 border-2 border-gray-100 text-gray-400 py-2.5 rounded-2xl text-sm font-medium"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
