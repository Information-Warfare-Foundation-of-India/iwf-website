"use client";

import { useParams } from "next/navigation";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatDate, getParam } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Filter, User, Mail, Twitter, Linkedin, Globe } from "lucide-react";
import { NewsletterSignup } from "@/components/common/newsletter-signup";
import { Metadata } from "next";
import { BlogCard } from "@/components/blog/blog-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for blog posts (same as in the blog index page)
const blogPosts = [
  {
    id: 1,
    title: "The Rising Threat of Deepfakes in Indian Politics",
    excerpt: "How AI-generated fake videos are influencing public opinion and what can be done to combat them.",
    image: "/images/blog/deepfake.jpg",
    imageAlt: "AI-generated deepfake visualization showing face manipulation technology",
    date: "2024-11-15",
    author: "Ranjan Kumar Samal",
    category: "AI Ethics",
    readTime: "8 min read",
    tags: ["Deepfakes", "AI Ethics", "Indian Politics", "Misinformation", "Election Security"]
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Simple but effective measures that small businesses can implement to protect themselves from cyber threats.",
    image: "/images/blog/cybersecurity.jpg",
    imageAlt: "Digital lock and shield protecting business data visualization",
    date: "2024-11-10",
    author: "Dr. Bibhuti Bhusan Nayak",
    category: "Cybersecurity",
    readTime: "6 min read",
    tags: ["Cybersecurity", "Small Business", "Data Protection", "Cyber Threats"]
  },
  {
    id: 3,
    title: "The Environmental Impact of E-Waste in India",
    excerpt: "Exploring the growing problem of electronic waste and sustainable solutions for its management.",
    image: "/images/blog/e-waste.jpg",
    imageAlt: "Pile of discarded electronic devices and components",
    date: "2024-11-05",
    author: "Niroj Mohapatra",
    category: "Environmental",
    readTime: "7 min read",
    tags: ["Environmental", "E-Waste", "Sustainability", "Recycling"]
  },
  {
    id: 4,
    title: "Understanding Information Warfare: A Primer",
    excerpt: "An introduction to the concept of information warfare and its implications for national security.",
    image: "/images/blog/information-warfare.jpg",
    imageAlt: "Digital battlefield visualization with data streams and security concepts",
    date: "2024-10-28",
    author: "Ranjan Kumar Samal",
    category: "Information Warfare",
    readTime: "10 min read",
    tags: ["Information Warfare", "National Security", "Cyber Defense", "Digital Threats"]
  },
  {
    id: 5,
    title: "Digital Literacy Programs: Impact and Challenges",
    excerpt: "Analyzing the effectiveness of digital literacy programs in rural India and the challenges they face.",
    image: "/images/blog/digital-literacy.jpg",
    imageAlt: "Students in rural India learning digital skills on computers",
    date: "2024-10-20",
    author: "Dr. Bibhuti Bhusan Nayak",
    category: "Education",
    readTime: "9 min read",
    tags: ["Digital Literacy", "Education", "Rural Development", "Technology Access"]
  },
  {
    id: 6,
    title: "The Role of AI in Combating Misinformation",
    excerpt: "How artificial intelligence can be used to detect and counter misinformation campaigns.",
    image: "/images/blog/ai-misinformation.jpg",
    imageAlt: "AI analyzing and filtering fake news content visualization",
    date: "2024-10-15",
    author: "Niroj Mohapatra",
    category: "AI Ethics",
    readTime: "8 min read",
    tags: ["AI Ethics", "Misinformation", "Fact-Checking", "Media Literacy"]
  }
];

// Define types for author information
type AuthorInfo = {
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  email?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
  stats: {
    articles: number;
    views: number;
    comments: number;
  };
};

type AuthorMap = {
  [key: string]: AuthorInfo;
};

// Author information
const authorInfo: AuthorMap = {
  "admin": {
    name: "Admin",
    role: "Content Administrator",
    bio: "Administrator at the Information Warfare Foundation of India, responsible for curating and managing content across various technology domains. Committed to providing accurate, insightful, and valuable information to our readers.",
    image: "/images/team/admin.jpg",
    expertise: [
      "Content Management",
      "Digital Security",
      "Information Warfare",
      "Technology Research"
    ],
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/company/iwf-india",
        icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/iwf_india",
        icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
      }
    ],
    stats: {
      articles: 25,
      views: 50000,
      comments: 320
    }
  }
};

// Default author information
const defaultAuthor: AuthorInfo = {
  name: "Admin",
  role: "Content Administrator",
  bio: "Administrator at the Information Warfare Foundation of India.",
  image: "/images/team/admin.jpg",
  expertise: ["Content Management"],
  socialLinks: [],
  stats: {
    articles: 0,
    views: 0,
    comments: 0
  }
};

export default function AuthorPage() {
  const params = useParams();
  const authorSlug = getParam(params, 'author', 'default-author');
  const authorName = authorSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  // Filter posts by author
  const authorPosts = blogPosts.filter(post => 
    post.author.toLowerCase() === authorName.toLowerCase()
  );
  
  // Get author info or use default
  const info = authorInfo[authorName] || defaultAuthor;
  
  // Get categories for this author's posts
  const authorCategories = Array.from(new Set(authorPosts.map(post => post.category)));
  
  return (
    <MainLayout>
      {/* Author Hero Section */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                <Image 
                  src={info.image}
                  alt={`${authorName} profile picture`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-4">
                  <User className="h-5 w-5 mr-2" />
                  <span>Author</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{authorName}</h1>
                <p className="text-xl text-white/80 mb-4">{info.role}</p>
                <p className="text-white/90 mb-6 max-w-3xl">
                  {info.bio}
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {info.email && (
                    <a href={`mailto:${info.email}`} className="inline-flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
                      <Mail className="h-4 w-4 mr-2" />
                      <span className="text-sm">Email</span>
                    </a>
                  )}
                  {info.twitter && (
                    <a href={`https://twitter.com/${info.twitter}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
                      <Twitter className="h-4 w-4 mr-2" />
                      <span className="text-sm">Twitter</span>
                    </a>
                  )}
                  {info.linkedin && (
                    <a href={`https://linkedin.com/in/${info.linkedin}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
                      <Linkedin className="h-4 w-4 mr-2" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  )}
                  {info.website && (
                    <a href={info.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
                      <Globe className="h-4 w-4 mr-2" />
                      <span className="text-sm">Website</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Stats */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-[#800020]">{authorPosts.length}</p>
              <p className="text-gray-600">Articles</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-[#800020]">{authorCategories.length}</p>
              <p className="text-gray-600">Categories</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-[#800020]">
                {Math.floor(authorPosts.reduce((total, post) => total + parseInt(post.readTime.split(' ')[0]), 0) / authorPosts.length) || 0}
              </p>
              <p className="text-gray-600">Avg. Read Time</p>
            </div>
            <div className="text-center p-4">
              <p className="text-3xl font-bold text-[#800020]">
                {authorPosts.length > 0 
                  ? new Date(Math.max(...authorPosts.map(post => new Date(post.date).getTime()))).getFullYear() 
                  : new Date().getFullYear()}
              </p>
              <p className="text-gray-600">Latest Article</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              {/* Categories Written By Author */}
              {authorCategories.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {authorCategories.map((category, index) => (
                      <li key={index}>
                        <Link 
                          href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-100"
                        >
                          <span>{category}</span>
                          <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                            {authorPosts.filter(post => post.category === category).length}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Author Image */}
              <div className="mb-8">
                <div className="bg-[#800020]/10 p-4 rounded-lg">
                  <div className="bg-[#800020]/20 h-40 rounded-md mb-4 overflow-hidden">
                    <Image 
                      src={info.image}
                      alt={`${authorName} profile picture`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold mb-2">About {authorName}</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {info.bio.substring(0, 120)}...
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto font-medium text-[#800020] hover:text-[#900030]">
                    <Link href="/about/team" className="flex items-center">
                      View full profile <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Other Authors */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Other Authors</h3>
                <div className="space-y-4">
                  {Object.entries(authorInfo)
                    .filter(([name]) => name !== authorName)
                    .slice(0, 3)
                    .map(([name, info], index) => (
                      <Link 
                        key={index} 
                        href={`/blog/author/${name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center p-3 rounded-lg hover:bg-gray-100"
                      >
                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                          <Image 
                            src={info.image}
                            alt={`${name} profile picture`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{name}</h4>
                          <p className="text-sm text-gray-600">{info.role.split(',')[0]}</p>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Filters */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 pb-4 border-b">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">
                  Articles by {authorName} <span className="text-gray-500">({authorPosts.length})</span>
                </h2>
                <div className="flex items-center">
                  <Filter className="h-5 w-5 text-gray-500 mr-2" />
                  <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-[#800020] focus:border-[#800020]">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Oldest First</option>
                  </select>
                </div>
              </div>

              {/* Author's Posts */}
              {authorPosts.length > 0 ? (
                <div className="space-y-8">
                  {authorPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="relative h-60 md:h-full bg-gray-300 overflow-hidden">
                          <Image 
                            src={post.image}
                            alt={post.imageAlt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#800020] to-[#600010] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                            {post.category}
                          </div>
                        </div>
                        <div className="p-6 md:col-span-2 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                              <span>{formatDate(post.date)}</span>
                              <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-[#800020] transition-colors">
                              <Link href={`/blog/${post.id}`}>
                                {post.title}
                              </Link>
                            </h3>
                            <p className="text-gray-600 mb-4">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 3).map((tag, index) => (
                                <Link 
                                  key={index} 
                                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-md"
                                >
                                  {tag}
                                </Link>
                              ))}
                            </div>
                            <Button asChild variant="link" className="p-0 h-auto font-medium text-[#800020] hover:text-[#900030]">
                              <Link href={`/blog/${post.id}`} className="flex items-center">
                                Read article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-12 text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any articles by {authorName}. Please check back later or browse all our articles.
                  </p>
                  <Button asChild className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white">
                    <Link href="/blog">
                      Browse all articles
                    </Link>
                  </Button>
                </div>
              )}
              
              {/* Pagination (only show if there are more than 5 posts) */}
              {authorPosts.length > 5 && (
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center">
                      <ArrowLeft className="h-4 w-4 mr-1" /> Previous
                    </a>
                    <a href="#" className="px-4 py-2 border border-[#800020] bg-gradient-to-r from-[#800020] to-[#600010] text-white rounded-md">
                      1
                    </a>
                    <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center">
                      Next <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup 
        title={`Follow ${authorName}'s Work`}
        description={`Subscribe to our newsletter to receive the latest articles and insights from ${authorName} and other experts at the Information Warfare Foundation.`}
      />
    </MainLayout>
  );
} 