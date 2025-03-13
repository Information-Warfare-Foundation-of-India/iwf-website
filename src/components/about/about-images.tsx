import Image from "next/image";
import React from "react";

export function HeroBackground() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <Image 
          src="/images/about/hero-cybersecurity.jpg" 
          alt="IWF Digital Defense Network Background"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
          quality={90}
        />
      </div>
      {/* Fallback static image */}
      <img 
        src="/images/about/hero-cybersecurity.jpg" 
        alt="IWF Digital Defense Network Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        style={{ display: 'none' }}
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'block';
          const parent = target.parentElement;
          if (parent && parent.firstElementChild) {
            (parent.firstElementChild as HTMLElement).style.display = 'none';
          }
        }}
      />
    </div>
  );
}

export function TeamImage() {
  return (
    <div className="relative w-full h-[400px]">
      <div className="absolute inset-0">
        <Image 
          src="/images/about/team-collaboration.jpg" 
          alt="IWF Team Working on Digital Defense Solutions" 
          fill
          className="rounded-lg shadow-xl object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={90}
        />
      </div>
      {/* Fallback static image */}
      <img 
        src="/images/about/team-collaboration.jpg" 
        alt="IWF Team Working on Digital Defense Solutions"
        className="absolute inset-0 w-full h-full rounded-lg shadow-xl object-cover"
        style={{ display: 'none' }}
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'block';
          const parent = target.parentElement;
          if (parent && parent.firstElementChild) {
            (parent.firstElementChild as HTMLElement).style.display = 'none';
          }
        }}
      />
    </div>
  );
} 