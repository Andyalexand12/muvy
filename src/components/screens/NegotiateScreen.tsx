"use client";

import { useState } from "react";
import type { Screen } from "../MuvyApp";

interface Props {
  navigate: (s: Screen) => void;
}

interface Offer {
  driverName: string;
  rating: string;
  trips: number;
  avatar: string;
  offeredPrice: number;
  eta: string;
  distance: string;
  status: "pending" | "accepted" | "countered";
}

export default function NegotiateScreen({ navigate }: Props) {
  const [myPrice] = useState(4000);
  const [offers, setOffers] = useState<Offer[]>([
    {
      driverName: "Carlos M.",
      rating: "4.9",
      trips: 1243,
      avatar: "CM",
      offeredPrice: 4500,
      eta: "3 min",
      distance: "400m",
      status: "countered",
    },
    {
      driverName: "Pedro R.",
      rating: "4.7",
      trips: 892,
      avatar: "PR",
      offeredPrice: 4000,
      eta: "5 min",
      distance: "700m",
      status: "accepted",
    },
    {
      driverName: "Luis V.",
      rating: "4.8",
      trips: 2105,
      avatar: "LV",
      offeredPrice: 3800,
      eta: "7 min",
      distance: "1.1km",
      status: "accepted",
    },
  ]);

  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);
  const [counterPrices, setCounterPrices] = useState<Record<number, string>>({});

  const handleAccept = (idx: number) => {
    setSelectedOffer(idx);
    setTimeout(() => navigate("driverSearch"), 1200);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 pt-3 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => navigate("request")}
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1">
            <h2 className="font-bold text-gray-800 text-base">Negociar precio</h2>
            <p className="text-xs text-gray-400">3 conductores respondieron</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-xs text-gray-400">Tu oferta</p>
            <p className="text-orange-500 font-black text-lg">${myPrice.toLocaleString()}</p>
          </div>
        </div>

        {/* Route */}
        <div className="bg-gray-50 rounded-2xl p-3 flex items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <div className="w-2 h-2 rounded-full border-2 border-orange-500" />
            <div className="w-px h-4 bg-gray-300 border-dashed" />
            <div className="w-2 h-2 rounded-full bg-red-500" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-500">Mi ubicación</p>
            <p className="text-xs text-gray-500 mt-1">Centro Comercial Éxito</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">2.3 km</p>
            <p className="text-xs text-gray-400">~12 min</p>
          </div>
        </div>
      </div>

      {/* Offers list */}
      <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
          Ofertas de conductores
        </p>

        {offers.map((offer, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl overflow-hidden shadow-sm border-2 transition-all ${
              selectedOffer === idx
                ? "border-green-400 shadow-green-100"
                : offer.status === "countered"
                ? "border-amber-200"
                : "border-transparent"
            }`}
          >
            <div className="p-4">
              {/* Driver info */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {offer.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-800">{offer.driverName}</p>
                    {offer.status === "countered" && (
                      <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                        Contra-oferta
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-semibold text-gray-600">{offer.rating}</span>
                    </div>
                    <span className="text-gray-300 text-xs">•</span>
                    <span className="text-xs text-gray-400">{offer.trips.toLocaleString()} viajes</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-2xl font-black ${
                    offer.offeredPrice <= myPrice ? "text-green-500" : "text-orange-500"
                  }`}>
                    ${offer.offeredPrice.toLocaleString()}
                  </p>
                  {offer.offeredPrice <= myPrice ? (
                    <p className="text-xs text-green-500 font-medium">Acepta tu precio</p>
                  ) : (
                    <p className="text-xs text-amber-500 font-medium">+${(offer.offeredPrice - myPrice).toLocaleString()}</p>
                  )}
                </div>
              </div>

              {/* ETA & distance */}
              <div className="flex gap-2 mb-3">
                <div className="flex-1 bg-gray-50 rounded-xl p-2 text-center">
                  <p className="text-lg font-bold text-gray-800">{offer.eta}</p>
                  <p className="text-xs text-gray-400">de llegada</p>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-2 text-center">
                  <p className="text-lg font-bold text-gray-800">{offer.distance}</p>
                  <p className="text-xs text-gray-400">distancia</p>
                </div>
              </div>

              {/* Actions */}
              {selectedOffer === idx ? (
                <div className="flex items-center justify-center gap-2 bg-green-50 rounded-xl py-3">
                  <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-green-600 font-semibold text-sm">Conectando con conductor...</span>
                </div>
              ) : (
                <div className="flex gap-2">
                  {offer.status === "countered" ? (
                    <>
                      <div className="flex-1 flex items-center border-2 border-gray-200 rounded-xl px-3 gap-1">
                        <span className="text-gray-400 text-sm">$</span>
                        <input
                          type="number"
                          value={counterPrices[idx] ?? ""}
                          onChange={(e) =>
                            setCounterPrices((prev) => ({
                              ...prev,
                              [idx]: e.target.value,
                            }))
                          }
                          placeholder="Ofrecer"
                          className="flex-1 py-2 text-sm outline-none bg-transparent text-gray-700"
                        />
                      </div>
                      <button
                        onClick={() => handleAccept(idx)}
                        className="flex-1 bg-orange-500 text-white py-2.5 rounded-xl font-bold text-sm"
                      >
                        Aceptar ${offer.offeredPrice.toLocaleString()}
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => navigate("request")}
                        className="flex-1 border-2 border-gray-200 text-gray-600 py-2.5 rounded-xl font-semibold text-sm"
                      >
                        Rechazar
                      </button>
                      <button
                        onClick={() => handleAccept(idx)}
                        className="flex-1 bg-orange-500 text-white py-2.5 rounded-xl font-bold text-sm"
                      >
                        Aceptar
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Info box */}
        <div className="bg-blue-50 rounded-2xl p-3 flex items-start gap-2">
          <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-xs text-blue-600 leading-relaxed">
            En Muvy tú decides el precio. Negocia con el conductor hasta llegar a un acuerdo. Las tarifas son las más bajas del mercado.
          </p>
        </div>
      </div>
    </div>
  );
}
