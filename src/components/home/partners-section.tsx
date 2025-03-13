"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import Link from "next/link";
import { ArrowRight, ExternalLink, Globe, Shield, Database, Lock, Users, BadgeAlert, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Partner data with logos, links and icons
const partners = [
  { 
    id: 1, 
    name: "Ministry of Electronics & IT", 
    logo: "/images/partners/meity-official.svg",
    url: "https://www.meity.gov.in/",
    description: "Government body overseeing electronics and IT policy in India",
    icon: Globe,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    achievements: [
      "Joint cybersecurity awareness programs",
      "Policy consultation on digital literacy",
      "Collaborative research initiatives"
    ]
  },
  { 
    id: 2, 
    name: "CERT-In", 
    logo: "/images/partners/cert-in-official.svg",
    url: "https://www.cert-in.org.in/",
    description: "Indian Computer Emergency Response Team",
    icon: Shield,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    achievements: [
      "Threat intelligence sharing",
      "Incident response coordination",
      "Security advisory development"
    ]
  },
  { 
    id: 3, 
    name: "National Cybersecurity Centre", 
    logo: "/images/partners/ncsc-official.svg",
    url: "https://ncsc.gov.in/",
    description: "Coordinating cybersecurity initiatives across India",
    icon: Lock,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    achievements: [
      "Critical infrastructure protection",
      "Cybersecurity standards development",
      "National security coordination"
    ]
  },
  { 
    id: 4, 
    name: "Data Security Council of India", 
    logo: "/images/partners/dsci-official.svg",
    url: "https://www.dsci.in/",
    description: "Industry body focused on data protection standards",
    icon: Database,
    color: "text-teal-600",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-800",
    achievements: [
      "Data privacy framework collaboration",
      "Industry best practices development",
      "Corporate training programs"
    ]
  },
  { 
    id: 5, 
    name: "Internet Freedom Foundation", 
    logo: "/images/partners/iff-official.svg",
    url: "https://internetfreedom.in/",
    description: "Advocating for digital rights and internet freedom",
    icon: Users,
    color: "text-violet-600",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
    borderColor: "border-violet-200 dark:border-violet-800",
    achievements: [
      "Digital rights advocacy campaigns",
      "Policy research on internet freedom",
      "Public awareness initiatives"
    ]
  },
  { 
    id: 6, 
    name: "Odisha Police Cyber Cell", 
    logo: "/images/partners/odisha-police-official.svg",
    url: "https://odishapolice.gov.in/",
    description: "Specialized unit handling cybercrime in Odisha",
    icon: BadgeAlert,
    color: "text-blue-700",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    achievements: [
      "Cybercrime investigation support",
      "Law enforcement training programs",
      "Community outreach initiatives"
    ]
  },
];

export function PartnersSection() {
  const [activePartner, setActivePartner] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url('/patterns/circuit-board.svg')", 
          backgroundSize: "100px 100px" 
        }}></div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 right-0 text-blue-100 dark:text-blue-900/20 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M47.1,-57.8C59.5,-47.8,67.6,-31.5,71.5,-14.1C75.4,3.3,75.2,21.8,67.1,35.7C59,49.5,43,58.8,25.9,65.2C8.8,71.7,-9.5,75.3,-28.2,71.2C-46.9,67.1,-65.9,55.3,-74.4,38.3C-82.9,21.3,-80.8,-0.9,-73.2,-19.9C-65.5,-38.9,-52.2,-54.7,-37,-63.1C-21.8,-71.5,-4.6,-72.5,11.2,-69.1C27,-65.7,34.7,-67.9,47.1,-57.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Our Partners & Collaborators"
          subtitle="We work closely with government agencies, private organizations, and NGOs to create a safer digital environment for all."
          centered={true}
          decorative={true}
        />
        
        {/* Partner Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mt-10 mb-12"
        >
          <button 
            onClick={() => setActivePartner(null)} 
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activePartner === null 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            All Partners
          </button>
          {['Government', 'Security', 'Research', 'Advocacy'].map((category, index) => (
            <button 
              key={category}
              onClick={() => setActivePartner(index + 1)} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activePartner === index + 1 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-8"
        >
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            
            // Skip if filtering is active and this isn't the active partner
            if (activePartner !== null && activePartner !== index + 1) {
              return null;
            }
            
            return (
              <motion.div 
                key={partner.id} 
                className="flex"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
                layoutId={`partner-${partner.id}`}
              >
                <div className="w-full group relative">
                  <div className={`absolute inset-0 ${partner.bgColor} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
                  
                  <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl h-full w-full flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${partner.borderColor} group-hover:border-opacity-100 dark:border-opacity-50`}>
                    {/* Partner Icon */}
                    <div className={`absolute top-4 right-4 ${partner.color} dark:opacity-80`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    
                    {/* Logo Container */}
                    <div className={`relative h-32 w-full flex items-center justify-center mb-4 ${partner.bgColor} bg-opacity-50 dark:bg-opacity-20 rounded-lg p-5 overflow-hidden`}>
                      {/* Background Pattern for Logo */}
                      <div className="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <pattern id={`grid-pattern-${partner.id}`} patternUnits="userSpaceOnUse" width="10" height="10">
                              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill={`url(#grid-pattern-${partner.id})`} />
                        </svg>
                      </div>
                      
                      {/* Logo Image */}
                      <div className="relative z-10 w-full h-full flex items-center justify-center">
                        {/* Ministry of Electronics & IT */}
                        {partner.id === 1 ? (
                          <div className="relative w-full h-full flex flex-col items-center justify-center">
                            <Image 
                              src={partner.logo} 
                              alt={partner.name} 
                              width={160}
                              height={80}
                              className="object-contain max-h-[80%] transition-transform duration-500 group-hover:scale-110 drop-shadow"
                              priority={true}
                              quality={100}
                              unoptimized={true}
                            />
                            <div className="mt-1 text-[10px] text-center font-semibold text-blue-800 dark:text-blue-300">
                              Government of India
                            </div>
                          </div>
                        ) : 
                        /* CERT-In */
                        partner.id === 2 ? (
                          <div className="relative w-full h-full flex flex-col items-center justify-center">
                            <Image 
                              src={partner.logo} 
                              alt={partner.name} 
                              width={170}
                              height={85}
                              className="object-contain max-h-[85%] transition-transform duration-500 group-hover:scale-110 drop-shadow"
                              priority={true}
                              quality={100}
                              unoptimized={true}
                            />
                            <div className="mt-1 text-[10px] text-center font-semibold text-indigo-700 dark:text-indigo-300">
                              Computer Emergency Response Team
                            </div>
                          </div>
                        ) : 
                        /* National Cybersecurity Centre */
                        partner.id === 3 ? (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="relative">
                              <Image 
                                src={partner.logo} 
                                alt={partner.name} 
                                width={180}
                                height={90}
                                className="object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow"
                                priority={true}
                                quality={100}
                                unoptimized={true}
                              />
                              <div className="absolute -bottom-1 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
                            </div>
                          </div>
                        ) : 
                        /* Data Security Council of India */
                        partner.id === 4 ? (
                          <div className="relative w-full h-full flex flex-col items-center justify-center">
                            <div className="text-[10px] uppercase tracking-wider text-center font-semibold text-teal-700 dark:text-teal-300 mb-1">
                              Official Partner
                            </div>
                            <Image 
                              src={partner.logo} 
                              alt={partner.name} 
                              width={160}
                              height={80}
                              className="object-contain max-h-[75%] transition-transform duration-500 group-hover:scale-110 drop-shadow"
                              priority={index < 3}
                              quality={100}
                              unoptimized={true}
                            />
                          </div>
                        ) : 
                        /* Internet Freedom Foundation */
                        partner.id === 5 ? (
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="relative p-1 rounded-full bg-gradient-to-r from-violet-100 to-violet-50 dark:from-violet-900/30 dark:to-violet-800/20">
                              <Image 
                                src={partner.logo} 
                                alt={partner.name} 
                                width={150}
                                height={75}
                                className="object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow"
                                priority={index < 3}
                                quality={100}
                                unoptimized={true}
                              />
                            </div>
                          </div>
                        ) : 
                        /* Odisha Police Cyber Cell */
                        (
                          <div className="relative w-full h-full flex flex-col items-center justify-center">
                            <Image 
                              src={partner.logo} 
                              alt={partner.name} 
                              width={160}
                              height={80}
                              className="object-contain max-h-[80%] transition-transform duration-500 group-hover:scale-110 drop-shadow"
                              priority={index < 3}
                              quality={100}
                              unoptimized={true}
                            />
                            <div className="mt-1 text-[10px] text-center font-semibold text-blue-700 dark:text-blue-300">
                              Law Enforcement Partner
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 blur-md transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className={`text-base font-semibold ${partner.color} mb-2 transition-colors`}>
                        {partner.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {partner.description}
                      </p>
                      
                      {/* Key Achievements */}
                      <div className="mt-2 space-y-2">
                        {partner.achievements.map((achievement, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 + (i * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start text-xs"
                          >
                            <CheckCircle className={`h-3.5 w-3.5 ${partner.color} mr-1.5 mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href={partner.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm ${partner.color} font-medium mt-auto pt-3 border-t border-gray-100 dark:border-gray-700 group-hover:border-opacity-50`}
                    >
                      <span>Visit official website</span>
                      <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 px-8 py-5 rounded-xl border border-blue-100 dark:border-blue-800/30 shadow-md">
            <p className="text-gray-700 dark:text-gray-300 flex items-center justify-center flex-wrap gap-2">
              <span>Interested in partnering with us?</span>
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center group">
                Get in touch
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 