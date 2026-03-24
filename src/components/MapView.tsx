"use client";

import { useCallback, useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";

const MAPS_API_KEY = "AIzaSyBiTDymecaUARm1p2qzKEZwf70G2pq7Ens";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = { lat: -0.1807, lng: -78.4678 }; // Quito, Ecuador

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ],
};

interface Props {
  showUserLocation?: boolean;
  destination?: { lat: number; lng: number } | null;
  onMapClick?: (lat: number, lng: number) => void;
  drivers?: Array<{ lat: number; lng: number; id: string }>;
}

export default function MapView({ showUserLocation = true, destination, onMapClick, drivers = [] }: Props) {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [selectedDriver, setSelectedDriver] = useState<string | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: MAPS_API_KEY,
  });

  useEffect(() => {
    if (showUserLocation && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          setUserLocation(defaultCenter);
        }
      );
    }
  }, [showUserLocation]);

  const onMapLoad = useCallback(() => {
    console.log("Map loaded");
  }, []);

  const handleMapClick = useCallback(
    (e: google.maps.MapMouseEvent) => {
      if (onMapClick && e.latLng) {
        onMapClick(e.latLng.lat(), e.latLng.lng());
      }
    },
    [onMapClick]
  );

  if (loadError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Error cargando el mapa</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-400 text-sm">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={userLocation || defaultCenter}
      zoom={15}
      options={mapOptions}
      onLoad={onMapLoad}
      onClick={handleMapClick}
    >
      {/* User location marker */}
      {userLocation && (
        <Marker
          position={userLocation}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: "#f97316",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 3,
          }}
        />
      )}

      {/* Destination marker */}
      {destination && (
        <Marker
          position={destination}
          icon={{
            path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
            fillColor: "#ef4444",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
            scale: 1.2,
          }}
        />
      )}

      {/* Driver markers */}
      {drivers.map((driver) => (
        <Marker
          key={driver.id}
          position={{ lat: driver.lat, lng: driver.lng }}
          onClick={() => setSelectedDriver(driver.id)}
          icon={{
            path: "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z",
            fillColor: "#f97316",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
            scale: 0.8,
            anchor: new google.maps.Point(12, 12),
          }}
        />
      ))}

      {selectedDriver && (
        <InfoWindow
          position={drivers.find((d) => d.id === selectedDriver) || defaultCenter}
          onCloseClick={() => setSelectedDriver(null)}
        >
          <div className="p-2">
            <p className="text-sm font-semibold">Mototaxista disponible</p>
            <p className="text-xs text-gray-500">A 200 metros</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
