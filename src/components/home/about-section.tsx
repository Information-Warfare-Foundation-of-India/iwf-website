"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Globe, Cpu, Recycle, ArrowRight, Users, Award, BookOpen, Zap, ChevronRight, Target, Sparkles, BarChart } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';

// Import the ParticleAnimation component with client-side only rendering
const ParticleAnimation = dynamic(() => import('./particle-animation'), { ssr: false });

export function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const tabs = [
    { 
      id: "mission", 
      label: "Our Mission", 
      icon: <Target className="h-4 w-4" />,
      content: "The Information Warfare Foundation stands at the forefront of India's digital defense, combining cutting-edge research with grassroots advocacy to address the most pressing challenges in our increasingly connected world."
    },
    { 
      id: "approach", 
      label: "Our Approach", 
      icon: <BarChart className="h-4 w-4" />,
      content: "Our interdisciplinary team of experts works alongside government agencies, educational institutions, and community organizations to build a safer, more equitable digital ecosystem for all Indians."
    },
    { 
      id: "impact", 
      label: "Our Impact", 
      icon: <Sparkles className="h-4 w-4" />,
      content: "Through strategic partnerships and innovative programs, we've reached over 100,000 citizens, trained 5,000+ professionals, and influenced policy decisions at both state and national levels."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800" ref={containerRef}>
      {/* Add the ParticleAnimation component */}
      <ParticleAnimation containerRef={containerRef} />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] bg-repeat opacity-5 dark:opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        {/* Animated gradient orb */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-green-400/10 to-blue-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionHeading
            title="Safeguarding India's Digital Future"
            subtitle="Pioneering research and advocacy to combat digital threats and promote ethical technology use."
            decorative={true}
            centered={true}
          />
        </motion.div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative lg:col-span-5"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-70 -z-10 dark:from-blue-500/10 dark:to-blue-600/10"></div>
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/5 backdrop-blur-sm perspective-1000"
              animate={{
                rotateY: isHovering ? 5 : 0,
                rotateX: isHovering ? -5 : 0,
                transition: { duration: 0.5 }
              }}
            >
              <Image 
                src="/images/about/team-image.svg" 
                alt="Information Warfare Foundation Team" 
                width={800}
                height={500}
                className="w-full h-auto transition-transform duration-700 ease-out"
                style={{ transform: isHovering ? 'scale(1.05)' : 'scale(1)' }}
                priority={true}
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6 grid grid-cols-2 gap-4">
                <StatCounter 
                  value={500} 
                  label="Volunteers" 
                  icon={<Users className="h-5 w-5 text-blue-300" />} 
                />
                <StatCounter 
                  value={50} 
                  label="Partners" 
                  icon={<Award className="h-5 w-5 text-orange-300" />} 
                />
              </div>
              
              {/* Animated overlay elements */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="bg-black/40 backdrop-blur-md p-4 rounded-xl max-w-xs text-center">
                    <h3 className="text-white text-xl font-bold mb-2">Our Team</h3>
                    <p className="text-gray-200 text-sm">A diverse group of experts committed to securing India's digital landscape</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white px-5 py-3 rounded-xl shadow-xl z-20 flex items-center gap-2 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <Zap className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-bold">IW and AI</span>
            </motion.div>
            
            {/* Achievement Badge */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-600 to-green-700 text-white px-5 py-3 rounded-xl shadow-xl z-20 flex items-center gap-2 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <Award className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-bold">National Recognition</span>
            </motion.div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <motion.div 
              className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20 dark:border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              {/* Tabs Navigation */}
              <div className="flex space-x-1 mb-6 bg-gray-100 dark:bg-gray-700/30 p-1 rounded-lg">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      activeTab === index 
                        ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm" 
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="relative min-h-[120px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {activeTab === 0 && (
                      <p>
                        The <span className="font-semibold text-blue-600 dark:text-blue-400">Information Warfare Foundation (IWF)</span> stands at the forefront of India's digital defense, 
                        combining cutting-edge research with grassroots advocacy to address the most pressing 
                        challenges in our increasingly connected world.
                      </p>
                    )}
                    
                    {activeTab === 1 && (
                      <p>
                        Our <span className="font-semibold text-green-600 dark:text-green-400">interdisciplinary team of experts</span> works alongside government agencies, educational 
                        institutions, and community organizations to build a safer, more equitable digital ecosystem 
                        for all Indians.
                      </p>
                    )}
                    
                    {activeTab === 2 && (
                      <p>
                        Through <span className="font-semibold text-purple-600 dark:text-purple-400">strategic partnerships and innovative programs</span>, we've reached over 100,000 citizens, trained 5,000+ professionals, and influenced policy decisions at both state and national levels.
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 mt-8"
              >
                <Button asChild variant="gradient" size="lg" className="group relative overflow-hidden">
                  <Link href="/about">
                    <span className="relative z-10 flex items-center">
                      Discover Our Impact
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="group relative overflow-hidden">
                  <Link href="/volunteer">
                    <span className="relative z-10 flex items-center">
                      Join Our Mission
                      <Users className="ml-2 h-4 w-4" />
                    </span>
                    <span className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Key Initiatives */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            <span className="relative inline-block">
              Our Key Initiatives
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></span>
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KeyInitiative 
              icon={<Shield className="h-10 w-10 text-blue-500" />}
              title="Digital Defense"
              description="Combating misinformation and cybercrime through advanced detection systems"
              delay={0.1}
              color="blue"
            />
            <KeyInitiative 
              icon={<Globe className="h-10 w-10 text-green-500" />}
              title="Digital Literacy"
              description="Empowering citizens with critical skills for the information age"
              delay={0.2}
              color="green"
            />
            <KeyInitiative 
              icon={<Cpu className="h-10 w-10 text-purple-500" />}
              title="Ethical AI"
              description="Promoting responsible development and deployment of artificial intelligence"
              delay={0.3}
              color="purple"
            />
            <KeyInitiative 
              icon={<Recycle className="h-10 w-10 text-emerald-500" />}
              title="E-Waste Management"
              description="Pioneering sustainable solutions for electronic waste"
              delay={0.4}
              color="emerald"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function KeyInitiative({ 
  icon, 
  title, 
  description, 
  delay = 0,
  color = "blue"
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  delay?: number,
  color?: "blue" | "green" | "purple" | "emerald"
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  const colorClasses = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800",
      glow: "from-blue-400/20 to-blue-500/20 dark:from-blue-400/10 dark:to-blue-500/10",
      icon: "bg-blue-100 dark:bg-blue-800/50"
    },
    green: {
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800",
      glow: "from-green-400/20 to-green-500/20 dark:from-green-400/10 dark:to-green-500/10",
      icon: "bg-green-100 dark:bg-green-800/50"
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-800",
      glow: "from-purple-400/20 to-purple-500/20 dark:from-purple-400/10 dark:to-purple-500/10",
      icon: "bg-purple-100 dark:bg-purple-800/50"
    },
    emerald: {
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-200 dark:border-emerald-800",
      glow: "from-emerald-400/20 to-emerald-500/20 dark:from-emerald-400/10 dark:to-emerald-500/10",
      icon: "bg-emerald-100 dark:bg-emerald-800/50"
    }
  };
  
  return (
    <motion.div 
      className={`flex flex-col items-center text-center p-6 rounded-2xl ${colorClasses[color].bg} backdrop-blur-sm shadow-lg border ${colorClasses[color].border} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${colorClasses[color].glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className={`mb-4 p-4 rounded-full ${colorClasses[color].icon} transform transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
            Learn more
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function StatCounter({ value, label, icon }: { value: number, label: string, icon: React.ReactNode }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(value * progress);
      
      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(value);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [value]);
  
  return (
    <motion.div 
      className="bg-black/40 backdrop-blur-sm p-3 rounded-lg flex items-center gap-3"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xl font-bold text-white">{count}+</div>
        <div className="text-xs text-gray-300">{label}</div>
      </div>
    </motion.div>
  );
} 