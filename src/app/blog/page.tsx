import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Search, Filter, ArrowRight } from "lucide-react";
import { NewsletterSignup } from "@/components/common/newsletter-signup";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | Information Warfare Foundation of India (IWF)",
  description: "Read the latest insights, research, and news from the Information Warfare Foundation of India (IWF).",
};

/*
INSTRUCTIONS FOR ADDING REALISTIC IMAGES:

1. Create a directory structure in your public folder:
   /public/images/blog/

2. For realistic images, you can use:
   - Unsplash (https://unsplash.com) - Free high-quality stock photos
   - Pexels (https://pexels.com) - Free stock photos and videos
   - Generated AI images from services like DALL-E or Midjourney

3. Download the following types of images and save them with the filenames below:
   - deepfake.jpg: A visualization of AI face manipulation or deepfake technology
   - cybersecurity.jpg: Image showing cybersecurity concepts (e.g., lock, shield, code)
   - e-waste.jpg: Picture of electronic waste or recycling
   - information-warfare.jpg: Visual representation of information warfare concepts
   - digital-literacy.jpg: Image showing education or digital skills training
   - ai-misinformation.jpg: Visualization of AI and fake news concepts
   - special-report.jpg: Professional image for the featured cybersecurity report

4. Recommended image dimensions:
   - Blog post thumbnails: 800x450px (16:9 ratio)
   - Featured article image: 600x400px
*/

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Rising Threat of Deepfakes in Indian Politics",
    excerpt: "How AI-generated fake videos are influencing public opinion and what can be done to combat them.",
    image: "/images/blog/deepfake.jpg",
    imageAlt: "AI face manipulation technology visualization",
    date: "2024-11-15",
    author: "Admin",
    authorImage: "/images/team/admin.jpg",
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
    authorImage: "/images/team/admin.jpg",
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
    authorImage: "/images/team/admin.jpg",
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
    authorImage: "/images/team/admin.jpg",
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
    authorImage: "/images/team/admin.jpg",
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
    authorImage: "/images/team/admin.jpg",
    category: "AI Ethics",
    readTime: "8 min read",
    tags: ["AI Ethics", "Misinformation", "Fact-Checking", "Media Literacy"]
  }
];

// Mock data for categories
const categories = [
  { name: "All", count: 12 },
  { name: "Cybersecurity", count: 5 },
  { name: "AI Ethics", count: 3 },
  { name: "Information Warfare", count: 2 },
  { name: "Environmental", count: 1 },
  { name: "Education", count: 1 }
];

// Featured article data
const featuredArticle = {
  title: "Special Report: The State of Cybersecurity in India 2024",
  excerpt: "A comprehensive analysis of cybersecurity threats and preparedness in India.",
  image: "/images/blog/special-report.jpg",
  imageAlt: "Cybersecurity report visualization with data charts and security concepts",
  link: "/blog/special-report",
  author: "Admin",
  authorImage: "/images/team/admin.jpg",
  date: "2024-11-20",
  readTime: "15 min read"
};

export default function BlogPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-gray-100">
              Expert analysis, research, and news on information warfare, cybersecurity, and digital threats.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-[#800020] focus:border-[#800020]"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className={`flex justify-between items-center py-2 px-3 rounded-md ${index === 0 ? 'bg-[#800020]/10 text-[#800020]' : 'hover:bg-gray-100'}`}
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Article */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Featured</h3>
                <div className="bg-[#800020]/10 p-4 rounded-lg">
                  <div className="bg-[#800020]/20 h-40 rounded-md mb-4 overflow-hidden">
                    <Image 
                      src={featuredArticle.image}
                      alt={featuredArticle.imageAlt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h4 className="font-bold mb-2">{featuredArticle.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {featuredArticle.excerpt}
                  </p>
                  <Button asChild variant="link" className="p-0 h-auto font-medium text-[#800020] hover:text-[#900030]">
                    <Link href={featuredArticle.link} className="flex items-center">
                      Read report <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Filters */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 pb-4 border-b">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">Latest Articles</h2>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <Link href={`/blog/${post.id}`}>
                      <div className="relative h-48 bg-gray-300 overflow-hidden">
                        <Image 
                          src={post.image}
                          alt={post.imageAlt}
                          width={800}
                          height={450}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-[#800020] to-[#600010] text-white text-xs font-bold px-2 py-1 rounded">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                          <span>{formatDate(post.date)}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 hover:text-[#800020] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">By {post.author}</span>
                          <span className="text-[#800020] font-medium inline-flex items-center">
                            Read more <ArrowRight className="ml-1 h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Previous
                  </a>
                  <a href="#" className="px-4 py-2 border border-[#800020] bg-gradient-to-r from-[#800020] to-[#600010] text-white rounded-md">
                    1
                  </a>
                  <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    2
                  </a>
                  <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    3
                  </a>
                  <span className="px-2 text-gray-500">...</span>
                  <a href="#" className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                    Next
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </MainLayout>
  );
} 