"use client";

import { useEffect, RefObject } from 'react';

interface ParticleAnimationProps {
  containerRef: RefObject<HTMLDivElement | null>;
}

export default function ParticleAnimation({ containerRef }: ParticleAnimationProps) {
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const particleCount = 30;
    const particles: HTMLDivElement[] = [];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-blue-500/20 dark:bg-blue-400/20 pointer-events-none';
      
      // Random size between 4px and 12px
      const size = Math.random() * 8 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration between 20s and 40s
      const duration = Math.random() * 20000 + 20000;
      particle.style.animation = `float ${duration}ms ease-in-out infinite`;
      
      container.appendChild(particle);
      particles.push(particle);
    }
    
    // Add keyframes for float animation
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes float {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(${Math.random() * 100}px, ${Math.random() * -100}px) rotate(${Math.random() * 360}deg); }
        50% { transform: translate(${Math.random() * -100}px, ${Math.random() * 100}px) rotate(${Math.random() * 360}deg); }
        75% { transform: translate(${Math.random() * 100}px, ${Math.random() * 100}px) rotate(${Math.random() * 360}deg); }
      }
    `;
    document.head.appendChild(styleSheet);
    
    return () => {
      particles.forEach(p => p.remove());
      styleSheet.remove();
    };
  }, [containerRef]);
  
  // This component doesn't render anything visible
  return null;
} 