'use client';

import { useState, useCallback, useMemo, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

interface GoogleMapComponentProps {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  markerPosition?: {
    lat: number;
    lng: number;
  };
  height?: string;
  apiKey?: string;
  onError?: () => void;
}

const containerStyle = {
  width: '100%',
  height: '100%'
};

// Updated coordinates from the provided embed code
const IWF_LOCATION = { lat: 20.741241297590523, lng: 86.68973737586707 };

export function GoogleMapComponent({
  center = IWF_LOCATION,
  zoom = 17, // Higher zoom level for better detail
  markerPosition = IWF_LOCATION, // Always use the exact IWF location for the marker
  height = '100%',
  apiKey,
  onError
}: GoogleMapComponentProps) {
  // Use a consistent API key or a fallback empty string
  const googleMapsApiKey = useMemo(() => {
    // If apiKey prop is provided, use it
    if (apiKey) return apiKey;
    
    // Otherwise try to get from env, but ensure it's not the placeholder value
    const envKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
    return envKey === 'YOUR_GOOGLE_MAPS_API_KEY' ? '' : envKey;
  }, [apiKey]);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [showInfoWindow, setShowInfoWindow] = useState(true);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  // Call onError callback if there's a load error
  useEffect(() => {
    if (loadError && onError) {
      onError();
    }
  }, [loadError, onError]);

  if (loadError) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-200 dark:bg-gray-700">
        <p className="text-gray-600 dark:text-gray-400">
          Error loading maps. Please check your API key.
        </p>
      </div>
    );
  }

  return isLoaded && googleMapsApiKey ? (
    <div style={{ height: height }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          disableDefaultUI: false,
          zoomControl: true,
          streetViewControl: true,
          mapTypeControl: true,
          mapTypeId: 'roadmap', // Street view
          fullscreenControl: true
        }}
      >
        {/* Always show the marker at the IWF location */}
        <Marker 
          position={IWF_LOCATION}
          onClick={() => setShowInfoWindow(true)}
          title="Information Warfare Foundation of India"
          animation={google.maps.Animation.DROP}
          icon={{
            url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
            scaledSize: new google.maps.Size(40, 40)
          }}
        />
        {showInfoWindow && (
          <InfoWindow
            position={IWF_LOCATION}
            onCloseClick={() => setShowInfoWindow(false)}
          >
            <div className="p-2">
              <h3 className="font-semibold text-sm">Information Warfare Foundation of India</h3>
              <p className="text-xs mt-1">Rajkanika, Kendrapara District</p>
              <p className="text-xs">Odisha, India - 754220</p>
              <a 
                href="https://goo.gl/maps/Ld5Eo9Eo9Eo9Eo9E6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 mt-2 inline-block"
              >
                View on Google Maps
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : (
    <div className="flex items-center justify-center h-full bg-gray-200 dark:bg-gray-700">
      <p className="text-gray-600 dark:text-gray-400">
        {!googleMapsApiKey 
          ? "Google Maps API key is required. Please add it to your environment variables." 
          : "Loading map..."}
      </p>
    </div>
  );
} 