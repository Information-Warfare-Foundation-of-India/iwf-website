"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatDate, truncateText } from "@/lib/utils";
import { ArrowRight, Calendar, User } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCard } from "@/components/ui/animated-card";
import Image from "next/image";

// Mock data for blog posts
const featuredPosts = [
  {
    id: 1,
    title: "The Rising Threat of Deepfakes in Indian Politics",
    excerpt: "How AI-generated fake videos are influencing public opinion and what can be done to combat them.",
    image: "/images/blog/deepfake.jpg",
    date: "2024-11-15",
    author: "Admin",
    category: "AI Ethics"
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Simple but effective measures that small businesses can implement to protect themselves from cyber threats.",
    image: "/images/blog/cybersecurity.jpg",
    date: "2024-11-10",
    author: "Admin",
    category: "Cybersecurity"
  },
  {
    id: 3,
    title: "The Environmental Impact of E-Waste in India",
    excerpt: "Exploring the growing problem of electronic waste and sustainable solutions for its management.",
    image: "/images/blog/e-waste.jpg",
    date: "2024-11-05",
    author: "Admin",
    category: "Environmental"
  }
];

export function BlogSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute -bottom-24 -left-24 text-blue-500/5 w-96 h-96" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M42.8,-62.2C54.9,-56.3,63.6,-42.8,69.7,-28.2C75.8,-13.6,79.3,2.3,76.3,17.1C73.4,31.9,64,45.7,51.1,54.8C38.2,63.9,21.8,68.4,4.4,72.1C-13,75.8,-31.4,78.7,-43.9,71.1C-56.5,63.5,-63.3,45.3,-69.7,27.3C-76.1,9.3,-82.1,-8.5,-78.5,-24.3C-74.9,-40.1,-61.7,-53.9,-46.8,-59.1C-31.8,-64.3,-15.9,-60.9,-0.2,-60.6C15.5,-60.3,30.7,-68.1,42.8,-62.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <SectionHeading
            title="Latest Insights"
            subtitle="Expert analysis and research on information warfare and cybersecurity"
            decorative={true}
            centered={false}
            className="mb-0"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Button asChild variant="gradient" size="lg" className="group">
              <Link href="/blog" className="flex items-center">
                View all articles 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Link href={`/blog/${post.id}`} className="block h-full">
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                  <div className="relative h-52 overflow-hidden">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      width={800}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
                      priority={index === 0}
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1.5 text-blue-500 dark:text-blue-400" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1.5 text-blue-500 dark:text-blue-400" />
                        {post.author}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {truncateText(post.excerpt, 100)}
                    </p>
                    
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group">
                      Read more 
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-blue-50 dark:bg-blue-900/30 px-6 py-4 rounded-xl">
            <p className="text-gray-700 dark:text-gray-300">
              Want to contribute an article? <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Contact us</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 