"use client";

import { useState } from "react";
import type { Screen } from "../MuvyApp";
import MapView from "../MapView";

interface Props {
  navigate: (s: Screen) => void;
}

export default function ActiveRideScreen({ navigate }: Props) {
  const [rating, setRating] = useState(0);
  const [phase, setPhase] = useState<"riding" | "arrived" | "rating">("riding");

  const handleArrived = () => setPhase("arrived");
  const handleRate = () => navigate("home");

  return (
    <div className="flex flex-col h-full bg-gray-50 relative">
      <div className="absolute inset-0">
        <MapView />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

      {/* SOS button */}
      <div className="absolute top-4 right-4 z-20">
        <button className="bg-red-500 text-white px-3 py-1.5 rounded-xl font-bold text-xs shadow-lg">
          SOS
        </button>
      </div>

      {/* Bottom panel */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-white rounded-t-3xl p-5 shadow-2xl">
        {phase === "riding" && (
          <>
            {/* Driver card */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                CM
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-800 text-base">Carlos Martínez</p>
                <div className="flex items-center gap-1 mt-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className={`w-3 h-3 fill-current ${s <= 5 ? "text-yellow-400" : "text-gray-200"}`} viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">4.9 · 1,243 viajes</span>
                </div>
                <p className="text-xs text-gray-400 mt-0.5">🏍️ Honda CB125 · <span className="font-semibold text-gray-600">ABC123</span></p>
              </div>
              {/* Contact icons */}
              <div className="flex gap-2">
                <button className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </button>
                <button className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Trip progress */}
            <div className="bg-orange-50 rounded-2xl p-3 mb-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-orange-700">En camino a tu destino</p>
                <p className="text-xs text-orange-500 font-bold">~8 min restantes</p>
              </div>
              <div className="w-full bg-orange-200 rounded-full h-1.5">
                <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: "45%" }} />
              </div>
              <div className="flex items-center justify-between mt-1.5">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-xs text-gray-500">Origen</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-xs text-gray-500">Éxito Centro</span>
                </div>
              </div>
            </div>

            {/* Trip info */}
            <div className="flex gap-3 mb-4">
              <div className="flex-1 bg-gray-50 rounded-xl p-2.5 text-center">
                <p className="text-base font-bold text-gray-800">2.3 km</p>
                <p className="text-xs text-gray-400">distancia</p>
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-2.5 text-center">
                <p className="text-base font-bold text-orange-500">$4.000</p>
                <p className="text-xs text-gray-400">precio acordado</p>
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-2.5 text-center">
                <p className="text-base font-bold text-gray-800">Efectivo</p>
                <p className="text-xs text-gray-400">pago</p>
              </div>
            </div>

            <button
              onClick={handleArrived}
              className="w-full bg-green-500 text-white py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-green-100"
            >
              Simular llegada al destino
            </button>
          </>
        )}

        {phase === "arrived" && (
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl">
              🎉
            </div>
            <h3 className="text-xl font-bold text-gray-800">¡Llegaste!</h3>
            <p className="text-sm text-gray-400 text-center">Has llegado a tu destino. Paga al conductor.</p>

            {/* Payment */}
            <div className="w-full bg-orange-50 rounded-2xl p-4 text-center">
              <p className="text-xs text-gray-400 mb-1">Total a pagar</p>
              <p className="text-4xl font-black text-orange-500">$4.000</p>
              <p className="text-xs text-orange-400 mt-1">Pago en efectivo</p>
            </div>

            <div className="flex items-center gap-2 bg-green-50 rounded-xl px-3 py-2 w-full">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <p className="text-xs text-green-600 font-medium">Precio negociado: ahorraste $500 vs tarifa sugerida</p>
            </div>

            <button
              onClick={() => setPhase("rating")}
              className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-200"
            >
              Confirmar pago y calificar
            </button>
          </div>
        )}

        {phase === "rating" && (
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl">
              CM
            </div>
            <h3 className="text-lg font-bold text-gray-800">¿Cómo estuvo Carlos?</h3>
            <p className="text-sm text-gray-400 text-center">Tu calificación ayuda a mejorar la comunidad Muvy</p>

            {/* Stars */}
            <div className="flex gap-3">
              {[1,2,3,4,5].map((s) => (
                <button key={s} onClick={() => setRating(s)}>
                  <svg
                    className={`w-10 h-10 transition-all ${s <= rating ? "text-yellow-400 scale-110" : "text-gray-200"} fill-current`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>

            {/* Rating labels */}
            <div className="flex gap-1 flex-wrap justify-center">
              {["Puntual", "Seguro", "Amable", "Conoce las rutas", "Recomendado"].map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={handleRate}
              disabled={rating === 0}
              className="w-full bg-orange-500 disabled:bg-gray-200 disabled:text-gray-400 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-200 transition-all"
            >
              Enviar calificación
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
