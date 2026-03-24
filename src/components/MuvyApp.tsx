"use client";

import { useState } from "react";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import RequestRideScreen from "./screens/RequestRideScreen";
import NegotiateScreen from "./screens/NegotiateScreen";
import DriverSearchScreen from "./screens/DriverSearchScreen";
import ActiveRideScreen from "./screens/ActiveRideScreen";
import DriverHomeScreen from "./screens/DriverHomeScreen";
import DriverOfferScreen from "./screens/DriverOfferScreen";

export type Screen =
  | "splash"
  | "login"
  | "register"
  | "home"
  | "request"
  | "negotiate"
  | "driverSearch"
  | "activeRide"
  | "driverHome"
  | "driverOffer";

export type UserType = "rider" | "driver" | null;

export default function MuvyApp() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [userType, setUserType] = useState<UserType>(null);

  const navigate = (s: Screen) => setScreen(s);

  const renderScreen = () => {
    switch (screen) {
      case "splash":
        return <SplashScreen navigate={navigate} />;
      case "login":
        return (
          <LoginScreen navigate={navigate} setUserType={setUserType} />
        );
      case "register":
        return <RegisterScreen navigate={navigate} />;
      case "home":
        return <HomeScreen navigate={navigate} userType={userType} />;
      case "request":
        return <RequestRideScreen navigate={navigate} />;
      case "negotiate":
        return <NegotiateScreen navigate={navigate} />;
      case "driverSearch":
        return <DriverSearchScreen navigate={navigate} />;
      case "activeRide":
        return <ActiveRideScreen navigate={navigate} />;
      case "driverHome":
        return <DriverHomeScreen navigate={navigate} />;
      case "driverOffer":
        return <DriverOfferScreen navigate={navigate} />;
      default:
        return <SplashScreen navigate={navigate} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black p-4">
      {/* Phone frame */}
      <div
        className="relative bg-black rounded-[3rem] shadow-2xl overflow-hidden border border-gray-700"
        style={{ width: 390, height: 844, flexShrink: 0 }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-b-2xl z-50" />
        {/* Status bar */}
        <div className="absolute top-0 left-0 right-0 h-12 flex items-end justify-between px-6 pb-1 z-40">
          <span className="text-white text-xs font-semibold">9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3 text-white fill-white" viewBox="0 0 24 24">
              <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
            </svg>
            <svg className="w-4 h-3 text-white fill-white" viewBox="0 0 24 15">
              <rect x="0" y="3" width="18" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="2" y="5" width="13" height="7" rx="1" fill="currentColor" />
              <path d="M19 6.5v2a2 2 0 0 0 0-2z" />
            </svg>
          </div>
        </div>
        {/* Screen content */}
        <div className="absolute inset-0 pt-12 overflow-hidden">
          {renderScreen()}
        </div>
      </div>

      {/* Navigation hint */}
      <div className="absolute bottom-4 text-center text-gray-500 text-xs">
        Muvy — Mototaxi App Demo
      </div>
    </div>
  );
}
