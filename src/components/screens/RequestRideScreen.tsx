"use client";

import { useState } from "react";
import type { Screen } from "../MuvyApp";
import MapView from "../MapView";

interface Props {
  navigate: (s: Screen) => void;
}

export default function RequestRideScreen({ navigate }: Props) {
  const [origin, setOrigin] = useState("Mi ubicación actual");
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState("2.00");

  const suggestedPrice = 3.00;
  const minPrice = 1.00;

  const recentPlaces = [
    { icon: "🛒", name: "Éxito Centro", address: "Av. 10 de Agosto", price: "2.00" },
    { icon: "🏥", name: "Hospital Metropolitano", address: "Av. Mariana de Jesús", price: "3.00" },
    { icon: "🎓", name: "Universidad Central", address: "Av. Venezuela", price: "2.50" },
    { icon: "🏦", name: "Banco del Pichincha", address: "Av. Amazonas", price: "1.50" },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-3 pb-3 border-b border-gray-100">
        <button
          onClick={() => navigate("home")}
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="font-bold text-gray-800 text-base">Pedir viaje</h2>
      </div>

      {/* Map preview */}
      <div className="h-40 relative flex-shrink-0">
        <MapView />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50" />
      </div>

      {/* Route input */}
      <div className="px-4 py-3 flex flex-col gap-2 flex-shrink-0">
        <div className="flex gap-3">
          <div className="flex flex-col items-center gap-1 pt-3">
            <div className="w-3 h-3 rounded-full border-2 border-orange-500 bg-white" />
            <div className="w-0.5 h-6 bg-gray-200 border-l border-dashed border-gray-300" />
            <div className="w-3 h-3 rounded-full bg-red-500" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="border-2 border-gray-200 rounded-2xl px-3 py-2.5 focus-within:border-orange-400 transition-colors">
              <p className="text-xs text-gray-400 mb-0.5">Origen</p>
              <input
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full text-sm font-medium text-gray-700 outline-none bg-transparent"
              />
            </div>
            <div className="border-2 border-gray-200 rounded-2xl px-3 py-2.5 focus-within:border-orange-400 transition-colors">
              <p className="text-xs text-gray-400 mb-0.5">Destino</p>
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="¿A dónde vas?"
                className="w-full text-sm font-medium text-gray-700 outline-none bg-transparent placeholder-gray-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-2 bg-gray-50 flex-shrink-0" />

      {/* Price suggestion */}
      <div className="px-4 py-3 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-bold text-gray-700">Tu oferta de precio</p>
          <span className="text-xs text-gray-400 bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium">
            Tarifa sugerida: ${suggestedPrice.toLocaleString()}
          </span>
        </div>

        {/* Price input */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl px-4 py-3 flex items-center gap-3">
          <span className="text-orange-500 font-bold text-lg">$</span>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="flex-1 text-2xl font-black text-orange-600 outline-none bg-transparent"
          />
          <span className="text-orange-400 text-sm font-medium">USD</span>
        </div>

        {/* Price range */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-400">Mínimo: ${minPrice.toFixed(2)}</span>
          <div className="flex gap-1">
            {[1, 2, 3, 5].map((p) => (
              <button
                key={p}
                onClick={() => setPrice(String(p))}
                className={`text-xs px-2 py-1 rounded-lg font-semibold transition-all ${
                  price === String(p)
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                ${p}.00
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-2 text-center">
          Los conductores pueden aceptar, rechazar o contra-ofertar tu precio
        </p>
      </div>

      {/* Recent places */}
      <div className="flex-1 overflow-y-auto px-4">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Lugares recientes</p>
        <div className="flex flex-col gap-1">
          {recentPlaces.map((p) => (
            <button
              key={p.name}
              onClick={() => setDestination(p.name)}
              className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${
                destination === p.name ? "bg-orange-50 border border-orange-200" : "hover:bg-gray-50"
              }`}
            >
              <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center text-base flex-shrink-0">
                {p.icon}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-gray-700">{p.name}</p>
                <p className="text-xs text-gray-400">{p.address}</p>
              </div>
              <span className="text-xs font-bold text-orange-500">~${p.price}</span>
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 py-4 border-t border-gray-100 flex-shrink-0">
        <button
          onClick={() => navigate("negotiate")}
          disabled={!destination}
          className="w-full bg-orange-500 disabled:bg-gray-200 disabled:text-gray-400 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-200 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Buscar conductores
        </button>
      </div>
    </div>
  );
}
