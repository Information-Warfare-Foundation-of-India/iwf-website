"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Message = {
  text: string;
  isBot: boolean;
  options?: string[];
};

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Welcome to IWF Support! How can I assist you today?",
      isBot: true,
      options: ["Information Warfare", "Cybersecurity", "Training Programs", "Other Inquiry"]
    }
  ]);
  const [userInput, setUserInput] = useState("");
  const phoneNumber = "+918339006000";

  const handleOptionClick = (option: string) => {
    // Add user's selection to chat
    setMessages(prev => [...prev, { text: option, isBot: false }]);

    // Bot's response based on selection
    let botResponse: Message = {
      text: "",
      isBot: true,
      options: []
    };

    switch (option) {
      case "Information Warfare":
        botResponse = {
          text: "Our Information Warfare services include threat analysis, defense strategies, and digital sovereignty solutions. Would you like to discuss this with our expert?",
          isBot: true,
          options: ["Start WhatsApp Chat", "Learn More"]
        };
        break;
      case "Cybersecurity":
        botResponse = {
          text: "We offer comprehensive cybersecurity solutions including security audits, incident response, and cyber defense training. Shall we connect you with our security expert?",
          isBot: true,
          options: ["Start WhatsApp Chat", "Learn More"]
        };
        break;
      case "Training Programs":
        botResponse = {
          text: "IWF provides specialized training in cybersecurity, information warfare, and digital defense. Would you like to know more about our programs?",
          isBot: true,
          options: ["Start WhatsApp Chat", "Learn More"]
        };
        break;
      case "Other Inquiry":
        botResponse = {
          text: "I'll connect you with our team for personalized assistance. Would you like to start a WhatsApp chat?",
          isBot: true,
          options: ["Start WhatsApp Chat", "No, thanks"]
        };
        break;
      case "Start WhatsApp Chat":
        handleWhatsAppClick(option);
        botResponse = {
          text: "Opening WhatsApp... You'll be connected to our expert team shortly.",
          isBot: true
        };
        break;
      case "Learn More":
        botResponse = {
          text: "I can provide more detailed information. What specific aspect would you like to know about?",
          isBot: true,
          options: ["Services & Solutions", "Pricing", "Start WhatsApp Chat"]
        };
        break;
      default:
        botResponse = {
          text: "Would you like to discuss this with our expert team on WhatsApp?",
          isBot: true,
          options: ["Start WhatsApp Chat", "No, thanks"]
        };
    }

    // Add bot's response after a short delay
    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const handleWhatsAppClick = (context?: string) => {
    let message = "Hello! I would like to know more about IWF's services";
    if (context && context !== "Start WhatsApp Chat") {
      message += ` regarding ${context}.`;
    }
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: userInput, isBot: false }]);
    setUserInput("");

    // Add bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Would you like to discuss this with our expert team on WhatsApp?",
        isBot: true,
        options: ["Start WhatsApp Chat", "No, thanks"]
      }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Chat Window */}
      <div
        className={cn(
          "absolute bottom-20 left-0 w-80 bg-white rounded-lg shadow-xl transform transition-all duration-300",
          "border border-gray-200",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#800020] to-[#600010] p-4 rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <Image
                src="/images/logo.svg"
                alt="IWF Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">IWF Support</h3>
              <p className="text-white/80 text-sm">Online | Quick Response</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 bg-gray-50 h-80 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={cn("flex flex-col", !message.isBot && "items-end")}>
                <div className={cn(
                  "rounded-lg p-3 max-w-[80%]",
                  message.isBot ? "bg-white shadow-sm" : "bg-[#800020] text-white"
                )}>
                  <p className="text-sm">{message.text}</p>
                  {message.options && (
                    <div className="mt-2 space-y-2">
                      {message.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(option)}
                          className={cn(
                            "w-full text-sm py-1.5 px-3 rounded",
                            message.isBot
                              ? "bg-gray-100 hover:bg-gray-200 text-gray-800"
                              : "bg-white/10 hover:bg-white/20 text-white"
                          )}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 border-t bg-white rounded-b-lg">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
            />
            <button
              type="submit"
              className="p-2 bg-[#800020] text-white rounded-lg hover:bg-[#900030] transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative p-4 rounded-full shadow-lg",
          "bg-[#25D366] hover:bg-[#1FB959]",
          "text-white transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2",
          "transform hover:scale-110"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6" />
            {/* Pulse Effect */}
            <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-25"></span>
          </>
        )}
      </button>
    </div>
  );
} 