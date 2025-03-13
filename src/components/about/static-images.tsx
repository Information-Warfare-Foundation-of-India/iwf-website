import React from "react";

export function StaticHeroBackground() {
  return (
    <div className="relative w-full h-full">
      <img 
        src="/images/about/hero-cybersecurity.jpg" 
        alt="IWF Digital Defense Network Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
    </div>
  );
}

export function StaticTeamImage() {
  return (
    <div className="relative w-full h-[400px]">
      <img 
        src="/images/about/team-collaboration.jpg" 
        alt="IWF Team Working on Digital Defense Solutions"
        className="absolute inset-0 w-full h-full rounded-lg shadow-xl object-cover"
      />
    </div>
  );
} 