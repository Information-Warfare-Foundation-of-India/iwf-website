"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface AnimatedCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  link?: string;
  className?: string;
  contentClassName?: string;
  variant?: "default" | "bordered" | "gradient" | "glass";
  hoverEffect?: "lift" | "glow" | "border" | "scale" | "none";
  children?: React.ReactNode;
}

export function AnimatedCard({
  title,
  description,
  icon,
  image,
  link,
  className,
  contentClassName,
  variant = "default",
  hoverEffect = "lift",
  children,
}: AnimatedCardProps) {
  // Base styles
  const cardClasses = cn(
    "rounded-xl overflow-hidden transition-all duration-300",
    // Variant styles
    variant === "default" && "bg-white dark:bg-gray-800 shadow-md",
    variant === "bordered" && "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
    variant === "gradient" && "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900",
    variant === "glass" && "bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/20",
    // Hover effects
    hoverEffect === "lift" && "hover:-translate-y-1 hover:shadow-lg",
    hoverEffect === "glow" && "hover:shadow-lg hover:shadow-blue-500/20",
    hoverEffect === "border" && "hover:border-blue-500 dark:hover:border-blue-400",
    hoverEffect === "scale" && "hover:scale-[1.02]",
    className
  );

  const contentClasses = cn(
    "p-6",
    image && "pt-0",
    contentClassName
  );

  // Check if children contain a Link component
  const hasLinkChild = React.Children.toArray(children).some(
    child => React.isValidElement(child) && child.type === Link
  );

  // If we have a link prop and no Link children, wrap in Link
  // Otherwise, just render the content
  const CardContent = (
    <motion.div
      whileHover={hoverEffect !== "none" ? { y: hoverEffect === "lift" ? -5 : 0 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cardClasses}
    >
      {image && (
        <div className="w-full h-48 relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        </div>
      )}
      
      <div className={contentClasses}>
        {icon && (
          <div className="mb-4">
            {variant === "gradient" ? (
              <div className="inline-flex p-3 rounded-lg bg-blue-600 text-white">
                {icon}
              </div>
            ) : (
              <div className="inline-flex p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                {icon}
              </div>
            )}
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        
        {description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        )}
        
        {children}
      </div>
    </motion.div>
  );

  // If we have a link child, don't wrap in another link
  if (hasLinkChild) {
    return CardContent;
  }

  // If we have a link prop and no link children, wrap in Link
  if (link) {
    return (
      <Link href={link} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  // Otherwise, just return the content
  return CardContent;
} 