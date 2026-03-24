"use client";

import { useState } from "react";
import type { Screen } from "../MuvyApp";

interface Props {
  navigate: (s: Screen) => void;
}

export default function RegisterScreen({ navigate }: Props) {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<"rider" | "driver">("rider");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [plate, setPlate] = useState("");
  const [agreed, setAgreed] = useState(false);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else navigate("login");
  };

  return (
    <div className="flex flex-col h-full bg-white overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 pt-4 pb-3 border-b border-gray-100">
        <button
          onClick={() => (step > 1 ? setStep(step - 1) : navigate("login"))}
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1">
          <h2 className="font-bold text-gray-800 text-lg">Crear cuenta</h2>
          <p className="text-xs text-gray-400">Paso {step} de 3</p>
        </div>
        {/* Steps */}
        <div className="flex gap-1.5">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-6 h-1.5 rounded-full transition-all ${
                s <= step ? "bg-orange-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 px-6 py-5 flex flex-col gap-5">
        {step === 1 && (
          <>
            <div>
              <h3 className="text-xl font-bold text-gray-800">¿Cómo quieres usar Muvy?</h3>
              <p className="text-gray-400 text-sm mt-1">Selecciona tu rol en la plataforma</p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => setRole("rider")}
                className={`p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${
                  role === "rider" ? "border-orange-500 bg-orange-50" : "border-gray-100"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                  role === "rider" ? "bg-orange-500" : "bg-gray-100"
                }`}>
                  🧍
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800">Pasajero</p>
                  <p className="text-xs text-gray-400">Pide viajes en moto al mejor precio</p>
                </div>
                {role === "rider" && (
                  <div className="ml-auto w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>

              <button
                onClick={() => setRole("driver")}
                className={`p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${
                  role === "driver" ? "border-orange-500 bg-orange-50" : "border-gray-100"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                  role === "driver" ? "bg-orange-500" : "bg-gray-100"
                }`}>
                  🏍️
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800">Mototaxista</p>
                  <p className="text-xs text-gray-400">Gana dinero llevando pasajeros</p>
                </div>
                {role === "driver" && (
                  <div className="ml-auto w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Tus datos</h3>
              <p className="text-gray-400 text-sm mt-1">Información básica de tu cuenta</p>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Nombre completo</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Carlos Martínez"
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-orange-400 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Teléfono</label>
                <div className="flex items-center border-2 border-gray-200 rounded-2xl px-4 gap-2 focus-within:border-orange-400 transition-colors">
                  <span className="text-gray-400 text-sm">🇪🇨 +593</span>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="300 000 0000"
                    className="flex-1 py-3.5 text-sm outline-none bg-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Correo</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="correo@ejemplo.com"
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-orange-400 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 8 caracteres"
                  className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-orange-400 transition-colors"
                />
              </div>
              {role === "driver" && (
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Placa de la moto</label>
                  <input
                    value={plate}
                    onChange={(e) => setPlate(e.target.value.toUpperCase())}
                    placeholder="Ej: ABC123"
                    maxLength={6}
                    className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3.5 text-sm outline-none focus:border-orange-400 transition-colors uppercase font-bold tracking-widest"
                  />
                </div>
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Casi listo</h3>
              <p className="text-gray-400 text-sm mt-1">Acepta los términos y empieza</p>
            </div>

            {/* Summary card */}
            <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
                  {name ? name[0].toUpperCase() : "?"}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{name || "Sin nombre"}</p>
                  <p className="text-xs text-gray-500">{role === "rider" ? "Pasajero" : "Mototaxista"}</p>
                </div>
              </div>
              <div className="text-xs text-gray-500 space-y-1">
                <p>📱 {phone || "Sin teléfono"}</p>
                <p>📧 {email || "Sin correo"}</p>
                {role === "driver" && <p>🏍️ Placa: {plate || "Sin placa"}</p>}
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-col gap-2">
              {[
                "Sin comisiones abusivas",
                "Negocia el precio de tu viaje",
                "Conductores verificados",
                "Tarifas desde $1.00 USD",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-600">{b}</span>
                </div>
              ))}
            </div>

            {/* Terms */}
            <button
              onClick={() => setAgreed(!agreed)}
              className="flex items-start gap-3 text-left"
            >
              <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                agreed ? "bg-orange-500 border-orange-500" : "border-gray-300"
              }`}>
                {agreed && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Acepto los{" "}
                <span className="text-orange-500 font-semibold">Términos y Condiciones</span> y la{" "}
                <span className="text-orange-500 font-semibold">Política de Privacidad</span> de Muvy
              </p>
            </button>
          </>
        )}

        <button
          onClick={nextStep}
          disabled={step === 3 && !agreed}
          className="w-full bg-orange-500 disabled:bg-gray-200 disabled:text-gray-400 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-orange-200 active:scale-95 transition-all mt-auto"
        >
          {step < 3 ? "Continuar" : "Crear cuenta"}
        </button>

        {step === 1 && (
          <p className="text-center text-sm text-gray-500 pb-2">
            ¿Ya tienes cuenta?{" "}
            <button onClick={() => navigate("login")} className="text-orange-500 font-semibold">
              Inicia sesión
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
