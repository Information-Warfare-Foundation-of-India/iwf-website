"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Globe, Users, Heart, Gift, Mail, Info, Briefcase, Lock } from "lucide-react";

// Define the stats data
const stats = [
  {
    icon: <Shield className="h-6 w-6 text-blue-300" />,
    value: "500+",
    label: "Volunteers Nationwide",
    color: "blue"
  },
  {
    icon: <FileText className="h-6 w-6 text-purple-300" />,
    value: "50+",
    label: "Research Publications",
    color: "purple"
  },
  {
    icon: <Globe className="h-6 w-6 text-green-300" />,
    value: "100+",
    label: "Training Programs",
    color: "green"
  },
  {
    icon: <Users className="h-6 w-6 text-cyan-300" />,
    value: "20+",
    label: "Partner Organizations",
    color: "cyan"
  },
  {
    icon: <Heart className="h-6 w-6 text-red-300" />,
    value: "1000+",
    label: "Lives Impacted",
    color: "red"
  },
  {
    icon: <Briefcase className="h-6 w-6 text-orange-300" />,
    value: "30+",
    label: "Ongoing Projects",
    color: "orange"
  },
];

// Helper function to get color classes
const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string, text: string, border: string }> = {
    blue: { 
      bg: "bg-blue-900/50", 
      text: "text-blue-400",
      border: "border-blue-500/30"
    },
    purple: { 
      bg: "bg-purple-900/50", 
      text: "text-purple-400",
      border: "border-purple-500/30"
    },
    green: { 
      bg: "bg-green-900/50", 
      text: "text-green-400",
      border: "border-green-500/30"
    },
    cyan: { 
      bg: "bg-cyan-900/50", 
      text: "text-cyan-400",
      border: "border-cyan-500/30"
    },
    red: { 
      bg: "bg-red-900/50", 
      text: "text-red-400",
      border: "border-red-500/30"
    },
    orange: { 
      bg: "bg-orange-900/50", 
      text: "text-orange-400",
      border: "border-orange-500/30"
    },
  };
  
  return colorMap[color] || colorMap.blue;
};

export function StatsSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-900 to-blue-950 py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/patterns/circuit-board.svg')", backgroundSize: "cover" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {stats.map((stat, index) => (
            <StatsCard 
              key={index} 
              icon={stat.icon} 
              value={stat.value} 
              label={stat.label} 
              color={stat.color}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatsCard({ 
  icon, 
  value, 
  label, 
  color,
  index
}: { 
  icon: React.ReactNode, 
  value: string, 
  label: string,
  color: string,
  index: number
}) {
  const colorClasses = getColorClasses(color);
  
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:transform hover:-translate-y-1"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className={`${colorClasses.bg} p-3 rounded-lg border ${colorClasses.border}`}>
          {icon}
        </div>
        <div>
          <p className={`text-3xl font-bold ${colorClasses.text}`}>{value}</p>
          <p className="text-sm mt-1 text-blue-100">{label}</p>
        </div>
      </div>
    </motion.div>
  );
} 