"use client";

import { useState } from "react";
import type { Screen, UserType } from "../MuvyApp";

interface Props {
  navigate: (s: Screen) => void;
  setUserType: (t: UserType) => void;
}

export default function LoginScreen({ navigate, setUserType }: Props) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"rider" | "driver">("rider");

  const handleLogin = () => {
    setUserType(mode);
    navigate(mode === "rider" ? "home" : "driverHome");
  };

  return (
    <div className="flex flex-col h-full bg-white overflow-y-auto">
      {/* Header */}
      <div className="bg-gradient-to-b from-orange-500 to-orange-600 px-6 pt-6 pb-10 relative overflow-hidden">
        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-orange-400 opacity-30" />
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow">
            <svg viewBox="0 0 64 64" className="w-7 h-7" fill="none">
              <ellipse cx="16" cy="46" rx="10" ry="10" stroke="#f97316" strokeWidth="3.5" fill="none" />
              <ellipse cx="48" cy="46" rx="10" ry="10" stroke="#f97316" strokeWidth="3.5" fill="none" />
              <ellipse cx="16" cy="46" rx="4" ry="4" fill="#f97316" />
              <ellipse cx="48" cy="46" rx="4" ry="4" fill="#f97316" />
              <path d="M16 46 L26 30 L38 30 L48 46" stroke="#f97316" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="36" cy="16" r="5" fill="#f97316" />
              <path d="M34 21 L34 30" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-white text-2xl font-black tracking-tight">muvy</span>
        </div>
        <h2 className="text-white text-2xl font-bold mt-4 relative z-10">¡Bienvenido!</h2>
        <p className="text-orange-100 text-sm mt-1 relative z-10">Inicia sesión para continuar</p>
      </div>

      {/* Mode toggle */}
      <div className="mx-6 -mt-5 bg-white rounded-2xl shadow-lg p-1 flex border border-gray-100 z-10 relative">
        <button
          onClick={() => setMode("rider")}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            mode === "rider"
              ? "bg-orange-500 text-white shadow-sm"
              : "text-gray-500"
          }`}
        >
          Soy Pasajero
        </button>
        <button
          onClick={() => setMode("driver")}
          className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            mode === "driver"
              ? "bg-orange-500 text-white shadow-sm"
              : "text-gray-500"
          }`}
        >
          Soy Mototaxista
        </button>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 pt-6 flex flex-col gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
            Teléfono
          </label>
          <div className="flex items-center border-2 border-gray-200 rounded-2xl px-4 gap-3 focus-within:border-orange-400 transition-colors">
            <span className="text-gray-400 text-sm">🇨🇴 +57</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="300 000 0000"
              className="flex-1 py-3.5 text-sm outline-none bg-transparent text-gray-800 placeholder-gray-300"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">
            Contraseña
          </label>
          <div className="flex items-center border-2 border-gray-200 rounded-2xl px-4 gap-3 focus-within:border-orange-400 transition-colors">
            <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="flex-1 py-3.5 text-sm outline-none bg-transparent text-gray-800 placeholder-gray-300"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button className="text-orange-500 text-xs font-semibold">¿Olvidaste tu contraseña?</button>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-200 active:scale-95 transition-transform mt-2"
        >
          Ingresar
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-gray-400 text-xs">o continúa con</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Social login */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-100 py-3 rounded-2xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-100 py-3 rounded-2xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-auto pb-6">
          ¿No tienes cuenta?{" "}
          <button
            onClick={() => navigate("register")}
            className="text-orange-500 font-semibold"
          >
            Regístrate gratis
          </button>
        </p>
      </div>
    </div>
  );
}
