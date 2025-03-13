"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  dark?: boolean;
}

export function NewsletterSignup({
  title = "Subscribe to Our Newsletter",
  description = "Stay updated with the latest insights, research, and news on information warfare and cybersecurity.",
  dark = false,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address.");
      return;
    }
    
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be an API call to your newsletter service
      if (email.includes("@") && email.includes(".")) {
        setStatus("success");
        setMessage("Thank you for subscribing! Please check your email to confirm your subscription.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Please enter a valid email address.");
      }
    }, 1000);
  };

  return (
    <section className={`py-24 relative overflow-hidden ${dark ? "bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white" : "bg-gradient-to-r from-[#800020] to-[#600010] text-white"}`}>
      {/* Background Elements */}
      {dark ? (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/patterns/circuit-board.svg')", backgroundSize: "cover" }}></div>
          
          <motion.div 
            className="absolute top-20 left-[10%] w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"
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
            className="absolute bottom-20 right-[15%] w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-xl"
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
      ) : (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/patterns/circuit-board.svg')", backgroundSize: "cover" }}></div>
          
          <motion.div 
            className="absolute top-20 left-[10%] w-32 h-32 bg-[#800020] rounded-full opacity-20 blur-xl"
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
            className="absolute bottom-20 right-[15%] w-40 h-40 bg-[#600010] rounded-full opacity-20 blur-xl"
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
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className={`inline-flex p-3 rounded-full mb-6 ${dark ? "bg-white/10" : "bg-white/10"}`}>
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {status === "success" ? (
            <div className={`flex items-center justify-center p-6 mb-6 rounded-xl ${dark ? "bg-green-600/20" : "bg-green-600/20"}`}>
              <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
              <p className="text-white">{message}</p>
            </div>
          ) : status === "error" ? (
            <div className={`flex items-center justify-center p-6 mb-6 rounded-xl ${dark ? "bg-red-600/20" : "bg-red-600/20"}`}>
              <AlertCircle className="h-6 w-6 text-red-400 mr-3 flex-shrink-0" />
              <p className="text-white">{message}</p>
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="relative flex-grow max-w-md mx-auto sm:mx-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className={`w-full px-5 py-4 rounded-xl focus:ring-2 transition-all duration-300 ${
                  dark 
                    ? "border-blue-600 bg-white/10 text-white placeholder-blue-200 focus:bg-white/20 focus:ring-blue-500 border" 
                    : "border-[#800020] bg-white/10 text-white placeholder-white/70 focus:bg-white/20 focus:ring-[#800020] border"
                }`}
                disabled={status === "loading"}
              />
            </div>
            <Button 
              type="submit" 
              variant={dark ? "accent" : "maroon"}
              size="lg"
              disabled={status === "loading"}
              className="group"
            >
              {status === "loading" ? "Subscribing..." : (
                <>
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>
          
          <p className="text-sm mt-4 text-center text-white/80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 