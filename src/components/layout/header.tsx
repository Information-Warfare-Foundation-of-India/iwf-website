"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, User, LogOut, ChevronDown, Search, Bell, X, Home, Info, Briefcase, Heart, Gift, FileText, Mail, Network } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAuth } from "@/lib/auth-context";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
  { name: "About", href: "/about", icon: <Info className="h-4 w-4" /> },
  { name: "Services", href: "/services", icon: <Briefcase className="h-4 w-4" /> },
  { name: "Projects", href: "/projects", icon: <Network className="h-4 w-4" /> },
  { name: "Case Studies", href: "/case-studies", icon: <FileText className="h-4 w-4" /> },
  { name: "Volunteer", href: "/volunteer", icon: <Heart className="h-4 w-4" /> },
  { name: "Donate", href: "/donate", icon: <Gift className="h-4 w-4" /> },
  { name: "Blog", href: "/blog", icon: <FileText className="h-4 w-4" /> },
  { name: "Contact", href: "/contact", icon: <Mail className="h-4 w-4" /> },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrolled]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth >= 768 && mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [mobileMenuOpen]);

  // Close menus when clicking outside
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (userMenuOpen && !target.closest('[data-user-menu]')) {
          setUserMenuOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [userMenuOpen]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 w-full",
        scrolled 
          ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)]" 
          : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
      )}
    >
      {/* Blue gradient top stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-[#800020] to-[#600010]"></div>
      
      {/* Background with tech pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <pattern id="techPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Circuit pattern */}
            <path d="M0,50 h20 M80,50 h20 M50,0 v20 M50,80 v20" stroke="#800020" strokeWidth="0.5" fill="none" opacity="0.5" />
            <circle cx="50" cy="50" r="2" fill="#800020" opacity="0.5" />
            
            {/* Digital nodes */}
            <circle cx="20" cy="20" r="1.5" fill="#800020" opacity="0.3" />
            <circle cx="80" cy="20" r="1.5" fill="#800020" opacity="0.3" />
            <circle cx="20" cy="80" r="1.5" fill="#800020" opacity="0.3" />
            <circle cx="80" cy="80" r="1.5" fill="#800020" opacity="0.3" />
            
            {/* Connection lines */}
            <line x1="20" y1="20" x2="50" y2="50" stroke="#800020" strokeWidth="0.3" opacity="0.3" />
            <line x1="80" y1="20" x2="50" y2="50" stroke="#800020" strokeWidth="0.3" opacity="0.3" />
            <line x1="20" y1="80" x2="50" y2="50" stroke="#800020" strokeWidth="0.3" opacity="0.3" />
            <line x1="80" y1="80" x2="50" y2="50" stroke="#800020" strokeWidth="0.3" opacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#techPattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20 relative">
        <div className="flex items-center">
          <Link href="/" className="flex items-center group relative">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative">
                <Image 
                  src="/images/logo.svg" 
                  alt="Information Warfare Foundation Logo" 
                  width={120} 
                  height={40} 
                  priority
                  unoptimized
                  className="transition-all duration-300 group-hover:scale-105 relative z-10"
                  onError={(e) => {
                    console.error('Error loading logo:', e);
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'font-audiowide text-2xl text-[#800020] font-bold';
                      fallback.textContent = 'iwf';
                      parent.appendChild(fallback);
                    }
                  }}
                />
                {/* Enhanced glow effect with burgundy gradient */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#800020]/20 to-[#600010]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-0"></div>
              </div>
            </motion.div>
          </Link>
          
          {/* Indian Flag - Desktop */}
          <div className="hidden md:flex ml-4 items-center">
            <div className="relative h-6 w-9 overflow-hidden rounded shadow-sm group">
              {/* Saffron stripe */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-[#FF9933]"></div>
              {/* White stripe */}
              <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-white flex items-center justify-center">
                <div className="h-full aspect-square relative">
                  <svg viewBox="0 0 24 24" className="h-full w-full text-[#000080] group-hover:animate-spin-slow" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 6L12 18" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M6 12L18 12" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M7.75736 7.75736L16.2426 16.2426" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M7.75736 16.2426L16.2426 7.75736" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
              {/* Green stripe */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#138808]"></div>
              {/* Subtle wave animation overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out animate-wave"></div>
            </div>
            <span className="ml-2 text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-burgundy">India</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="bg-gradient-to-r from-gray-100/90 to-gray-50/80 dark:from-gray-800/50 dark:to-gray-700/30 backdrop-blur-lg rounded-2xl p-1.5 mx-2 shadow-lg shadow-gray-200/20 dark:shadow-gray-900/30 border border-white/20 dark:border-gray-700/30">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="inline-block"
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center mx-1 group",
                      isActive 
                        ? "text-white bg-gradient-to-r from-[#800020] to-[#600010] shadow-md shadow-burgundy-500/20 dark:shadow-burgundy-500/10 scale-105" 
                        : "text-gray-700 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-gray-700/90 hover:shadow-sm"
                    )}
                  >
                    <span className={cn(
                      "mr-2 transition-transform duration-300 group-hover:scale-110",
                      isActive ? "text-white" : "text-gray-500 dark:text-gray-400"
                    )}>
                      {item.icon}
                    </span>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </nav>

        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
          <motion.button
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </motion.button>
          
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <ThemeToggle />
          </motion.div>
          
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="relative"
            data-user-menu
          >
            {user ? (
              <div className="relative">
                <Button 
                  variant="ghost" 
                  className="flex items-center space-x-2 bg-gradient-to-r from-gray-100/90 to-gray-50/80 dark:from-gray-800/50 dark:to-gray-700/30 backdrop-blur-lg hover:bg-white/90 dark:hover:bg-gray-700/90 rounded-xl px-3 py-2 h-auto transition-all duration-300 hover:shadow-md hover:scale-105 active:scale-95 border border-white/20 dark:border-gray-700/30"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#800020] to-[#600010] flex items-center justify-center text-white font-medium shadow-sm ring-2 ring-white dark:ring-gray-800">
                    {user.name.charAt(0)}
                  </div>
                  <span className="font-medium text-sm">{user.name.split(' ')[0]}</span>
                  <ChevronDown className={cn(
                    "h-4 w-4 opacity-70 transition-transform duration-300",
                    userMenuOpen ? "rotate-180" : ""
                  )} />
                </Button>
                
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div 
                      className="absolute right-0 mt-2 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-lg py-1 z-10 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden"
                      initial={{ opacity: 0, y: 10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: 10, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-[#800020]/10 to-transparent dark:from-[#800020]/20">
                        <div className="font-medium">Signed in as</div>
                        <div className="truncate text-gray-500 dark:text-gray-400">{user.email}</div>
                      </div>
                      <Link 
                        href="/profile" 
                        className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-colors group"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2 opacity-70 group-hover:text-[#800020] transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform duration-200">Your Profile</span>
                        </div>
                      </Link>
                      <Link 
                        href="/dashboard" 
                        className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-2 opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z" className="fill-current" />
                            <path d="M14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5Z" className="fill-current" />
                            <path d="M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z" className="fill-current" />
                            <path d="M14 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Z" className="fill-current" />
                          </svg>
                          Dashboard
                        </div>
                      </Link>
                      <div className="border-t border-gray-200/50 dark:border-gray-700/50 my-1"></div>
                      <button
                        className="w-full text-left px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50/80 dark:hover:bg-red-900/20 transition-colors group"
                        onClick={() => {
                          logout();
                          setUserMenuOpen(false);
                        }}
                      >
                        <div className="flex items-center">
                          <LogOut className="h-4 w-4 mr-2 opacity-70 group-hover:text-red-500 transition-colors" />
                          <span className="group-hover:translate-x-1 transition-transform duration-200">Sign Out</span>
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Button 
                asChild 
                className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#800020] hover:to-[#500010] text-white rounded-xl px-6 shadow-md hover:shadow-lg transition-all duration-300 border-0 hover:scale-105 active:scale-95"
              >
                <Link href="/auth">Sign In</Link>
              </Button>
            )}
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Indian Flag - Mobile */}
          <div className="flex items-center mr-1">
            <div className="relative h-5 w-7 overflow-hidden rounded shadow-sm group">
              {/* Saffron stripe */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-[#FF9933]"></div>
              {/* White stripe */}
              <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-white flex items-center justify-center">
                <div className="h-full aspect-square relative">
                  <svg viewBox="0 0 24 24" className="h-full w-full text-[#000080] group-hover:animate-spin-slow" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 6L12 18" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M6 12L18 12" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M7.75736 7.75736L16.2426 16.2426" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M7.75736 16.2426L16.2426 7.75736" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
              {/* Green stripe */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#138808]"></div>
              {/* Subtle wave animation overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out animate-wave"></div>
            </div>
            <span className="ml-1 text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-burgundy">India</span>
          </div>
          
          <button
            className="p-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className={cn(
              "text-gray-700 dark:text-gray-300 rounded-xl p-2.5 transition-all duration-300 hover:scale-105 active:scale-95",
              mobileMenuOpen 
                ? "bg-[#800020]/20 dark:bg-[#800020]/30 text-[#800020] dark:text-[#800020] rotate-90" 
                : "hover:bg-gray-100/80 dark:hover:bg-gray-800/80"
            )}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-gradient-to-b from-white/95 to-gray-50/90 dark:from-gray-900/95 dark:to-gray-800/90 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-800/50 shadow-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Blue gradient horizontal stripe */}
            <div className="h-0.5 w-full bg-gradient-to-r from-[#800020] to-[#600010]"></div>
            
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-1.5 py-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                        href={item.href}
                        className={cn(
                        "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center",
                          isActive 
                          ? "text-white bg-gradient-to-r from-[#800020] to-[#600010] shadow-md" 
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80"
                        )}
                        onClick={() => {
                          setMobileMenuOpen(false);
                        }}
                      >
                          <span className={cn(
                        "mr-3 transition-transform duration-300",
                        isActive ? "text-white" : "text-gray-500 dark:text-gray-400"
                          )}>
                            {item.icon}
                          </span>
                      {item.name}
                      </Link>
                  );
                })}
              </nav>
              
              {!user && (
                <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#800020] hover:to-[#500010] text-white rounded-xl py-5 shadow-md hover:shadow-lg transition-all duration-300 border-0"
                  >
                    <Link href="/auth">Sign In</Link>
                  </Button>
                    </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Search className="absolute left-5 top-5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-transparent border-0 border-b border-gray-200 dark:border-gray-700 py-5 pl-14 pr-12 focus:ring-0 focus:outline-none text-gray-700 dark:text-gray-300"
                  autoFocus
                />
                <button
                  className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  onClick={() => setSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Recent searches</div>
                <div className="space-y-2">
                  <div className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                    <div className="text-gray-700 dark:text-gray-300">Digital security</div>
                        </div>
                  <div className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
                    <div className="text-gray-700 dark:text-gray-300">Information warfare</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 