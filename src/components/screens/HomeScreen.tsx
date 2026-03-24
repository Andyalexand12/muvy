"use client";

import { useState } from "react";
import type { Screen, UserType } from "../MuvyApp";
import MapView from "../MapView";

interface Props {
  navigate: (s: Screen) => void;
  userType: UserType;
}

export default function HomeScreen({ navigate, userType }: Props) {
  const [destination, setDestination] = useState("");

  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      {/* Map fills full screen */}
      <div className="absolute inset-0">
        <MapView />
      </div>

      {/* Top bar */}
      <div className="relative z-10 px-4 pt-3 flex items-center gap-3">
        <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
          <div className="flex flex-col gap-1 w-4">
            <div className="h-0.5 bg-gray-700 rounded" />
            <div className="h-0.5 bg-gray-700 rounded w-3" />
            <div className="h-0.5 bg-gray-700 rounded" />
          </div>
        </button>
        <div className="flex-1 bg-white rounded-2xl shadow-md px-4 py-2.5 flex items-center gap-2">
          <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-800 font-medium">Mi ubicación actual</span>
        </div>
        <div className="w-10 h-10 bg-orange-500 rounded-full shadow-md flex items-center justify-center font-bold text-white text-sm">
          JD
        </div>
      </div>

      {/* Promo banner */}
      <div className="relative z-10 mx-4 mt-3">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-3 flex items-center gap-3 shadow-lg">
          <div className="text-2xl">🎉</div>
          <div className="flex-1">
            <p className="text-white font-bold text-xs">¡Viaje gratis!</p>
            <p className="text-orange-100 text-xs">Tu primer viaje con Muvy es 100% gratis</p>
          </div>
          <button className="bg-white text-orange-500 text-xs font-bold px-3 py-1.5 rounded-xl">
            Usar
          </button>
        </div>
      </div>

      {/* Bottom sheet */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-white rounded-t-3xl shadow-2xl p-5 pb-6">
          <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4" />

          <h3 className="text-lg font-bold text-gray-800 mb-1">¿A dónde vas?</h3>
          <p className="text-xs text-gray-400 mb-3">Tarifas económicas, negocia tu precio</p>

          {/* Search box */}
          <button
            onClick={() => navigate("request")}
            className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3.5 flex items-center gap-3 text-left mb-4 hover:border-orange-300 transition-colors"
          >
            <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Buscar destino</p>
              <p className="text-xs text-gray-400">¿Adónde necesitas ir?</p>
            </div>
          </button>

          {/* Quick destinations */}
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Frecuentes</p>
          <div className="flex flex-col gap-2">
            {[
              { icon: "🏠", label: "Casa", sub: "Calle 45 #12-30", price: "$3.500" },
              { icon: "💼", label: "Trabajo", sub: "Av. El Dorado #90", price: "$5.000" },
              { icon: "🛒", label: "Mercado", sub: "Centro Comercial", price: "$2.500" },
            ].map((dest) => (
              <button
                key={dest.label}
                onClick={() => navigate("request")}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center text-base flex-shrink-0">
                  {dest.icon}
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-semibold text-gray-700">{dest.label}</p>
                  <p className="text-xs text-gray-400">{dest.sub}</p>
                </div>
                <span className="text-xs font-bold text-orange-500">{dest.price}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
