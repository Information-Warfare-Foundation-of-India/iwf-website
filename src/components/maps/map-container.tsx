'use client';

import { useState, useEffect } from 'react';
import { GoogleMapComponent } from './google-map';
import { StaticMap } from './static-map';

// Updated coordinates from the provided embed code
const IWF_LOCATION = { lat: 20.741241297590523, lng: 86.68973737586707 };

interface MapContainerProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  address?: string;
  height?: string;
}

export function MapContainer({
  center = IWF_LOCATION,
  zoom = 17,
  address = "Information Warfare Foundation of India, Rajkanika, Kendrapara District, Odisha, India - 754220",
  height = '100%'
}: MapContainerProps) {
  const [apiKeyAvailable, setApiKeyAvailable] = useState<boolean | null>(null);
  const [apiKeyError, setApiKeyError] = useState(false);

  useEffect(() => {
    // Check if API key is available and valid
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    setApiKeyAvailable(!!apiKey && apiKey !== 'YOUR_GOOGLE_MAPS_API_KEY' && apiKey.length > 0);
  }, []);

  // Handle API key errors
  const handleApiKeyError = () => {
    setApiKeyError(true);
  };

  // If still checking API key
  if (apiKeyAvailable === null) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-200 dark:bg-gray-700">
        <p className="text-gray-600 dark:text-gray-400">Loading map...</p>
      </div>
    );
  }

  // If API key is available and no errors, use Google Maps
  if (apiKeyAvailable && !apiKeyError) {
    return (
      <GoogleMapComponent
        center={center}
        zoom={zoom}
        markerPosition={center}
        height={height}
        onError={handleApiKeyError}
      />
    );
  }

  // Fallback to static map
  return (
    <StaticMap
      address={address}
      height={height}
    />
  );
} 