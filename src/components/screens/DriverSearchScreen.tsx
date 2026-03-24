"use client";

import { useEffect, useState } from "react";
import type { Screen } from "../MuvyApp";
import MapView from "../MapView";

interface Props {
  navigate: (s: Screen) => void;
}

export default function DriverSearchScreen({ navigate }: Props) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"connecting" | "confirmed">("connecting");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setPhase("confirmed");
          setTimeout(() => navigate("activeRide"), 1500);
          return 100;
        }
        return p + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      {/* Map fills background */}
      <div className="absolute inset-0">
        <MapView />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

      {/* Top info */}
      <div className="relative z-10 px-4 pt-4">
        <div className="bg-white rounded-2xl p-3 shadow-lg flex items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-orange-500" />
            <div className="w-px h-5 bg-gray-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">Origen → Destino</p>
            <p className="text-sm font-semibold text-gray-700">Mi ubicación → Éxito Centro</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">Precio acordado</p>
            <p className="text-orange-500 font-black text-base">$4.000</p>
          </div>
        </div>
      </div>

      {/* Bottom card */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white rounded-t-3xl p-5 shadow-2xl">
        {phase === "connecting" ? (
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 relative flex items-center justify-center">
              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full bg-orange-100 animate-ping opacity-75" />
              <div className="absolute inset-2 rounded-full bg-orange-200 animate-ping opacity-50" style={{ animationDelay: "0.3s" }} />
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg relative z-10">
                <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none">
                  <ellipse cx="16" cy="46" rx="10" ry="10" stroke="white" strokeWidth="3" fill="none" />
                  <ellipse cx="48" cy="46" rx="10" ry="10" stroke="white" strokeWidth="3" fill="none" />
                  <ellipse cx="16" cy="46" rx="4" ry="4" fill="white" />
                  <ellipse cx="48" cy="46" rx="4" ry="4" fill="white" />
                  <path d="M16 46 L26 30 L38 30 L48 46" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <circle cx="36" cy="16" r="5" fill="white" />
                  <path d="M34 21 L34 30" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800">Conectando con conductor</h3>
              <p className="text-sm text-gray-400 mt-1">Carlos M. está en camino hacia ti</p>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex w-full justify-between">
              <div className="text-center flex-1">
                <p className="text-lg font-bold text-gray-800">3 min</p>
                <p className="text-xs text-gray-400">Llegada estimada</p>
              </div>
              <div className="w-px bg-gray-100" />
              <div className="text-center flex-1">
                <p className="text-lg font-bold text-gray-800">400m</p>
                <p className="text-xs text-gray-400">Distancia</p>
              </div>
              <div className="w-px bg-gray-100" />
              <div className="text-center flex-1">
                <p className="text-lg font-bold text-orange-500">$4.000</p>
                <p className="text-xs text-gray-400">Precio</p>
              </div>
            </div>

            <button
              onClick={() => navigate("home")}
              className="w-full border-2 border-gray-200 text-gray-600 py-3 rounded-2xl font-semibold text-sm"
            >
              Cancelar viaje
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800">¡Conductor confirmado!</h3>
            <p className="text-sm text-gray-400">Carlos M. te está buscando</p>
          </div>
        )}
      </div>
    </div>
  );
}
