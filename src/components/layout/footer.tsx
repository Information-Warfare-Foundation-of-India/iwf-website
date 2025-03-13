"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronRight, Globe, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white">
      {/* PREMIUM INDIA BRANDING SECTION - ENHANCED */}
      <div className="relative overflow-hidden">
        {/* Tricolor band with enhanced shine effect */}
        <div className="flex h-[28px] relative">
          <div className="w-1/3 bg-gradient-to-b from-[#FF9933] to-[#FF8800] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full animate-[shine_3s_ease-in-out_infinite]"></div>
          </div>
          <div className="w-1/3 bg-gradient-to-b from-white to-[#f0f0f0] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full animate-[shine_3s_ease-in-out_infinite_0.5s]"></div>
          </div>
          <div className="w-1/3 bg-gradient-to-b from-[#138808] to-[#0e6e06] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full animate-[shine_3s_ease-in-out_infinite_1s]"></div>
          </div>
        </div>
        
        {/* Premium branding text with enhanced styling */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gray-900/90 px-10 py-2.5 rounded-full border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            <p className="text-base md:text-lg font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">
              सत्यमेव जयते
            </p>
          </div>
        </div>
        
        {/* Enhanced Ashoka Chakra elements on sides */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:block">
          <div className="w-6 h-6 rounded-full border-2 border-[#0000CD]/80 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-[#0000CD]/80 flex items-center justify-center">
              <div className="w-1 h-1 bg-[#0000CD]/80 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block">
          <div className="w-6 h-6 rounded-full border-2 border-[#0000CD]/80 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border border-[#0000CD]/80 flex items-center justify-center">
              <div className="w-1 h-1 bg-[#0000CD]/80 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced secondary branding bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-3 text-center border-b border-gray-700 relative overflow-hidden">
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="india-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0,20 L40,20 M20,0 L20,40" stroke="white" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#india-pattern)" />
          </svg>
        </div>
        
        {/* Enhanced Proudly Indian text with tricolor accents */}
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"></div>
          <p className="text-sm md:text-base font-bold tracking-[0.3em] text-white uppercase">
            Proudly Indian
          </p>
          <div className="w-12 h-[2px] bg-gradient-to-r from-[#138808] via-white to-[#FF9933]"></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#800020] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#800020] opacity-5 rounded-full blur-3xl"></div>
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="footer-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 pt-16 pb-12 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-3"
          >
            <div className="mb-6">
              <div className="flex items-center mb-6">
              <Image 
                src="/images/logo.svg" 
                alt="IWF Logo" 
                  width={160} 
                  height={55}
                />
                <div className="ml-3 flex flex-col h-14 w-[7px] overflow-hidden rounded-sm">
                  <div className="flex-1 bg-[#FF9933]"></div>
                  <div className="flex-1 bg-white"></div>
                  <div className="flex-1 bg-[#138808]"></div>
                </div>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-[#800020] to-transparent mb-6"></div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                The Information Warfare Foundation of India (IWF) is dedicated to empowering India 
                in the digital age through cybersecurity research, ethical AI advocacy, and 
                combating misinformation to build a safer digital ecosystem.
              </p>
            </div>
            
            <div className="flex items-center space-x-1 mb-6">
              <SocialLink href="#" icon={<Facebook className="h-4 w-4" />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter className="h-4 w-4" />} label="Twitter" />
              <SocialLink href="#" icon={<Instagram className="h-4 w-4" />} label="Instagram" />
              <SocialLink href="#" icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30">
              <div className="flex items-center mb-3">
                <div className="w-6 h-5 mr-2 relative overflow-hidden rounded-sm">
                  <div className="absolute inset-0 flex flex-col">
                    <div className="h-1/3 bg-[#FF9933]"></div>
                    <div className="h-1/3 bg-white"></div>
                    <div className="h-1/3 bg-[#138808]"></div>
                  </div>
                </div>
                <p className="text-xs text-gray-400">Recognized by the Government of India</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-8 bg-[#FF9933] rounded-full mr-3"></div>
                  <p className="text-sm text-gray-300">NITI Aayog ID: <span className="text-white">OR/2024/0469999</span></p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-8 bg-white/80 rounded-full mr-3"></div>
                  <p className="text-sm text-gray-300">TAN: <span className="text-white">BBNI01855A</span></p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-8 bg-[#138808] rounded-full mr-3"></div>
                  <p className="text-sm text-gray-300">PAN: <span className="text-white">AACTI3832N</span></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-2"
          >
            <h3 className="text-white font-medium mb-4 text-lg relative inline-block">
              Quick Links
              {/* Small tricolor underline */}
              <div className="absolute -bottom-1 left-0 w-8 h-[2px] flex">
                <div className="flex-1 bg-[#FF9933]"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-[#138808]"></div>
              </div>
            </h3>
            <ul className="space-y-2">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/about">About Us</FooterLink></li>
              <li><FooterLink href="/services">Services</FooterLink></li>
              <li><FooterLink href="/projects">Projects</FooterLink></li>
              <li><FooterLink href="/case-studies">Case Studies</FooterLink></li>
              <li><FooterLink href="/volunteer">Volunteer</FooterLink></li>
              <li><FooterLink href="/donate">Donate</FooterLink></li>
              <li><FooterLink href="/blog">Blog</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-3"
          >
            <h3 className="text-white font-medium mb-4 text-lg relative inline-block">
              Our Services
              {/* Small tricolor underline */}
              <div className="absolute -bottom-1 left-0 w-8 h-[2px] flex">
                <div className="flex-1 bg-[#FF9933]"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-[#138808]"></div>
              </div>
            </h3>
            <ul className="space-y-2">
              <li><FooterLink href="/services#information-warfare">Information Warfare & AI Threats</FooterLink></li>
              <li><FooterLink href="/services#cybersecurity">Cybersecurity & Fraud Prevention</FooterLink></li>
              <li><FooterLink href="/services#investigative-media">Investigative Media</FooterLink></li>
              <li><FooterLink href="/services#research">Research & Development</FooterLink></li>
              <li><FooterLink href="/services#digital-literacy">Digital Literacy Programs</FooterLink></li>
              <li><FooterLink href="/services#e-waste">E-Waste Management</FooterLink></li>
              <li><FooterLink href="/services#policy">Policy Advocacy</FooterLink></li>
              <li><FooterLink href="/services#corporate">Corporate Training</FooterLink></li>
              <li><FooterLink href="/services#threat-intelligence">Threat Intelligence</FooterLink></li>
              <li><FooterLink href="/services#awareness">Awareness Campaigns</FooterLink></li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-4 lg:col-span-1"
          >
            <h3 className="text-white font-medium mb-4 text-lg relative inline-block">
              Contact Us
              {/* Small tricolor underline */}
              <div className="absolute -bottom-1 left-0 w-8 h-[2px] flex">
                <div className="flex-1 bg-[#FF9933]"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-[#138808]"></div>
              </div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#800020] mr-3 mt-0.5" />
                <p className="text-sm text-gray-300">Rajkanika, Kendrapara, Odisha, India, 754220</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#800020] mr-3" />
                <a href="tel:+918339006000" className="text-sm text-gray-300 hover:text-white transition-colors">
                  +91 833 900 6000
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#800020] mr-3" />
                <a href="mailto:info@iwf.org.in" className="text-sm text-gray-300 hover:text-white transition-colors">
                  info@iwf.org.in
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Donate Now Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-3"
          >
            <h3 className="text-white font-medium mb-4 text-lg relative inline-block">
              Support Us
              {/* Small tricolor underline */}
              <div className="absolute -bottom-1 left-0 w-8 h-[2px] flex">
                <div className="flex-1 bg-[#FF9933]"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-[#138808]"></div>
              </div>
            </h3>
            <div className="text-center">
              <div className="bg-gradient-to-b from-white to-gray-100 p-5 rounded-lg inline-block shadow-lg relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FF9933]/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#138808]/10 to-transparent rounded-tr-full"></div>
                
                {/* QR Code with enhanced styling - LARGER SIZE FOR BETTER SCANNING */}
                <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200 relative shadow-sm">
                  <div className="w-36 h-36 bg-white rounded flex items-center justify-center relative">
                    {/* QR Code corners - ICICI Bank colors */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#F37E20]"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#F37E20]"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#F37E20]"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#F37E20]"></div>
                    
                    {/* ICICI Bank QR Code */}
                    <Image 
                      src="/images/payment/icici-upi-qr.png" 
                      alt="ICICI Bank UPI QR Code" 
                      width={130} 
                      height={130}
                      className="rounded-sm"
                      onError={(e) => {
                        // Fallback if image is not found
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-28 h-28 bg-gray-100 rounded flex items-center justify-center';
                          fallback.innerHTML = '<p class="text-xs text-gray-500 text-center px-2">UPI QR Code<br/>Coming Soon</p>';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                </div>
                
                {/* Tricolor separator */}
                <div className="my-3 h-[2px] w-full flex">
                  <div className="flex-1 bg-[#FF9933]"></div>
                  <div className="flex-1 bg-white"></div>
                  <div className="flex-1 bg-[#138808]"></div>
                </div>
                
                {/* Larger, more prominent Donate button */}
                <button className="w-full bg-[#800020] hover:bg-[#800020]/90 text-white text-sm py-2.5 px-4 rounded-md transition-colors font-medium flex items-center justify-center group">
                  <span>Donate Now</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              
              {/* Enhanced donation information with LARGER UPI ID */}
              <div className="mt-3 space-y-2">
                <p className="text-sm text-gray-300">Support our mission</p>
                
                {/* Larger, more visible UPI ID with ICICI branding */}
                <div className="bg-white/10 backdrop-blur-sm rounded-md py-2 px-3 border border-white/20">
                  {/* ICICI Bank branding */}
                  <div className="flex items-center justify-center mb-2 bg-white/90 py-1.5 px-2 rounded">
                    <Image 
                      src="/images/payment/icici-bank-logo.png" 
                      alt="ICICI Bank" 
                      width={80} 
                      height={20}
                      className="h-auto"
                    />
                  </div>
                  
                  <p className="text-xs font-medium text-white mb-1">UPI ID:</p>
                  <div className="bg-white/90 rounded py-1.5 px-2 flex items-center justify-center">
                    <p className="text-sm font-bold text-[#800020]">donate.iwf@icici</p>
                  </div>
                </div>
                
                {/* Payment methods with UPI logo */}
                <div className="flex items-center justify-center mt-2 space-x-3">
                  <div className="flex items-center">
                    <Image 
                      src="/images/payment/upi.svg" 
                      alt="UPI" 
                      width={16} 
                      height={16}
                      className="mr-1"
                    />
                    <p className="text-[10px] text-gray-400">UPI Payment</p>
                  </div>
                  <div className="h-3 w-px bg-gray-700"></div>
                  <p className="text-[10px] text-gray-400">Tax-deductible under Section 80G</p>
                </div>
                
                {/* Secure payment message */}
                <div className="flex items-center justify-center mt-1 bg-[#F37E20]/5 py-1 px-2 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#F37E20] mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-[10px] text-gray-400">Secured by <span className="text-[#F37E20] font-medium">ICICI Bank</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar with tricolor border */}
        <div className="mt-16 pt-6 border-t border-gray-800 relative">
          {/* Thin tricolor line above the border */}
          <div className="absolute top-0 left-0 w-full h-[2px] flex">
            <div className="flex-1 bg-[#FF9933]"></div>
            <div className="flex-1 bg-white"></div>
            <div className="flex-1 bg-[#138808]"></div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Information Warfare Foundation of India. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/privacy-policy" className="text-xs text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-xs text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="text-xs text-gray-400 hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced bottom footer section with Bharat Ganatantra dedication */}
      <div className="border-t border-gray-800 pt-10 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center">
            {/* Enhanced Bharat Ganatantra dedication */}
            <div className="mb-8 text-center">
              <div className="inline-block relative bg-gradient-to-b from-gray-800/50 to-transparent p-6 rounded-2xl backdrop-blur-sm">
                {/* Decorative Ashoka Chakra with spokes */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 rounded-full border-2 border-[#0000CD]/60 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full border border-[#0000CD]/60 flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#0000CD]/80 rounded-full"></div>
                    </div>
                    {/* Spokes */}
                    {[...Array(24)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute w-[1px] h-4 bg-[#0000CD]/60 origin-bottom"
                        style={{ 
                          left: '50%',
                          top: '0%',
                          transform: `translateX(-50%) rotate(${i * 15}deg) translateY(-25%)`,
                          opacity: i % 2 === 0 ? 0.8 : 0.5
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Tricolor accents */}
                <div className="flex justify-center mb-4 mt-2">
                  <div className="flex h-[3px] w-32">
                    <div className="flex-1 bg-[#FF9933]"></div>
                    <div className="flex-1 bg-white"></div>
                    <div className="flex-1 bg-[#138808]"></div>
                  </div>
                </div>
                
                {/* Enhanced dedication text */}
                <div className="mb-2">
                  <p className="text-sm font-medium tracking-wider text-gray-300 mb-1">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">Proudly Dedicated to</span>
                  </p>
                  <p className="text-xl font-bold tracking-wide text-white mb-1">भारत गणतंत्र</p>
                  <p className="text-sm text-gray-400">(Bharat Ganatantra)</p>
                </div>
                
                <p className="text-xs text-gray-500 italic mt-2">
                  "For the Republic of India and its Democratic Values"
                </p>
              </div>
            </div>
            
            {/* Enhanced copyright with tricolor accent - removed copyright text */}
            <div className="flex flex-col items-center">
              <div className="flex h-[2px] w-16 mb-3">
                <div className="flex-1 bg-[#FF9933]"></div>
                <div className="flex-1 bg-white"></div>
                <div className="flex-1 bg-[#138808]"></div>
              </div>
              {/* Copyright text removed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <Link 
      href={href} 
      className="w-8 h-8 rounded-full bg-gray-800/50 hover:bg-[#800020] flex items-center justify-center transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
      <Link 
        href={href} 
      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
      >
      <ChevronRight className="h-3 w-3 mr-2 text-gray-600 group-hover:text-[#800020] transition-colors duration-200" />
      <span>{children}</span>
      </Link>
  );
} 