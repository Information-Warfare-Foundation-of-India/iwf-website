"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, Globe, FileText, Search, BookOpen, Recycle, 
  Scale, Building, AlertTriangle, Bell, ArrowRight, 
  ChevronRight, ChevronLeft, ExternalLink, Sparkles
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { useState, useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Define color types for type safety
type ServiceColor = "blue" | "indigo" | "purple" | "cyan" | "green" | "emerald" | "amber" | "orange" | "red" | "yellow";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  color: ServiceColor;
  highlight: string;
}

const services: Service[] = [
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Information Warfare & AI Threats",
    description: "Detecting fake news, monitoring ethical AI use, and developing cybersecurity strategies.",
    link: "/services#information-warfare",
    color: "blue",
    highlight: "AI Threat Detection"
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Cybersecurity & Fraud Prevention",
    description: "Monitoring data breaches, detecting financial fraud, and providing security consulting.",
    link: "/services#cybersecurity",
    color: "indigo",
    highlight: "Breach Prevention"
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: "Investigative Media",
    description: "Fact-checking, in-depth reporting, and exposing misinformation campaigns.",
    link: "/services#investigative-media",
    color: "purple",
    highlight: "Fact Verification"
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: "Research & Development",
    description: "Conducting studies on information warfare, AI ethics, and cybersecurity threats.",
    link: "/services#research",
    color: "cyan",
    highlight: "Innovation Hub"
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Digital Literacy Programs",
    description: "Training citizens to identify misinformation and protect their digital privacy.",
    link: "/services#digital-literacy",
    color: "green",
    highlight: "Education Focus"
  },
  {
    icon: <Recycle className="h-10 w-10" />,
    title: "E-Waste Management",
    description: "Promoting sustainable disposal and recycling of electronic devices.",
    link: "/services#e-waste",
    color: "emerald",
    highlight: "Sustainability"
  },
  {
    icon: <Scale className="h-10 w-10" />,
    title: "Policy Advocacy",
    description: "Working with government bodies to develop regulations for AI and data protection.",
    link: "/services#policy",
    color: "amber",
    highlight: "Regulatory Impact"
  },
  {
    icon: <Building className="h-10 w-10" />,
    title: "Corporate Training",
    description: "Helping organizations implement cybersecurity best practices and ethical AI usage.",
    link: "/services#corporate",
    color: "orange",
    highlight: "Enterprise Solutions"
  },
  {
    icon: <AlertTriangle className="h-10 w-10" />,
    title: "Threat Intelligence",
    description: "Monitoring and analyzing emerging cyber threats and information warfare tactics.",
    link: "/services#threat-intelligence",
    color: "red",
    highlight: "Proactive Defense"
  },
  {
    icon: <Bell className="h-10 w-10" />,
    title: "Awareness Campaigns",
    description: "Running public awareness initiatives about digital threats and online safety.",
    link: "/services#awareness",
    color: "yellow",
    highlight: "Public Engagement"
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Determine visible services based on screen size
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth >= 1280) {
          setVisibleCount(6);
        } else if (window.innerWidth >= 768) {
          setVisibleCount(4);
        } else {
          setVisibleCount(3);
        }
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  // Autoplay functionality
  useEffect(() => {
    if (typeof window !== "undefined" && autoplay) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % services.length);
      }, 4000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  // Navigation functions
  const nextService = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };
  
  const prevService = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  // Color mapping for service cards
  const colorMap: Record<ServiceColor, string> = {
    blue: "from-blue-500 to-blue-600 text-blue-50 shadow-blue-500/20",
    indigo: "from-indigo-500 to-indigo-600 text-indigo-50 shadow-indigo-500/20",
    purple: "from-purple-500 to-purple-600 text-purple-50 shadow-purple-500/20",
    cyan: "from-cyan-500 to-cyan-600 text-cyan-50 shadow-cyan-500/20",
    green: "from-green-500 to-green-600 text-green-50 shadow-green-500/20",
    emerald: "from-emerald-500 to-emerald-600 text-emerald-50 shadow-emerald-500/20",
    amber: "from-amber-500 to-amber-600 text-amber-50 shadow-amber-500/20",
    orange: "from-orange-500 to-orange-600 text-orange-50 shadow-orange-500/20",
    red: "from-red-500 to-red-600 text-red-50 shadow-red-500/20",
    yellow: "from-yellow-500 to-yellow-600 text-yellow-50 shadow-yellow-500/20",
  };
  
  // Title with icon for section heading
  const sectionTitle = (
    <span className="inline-flex items-center gap-2">
      Our Services
      <Sparkles className="h-6 w-6 text-blue-500 animate-pulse" />
    </span>
  );
  
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-repeat opacity-5 dark:opacity-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-green-400/10 to-blue-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionHeading
            title={sectionTitle}
            subtitle="We offer a comprehensive range of services to combat misinformation, cybercrime, and unethical AI practices while promoting digital literacy and sustainable technology use."
            centered={true}
            decorative={true}
          />
        </motion.div>
        
        {/* Featured Service Showcase */}
        <div 
          className="mb-16 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
        >
          <div className="relative h-[400px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute inset-0 p-8 bg-gradient-to-br ${colorMap[services[activeIndex].color]} flex flex-col justify-between`}
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
                    {services[activeIndex].highlight}
                  </div>
                </div>
                
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-4 p-4 inline-block rounded-2xl bg-white/20 backdrop-blur-sm">
                      {services[activeIndex].icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{services[activeIndex].title}</h3>
                    <p className="text-lg opacity-90 max-w-2xl">{services[activeIndex].description}</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <Button asChild variant="outline" size="lg" className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30">
                      <Link href={services[activeIndex].link} className="group">
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    
                    <div className="text-xl font-bold">
                      {activeIndex + 1} / {services.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
            <Button 
              onClick={prevService} 
              size="icon" 
              variant="outline" 
              className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 h-12 w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
            <Button 
              onClick={nextService} 
              size="icon" 
              variant="outline" 
              className="rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 h-12 w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex 
                    ? `w-8 bg-${services[activeIndex].color}-500` 
                    : "w-2 bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, isExpanded ? services.length : visibleCount).map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>
        
        {/* View All / Collapse Button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            onClick={toggleExpand} 
            size="lg" 
            variant="gradient" 
            className="group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              {isExpanded ? "Show Less" : "View All Services"}
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${isExpanded ? "rotate-90" : "group-hover:translate-x-1"}`} />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    bg: {
      blue: "bg-blue-50 dark:bg-blue-900/20",
      indigo: "bg-indigo-50 dark:bg-indigo-900/20",
      purple: "bg-purple-50 dark:bg-purple-900/20",
      cyan: "bg-cyan-50 dark:bg-cyan-900/20",
      green: "bg-green-50 dark:bg-green-900/20",
      emerald: "bg-emerald-50 dark:bg-emerald-900/20",
      amber: "bg-amber-50 dark:bg-amber-900/20",
      orange: "bg-orange-50 dark:bg-orange-900/20",
      red: "bg-red-50 dark:bg-red-900/20",
      yellow: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    border: {
      blue: "border-blue-200 dark:border-blue-800",
      indigo: "border-indigo-200 dark:border-indigo-800",
      purple: "border-purple-200 dark:border-purple-800",
      cyan: "border-cyan-200 dark:border-cyan-800",
      green: "border-green-200 dark:border-green-800",
      emerald: "border-emerald-200 dark:border-emerald-800",
      amber: "border-amber-200 dark:border-amber-800",
      orange: "border-orange-200 dark:border-orange-800",
      red: "border-red-200 dark:border-red-800",
      yellow: "border-yellow-200 dark:border-yellow-800",
    },
    icon: {
      blue: "text-blue-500 dark:text-blue-400",
      indigo: "text-indigo-500 dark:text-indigo-400",
      purple: "text-purple-500 dark:text-purple-400",
      cyan: "text-cyan-500 dark:text-cyan-400",
      green: "text-green-500 dark:text-green-400",
      emerald: "text-emerald-500 dark:text-emerald-400",
      amber: "text-amber-500 dark:text-amber-400",
      orange: "text-orange-500 dark:text-orange-400",
      red: "text-red-500 dark:text-red-400",
      yellow: "text-yellow-500 dark:text-yellow-400",
    },
    glow: {
      blue: "from-blue-400/20 to-blue-500/20 dark:from-blue-400/10 dark:to-blue-500/10",
      indigo: "from-indigo-400/20 to-indigo-500/20 dark:from-indigo-400/10 dark:to-indigo-500/10",
      purple: "from-purple-400/20 to-purple-500/20 dark:from-purple-400/10 dark:to-purple-500/10",
      cyan: "from-cyan-400/20 to-cyan-500/20 dark:from-cyan-400/10 dark:to-cyan-500/10",
      green: "from-green-400/20 to-green-500/20 dark:from-green-400/10 dark:to-green-500/10",
      emerald: "from-emerald-400/20 to-emerald-500/20 dark:from-emerald-400/10 dark:to-emerald-500/10",
      amber: "from-amber-400/20 to-amber-500/20 dark:from-amber-400/10 dark:to-amber-500/10",
      orange: "from-orange-400/20 to-orange-500/20 dark:from-orange-400/10 dark:to-orange-500/10",
      red: "from-red-400/20 to-red-500/20 dark:from-red-400/10 dark:to-red-500/10",
      yellow: "from-yellow-400/20 to-yellow-500/20 dark:from-yellow-400/10 dark:to-yellow-500/10",
    },
    highlight: {
      blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
      indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
      cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
      green: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
      emerald: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
      amber: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
      orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
      red: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
      yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative flex flex-col h-full p-6 rounded-2xl backdrop-blur-sm shadow-lg border",
        "transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden",
        colorClasses.bg[service.color],
        colorClasses.border[service.color]
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div className={cn(
        "absolute -inset-px rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl",
        colorClasses.glow[service.color]
      )}></div>
      
      {/* Highlight tag */}
      <div className="absolute top-4 right-4">
        <div className={cn(
          "px-2 py-1 rounded-full text-xs font-medium",
          colorClasses.highlight[service.color]
        )}>
          {service.highlight}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className={cn(
          "mb-4 p-3 rounded-full inline-flex items-center justify-center",
          "transform transition-transform duration-300",
          isHovered ? "scale-110" : "scale-100",
          colorClasses.icon[service.color]
        )}>
          {service.icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
        
        <div className="mt-auto">
          <Link 
            href={service.link} 
            className={cn(
              "inline-flex items-center font-medium group",
              colorClasses.icon[service.color]
            )}
          >
            Learn More 
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 