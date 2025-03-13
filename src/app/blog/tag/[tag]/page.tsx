"use client";

import { useParams } from "next/navigation";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatDate, getParam } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Tag, Filter } from "lucide-react";
import { NewsletterSignup } from "@/components/common/newsletter-signup";

// Mock data for blog posts (same as in the blog index page)
const blogPosts = [
  {
    id: 1,
    title: "The Rising Threat of Deepfakes in Indian Politics",
    excerpt: "How AI-generated fake videos are influencing public opinion and what can be done to combat them.",
    image: "/images/blog/deepfake.jpg",
    imageAlt: "AI-generated deepfake visualization showing face manipulation technology",
    date: "2024-11-15",
    author: "Admin",
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
    author: "Admin",
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
    author: "Admin",
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
    author: "Admin",
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
    author: "Admin",
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
    author: "Admin",
    category: "AI Ethics",
    readTime: "8 min read",
    tags: ["AI Ethics", "Misinformation", "Fact-Checking", "Media Literacy"]
  }
];

// Tag images mapping
type TagImageMap = {
  [key: string]: string;
};

const tagImages: TagImageMap = {
  "Deepfakes": "/images/tags/deepfakes-tag.jpg",
  "AI Ethics": "/images/tags/ai-ethics-tag.jpg",
  "Indian Politics": "/images/tags/election-security-tag.jpg",
  "Misinformation": "/images/tags/misinformation-tag.jpg",
  "Election Security": "/images/tags/election-security-tag.jpg",
  "Cybersecurity": "/images/tags/cybersecurity-tag.jpg",
  "Small Business": "/images/tags/cybersecurity-tag.jpg",
  "Data Protection": "/images/tags/cybersecurity-tag.jpg",
  "Cyber Threats": "/images/tags/cybersecurity-tag.jpg",
  "Environmental": "/images/tags/environmental-cat.jpg",
  "E-Waste": "/images/tags/environmental-cat.jpg",
  "Sustainability": "/images/tags/environmental-cat.jpg",
  "Recycling": "/images/tags/environmental-cat.jpg",
  "Information Warfare": "/images/tags/information-warfare-cat.jpg",
  "National Security": "/images/tags/information-warfare-cat.jpg",
  "Cyber Defense": "/images/tags/cybersecurity-tag.jpg",
  "Digital Threats": "/images/tags/cybersecurity-tag.jpg",
  "Digital Literacy": "/images/tags/education-cat.jpg",
  "Education": "/images/tags/education-cat.jpg",
  "Rural Development": "/images/tags/education-cat.jpg",
  "Technology Access": "/images/tags/education-cat.jpg",
  "Fact-Checking": "/images/tags/misinformation-tag.jpg",
  "Media Literacy": "/images/tags/misinformation-tag.jpg"
};

// Default tag image for tags without specific images
const defaultTagImage = "/images/tags/cybersecurity-tag.jpg";

// Define types for tag information
type TagInfo = {
  title: string;
  description: string;
  image: string;
  color: string;
  icon: string;
  relatedTags: string[];
  resources: {
    title: string;
    description: string;
    link: string;
  }[];
};

type TagMap = {
  [key: string]: TagInfo;
};

// Tag information with enhanced details
const tagInfo: TagMap = {
  "Deepfakes": {
    title: "Deepfakes",
    description: "Exploring the challenges and implications of AI-generated synthetic media, focusing on detection, prevention, and policy responses.",
    image: "/images/tags/deepfakes-tag.jpg",
    color: "#8B0000",
    icon: "🎭",
    relatedTags: [
      "AI Ethics",
      "Misinformation",
      "Machine Learning",
      "Digital Forensics"
    ],
    resources: [
      {
        title: "Deepfake Detection Guide",
        description: "Technical guide for identifying synthetic media",
        link: "/resources/deepfake-detection"
      },
      {
        title: "Policy Framework",
        description: "Regulatory approaches to deepfake content",
        link: "/resources/deepfake-policy"
      }
    ]
  },
  "AI Ethics": {
    title: "AI Ethics",
    description: "Examining ethical considerations in artificial intelligence development and deployment, with a focus on fairness, transparency, and accountability.",
    image: "/images/tags/ai-ethics-tag.jpg",
    color: "#4B0082",
    icon: "⚖️",
    relatedTags: [
      "Machine Learning",
      "Data Privacy",
      "Algorithmic Bias",
      "Responsible AI"
    ],
    resources: [
      {
        title: "AI Ethics Guidelines",
        description: "Framework for ethical AI development",
        link: "/resources/ai-ethics-guidelines"
      },
      {
        title: "Impact Assessment",
        description: "Tools for evaluating AI systems",
        link: "/resources/ai-impact"
      }
    ]
  },
  "Cybersecurity": {
    title: "Cybersecurity",
    description: "Comprehensive coverage of digital security threats, defense strategies, and best practices for individuals and organizations.",
    image: "/images/tags/cybersecurity-tag.jpg",
    color: "#006400",
    icon: "🔒",
    relatedTags: [
      "Network Security",
      "Threat Intelligence",
      "Digital Privacy",
      "Security Tools"
    ],
    resources: [
      {
        title: "Security Handbook",
        description: "Essential cybersecurity practices",
        link: "/resources/security-handbook"
      },
      {
        title: "Threat Database",
        description: "Current cybersecurity threats",
        link: "/resources/threats"
      }
    ]
  },
  "Information Warfare": {
    title: "Information Warfare",
    description: "Analysis of modern information warfare tactics, countermeasures, and their impact on national security and public discourse.",
    image: "/images/tags/information-warfare-tag.jpg",
    color: "#191970",
    icon: "⚔️",
    relatedTags: [
      "Cyber Operations",
      "Strategic Communications",
      "National Security",
      "Digital Defense"
    ],
    resources: [
      {
        title: "Warfare Tactics",
        description: "Modern information warfare methods",
        link: "/resources/warfare-tactics"
      },
      {
        title: "Defense Strategies",
        description: "Protecting against information attacks",
        link: "/resources/defense"
      }
    ]
  },
  "Digital Privacy": {
    title: "Digital Privacy",
    description: "Exploring privacy challenges in the digital age, data protection strategies, and regulatory compliance.",
    image: "/images/tags/privacy-tag.jpg",
    color: "#483D8B",
    icon: "🔐",
    relatedTags: [
      "Data Protection",
      "Privacy Laws",
      "Encryption",
      "Personal Security"
    ],
    resources: [
      {
        title: "Privacy Guide",
        description: "Protecting personal data online",
        link: "/resources/privacy-guide"
      },
      {
        title: "Compliance Tools",
        description: "Privacy regulation compliance",
        link: "/resources/compliance"
      }
    ]
  }
};

// Default tag information
const defaultTag: TagInfo = {
  title: "Technology",
  description: "Articles covering various aspects of technology and its impact on society.",
  image: "/images/tags/cybersecurity-tag.jpg",
  color: "#800020",
  icon: "💻",
  relatedTags: [
    "Innovation",
    "Digital Trends",
    "Tech Impact",
    "Future Tech"
  ],
  resources: [
    {
      title: "Tech Overview",
      description: "Introduction to key concepts",
      link: "/resources/tech-basics"
    },
    {
      title: "Resource Library",
      description: "Curated technology resources",
      link: "/resources/tech-library"
    }
  ]
};

export default function TagPage() {
  const params = useParams();
  const tagSlug = getParam(params, 'tag', 'cybersecurity');
  const tagName = tagSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  // Filter posts by tag
  const filteredPosts = blogPosts.filter(post => 
    post.tags && post.tags.some(t => t.toLowerCase() === tagName.toLowerCase())
  );
  
  // Get tag image or use default
  const tagImage = tagImages[tagName] || defaultTagImage;
  
  // Get related tags (tags that appear in the filtered posts, excluding the current tag)
  const relatedTags = Array.from(new Set(
    filteredPosts.flatMap(post => post.tags || [])
      .filter(t => t.toLowerCase() !== tagName.toLowerCase())
  )).slice(0, 5);
  
  const info = tagInfo[tagName] || defaultTag;

  return (
    <MainLayout>
      {/* Hero Section with Tag-specific Image */}
      <section className="relative bg-gradient-to-r from-[#800020] to-[#600010] text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src={tagImage}
            alt={`${tagName} related image`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/80 to-[#600010]/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6">
              <Tag className="h-5 w-5 mr-2" />
              <span>Tag</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{tagName}</h1>
            <p className="text-xl text-gray-100">
              Explore our articles about {tagName.toLowerCase()} and related topics.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              {/* Related Tags */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Related Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedTags.map((relatedTag, index) => (
                    <Link 
                      key={index} 
                      href={`/blog/tag/${relatedTag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full text-sm text-gray-700 flex items-center"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {relatedTag}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Tag Image */}
              <div className="mb-8">
                <div className="bg-[#800020]/10 p-4 rounded-lg">
                  <div className="bg-[#800020]/20 h-40 rounded-md mb-4 overflow-hidden">
                    <Image 
                      src={tagImage}
                      alt={`${tagName} visualization`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold mb-2">About {tagName}</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {info.description}
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto font-medium text-[#800020] hover:text-[#900030]">
                    <Link href="/blog" className="flex items-center">
                      View all tags <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Newsletter Compact */}
              <div className="bg-gradient-to-r from-[#800020] to-[#600010] text-white rounded-xl shadow-md overflow-hidden p-6">
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-sm text-white/80 mb-4">
                  Subscribe to our newsletter for the latest insights on {tagName.toLowerCase()} and other topics.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/50"
                  />
                  <Button className="w-full bg-white text-[#800020] hover:bg-gray-100">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              {/* Filters */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 pb-4 border-b">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">
                  Articles tagged "{tagName}" <span className="text-gray-500">({filteredPosts.length})</span>
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

              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
                      <Link href={`/blog/${post.id}`} className="block h-full">
                        <div className="relative h-52 bg-gray-300 overflow-hidden">
                          <Image 
                            src={post.image}
                            alt={post.imageAlt}
                            width={800}
                            height={450}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#800020] to-[#600010] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                            {post.category}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                            <span>{formatDate(post.date)}</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-[#800020] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                            <div className="flex items-center">
                              <div className="w-7 h-7 bg-gray-200 rounded-full mr-2 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-[#800020] font-bold text-xs">
                                  {post.author.split(' ').map(name => name[0]).join('')}
                                </div>
                              </div>
                              <span className="text-sm text-gray-500">By {post.author}</span>
                            </div>
                            <span className="text-[#800020] font-medium inline-flex items-center text-sm">
                              Read more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-12 text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Tag className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any articles tagged with "{tagName}". Please try another tag or browse all our articles.
                  </p>
                  <Button asChild className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white">
                    <Link href="/blog">
                      Browse all articles
                    </Link>
                  </Button>
                </div>
              )}
              
              {/* Pagination (only show if there are posts) */}
              {filteredPosts.length > 0 && (
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

      {/* Resources Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {info.resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.link}
                  className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-bold text-lg mb-2" style={{ color: info.color }}>
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <span className="text-sm font-medium inline-flex items-center" style={{ color: info.color }}>
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterSignup 
        title={`Stay Updated on ${tagName}`}
        description={`Subscribe to our newsletter to receive the latest insights and articles about ${tagName.toLowerCase()} and related topics.`}
      />
    </MainLayout>
  );
} 