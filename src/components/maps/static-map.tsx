'use client';

interface StaticMapProps {
  address?: string;
  height?: string;
}

export function StaticMap({
  address = "Information Warfare Foundation of India, Rajkanika, Kendrapara District, Odisha, India - 754220",
  height = '100%'
}: StaticMapProps) {
  // Direct link to Google Maps
  const mapUrl = "https://maps.app.goo.gl/DNBgvX7QeZqsRmVi6";
  
  return (
    <div style={{ height, position: 'relative' }}>
      {/* Using the exact embed code provided */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.2356358960583!2d86.68973737586707!3d20.741241297590523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1b97a579825061%3A0x57a0285bb5eebc0!2sInformation%20Warfare%20Foundation%20of%20India!5e0!3m2!1sen!2sin!4v1741690191147!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      
      {/* Fallback content in case the embed doesn't work */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-2 text-center">
        <p className="text-sm text-gray-700 mb-1">Information Warfare Foundation of India</p>
        <a 
          href="https://goo.gl/maps/Ld5Eo9Eo9Eo9Eo9E6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
} 