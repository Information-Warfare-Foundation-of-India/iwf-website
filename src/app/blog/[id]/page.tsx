"use client";

import { useParams } from "next/navigation";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { formatDate, getParam } from "@/lib/utils";
import { ArrowLeft, Share2, Bookmark, MessageSquare, ThumbsUp, Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { NewsletterSignup } from "@/components/common/newsletter-signup";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Rising Threat of Deepfakes in Indian Politics",
    excerpt: "How AI-generated fake videos are influencing public opinion and what can be done to combat them.",
    content: `
      <article class="prose prose-lg max-w-none">
        <p class="lead text-xl text-gray-600 mb-8">
          The rise of deepfake technology presents a significant challenge to India's political landscape. These AI-generated videos can convincingly depict politicians saying or doing things they never did, potentially influencing public opinion and election outcomes.
        </p>
        
        <h2 class="text-2xl font-bold mt-12 mb-6">Understanding Deepfakes</h2>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
          <h3 class="text-lg font-semibold mb-3">Key Points:</h3>
          <ul class="list-disc pl-6 space-y-2">
            <li>Deepfakes use artificial intelligence and deep learning to create hyper-realistic fake videos</li>
            <li>The technology analyzes existing footage to understand facial expressions and mannerisms</li>
            <li>Advanced algorithms can generate new content that mimics real people with alarming accuracy</li>
            <li>The technology is becoming more accessible and easier to use</li>
          </ul>
        </div>
        
        <p class="mb-6">In the Indian context, where political discourse is already highly charged and divisive, deepfakes pose a particular threat. With over 900 million eligible voters and increasing internet penetration, the potential for deepfakes to spread misinformation at scale is unprecedented.</p>
        
        <h2 class="text-2xl font-bold mt-12 mb-6">Recent Incidents in India</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 class="font-bold mb-3">State Elections</h3>
            <p>Multiple deepfake videos of politicians making inflammatory statements circulated widely on social media platforms during recent state elections.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 class="font-bold mb-3">Religious Controversy</h3>
            <p>A manipulated video showing a national leader allegedly criticizing religious minorities gained millions of views before being identified as fake.</p>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold mt-12 mb-6">Detection and Prevention Strategies</h2>
        <div class="relative overflow-hidden rounded-xl mb-8">
          <div class="absolute inset-0 bg-gradient-to-r from-[#800020] to-[#600010] opacity-10"></div>
          <div class="relative p-8">
            <ol class="list-decimal pl-6 space-y-4">
              <li>
                <strong>Technological Solutions</strong>
                <p class="mt-2">AI-based detection tools that can identify manipulated media by analyzing visual inconsistencies, unnatural movements, or audio anomalies.</p>
              </li>
              <li>
                <strong>Media Literacy Programs</strong>
                <p class="mt-2">Educational campaigns to help citizens critically evaluate political content they encounter online.</p>
              </li>
              <li>
                <strong>Platform Responsibility</strong>
                <p class="mt-2">Social media companies must invest in detection technology and establish clear policies for handling deepfake content.</p>
              </li>
              <li>
                <strong>Legal Frameworks</strong>
                <p class="mt-2">India needs updated legislation that specifically addresses the creation and distribution of deepfakes, especially those intended to influence elections.</p>
              </li>
            </ol>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold mt-12 mb-6">IWF's Role in Combating Deepfakes</h2>
        <div class="bg-[#800020]/5 p-8 rounded-xl mb-8">
          <p class="mb-6">The Information Warfare Foundation is working with government agencies, technology companies, and civil society organizations to develop comprehensive strategies for addressing the deepfake threat. Our initiatives include:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h3 class="font-bold text-[#800020] mb-3">Detection Tools</h3>
              <p>Developing open-source deepfake detection tools tailored to Indian languages and contexts.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h3 class="font-bold text-[#800020] mb-3">Education</h3>
              <p>Creating educational resources for voters, journalists, and election officials.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h3 class="font-bold text-[#800020] mb-3">Policy Advisory</h3>
              <p>Advising on policy frameworks that balance free speech concerns with the need to prevent electoral manipulation.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h3 class="font-bold text-[#800020] mb-3">Rapid Response</h3>
              <p>Establishing a rapid response system to identify and counter viral deepfakes during election periods.</p>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold mt-12 mb-6">Looking Ahead</h2>
        <div class="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-100 mb-8">
          <p class="mb-4">As AI technology continues to advance, the sophistication of deepfakes will only increase. Preparing our democratic institutions and citizenry to navigate this challenge is essential for maintaining the integrity of India's political processes.</p>
          
          <div class="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h3 class="font-bold text-yellow-800 mb-2">Key Takeaways:</h3>
            <ul class="list-disc pl-6 space-y-2 text-yellow-800">
              <li>Deepfake technology poses a growing threat to democratic processes</li>
              <li>Multi-stakeholder collaboration is essential for effective response</li>
              <li>Continuous adaptation of detection and prevention strategies is necessary</li>
              <li>Public awareness and media literacy are crucial defenses</li>
            </ul>
          </div>
        </div>
        
        <div class="flex items-center justify-between p-6 bg-gray-50 rounded-xl mt-12">
          <div>
            <h3 class="font-bold mb-1">Get Involved</h3>
            <p class="text-gray-600">Join our efforts to combat deepfakes and protect democracy.</p>
          </div>
          <a href="/contact" class="inline-flex items-center px-6 py-3 bg-[#800020] text-white rounded-lg hover:bg-[#900030] transition-colors">
            Contact Us
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </article>
    `,
    image: "/images/blog/deepfake.jpg",
    imageAlt: "AI face manipulation technology visualization",
    date: "2024-11-15",
    author: "Admin",
    authorTitle: "Content Administrator",
    authorImage: "/images/team/admin.jpg",
    authorBio: "Administrator at the Information Warfare Foundation of India, managing and curating content across various technology domains.",
    category: "AI Ethics",
    readTime: "8 min read",
    tags: ["Deepfakes", "AI Ethics", "Indian Politics", "Misinformation", "Election Security"],
    relatedResources: [
      {
        type: "pdf",
        title: "Deepfake Detection Guide",
        url: "/resources/deepfake-detection-guide.pdf"
      },
      {
        type: "video",
        title: "Understanding Deepfake Technology",
        url: "https://www.youtube.com/watch?v=example"
      },
      {
        type: "link",
        title: "IWF Research Paper on Deepfakes",
        url: "/research/deepfakes-2024"
      }
    ]
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Simple but effective measures that small businesses can implement to protect themselves from cyber threats.",
    content: `<p>Content for cybersecurity article...</p>`,
    image: "/images/blog/cybersecurity.jpg",
    imageAlt: "Cybersecurity code and protection visualization",
    date: "2024-11-10",
    author: "Admin",
    authorTitle: "Content Administrator",
    authorImage: "/images/team/admin.jpg",
    authorBio: "Administrator at the Information Warfare Foundation of India, managing and curating content across various technology domains.",
    category: "Cybersecurity",
    readTime: "6 min read",
    tags: ["Cybersecurity", "Small Business", "Data Protection", "Cyber Threats"]
  }
  // Other blog posts would be included here
];

// Related posts data
const relatedPosts = [
  {
    id: 4,
    title: "Understanding Information Warfare: A Primer",
    excerpt: "An introduction to the concept of information warfare and its implications for national security.",
    image: "/images/blog/information-warfare.jpg",
    date: "2024-10-28",
    author: "Admin",
    authorImage: "/images/team/admin.jpg",
    category: "Information Warfare"
  },
  {
    id: 6,
    title: "The Role of AI in Combating Misinformation",
    excerpt: "How artificial intelligence can be used to detect and counter misinformation campaigns.",
    image: "/images/blog/ai-misinformation.jpg",
    date: "2024-10-15",
    author: "Admin",
    authorImage: "/images/team/admin.jpg",
    category: "AI Ethics"
  },
  {
    id: 5,
    title: "Digital Literacy Programs: Impact and Challenges",
    excerpt: "Analyzing the effectiveness of digital literacy programs in rural India and the challenges they face.",
    image: "/images/blog/digital-literacy.jpg",
    date: "2024-10-20",
    author: "Admin",
    authorImage: "/images/team/admin.jpg",
    category: "Education"
  }
];

export default function BlogPostPage() {
  const params = useParams();
  const postId = getParam(params, 'id', 1);
  
  // Find the current post
  const post = blogPosts.find(post => post.id === postId) || blogPosts[0];

  return (
    <MainLayout>
        {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-16">
          <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
              </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center text-white/80 text-sm gap-x-6 gap-y-2">
                <span>{formatDate(post.date)}</span>
                <span>{post.readTime}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="relative h-[400px]">
                  <Image 
                    src={post.image}
                    alt={post.imageAlt}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
        </div>

                <div className="p-8">
                  {/* Author info */}
                  <div className="flex items-center mb-8 pb-8 border-b">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                      {post.authorImage && (
                        <Image 
                          src={post.authorImage}
                          alt={post.author}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
              <div>
                      <h3 className="font-bold">{post.author}</h3>
                      <p className="text-sm text-gray-600">{post.authorTitle}</p>
              </div>
            </div>

                  {/* Article content */}
                  <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Tags */}
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="font-bold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag, index) => (
                  <Link 
                    key={index} 
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

                  {/* Share and actions */}
                  <div className="mt-8 pt-8 border-t flex flex-wrap justify-between items-center">
              <div className="flex items-center space-x-4">
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Bookmark className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Facebook className="h-5 w-5 text-blue-600" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Twitter className="h-5 w-5 text-blue-400" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Linkedin className="h-5 w-5 text-blue-700" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Mail className="h-5 w-5 text-gray-600" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Comments section */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
                <h3 className="text-xl font-bold mb-6">Discussion</h3>
                <div className="flex items-center justify-between mb-8 pb-4 border-b">
              <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Comments (12)
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Likes (48)
                    </Button>
                  </div>
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                    <option>Most Relevant</option>
                    <option>Newest First</option>
                    <option>Oldest First</option>
                  </select>
                </div>
                
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Join the conversation</p>
                  <Button className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white">
                    Sign in to comment
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author bio */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-gray-200">
                    {post.authorImage && (
                      <Image 
                        src={post.authorImage}
                        alt={post.author}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold">{post.author}</h4>
                    <p className="text-sm text-gray-600">{post.authorTitle}</p>
          </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {post.authorBio}
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/about#team`}>
                    View Profile
                  </Link>
                </Button>
        </div>

              {/* Related articles */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="flex items-start">
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0 mr-4 bg-gray-200">
                        <Image 
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-xs text-[#800020] font-medium">{relatedPost.category}</span>
                        <h4 className="font-bold text-sm hover:text-[#800020] transition-colors">
                          <Link href={`/blog/${relatedPost.id}`}>
                        {relatedPost.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{formatDate(relatedPost.date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t">
                  <Button asChild variant="link" className="p-0 h-auto font-medium text-[#800020] hover:text-[#900030]">
                    <Link href="/blog" className="flex items-center">
                      View all articles
                  </Link>
                  </Button>
                </div>
              </div>
              
              {/* Newsletter signup (compact version) */}
              <div className="bg-gradient-to-r from-[#800020] to-[#600010] text-white rounded-xl shadow-md overflow-hidden p-6">
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-sm text-white/80 mb-4">
                  Subscribe to our newsletter for the latest insights on information warfare and cybersecurity.
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
          </div>
        </div>
      </section>

      {/* More from IWF */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">More from IWF</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-48 bg-gray-300 overflow-hidden">
                    <Image 
                      src={post.image}
                      alt={post.title}
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
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-[#800020] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                    </div>
                  </div>
                </Link>
      </article>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white px-6 py-3">
              <Link href="/blog">
                View All Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup 
        title="Join Our Community" 
        description="Subscribe to receive updates on our latest research, articles, and events related to information warfare and cybersecurity."
      />
    </MainLayout>
  );
} 