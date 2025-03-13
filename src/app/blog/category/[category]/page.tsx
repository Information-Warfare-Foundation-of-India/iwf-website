"use client";

import { useParams } from "next/navigation";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatDate, getParam } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Filter, Bookmark } from "lucide-react";
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

// Define types for category information
type CategoryInfo = {
  title: string;
  description: string;
  image: string;
  color: string;
  icon: string;
  featuredTopics: string[];
  resources: {
    title: string;
    description: string;
    link: string;
  }[];
};

type CategoryMap = {
  [key: string]: CategoryInfo;
};

// Category information with enhanced details
const categoryInfo: CategoryMap = {
  "AI Ethics": {
    title: "AI Ethics",
    description: "Exploring the ethical implications of artificial intelligence and its impact on society. Our coverage includes responsible AI development, bias in AI systems, and frameworks for ethical AI deployment.",
    image: "/images/categories/ai-ethics.jpg",
    color: "#4B0082",
    icon: "🤖",
    featuredTopics: [
      "Responsible AI Development",
      "AI Bias and Fairness",
      "Privacy in AI Systems",
      "Ethical Guidelines"
    ],
    resources: [
      {
        title: "AI Ethics Framework",
        description: "Comprehensive guidelines for ethical AI development",
        link: "/resources/ai-ethics-framework"
      },
      {
        title: "Bias Detection Tools",
        description: "Tools and methodologies for identifying AI bias",
        link: "/resources/bias-detection"
      }
    ]
  },
  "Cybersecurity": {
    title: "Cybersecurity",
    description: "In-depth analysis of cybersecurity threats, defense strategies, and best practices. From network security to incident response, we cover the full spectrum of digital security.",
    image: "/images/categories/cybersecurity-cat.jpg",
    color: "#800020",
    icon: "🔒",
    featuredTopics: [
      "Threat Intelligence",
      "Network Security",
      "Incident Response",
      "Security Auditing"
    ],
    resources: [
      {
        title: "Security Best Practices",
        description: "Essential security guidelines for organizations",
        link: "/resources/security-best-practices"
      },
      {
        title: "Incident Response Playbook",
        description: "Step-by-step guide for handling security incidents",
        link: "/resources/incident-response"
      }
    ]
  },
  "Environmental": {
    title: "Environmental",
    description: "Examining the intersection of technology and environmental sustainability. We explore green computing, eco-friendly tech initiatives, and environmental data analysis.",
    image: "/images/categories/environmental.jpg",
    color: "#006400",
    icon: "🌍",
    featuredTopics: [
      "Green Computing",
      "Sustainable Tech",
      "Environmental Data",
      "Climate Tech"
    ],
    resources: [
      {
        title: "Green Tech Guide",
        description: "Guide to environmentally conscious technology",
        link: "/resources/green-tech"
      },
      {
        title: "Sustainability Metrics",
        description: "Measuring environmental impact of technology",
        link: "/resources/sustainability-metrics"
      }
    ]
  },
  "Information Warfare": {
    title: "Information Warfare",
    description: "Understanding modern information warfare tactics, defense strategies, and their impact on national security. We analyze disinformation campaigns, cyber operations, and countermeasures.",
    image: "/images/categories/information-warfare.jpg",
    color: "#191970",
    icon: "⚔️",
    featuredTopics: [
      "Disinformation Campaigns",
      "Cyber Operations",
      "Strategic Communications",
      "Defense Strategies"
    ],
    resources: [
      {
        title: "Information Warfare Handbook",
        description: "Comprehensive guide to modern information warfare",
        link: "/resources/info-warfare-handbook"
      },
      {
        title: "Counter-Disinformation Tools",
        description: "Tools for identifying and countering disinformation",
        link: "/resources/counter-disinfo"
      }
    ]
  },
  "Education": {
    title: "Education",
    description: "Exploring the future of technology education and digital literacy. We cover educational technologies, learning methodologies, and skill development in the digital age.",
    image: "/images/categories/education.jpg",
    color: "#8B4513",
    icon: "📚",
    featuredTopics: [
      "Digital Literacy",
      "EdTech Innovation",
      "Learning Methods",
      "Skill Development"
    ],
    resources: [
      {
        title: "Digital Learning Guide",
        description: "Best practices for technology education",
        link: "/resources/digital-learning"
      },
      {
        title: "EdTech Resources",
        description: "Curated educational technology resources",
        link: "/resources/edtech"
      }
    ]
  }
};

// Default category information
const defaultCategory: CategoryInfo = {
  title: "Technology",
  description: "Exploring various aspects of technology and its impact on society.",
  image: "/images/categories/cybersecurity-cat.jpg",
  color: "#800020",
  icon: "💻",
  featuredTopics: [
    "Technology Trends",
    "Digital Innovation",
    "Tech Impact",
    "Future Tech"
  ],
  resources: [
    {
      title: "Technology Overview",
      description: "Introduction to key technology concepts",
      link: "/resources/tech-overview"
    },
    {
      title: "Digital Resources",
      description: "Collection of technology resources",
      link: "/resources/digital-resources"
    }
  ]
};

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = getParam(params, 'category', 'cybersecurity');
  const categoryName = categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  // Filter posts by category
  const filteredPosts = blogPosts.filter(post => 
    post.category.toLowerCase() === categoryName.toLowerCase()
  );
  
  // Get category info or use default
  const info = categoryInfo[categoryName] || defaultCategory;
  
  // Get all categories for the sidebar
  const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  return (
    <MainLayout>
      {/* Hero Section with Category-specific Image */}
      <section className="relative bg-gradient-to-r from-[#800020] to-[#600010] text-white py-24">
        <div className="absolute inset-0 opacity-30">
          <Image 
            src={info.image}
            alt={`${categoryName} category image`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/70 to-[#600010]/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6">
              <Bookmark className="h-5 w-5 mr-2" />
              <span>Category</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{categoryName}</h1>
            <p className="text-xl text-gray-100">
              {info.description}
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
              {/* Categories List */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {allCategories.map((cat, index) => (
                    <li key={index}>
                      <Link 
                        href={`/blog/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`flex justify-between items-center py-2 px-3 rounded-md ${
                          cat === categoryName 
                            ? 'bg-[#800020]/10 text-[#800020] font-medium' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                          {blogPosts.filter(post => post.category === cat).length}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Category Image */}
              <div className="mb-8">
                <div className="bg-[#800020]/10 p-4 rounded-lg">
                  <div className="bg-[#800020]/20 h-40 rounded-md mb-4 overflow-hidden">
                    <Image 
                      src={info.image}
                      alt={`${categoryName} visualization`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold mb-2">About {categoryName}</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {info.description}
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto font-medium text-[#800020] hover:text-[#900030]">
                    <Link href="/blog" className="flex items-center">
                      View all categories <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Newsletter Compact */}
              <div className="bg-gradient-to-r from-[#800020] to-[#600010] text-white rounded-xl shadow-md overflow-hidden p-6">
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-sm text-white/80 mb-4">
                  Subscribe to our newsletter for the latest insights on {categoryName.toLowerCase()} and other topics.
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
                  {categoryName} Articles <span className="text-gray-500">({filteredPosts.length})</span>
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

              {/* Featured Category Post - First Post Highlighted */}
              {filteredPosts.length > 0 && (
                <div className="mb-12">
                  <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative h-64 md:h-full bg-gray-300 overflow-hidden">
                        <Image 
                          src={filteredPosts[0].image}
                          alt={filteredPosts[0].imageAlt}
                          width={800}
                          height={800}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-[#800020] to-[#600010] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          {filteredPosts[0].category}
                        </div>
                        <div className="absolute top-4 right-4 bg-white/90 text-[#800020] text-xs font-bold px-3 py-1.5 rounded-full">
                          Featured
                        </div>
                      </div>
                      <div className="p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                            <span>{formatDate(filteredPosts[0].date)}</span>
                            <span>{filteredPosts[0].readTime}</span>
                          </div>
                          <h3 className="text-2xl font-bold mb-4 group-hover:text-[#800020] transition-colors">
                            <Link href={`/blog/${filteredPosts[0].id}`}>
                              {filteredPosts[0].title}
                            </Link>
                          </h3>
                          <p className="text-gray-600 mb-6">
                            {filteredPosts[0].excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-200 rounded-full mr-2 overflow-hidden">
                              <div className="w-full h-full flex items-center justify-center text-[#800020] font-bold text-xs">
                                {filteredPosts[0].author.split(' ').map(name => name[0]).join('')}
                              </div>
                            </div>
                            <span className="text-sm font-medium">By {filteredPosts[0].author}</span>
                          </div>
                          <Button asChild variant="link" className="p-0 h-auto font-medium text-[#800020] hover:text-[#900030]">
                            <Link href={`/blog/${filteredPosts[0].id}`} className="flex items-center">
                              Read article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              )}

              {/* Blog Posts Grid */}
              {filteredPosts.length > 1 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.slice(1).map((post) => (
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
              ) : filteredPosts.length === 0 ? (
                <div className="bg-gray-50 rounded-xl p-12 text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Bookmark className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any articles in the "{categoryName}" category. Please try another category or browse all our articles.
                  </p>
                  <Button asChild className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white">
                    <Link href="/blog">
                      Browse all articles
                    </Link>
                  </Button>
                </div>
              ) : null}
              
              {/* Pagination (only show if there are more than 1 post) */}
              {filteredPosts.length > 1 && (
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
        title={`Stay Updated on ${categoryName}`}
        description={`Subscribe to our newsletter to receive the latest insights and articles about ${categoryName.toLowerCase()} and related topics.`}
      />
    </MainLayout>
  );
} 