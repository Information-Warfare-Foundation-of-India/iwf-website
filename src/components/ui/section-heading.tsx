"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  animated?: boolean;
  decorative?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
  titleClassName,
  subtitleClassName,
  animated = true,
  decorative = true,
}: SectionHeadingProps) {
  const containerClasses = cn(
    "mb-12",
    centered && "text-center",
    className
  );

  const titleClasses = cn(
    "text-3xl md:text-4xl font-bold relative inline-block",
    titleClassName
  );

  const subtitleClasses = cn(
    "text-lg mt-4 text-gray-600 dark:text-gray-400 max-w-3xl",
    centered && "mx-auto",
    subtitleClassName
  );

  if (!animated) {
    return (
      <div className={containerClasses}>
        <h2 className={titleClasses}>
          {title}
          {decorative && (
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600 dark:bg-blue-500"></span>
          )}
        </h2>
        {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={containerClasses}
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={titleClasses}
      >
        {title}
        {decorative && (
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-2 left-0 h-1 bg-blue-600 dark:bg-blue-500"
          ></motion.span>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={subtitleClasses}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
} 