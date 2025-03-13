"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Gift, BookOpen, Share2, ShieldAlert, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background with enhanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-700 via-orange-600 to-orange-700"></div>
      
      {/* Modern geometric patterns with improved visibility */}
      <div className="absolute inset-0 opacity-15">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.8" opacity="0.7" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Animated blobs with improved visibility */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full opacity-25 blur-3xl"
          animate={{ 
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-[15%] w-96 h-96 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full opacity-25 blur-3xl"
          animate={{ 
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left content column - takes 7/12 on large screens */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-5 py-2.5 mb-8 bg-white/15 backdrop-blur-sm rounded-full border border-white/40 shadow-lg"
            >
              <div className="w-3 h-3 rounded-full bg-orange-200 mr-3 animate-pulse"></div>
              <span className="text-white font-semibold tracking-wide">Join Our Community</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join the Movement to <span className="text-orange-100 drop-shadow-md">Secure India's Digital Future</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-12 text-orange-50 max-w-2xl leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Whether you're a cybersecurity expert, researcher, student, or concerned citizen, 
              there are many ways to contribute to our mission. Join our growing community of 
              volunteers and make a difference today.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild size="xl" 
                className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 
                text-white font-bold py-6 px-8 rounded-xl shadow-[0_4px_14px_0_rgba(255,153,0,0.39)] 
                hover:shadow-[0_6px_20px_rgba(255,153,0,0.5)] transition-all duration-300 
                transform hover:translate-y-[-2px] active:translate-y-[1px] text-lg min-w-[220px]
                border-b-4 border-orange-600 hover:border-orange-700 group"
              >
                <Link href="/volunteer" className="flex items-center justify-center">
                  <span>Become a Volunteer</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button asChild size="xl" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/20 
                backdrop-blur-sm py-6 px-8 rounded-xl font-bold shadow-lg hover:shadow-xl 
                transition-all duration-300 transform hover:translate-y-[-2px] active:translate-y-[1px] 
                text-lg min-w-[220px] group"
              >
                <Link href="/donate" className="flex items-center justify-center">
                  <span>Support Our Mission</span>
                  <ArrowRight className="ml-2 h-5 w-5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right content column - takes 5/12 on large screens */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-md p-10 rounded-2xl border-2 border-white/30 shadow-2xl">
              <h3 className="text-2xl font-bold mb-10 text-center text-white">Ways to Get Involved</h3>
              
              <div className="space-y-6">
                {[
                  { icon: <Users className="h-6 w-6" />, text: "Volunteer your skills and expertise" },
                  { icon: <Gift className="h-6 w-6" />, text: "Donate to support our initiatives" },
                  { icon: <BookOpen className="h-6 w-6" />, text: "Attend our training programs" },
                  { icon: <Share2 className="h-6 w-6" />, text: "Spread awareness in your community" },
                  { icon: <ShieldAlert className="h-6 w-6" />, text: "Report digital threats and scams" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center p-4 rounded-xl hover:bg-white/20 transition-colors duration-200 cursor-pointer group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-full w-14 h-14 flex items-center justify-center mr-5 shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <div className="text-orange-700">
                        {item.icon}
                      </div>
                    </div>
                    <span className="text-lg flex-1 font-medium text-white">{item.text}</span>
                    <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-orange-200" />
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                viewport={{ once: true }}
              >
                <Button asChild
                  className="bg-gradient-to-r from-white to-orange-100 text-orange-700 
                  hover:from-orange-50 hover:to-white w-full group rounded-xl font-bold
                  shadow-xl hover:shadow-2xl transition-all duration-300 text-lg py-6
                  border-b-4 border-orange-200 hover:border-orange-300 transform 
                  hover:translate-y-[-2px] active:translate-y-[1px]"
                >
                  <Link href="/contact" className="flex items-center justify-center">
                    <span>Get in Touch</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 