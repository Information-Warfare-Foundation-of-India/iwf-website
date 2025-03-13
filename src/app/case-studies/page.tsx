"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Brain, Lock, ArrowRight, Clock, Zap, Sparkles, Star, CheckCircle, Users, Target, FileText, BookOpen, Search, AlertTriangle } from 'lucide-react';
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/common/faq-section";
import { NewsletterSignup } from "@/components/common/newsletter-signup";

// FAQ data
const faqs = [
  {
    question: "How are these case studies developed?",
    answer: "Our case studies are developed through rigorous research, data collection, and analysis by our team of experts. We often collaborate with academic institutions, government agencies, and industry partners to ensure comprehensive coverage of the topics."
  },
  {
    question: "Can I use these case studies for educational purposes?",
    answer: "Yes, our case studies are available for educational use. We encourage educators, students, and researchers to utilize these resources with proper attribution to the Information Warfare Foundation."
  },
  {
    question: "Do you offer more detailed versions of these case studies?",
    answer: "Yes, we provide more comprehensive versions of these case studies for academic and professional purposes. Please contact us for access to our extended research materials and detailed analysis."
  },
  {
    question: "How often are new case studies published?",
    answer: "We publish new case studies quarterly, focusing on emerging threats and significant developments in information warfare, AI ethics, and cybersecurity. Subscribe to our newsletter to stay updated on new publications."
  },
  {
    question: "Can organizations request custom case studies on specific topics?",
    answer: "Yes, we work with organizations to develop custom case studies addressing their specific concerns or industry challenges. Contact us to discuss your requirements and how we can assist."
  }
];

// Case study benefits data
const caseStudyBenefits = [
  {
    icon: <BookOpen className="h-8 w-8 text-[#800020]" />,
    title: "Evidence-Based Insights",
    description: "Our case studies provide data-driven analysis of real-world information warfare scenarios."
  },
  {
    icon: <Search className="h-8 w-8 text-[#800020]" />,
    title: "Practical Applications",
    description: "Actionable strategies and frameworks derived from extensive field research."
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-[#800020]" />,
    title: "Threat Awareness",
    description: "Detailed examination of emerging threats and vulnerabilities in the information ecosystem."
  },
  {
    icon: <Shield className="h-8 w-8 text-[#800020]" />,
    title: "Defense Strategies",
    description: "Proven methodologies for protecting against sophisticated information attacks."
  }
];

const caseStudies = [
  {
    id: 'information-warfare',
    title: 'Information Warfare: Protection, Detection, Reaction',
    description: 'This case study explores the multifaceted nature of information warfare, examining methods for protecting against disinformation campaigns, detecting sophisticated information attacks, and developing appropriate reaction strategies.',
    icon: <Shield className="h-12 w-12 text-[#800020]" />,
    image: '/images/case-studies/information-warfare-main.jpg',
    imageFallback: 'Digital security and cyber defense visualization',
    highlights: [
      'Analysis of state-sponsored disinformation campaigns',
      'Detection methodologies for identifying coordinated inauthentic behavior',
      'Frameworks for rapid response to information attacks',
      'Case examples from recent global events'
    ],
    keyFindings: [
      {
        title: "Disinformation Patterns",
        description: "Identified recurring patterns in state-sponsored disinformation campaigns targeting democratic processes."
      },
      {
        title: "Detection Accuracy",
        description: "Developed detection methodologies with 85% accuracy in identifying coordinated inauthentic behavior."
      },
      {
        title: "Response Effectiveness",
        description: "Measured effectiveness of various counter-narrative strategies in mitigating information attacks."
      }
    ],
    methodology: [
      "Data Collection",
      "Pattern Analysis",
      "Attribution Assessment",
      "Impact Evaluation",
      "Response Testing"
    ],
    detailedSections: [
      {
        title: "Disinformation Analysis",
        description: "Comprehensive analysis of disinformation tactics, sources, and distribution channels.",
        icon: <Search className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Detection Systems",
        description: "Technical overview of systems used to detect and monitor information warfare activities.",
        icon: <AlertTriangle className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Response Frameworks",
        description: "Strategic frameworks for responding to information attacks at various scales.",
        icon: <Shield className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Case Examples",
        description: "Detailed examination of recent information warfare incidents and their resolution.",
        icon: <FileText className="h-6 w-6 text-[#800020]" />
      }
    ]
  },
  {
    id: 'ai-ethics',
    title: 'Artificial Intelligence: Ethical and Unethical Practices',
    description: 'This study examines the ethical dimensions of artificial intelligence applications, contrasting responsible AI development with potentially harmful implementations and exploring governance frameworks.',
    icon: <Brain className="h-12 w-12 text-[#800020]" />,
    image: '/images/case-studies/ai-ethics-main.jpg',
    imageFallback: 'Artificial intelligence ethical considerations visualization',
    highlights: [
      'Ethical frameworks for AI development and deployment',
      'Analysis of AI misuse in surveillance and manipulation',
      'Responsible AI governance models',
      'Balancing innovation with ethical considerations'
    ],
    keyFindings: [
      {
        title: "Governance Gaps",
        description: "Identified critical gaps in current AI governance frameworks across public and private sectors."
      },
      {
        title: "Ethical Guidelines",
        description: "Developed comprehensive ethical guidelines for AI applications in sensitive domains."
      },
      {
        title: "Misuse Patterns",
        description: "Documented patterns of AI misuse in surveillance, misinformation, and social manipulation."
      }
    ],
    methodology: [
      "Case Selection",
      "Ethical Analysis",
      "Stakeholder Interviews",
      "Comparative Assessment",
      "Policy Evaluation"
    ],
    detailedSections: [
      {
        title: "Ethical Frameworks",
        description: "Analysis of existing ethical frameworks for AI development and their effectiveness.",
        icon: <CheckCircle className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Misuse Cases",
        description: "Documentation of AI misuse in various contexts and their societal impacts.",
        icon: <AlertTriangle className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Governance Models",
        description: "Evaluation of AI governance models and their implementation challenges.",
        icon: <Users className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Future Directions",
        description: "Recommendations for balancing innovation with ethical considerations in AI development.",
        icon: <Target className="h-6 w-6 text-[#800020]" />
      }
    ]
  },
  {
    id: 'cybersecurity-research',
    title: 'Cyber Security: Research and Prediction',
    description: 'This case study focuses on advanced cybersecurity research methodologies and predictive approaches to identify emerging threats before they materialize into full-scale attacks.',
    icon: <Lock className="h-12 w-12 text-[#800020]" />,
    image: '/images/case-studies/cybersecurity-hacker-image.jpg',
    imageFallback: 'Realistic cybersecurity visualization with code and digital security concepts',
    highlights: [
      'Threat intelligence gathering and analysis techniques',
      'Predictive modeling for emerging cyber threats',
      'Zero-day vulnerability research methodologies',
      'Proactive defense strategy development'
    ],
    keyFindings: [
      {
        title: "Predictive Accuracy",
        description: "Achieved 73% accuracy in predicting emerging threat vectors using advanced modeling techniques."
      },
      {
        title: "Vulnerability Discovery",
        description: "Developed methodologies that increased zero-day vulnerability discovery rates by 40%."
      },
      {
        title: "Defense Efficacy",
        description: "Measured significant improvements in threat mitigation through proactive defense strategies."
      }
    ],
    methodology: [
      "Threat Modeling",
      "Vulnerability Research",
      "Predictive Analysis",
      "Defense Testing",
      "Effectiveness Measurement"
    ],
    detailedSections: [
      {
        title: "Threat Intelligence",
        description: "Methods for gathering and analyzing threat intelligence from diverse sources.",
        icon: <Search className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Predictive Modeling",
        description: "Technical approaches to modeling and predicting emerging cyber threats.",
        icon: <Target className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Vulnerability Research",
        description: "Methodologies for identifying and analyzing zero-day vulnerabilities.",
        icon: <AlertTriangle className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Defense Strategies",
        description: "Development and implementation of proactive cybersecurity defense strategies.",
        icon: <Shield className="h-6 w-6 text-[#800020]" />
      }
    ]
  }
];

export default function CaseStudiesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-grid-lg h-full w-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-100 mb-8">
              In-depth analysis of critical issues in information warfare, artificial intelligence ethics, and cybersecurity research.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100 text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="#case-studies-list">
                  Explore Case Studies
                </Link>
              </Button>
              <Button asChild className="bg-[#800020] border-2 border-white text-white hover:bg-[#600010] text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/contact">
                  Request Custom Research
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Information Warfare</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Brain className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">AI Ethics</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Lock className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Cybersecurity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Research Benefits</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our case studies provide valuable insights and practical applications for organizations and individuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {caseStudyBenefits.map((benefit, index) => (
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

      {/* Case Studies List */}
      <section id="case-studies-list" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Explore our in-depth research on critical issues in information warfare, AI ethics, and cybersecurity.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study) => (
              <div 
                key={study.id} 
                id={study.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden scroll-mt-24"
              >
                <div className="bg-gradient-to-r from-[#800020] to-[#600010] text-white p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-white/10 rounded-full mr-4">
                      {study.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{study.title}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-[#800020] pl-4">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Zap className="h-5 w-5 text-[#800020] mr-2" /> Key Highlights
                      </h3>
                      <ul className="space-y-3">
                        {study.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <div className="bg-[#800020]/10 text-[#800020] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="text-xs font-bold">{i + 1}</span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Star className="h-5 w-5 text-[#800020] mr-2" /> Key Findings
                      </h3>
                      <div className="space-y-4">
                        {study.keyFindings?.slice(0, 2).map((finding, i) => (
                          <div key={i} className="border-l-2 border-[#800020] pl-4">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100">{finding.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{finding.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button asChild className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white">
                      <Link href={`/case-studies/${study.id}`}>
                        Read Full Case Study
                      </Link>
                    </Button>
                    
                    <Button asChild variant="outline" className="border-[#800020] text-[#800020] hover:bg-[#800020]/10">
                      <Link href={`#${study.id}-details`} className="flex items-center">
                        View Details <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                {/* Detailed Case Study Information */}
                <div id={`${study.id}-details`} className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/50">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold mb-6 flex items-center">
                        <FileText className="h-5 w-5 text-[#800020] mr-2" /> Study Components
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {study.detailedSections.map((section, i) => (
                          <div 
                            key={i} 
                            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-center mb-3">
                              <div className="p-2 bg-[#800020]/10 rounded-full mr-3">
                                {section.icon}
                              </div>
                              <h4 className="text-lg font-semibold">{section.title}</h4>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {section.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                        <h3 className="text-xl font-bold mb-6">Research Methodology</h3>
                        <ul className="space-y-3">
                          {study.methodology?.map((step, i) => (
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
                <h2 className="text-3xl font-bold mb-6">Interested in Our Research?</h2>
                <p className="text-lg text-gray-100 mb-8">
                  Join our community of researchers, practitioners, and policymakers working to address the challenges of information warfare and cybersecurity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100 text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                  <Button asChild className="bg-[#800020] border-2 border-white text-white hover:bg-[#600010] text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Link href="/volunteer">
                      Join Our Efforts
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4">Research Opportunities</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Collaborate</h4>
                        <p className="text-sm text-gray-200">Partner with us on research projects</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Commission</h4>
                        <p className="text-sm text-gray-200">Request custom case studies for your organization</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Contribute</h4>
                        <p className="text-sm text-gray-200">Share your expertise and insights</p>
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
        title="Frequently Asked Questions About Our Case Studies" 
        description="Find answers to common questions about our research and case studies."
        faqs={faqs}
      />

      {/* Newsletter Section */}
      <NewsletterSignup 
        title="Stay Updated on Our Research" 
        description="Subscribe to our newsletter to receive updates on our latest case studies, research findings, and upcoming events."
      />
    </MainLayout>
  );
} 