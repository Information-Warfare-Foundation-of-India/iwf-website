"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, FileText } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/patterns/circuit-board.svg')", backgroundSize: "cover" }}></div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-[10%] w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-[15%] w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-xl"
          animate={{ 
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-[40%] right-[30%] w-16 h-16 bg-blue-300 rounded-full opacity-20 blur-xl"
          animate={{ 
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 bg-blue-700/50 backdrop-blur-sm rounded-full border border-blue-500/30"
            >
              <span className="text-blue-200 font-medium">Securing India's Digital Future</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Empowering India to Lead in the Digital Age
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-blue-100 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Combating misinformation, cybercrime, and unethical AI through research, 
              education, and advocacy.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button asChild size="xl" variant="gradientAccent" className="font-semibold">
                <Link href="/volunteer" className="group">
                  Become a Volunteer
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg blur opacity-30"></div>
              
              {/* New Generated Image */}
              <div className="relative rounded-lg shadow-2xl border border-white/10 overflow-hidden bg-blue-900/50">
                <img 
                  src="/images/hero/digital-security.svg" 
                  alt="Information Warfare Foundation - Cybersecurity and Digital Protection" 
                  className="w-full h-auto"
                />
                
                {/* Overlay with additional animated elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      opacity: [0.7, 0.9, 0.7],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-blue-700/10"
                  />
                  
                  {/* Small floating elements */}
                  <motion.div
                    className="absolute top-10 right-10 w-6 h-6 bg-orange-500 rounded-full opacity-70"
                    animate={{ 
                      y: [0, 10, 0],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.div
                    className="absolute bottom-10 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-70"
                    animate={{ 
                      y: [0, -10, 0],
                    }}
                    transition={{ 
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>
              
              {/* Small decorative element */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-lg shadow-lg z-10"
              >
                <Shield className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          <StatsCard icon={<Shield className="h-6 w-6 text-blue-300" />} value="500+" label="Volunteers Nationwide" />
          <StatsCard icon={<FileText className="h-6 w-6 text-blue-300" />} value="50+" label="Research Publications" />
          <StatsCard icon={<Globe className="h-6 w-6 text-blue-300" />} value="100+" label="Training Programs" />
          <StatsCard icon={<Shield className="h-6 w-6 text-blue-300" />} value="20+" label="Partner Organizations" />
        </motion.div>
      </div>
    </section>
  );
}

function StatsCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:transform hover:-translate-y-1"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center space-x-4">
        <div className="bg-blue-900/50 p-3 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-3xl font-bold text-orange-400">{value}</p>
          <p className="text-sm mt-1 text-blue-100">{label}</p>
        </div>
      </div>
    </motion.div>
  );
} 