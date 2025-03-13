import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Globe, FileText, Search, BookOpen, Recycle, Scale, Building, AlertTriangle, Bell, Network, Radio, GraduationCap, ArrowRight, Clock, Zap, Sparkles, Star, CheckCircle, Users, Target, Eye } from "lucide-react";
import { FAQSection } from "@/components/common/faq-section";
import { NewsletterSignup } from "@/components/common/newsletter-signup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Information Warfare Foundation of India (IWF)",
  description: "Explore the key projects of the Information Warfare Foundation of India (IWF) including PIN, Infowarr, and Institute of Information Warfare.",
};

// FAQ data
const faqs = [
  {
    question: "How can I get involved with IWF's projects?",
    answer: "You can get involved with our projects by volunteering, interning, or partnering with us. Visit our volunteer page or contact us directly to discuss collaboration opportunities."
  },
  {
    question: "Are IWF's projects focused only on India?",
    answer: "While our primary focus is on India, many of our projects have global relevance and applications. We collaborate with international partners and share our research and findings with the global community."
  },
  {
    question: "How does IWF fund its projects?",
    answer: "IWF funds its projects through a combination of grants, donations, partnerships with organizations, and revenue from our educational programs and services. We maintain transparency in our funding to ensure independence in our work."
  },
  {
    question: "Can educational institutions partner with IWF for research projects?",
    answer: "Yes, we actively seek partnerships with educational institutions for collaborative research, student internships, and joint educational initiatives. Contact us to discuss potential collaboration opportunities."
  },
  {
    question: "How does IWF measure the impact of its projects?",
    answer: "We measure impact through various metrics including reach, engagement, policy changes, educational outcomes, and direct feedback from stakeholders. We regularly publish impact reports and case studies on our website."
  },
  {
    question: "Does IWF provide training related to its projects?",
    answer: "Yes, through our Institute of Information Warfare, we offer specialized training programs related to our projects, covering topics such as information warfare detection, investigative journalism, and digital literacy."
  }
];

// Project benefits data
const projectBenefits = [
  {
    icon: <Clock className="h-8 w-8 text-[#800020]" />,
    title: "Immediate Impact",
    description: "Our projects deliver measurable results in protecting India's information ecosystem."
  },
  {
    icon: <Zap className="h-8 w-8 text-[#800020]" />,
    title: "Innovative Solutions",
    description: "Cutting-edge approaches to combat modern information warfare challenges."
  },
  {
    icon: <Shield className="h-8 w-8 text-[#800020]" />,
    title: "National Security",
    description: "Strengthening India's defense against information warfare threats."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-[#800020]" />,
    title: "Knowledge Creation",
    description: "Generating valuable insights and research in information warfare."
  }
];

const projects = [
  {
    id: "pin-india",
    icon: <Network className="h-12 w-12 text-[#800020]" />,
    title: "Public Intelligence Network of India (PIN)",
    description: "An intelligence agency focused on detecting and countering information warfare threats to India's national security and democratic processes.",
    features: [
      "Advanced monitoring systems for disinformation campaigns",
      "Threat intelligence gathering and analysis",
      "Coordination with government agencies on national security matters",
      "Public alerts on critical information threats",
      "Research on emerging information warfare tactics"
    ],
    useCases: [
      {
        title: "Electoral Integrity",
        description: "Aim to protect electoral processes by identifying and neutralizing disinformation campaigns during state and national elections."
      },
      {
        title: "Critical Infrastructure Protection",
        description: "Establish comprehensive monitoring systems to prevent coordinated information warfare attacks on government and critical infrastructure."
      },
      {
        title: "Public Safety Enhancement",
        description: "Develop early warning systems to prevent mass panic during crisis situations through rapid counter-information deployment."
      }
    ],
    methodology: [
      "Intelligence Gathering",
      "Threat Analysis",
      "Coordination",
      "Response Planning",
      "Public Communication"
    ],
    detailedServices: [
      {
        title: "Threat Monitoring",
        description: "24/7 surveillance of information warfare activities targeting India.",
        icon: <Eye className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Intelligence Analysis",
        description: "Expert analysis of threats and coordination with security agencies.",
        icon: <Search className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Public Alerts",
        description: "Timely warnings and guidance for the public during information crises.",
        icon: <Bell className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Research & Development",
        description: "Continuous innovation in threat detection and response methodologies.",
        icon: <BookOpen className="h-6 w-6 text-[#800020]" />
      }
    ]
  },
  {
    id: "infowarr",
    icon: <Radio className="h-12 w-12 text-[#800020]" />,
    title: "Infowarr",
    description: "An investigative media agency and legal assistance platform dedicated to exposing disinformation and providing support to victims of information warfare.",
    features: [
      "Investigative journalism on disinformation campaigns",
      "Fact-checking and media analysis",
      "Legal assistance for victims of digital harassment and defamation",
      "Public education on media literacy",
      "Documentation of information warfare case studies"
    ],
    useCases: [
      {
        title: "Financial Market Protection",
        description: "Build capabilities to detect and expose large-scale disinformation networks targeting India's financial markets and economic stability."
      },
      {
        title: "Digital Rights Protection",
        description: "Establish support systems to assist and protect over 1000 victims of digital harassment and defamation annually."
      },
      {
        title: "Media Literacy Enhancement",
        description: "Develop programs to train 50,000+ citizens in critical media analysis and fact-checking techniques by 2025."
      }
    ],
    methodology: [
      "Investigation Planning",
      "Evidence Collection",
      "Legal Analysis",
      "Public Reporting",
      "Victim Support"
    ],
    detailedServices: [
      {
        title: "Investigative Reporting",
        description: "In-depth investigations of information warfare campaigns.",
        icon: <FileText className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Legal Assistance",
        description: "Support for victims of digital harassment and defamation.",
        icon: <Scale className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Media Analysis",
        description: "Expert analysis of media manipulation and disinformation tactics.",
        icon: <Search className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Public Education",
        description: "Media literacy programs and public awareness campaigns.",
        icon: <BookOpen className="h-6 w-6 text-[#800020]" />
      }
    ]
  },
  {
    id: "institute",
    icon: <GraduationCap className="h-12 w-12 text-[#800020]" />,
    title: "Institute of Information Warfare",
    description: "An educational initiative focused on building capacity and expertise in information warfare detection, analysis, and countermeasures.",
    features: [
      "Specialized courses on information warfare tactics and defense",
      "Training programs for journalists, government officials, and security professionals",
      "Research publications and academic resources",
      "Workshops and seminars on emerging threats",
      "Certification programs in information security and digital literacy"
    ],
    useCases: [
      {
        title: "Professional Development",
        description: "Establish comprehensive training programs to prepare 10,000+ professionals in advanced information warfare defense techniques."
      },
      {
        title: "Research Leadership",
        description: "Lead groundbreaking research initiatives in emerging information warfare tactics and countermeasures."
      },
      {
        title: "Academic Partnership",
        description: "Expand partnerships to 50+ universities globally for collaborative research and knowledge exchange programs."
      }
    ],
    methodology: [
      "Curriculum Development",
      "Training Delivery",
      "Research Conduct",
      "Knowledge Sharing",
      "Impact Assessment"
    ],
    detailedServices: [
      {
        title: "Professional Training",
        description: "Comprehensive training programs for security professionals.",
        icon: <Users className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Research Programs",
        description: "Advanced research initiatives in information warfare.",
        icon: <Target className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Academic Resources",
        description: "Development of educational materials and resources.",
        icon: <BookOpen className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Certification Courses",
        description: "Professional certification programs in various specializations.",
        icon: <Shield className="h-6 w-6 text-[#800020]" />
      }
    ]
  }
];

export default function ProjectsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-grid-lg h-full w-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-100 mb-8">
              The Information Warfare Foundation leads several key initiatives to combat information threats, 
              promote media integrity, and build capacity through education.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100 text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="#projects-list">
                  Explore Projects
                </Link>
              </Button>
              <Button asChild className="bg-[#800020] border-2 border-white text-white hover:bg-[#600010] text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/contact">
                  Get Involved
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Network className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Intelligence Network</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Radio className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Media Agency</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <GraduationCap className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Education</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Project Impact & Benefits</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our projects deliver measurable results in protecting India's information ecosystem.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {projectBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-[#800020]/10 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section id="projects-list" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Key Projects</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Explore our major initiatives in combating information warfare and promoting digital literacy.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project) => (
              <div 
                key={project.id} 
                id={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden scroll-mt-24"
              >
                <div className="bg-gradient-to-r from-[#800020] to-[#600010] text-white p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-white/10 rounded-full mr-4">
                      {project.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{project.title}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-[#800020] pl-4">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Zap className="h-5 w-5 text-[#800020] mr-2" /> Key Features
                      </h3>
                      <ul className="space-y-3">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="bg-[#800020]/10 text-[#800020] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="text-xs font-bold">{i + 1}</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Star className="h-5 w-5 text-[#800020] mr-2" /> Success Goals
                      </h3>
                      <div className="space-y-4">
                        {project.useCases?.slice(0, 2).map((useCase, i) => (
                          <div key={i} className="border-l-2 border-[#800020] pl-4">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100">{useCase.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{useCase.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button asChild className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white">
                      <Link href={`/contact?project=${project.id}`}>
                        Get Involved
                      </Link>
                    </Button>
                    
                    <Button asChild variant="outline" className="border-[#800020] text-[#800020] hover:bg-[#800020]/10">
                      <Link href={`#${project.id}-details`} className="flex items-center">
                        View Details <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                {/* Detailed Project Information */}
                <div id={`${project.id}-details`} className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/50">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold mb-6 flex items-center">
                        <FileText className="h-5 w-5 text-[#800020] mr-2" /> Project Components
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.detailedServices.map((service, i) => (
                          <div 
                            key={i} 
                            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-center mb-3">
                              <div className="p-2 bg-[#800020]/10 rounded-full mr-3">
                                {service.icon}
                              </div>
                              <h4 className="text-lg font-semibold">{service.title}</h4>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {service.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                        <h3 className="text-xl font-bold mb-6">Implementation Roadmap</h3>
                        <ul className="space-y-3">
                          {project.methodology?.map((step, i) => (
                            <li key={i} className="flex items-start group">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#800020]/10 flex items-center justify-center mt-0.5 group-hover:bg-[#800020]/20 transition-colors duration-300">
                                <span className="text-xs font-bold text-[#800020]">{i+1}</span>
                              </div>
                              <div className="ml-3">
                                <div className="text-gray-800 dark:text-gray-200 font-medium">{step}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-grid-lg h-full w-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
                <p className="text-lg text-gray-100 mb-8">
                  Be part of India's fight against information warfare. Join our projects as a volunteer,
                  partner, or supporter and help protect our nation's information ecosystem.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100 text-base px-6 py-3 font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <Link href="/volunteer">
                      Volunteer With Us
                    </Link>
                  </Button>
                  <Button asChild className="bg-[#800020] border-2 border-white text-white hover:bg-[#600010] text-base px-6 py-3 font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <Link href="/contact">
                      Partner With Us
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4">Ways to Contribute</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Volunteer</h4>
                        <p className="text-sm text-gray-200">Join our projects as a volunteer</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Partner</h4>
                        <p className="text-sm text-gray-200">Collaborate on research and initiatives</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Support</h4>
                        <p className="text-sm text-gray-200">Contribute to our mission</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions About Our Projects" 
        description="Find answers to common questions about IWF's projects and initiatives."
        faqs={faqs}
      />

      {/* Newsletter Section */}
      <NewsletterSignup 
        title="Stay Updated on Our Projects" 
        description="Subscribe to our newsletter to receive updates on our projects, research findings, and upcoming events."
      />
    </MainLayout>
  );
} 