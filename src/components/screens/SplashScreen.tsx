"use client";

import { useEffect } from "react";
import type { Screen } from "../MuvyApp";

interface Props {
  navigate: (s: Screen) => void;
}

export default function SplashScreen({ navigate }: Props) {
  useEffect(() => {
    const t = setTimeout(() => navigate("login"), 2500);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-orange-500 to-orange-700 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-orange-400 opacity-30" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-orange-600 opacity-30" />

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Moto icon */}
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
          <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
            {/* Motorcycle simplified */}
            <ellipse cx="16" cy="46" rx="10" ry="10" stroke="#f97316" strokeWidth="3" fill="none" />
            <ellipse cx="48" cy="46" rx="10" ry="10" stroke="#f97316" strokeWidth="3" fill="none" />
            <ellipse cx="16" cy="46" rx="4" ry="4" fill="#f97316" />
            <ellipse cx="48" cy="46" rx="4" ry="4" fill="#f97316" />
            {/* Body */}
            <path d="M16 46 L26 30 L38 30 L48 46" stroke="#f97316" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M30 30 L34 20 L44 22 L48 30" stroke="#f97316" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Rider */}
            <circle cx="36" cy="16" r="5" fill="#f97316" />
            <path d="M34 21 L34 30" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="text-center">
          <h1 className="text-6xl font-black text-white tracking-tight">muvy</h1>
          <p className="text-orange-100 text-sm font-medium mt-1 tracking-widest uppercase">
            Mototaxi económico
          </p>
        </div>

        {/* Tagline */}
        <p className="text-white/80 text-center text-sm max-w-xs leading-relaxed px-4">
          Negocia tu precio. Llega rápido. Paga poco.
        </p>

        {/* Loading dots */}
        <div className="flex gap-2 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
