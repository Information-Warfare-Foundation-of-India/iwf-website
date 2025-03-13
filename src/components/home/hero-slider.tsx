"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Shield, Globe, FileText, Heart, Gift, Mail, Info, Briefcase, Users, Lock, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the slide data
const slides = [
  {
    id: 1,
    title: "Safeguarding India's Digital Future",
    subtitle: "Empowering citizens through research, education, and advocacy to combat digital threats.",
    bgColor: "from-blue-900 via-blue-800 to-blue-700",
    accentColor: "blue",
    image: "/images/hero/digital-security.svg",
    ctaText: "Our Mission",
    ctaLink: "/about",
    secondaryCtaText: "Get Involved",
    secondaryCtaLink: "/volunteer",
    icon: <Shield className="h-6 w-6 text-white" />,
  },
  {
    id: 2,
    title: "Securing Critical Infrastructure",
    subtitle: "Protecting India's vital systems and networks from sophisticated cyber threats.",
    bgColor: "from-red-900 via-red-800 to-red-700",
    accentColor: "red",
    image: "/images/hero/critical-infrastructure.svg",
    ctaText: "View Solutions",
    ctaLink: "/services",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
    icon: <Lock className="h-6 w-6 text-white" />,
  },
  {
    id: 3,
    title: "Defending Democracy",
    subtitle: "Safeguarding electoral integrity and combating digital disinformation campaigns.",
    bgColor: "from-purple-900 via-purple-800 to-purple-700",
    accentColor: "purple",
    image: "/images/hero/democracy-protection.svg",
    ctaText: "Learn More",
    ctaLink: "/services",
    secondaryCtaText: "Join Our Efforts",
    secondaryCtaLink: "/volunteer",
    icon: <Globe className="h-6 w-6 text-white" />,
  },
  {
    id: 4,
    title: "Countering Cyber Warfare",
    subtitle: "Developing robust strategies against state-sponsored digital threats and attacks.",
    bgColor: "from-slate-900 via-slate-800 to-slate-700",
    accentColor: "slate",
    image: "/images/hero/cyber-warfare.svg",
    ctaText: "Research Insights",
    ctaLink: "/blog",
    secondaryCtaText: "Stay Informed",
    secondaryCtaLink: "/newsletter",
    icon: <Shield className="h-6 w-6 text-white" />,
  },
  {
    id: 5,
    title: "Building Digital Resilience",
    subtitle: "Equipping citizens with skills to identify and counter digital threats and manipulation.",
    bgColor: "from-green-900 via-green-800 to-green-700",
    accentColor: "green",
    image: "/images/hero/digital-resilience.svg",
    ctaText: "Explore Programs",
    ctaLink: "/services",
    secondaryCtaText: "Get Involved",
    secondaryCtaLink: "/volunteer",
    icon: <Users className="h-6 w-6 text-white" />,
  },
  {
    id: 6,
    title: "Advancing Digital Literacy",
    subtitle: "Empowering communities to navigate the digital landscape safely and confidently.",
    bgColor: "from-orange-900 via-orange-800 to-orange-700",
    accentColor: "orange",
    image: "/images/hero/digital-literacy.svg",
    ctaText: "Educational Resources",
    ctaLink: "/resources",
    secondaryCtaText: "Support Our Work",
    secondaryCtaLink: "/donate",
    icon: <FileText className="h-6 w-6 text-white" />,
  },
  {
    id: 7,
    title: "Championing Digital Rights",
    subtitle: "Advocating for privacy, free expression, and equitable access in the digital realm.",
    bgColor: "from-indigo-900 via-indigo-800 to-indigo-700",
    accentColor: "indigo",
    image: "/images/hero/digital-rights.svg",
    ctaText: "Join Advocacy",
    ctaLink: "/volunteer",
    secondaryCtaText: "Learn About Rights",
    secondaryCtaLink: "/blog",
    icon: <Heart className="h-6 w-6 text-white" />,
  },
  {
    id: 8,
    title: "Promoting Digital Inclusion",
    subtitle: "Ensuring all Indians, regardless of background, can participate in the digital economy.",
    bgColor: "from-pink-900 via-pink-800 to-pink-700",
    accentColor: "pink",
    image: "/images/hero/digital-inclusion.svg",
    ctaText: "Inclusion Programs",
    ctaLink: "/services",
    secondaryCtaText: "Volunteer",
    secondaryCtaLink: "/volunteer",
    icon: <Users className="h-6 w-6 text-white" />,
  },
  {
    id: 9,
    title: "Guiding Ethical AI Development",
    subtitle: "Promoting responsible AI innovation that respects privacy and upholds human rights.",
    bgColor: "from-cyan-900 via-cyan-800 to-cyan-700",
    accentColor: "cyan",
    image: "/images/hero/ethical-ai.svg",
    ctaText: "Read Research",
    ctaLink: "/blog",
    secondaryCtaText: "Partner With Us",
    secondaryCtaLink: "/contact",
    icon: <Briefcase className="h-6 w-6 text-white" />,
  },
  {
    id: 10,
    title: "Creating a Secure Digital Future",
    subtitle: "Building a safer, more ethical, and inclusive digital environment for generations to come.",
    bgColor: "from-emerald-900 via-emerald-800 to-emerald-700",
    accentColor: "emerald",
    image: "/images/hero/digital-future.svg",
    ctaText: "Our Vision",
    ctaLink: "/about",
    secondaryCtaText: "Support Us",
    secondaryCtaLink: "/donate",
    icon: <Globe className="h-6 w-6 text-white" />,
  },
];

// Helper function to get accent color classes
const getAccentColorClasses = (color: string) => {
  const colorMap: Record<string, { light: string, dark: string, border: string, text: string }> = {
    blue: { 
      light: "bg-blue-500/20", 
      dark: "bg-blue-700/50", 
      border: "border-blue-500/30",
      text: "text-blue-200"
    },
    purple: { 
      light: "bg-purple-500/20", 
      dark: "bg-purple-700/50", 
      border: "border-purple-500/30",
      text: "text-purple-200"
    },
    green: { 
      light: "bg-green-500/20", 
      dark: "bg-green-700/50", 
      border: "border-green-500/30",
      text: "text-green-200"
    },
    cyan: { 
      light: "bg-cyan-500/20", 
      dark: "bg-cyan-700/50", 
      border: "border-cyan-500/30",
      text: "text-cyan-200"
    },
    red: { 
      light: "bg-red-500/20", 
      dark: "bg-red-700/50", 
      border: "border-red-500/30",
      text: "text-red-200"
    },
    orange: { 
      light: "bg-orange-500/20", 
      dark: "bg-orange-700/50", 
      border: "border-orange-500/30",
      text: "text-orange-200"
    },
    indigo: { 
      light: "bg-indigo-500/20", 
      dark: "bg-indigo-700/50", 
      border: "border-indigo-500/30",
      text: "text-indigo-200"
    },
    slate: { 
      light: "bg-slate-500/20", 
      dark: "bg-slate-700/50", 
      border: "border-slate-500/30",
      text: "text-slate-200"
    },
    pink: { 
      light: "bg-pink-500/20", 
      dark: "bg-pink-700/50", 
      border: "border-pink-500/30",
      text: "text-pink-200"
    },
    emerald: { 
      light: "bg-emerald-500/20", 
      dark: "bg-emerald-700/50", 
      border: "border-emerald-500/30",
      text: "text-emerald-200"
    },
  };
  
  return colorMap[color] || colorMap.blue;
};

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [manualControl, setManualControl] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const manualControlResetRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Autoplay functionality with progress tracking
  useEffect(() => {
    if (autoplay) {
      // Reset progress when autoplay starts
      setProgress(0);
      
      // Clear any existing intervals
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
      
      // Set up progress tracking (updates every 70ms for smooth animation)
      const progressInterval = 70;
      const autoplayDuration = 7000;
      const steps = autoplayDuration / progressInterval;
      
      progressRef.current = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + (100 / steps);
          return newProgress > 100 ? 100 : newProgress;
        });
      }, progressInterval);
      
      // Set up slide transition
      autoplayRef.current = setInterval(() => {
        setProgress(0);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, autoplayDuration);
    } else {
      // Clear intervals when autoplay is off
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [autoplay]);
  
  // Reset manual control after inactivity
  useEffect(() => {
    if (manualControl) {
      // Clear any existing timeout
      if (manualControlResetRef.current) {
        clearTimeout(manualControlResetRef.current);
      }
      
      // Set a new timeout to reset manual control after 30 seconds of inactivity
      manualControlResetRef.current = setTimeout(() => {
        setManualControl(false);
        setAutoplay(true); // Resume autoplay when returning to automatic control
      }, 30000);
    }
    
    return () => {
      if (manualControlResetRef.current) {
        clearTimeout(manualControlResetRef.current);
      }
    };
  }, [manualControl, currentSlide]); // Reset the timer when slide changes or manual control changes
  
  // Pause autoplay on hover only if not manually controlled
  const handleMouseEnter = () => {
    if (!manualControl) {
      setAutoplay(false);
    }
  };
  
  const handleMouseLeave = () => {
    if (!manualControl) {
      setAutoplay(true);
    }
  };
  
  // Toggle autoplay function with manual control
  const toggleAutoplay = () => {
    // Reset the inactivity timer when manually toggling
    if (manualControlResetRef.current) {
      clearTimeout(manualControlResetRef.current);
    }
    
    setManualControl(true);
    setAutoplay(prev => !prev);
  };
  
  // Navigation functions with transition state
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };
  
  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };
  
  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };
  
  const currentSlideData = slides[currentSlide];
  const colorClasses = getAccentColorClasses(currentSlideData.accentColor);
  
  return (
    <div 
      ref={sliderRef}
      className="relative overflow-hidden rounded-xl shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        <motion.section 
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`relative bg-gradient-to-br ${currentSlideData.bgColor} text-white py-20 md:py-24 overflow-hidden min-h-[600px] flex items-center`}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/patterns/circuit-board.svg')", backgroundSize: "cover" }}></div>
            
            {/* Enhanced floating elements */}
            <motion.div 
              className={`absolute top-20 left-[10%] w-32 h-32 ${colorClasses.light} rounded-full opacity-20 blur-xl`}
              animate={{ 
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className={`absolute bottom-20 right-[15%] w-40 h-40 bg-${currentSlideData.accentColor}-500 rounded-full opacity-20 blur-xl`}
              animate={{ 
                y: [0, -40, 0],
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className={`absolute top-[40%] right-[30%] w-24 h-24 ${colorClasses.light} rounded-full opacity-20 blur-xl`}
              animate={{ 
                x: [0, 30, 0],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                repeat: Infinity,
                duration: 7,
                ease: "easeInOut"
              }}
            />
            
            {/* Additional decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center lg:text-left lg:col-span-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 mb-6 ${colorClasses.dark} backdrop-blur-sm rounded-full border ${colorClasses.border}`}
                >
                  {currentSlideData.icon}
                  <span className={`${colorClasses.text} text-sm font-medium`}>Slide {currentSlide + 1} of {slides.length}</span>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                    {currentSlideData.title}
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg md:text-xl mb-8 text-blue-100/90 max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  {currentSlideData.subtitle}
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Button asChild size="xl" variant="gradientAccent" className="font-semibold relative overflow-hidden group">
                    <Link href={currentSlideData.ctaLink}>
                      <span className="relative z-10 flex items-center">
                      {currentSlideData.ctaText}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Link>
                  </Button>
                  <Button asChild size="xl" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white relative overflow-hidden group">
                    <Link href={currentSlideData.secondaryCtaLink}>
                      <span className="relative z-10">{currentSlideData.secondaryCtaText}</span>
                      <span className="absolute inset-0 bg-white/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="hidden lg:block lg:col-span-6"
              >
                <div className="relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r from-${currentSlideData.accentColor}-500 to-${currentSlideData.accentColor}-300 rounded-2xl blur opacity-30`}></div>
                  
                  {/* Image with enhanced container */}
                  <div className="relative rounded-2xl shadow-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-blue-900/50 to-black/50 backdrop-blur-sm p-1">
                    {/* Indian flag colors - top stripe (saffron) */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-orange-500 z-20"></div>
                    
                    {/* Indian flag colors - bottom stripe (green) */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-green-600 z-20"></div>
                    
                    {/* India map silhouette overlay */}
                    <div className="absolute right-4 bottom-4 w-16 h-16 opacity-30 z-20">
                      <svg viewBox="0 0 200 200" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M88,40c5-5,10-10,15-5c5,5,10,0,15,5c5,5,10,0,15,5c5,5,10,0,15,5c5,5,10,0,15,5v75c-5-5-10,0-15-5c-5-5-10,0-15-5c-5-5-10,0-15-5c-5-5-10,0-15-5c-5-5-10,0-15-5V40z" />
                      </svg>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                    
                    {/* Main image */}
                    <img 
                      src={currentSlideData.image} 
                      alt={`Information Warfare Foundation - ${currentSlideData.title}`} 
                      className="w-full h-auto relative z-10 rounded-xl"
                    />
                    
                    {/* Ashoka Chakra overlay with animation */}
                    <div className="absolute top-4 left-4 w-12 h-12 opacity-40 z-20">
                      <motion.svg 
                        viewBox="0 0 100 100" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{ rotate: 360 }}
                        transition={{ 
                          duration: 30, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                      >
                        <circle cx="50" cy="50" r="45" stroke="#0047AB" strokeWidth="2" />
                        <circle cx="50" cy="50" r="8" fill="#0047AB" />
                        {/* 24 spokes of the Ashoka Chakra */}
                        {Array.from({ length: 24 }).map((_, i) => (
                          <line 
                            key={i}
                            x1="50"
                            y1="50"
                            x2={(50 + 40 * Math.cos(i * Math.PI / 12)).toFixed(6)}
                            y2={(50 + 40 * Math.sin(i * Math.PI / 12)).toFixed(6)}
                            stroke="#0047AB"
                            strokeWidth="1.5"
                          />
                        ))}
                      </motion.svg>
                    </div>
                    
                    {/* Enhanced overlay with additional animated elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ 
                          opacity: [0.5, 0.7, 0.5],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ 
                          repeat: Infinity,
                          duration: 5,
                          ease: "easeInOut"
                        }}
                        className={`absolute inset-0 bg-gradient-to-br from-${currentSlideData.accentColor}-900/10 to-${currentSlideData.accentColor}-700/10 rounded-xl`}
                      />
                      
                      {/* Enhanced floating elements */}
                      <motion.div
                        className={`absolute top-10 right-10 w-8 h-8 bg-${currentSlideData.accentColor}-500 rounded-full opacity-70 blur-sm`}
                        animate={{ 
                          y: [0, 10, 0],
                          opacity: [0.5, 0.7, 0.5]
                        }}
                        transition={{ 
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut"
                        }}
                      />
                      
                      <motion.div
                        className={`absolute bottom-10 left-10 w-6 h-6 bg-${currentSlideData.accentColor}-400 rounded-full opacity-70 blur-sm`}
                        animate={{ 
                          y: [0, -10, 0],
                          opacity: [0.5, 0.7, 0.5]
                        }}
                        transition={{ 
                          repeat: Infinity,
                          duration: 2.5,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* "भारत" (India in Hindi) text overlay */}
                      <div className="absolute bottom-4 right-24 text-white/30 font-bold text-xl">भारत</div>
                    </div>
                  </div>
                  
                  {/* Enhanced decorative element */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className={`absolute -bottom-5 -right-5 bg-gradient-to-br from-${currentSlideData.accentColor}-600 to-${currentSlideData.accentColor}-800 p-4 rounded-2xl shadow-lg z-10 backdrop-blur-sm border border-${currentSlideData.accentColor}-500/30`}
                  >
                    {currentSlideData.icon}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
      
      {/* Redesigned Control Panel with Indian flag colors */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className={`flex flex-col items-center rounded-full overflow-hidden shadow-xl`}>
          {/* Indian flag colors - top stripe (saffron) */}
          <div className="w-full h-1 bg-orange-500"></div>
          
          {/* Main control panel */}
          <div className="flex items-center px-3 py-2 gap-3 bg-white/10 backdrop-blur-md">
            {/* Play/Pause Button - Centered and prominent */}
            <motion.button 
              onClick={toggleAutoplay}
              whileTap={{ scale: 0.95 }}
              className={`relative p-2 rounded-full overflow-hidden ${
                autoplay 
                  ? `bg-blue-600 text-white hover:bg-blue-700` 
                  : 'bg-white/20 text-white hover:bg-white/30'
              } transition-all duration-200 flex items-center justify-center`}
              aria-label={autoplay ? "Pause slideshow" : "Play slideshow"}
            >
              {autoplay ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </motion.button>
            
            {/* Slide Counter */}
            <div className="text-white text-xs font-medium">
              <span className="font-bold">{currentSlide + 1}</span>
              <span className="text-white/60">/{slides.length}</span>
            </div>
      
      {/* Slide Indicators */}
            <div className="flex items-center gap-1">
              {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`transition-all duration-300 disabled:cursor-not-allowed rounded-full ${
              index === currentSlide 
                      ? `w-4 h-1.5 bg-blue-600` 
                      : `w-1.5 h-1.5 bg-white/30 hover:bg-white/50`
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex items-center gap-1">
              <motion.button 
                onClick={prevSlide}
                disabled={isTransitioning}
                whileTap={{ scale: 0.95 }}
                className={`relative p-1.5 rounded-full overflow-hidden ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'} transition-colors duration-200 flex items-center justify-center`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-3.5 w-3.5 text-white" />
              </motion.button>
              
              <motion.button 
                onClick={nextSlide}
                disabled={isTransitioning}
                whileTap={{ scale: 0.95 }}
                className={`relative p-1.5 rounded-full overflow-hidden ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'} transition-colors duration-200 flex items-center justify-center`}
                aria-label="Next slide"
              >
                <ChevronRight className="h-3.5 w-3.5 text-white" />
              </motion.button>
            </div>
          </div>
          
          {/* Indian flag colors - bottom stripe (green) */}
          <div className="w-full h-1 bg-green-600"></div>
        </div>
        
        {/* Progress indicator (separate from control panel) */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
          <motion.div 
            className="h-full bg-blue-600"
            style={{ width: `${progress}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
} 