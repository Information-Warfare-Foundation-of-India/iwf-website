import { MainLayout } from "@/components/layout/main-layout";
import { CheckCircle, Award, BookOpen, Users, Shield, Target, Globe, FileText, ArrowRight, Heart, Zap, Lock, Lightbulb } from "lucide-react";
import { FAQSection } from "@/components/common/faq-section";
import { NewsletterSignup } from "@/components/common/newsletter-signup";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { StaticHeroBackground, StaticTeamImage } from "@/components/about/static-images";

export const metadata: Metadata = {
  title: "About Us | Information Warfare Foundation of India (IWF)",
  description: "Learn about the Information Warfare Foundation of India (IWF), our mission, vision, and leadership team.",
};

// FAQ data
const faqs = [
  {
    question: "What is the Information Warfare Foundation?",
    answer: "The Information Warfare Foundation (IWF) is a forward-thinking non-profit organization dedicated to combating digital threats including misinformation, advanced cyber attacks, AI-driven manipulation, and digital waste. We leverage cutting-edge technologies and methodologies to empower India's digital resilience through research, education, and advocacy."
  },
  {
    question: "How does IWF address emerging digital threats?",
    answer: "We employ a multi-layered approach combining AI-powered threat detection, real-time monitoring systems, and predictive analytics to identify and neutralize emerging digital threats. Our team develops custom solutions that adapt to the rapidly evolving digital landscape, ensuring protection against sophisticated attack vectors."
  },
  {
    question: "What technologies does IWF use in its work?",
    answer: "IWF utilizes advanced technologies including machine learning algorithms for pattern recognition, blockchain for secure information verification, quantum-resistant cryptography, and natural language processing for detecting synthetic media. We also develop proprietary tools specifically designed to counter information warfare tactics."
  },
  {
    question: "How can organizations partner with IWF?",
    answer: "Organizations can partner with IWF through our Strategic Alliance Program, which offers collaborative research opportunities, access to our threat intelligence network, customized training programs, and joint initiatives. We work with businesses, educational institutions, government agencies, and other non-profits to create a more secure digital ecosystem."
  },
  {
    question: "What makes IWF's approach to digital literacy unique?",
    answer: "Our digital literacy programs go beyond basic awareness to develop critical thinking skills and digital resilience. We use immersive learning experiences, interactive simulations, and personalized learning paths to help citizens recognize sophisticated manipulation techniques and protect themselves in the digital space."
  },
  {
    question: "How is IWF preparing for future information warfare challenges?",
    answer: "We maintain a dedicated Future Threats Research Lab that analyzes emerging technologies and anticipates potential misuse. Our team conducts scenario planning exercises, develops countermeasures for theoretical attack vectors, and collaborates with international partners to establish global standards for information integrity."
  }
];

// Add organization values data
const orgValues = [
  {
    icon: <Shield className="h-8 w-8 text-[#800020]" />,
    title: "Digital Integrity",
    description: "We champion truth and accuracy in the digital realm, developing systems that verify information and combat manipulation."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-[#800020]" />,
    title: "Adaptive Innovation",
    description: "We continuously evolve our approaches and technologies to stay ahead of emerging threats in the digital landscape."
  },
  {
    icon: <Lock className="h-8 w-8 text-[#800020]" />,
    title: "Ethical Technology",
    description: "We promote responsible development and use of technology that respects privacy, security, and human rights."
  },
  {
    icon: <Globe className="h-8 w-8 text-[#800020]" />,
    title: "Collaborative Impact",
    description: "We foster partnerships across sectors and borders to create collective resilience against information warfare."
  }
];

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <img 
              src="/images/about/hero-cybersecurity.jpg" 
              alt="IWF Digital Defense Network Background"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/90 to-[#600010]/90"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="pattern-grid-lg h-full w-full"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Defending Digital Truth</h1>
            <p className="text-xl text-gray-100 mb-8">
              Pioneering advanced solutions to combat information warfare and build 
              a resilient digital ecosystem for India's future.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100 text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="#our-story">
                  Our Vision
                </Link>
              </Button>
              <Button asChild className="bg-[#800020] border-2 border-white text-white hover:bg-[#600010] text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/contact">
                  Join Our Network
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Zap className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">AI-Powered Defense</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Expert Network</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Globe className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Global Partnerships</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Target className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Proactive Protection</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <FileText className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Data-Driven Insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Evolution</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              From inception to innovation: How we're transforming India's approach to information warfare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-[#800020] pl-4">
                The Information Warfare Foundation emerged from a critical need to address the 
                sophisticated digital threats facing India in the 2020s. Founded by a consortium 
                of cybersecurity experts, data scientists, and policy specialists, IWF represents 
                a new paradigm in digital defense.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Today, we operate at the intersection of technology and security, leveraging 
                artificial intelligence, quantum computing principles, and behavioral science 
                to develop next-generation solutions for combating misinformation, detecting 
                synthetic media, and securing digital infrastructure.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our multidisciplinary approach brings together specialists from diverse fields 
                including machine learning, cryptography, cognitive psychology, and strategic 
                communications to create holistic defenses against the full spectrum of 
                information warfare tactics.
              </p>
              
              <div className="mt-8">
                <Button asChild className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white flex items-center">
                  <Link href="#mission-vision">
                    Our Strategic Approach <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-[#800020]/10 to-[#600010]/10 rounded-xl p-8 border border-[#800020]/20">
                <div className="relative w-full h-[400px]">
                  <img 
                    src="/images/about/team-collaboration.jpg" 
                    alt="IWF Team Working on Digital Defense Solutions"
                    className="absolute inset-0 w-full h-full rounded-lg shadow-xl object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-[#800020]">Innovation Hub</h3>
                    <p className="text-gray-700 dark:text-gray-300">Advanced Defense Systems</p>
                  </div>
                  <div className="bg-[#800020] text-white p-3 rounded-full">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Strategic Framework</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our comprehensive approach to securing India's digital future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-[#800020] to-[#600010] text-white p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/10 rounded-full mr-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  To safeguard India's digital sovereignty through advanced threat detection, 
                  proactive defense systems, and the development of cognitive resilience against 
                  information warfare tactics.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Deploy AI-powered systems to detect and neutralize digital threats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Develop quantum-resistant security protocols for critical infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Build cognitive resilience through next-gen digital literacy programs</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-[#800020] to-[#600010] text-white p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/10 rounded-full mr-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  To position India as a global leader in information integrity and digital 
                  resilience, creating an ecosystem where technology empowers rather than 
                  endangers democratic processes and social cohesion.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Establish India as a hub for information warfare defense innovation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Create a national network of digital threat response centers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Develop international standards for information integrity verification</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Guiding Principles</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              The foundational values that drive our innovation and impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {orgValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-[#800020]/10 rounded-full">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-[#800020]/10 to-[#600010]/10 rounded-xl p-8 border border-[#800020]/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="col-span-2">
                <h3 className="text-2xl font-bold mb-4">Our Technological Edge</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Information Warfare Foundation leverages cutting-edge technologies including quantum-resistant cryptography, federated learning systems, and advanced neural networks to stay ahead of evolving threats. Our proprietary algorithms can detect synthetic media with 99.7% accuracy and identify coordinated disinformation campaigns in real-time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-2" />
                    <span className="text-sm font-medium">AI-Powered Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-2" />
                    <span className="text-sm font-medium">Quantum-Resistant Security</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-2" />
                    <span className="text-sm font-medium">Predictive Threat Modeling</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-2" />
                    <span className="text-sm font-medium">Real-Time Response Systems</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-48 w-48">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-[#600010] rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <Shield className="h-20 w-20 text-[#800020]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanding Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">🚀 Expanding Impact: Broader Initiatives</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Beyond our core mission, we're expanding our impact through these key initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-3">1. Encouraging Technological Innovation</h3>
                <div className="flex items-start mb-2">
                  <CheckCircle className="h-5 w-5 text-[#800020] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Developing open-source & premium cybersecurity tools</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-3">2. Promoting Entrepreneurship</h3>
                <div className="flex items-start mb-2">
                  <CheckCircle className="h-5 w-5 text-[#800020] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Mentoring startups & funding tech innovators</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-3">3. Addressing Mental Health Challenges</h3>
                <div className="flex items-start mb-2">
                  <CheckCircle className="h-5 w-5 text-[#800020] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Research & consulting on digital-age mental health</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-3">4. Revolutionizing Education</h3>
                <div className="flex items-start mb-2">
                  <CheckCircle className="h-5 w-5 text-[#800020] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Providing next-gen educational tools for schools & universities</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-3">5. Creating Opportunities</h3>
                <div className="flex items-start mb-2">
                  <CheckCircle className="h-5 w-5 text-[#800020] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Skill-building & employment for economically weaker sections</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold mb-3">6. Driving Sustainability</h3>
                <div className="flex items-start mb-2">
                  <CheckCircle className="h-5 w-5 text-[#800020] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Hosting motivational seminars & awareness campaigns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-grid-lg h-full w-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Join Our Defense Network</h2>
                <p className="text-lg text-gray-100 mb-8">
                  Become part of India's premier information warfare defense ecosystem. Whether you're a 
                  cybersecurity expert, AI researcher, policy specialist, or concerned citizen, your 
                  contribution can help secure our digital future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100 px-6 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Link href="/volunteer">
                      Join Our Network
                    </Link>
                  </Button>
                  <Button asChild className="bg-[#800020] border-2 border-white text-white hover:bg-[#600010] px-6 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Link href="/contact">
                      Request Collaboration
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Our Impact Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">1,200+</div>
                      <div className="text-sm text-white/80">Active Defense Network Members</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">10M+</div>
                      <div className="text-sm text-white/80">Threats Neutralized</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">35+</div>
                      <div className="text-sm text-white/80">Global Partners</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions" 
        description="Learn more about our advanced approach to information warfare defense."
        faqs={faqs}
      />

      {/* Newsletter Section */}
      <NewsletterSignup />
    </MainLayout>
  );
} 