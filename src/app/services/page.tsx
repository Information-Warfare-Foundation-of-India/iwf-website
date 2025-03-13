import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Globe, FileText, Search, BookOpen, Recycle, Scale, Building, AlertTriangle, Bell, Users, Briefcase, Eye, BarChart2, Award, CheckCircle, Target, Database, Server, Lock, LinkIcon, ArrowRight, Clock, Zap, Sparkles, Star } from "lucide-react";
import { FAQSection } from "@/components/common/faq-section";
import { NewsletterSignup } from "@/components/common/newsletter-signup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Information Warfare Foundation of India (IWF)",
  description: "Explore the comprehensive range of services offered by the Information Warfare Foundation of India (IWF).",
};

// FAQ data
const faqs = [
  {
    question: "What types of cybersecurity services does IWF offer?",
    answer: "IWF offers a range of cybersecurity services including vulnerability assessments, penetration testing, security audits, incident response planning, and cybersecurity training for organizations of all sizes. We also provide specialized services for critical infrastructure protection and supply chain security."
  },
  {
    question: "How can IWF help my organization combat misinformation?",
    answer: "We help organizations combat misinformation through a combination of AI-powered detection tools, fact-checking services, media literacy training for employees, and strategic communication planning. We can also assist with crisis management when your organization is targeted by misinformation campaigns."
  },
  {
    question: "Does IWF provide services to government agencies?",
    answer: "Yes, we work closely with government agencies to enhance national security through information warfare research, intelligence support, and specialized training programs. We also assist with policy development related to cybersecurity, AI ethics, and digital governance."
  },
  {
    question: "Are IWF's services available nationwide?",
    answer: "Yes, our services are available throughout India. While our headquarters is in Bhubaneswar, Odisha, we have a network of experts and partners across the country, allowing us to serve clients nationwide. We also offer many of our services remotely."
  },
  {
    question: "How much do IWF's services cost?",
    answer: "The cost of our services varies depending on the specific needs of your organization, the scope of work, and the complexity of the project. We offer flexible pricing models including fixed-price contracts, retainer arrangements, and sliding scale fees for non-profits and educational institutions. Contact us for a customized quote."
  },
  {
    question: "How can I request a service from IWF?",
    answer: "You can request our services by filling out the contact form on our website, sending an email to info@iwf.org.in, or calling our office. After your initial inquiry, we'll schedule a consultation to discuss your needs and develop a tailored solution for your organization."
  }
];

// Add benefits data
const serviceBenefits = [
  {
    icon: <Clock className="h-8 w-8 text-[#800020]" />,
    title: "Proactive Protection",
    description: "Stay ahead of threats with our advanced early warning systems and predictive analysis."
  },
  {
    icon: <Zap className="h-8 w-8 text-[#800020]" />,
    title: "Rapid Response",
    description: "Get immediate support and expert intervention when security incidents occur."
  },
  {
    icon: <Shield className="h-8 w-8 text-[#800020]" />,
    title: "Comprehensive Coverage",
    description: "End-to-end protection across digital, informational, and organizational domains."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-[#800020]" />,
    title: "Continuous Innovation",
    description: "Access to cutting-edge technologies and methodologies in information warfare defense."
  }
];

const services = [
  {
    id: "information-warfare",
    icon: <Shield className="h-12 w-12 text-[#800020]" />,
    title: "Combat Information Warfare & AI Threats",
    description: "We identify, analyze, and counter sophisticated information warfare campaigns and unethical AI applications that threaten national security and democratic processes.",
    features: [
      "Advanced disinformation detection systems",
      "AI ethics monitoring and compliance",
      "Deepfake and synthetic media analysis",
      "Coordinated inauthentic behavior tracking",
      "Strategic counter-narrative development"
    ],
    useCases: [
      {
        title: "Election Security Projection",
        description: "Our advanced systems are projected to identify and neutralize sophisticated foreign disinformation networks during upcoming elections, protecting over 100 million voters from manipulation attempts."
      },
      {
        title: "Corporate Defense Forecast",
        description: "Organizations implementing our defense protocols can expect to prevent coordinated synthetic media attacks, potentially saving up to $50M in market value and maintaining stakeholder trust."
      },
      {
        title: "AI Ethics Transformation Outlook",
        description: "Companies adopting our ethical AI frameworks are projected to achieve up to 90% reduction in algorithmic bias incidents and significant improvements in user trust metrics."
      }
    ],
    detailedServices: [
      {
        title: "Disinformation Campaign Analysis",
        description: "Comprehensive analysis of coordinated disinformation campaigns, including source attribution, narrative mapping, and impact assessment.",
        icon: <Target className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "AI Ethics Compliance Framework",
        description: "Development and implementation of ethical frameworks for AI deployment, ensuring responsible use of artificial intelligence technologies.",
        icon: <CheckCircle className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Synthetic Media Detection",
        description: "Advanced tools and methodologies to detect deepfakes, manipulated media, and AI-generated content that could be used for deception.",
        icon: <Eye className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Information Environment Assessment",
        description: "Comprehensive analysis of the information landscape to identify vulnerabilities, threats, and opportunities for strategic communication.",
        icon: <Globe className="h-6 w-6 text-[#800020]" />
      }
    ],
    methodology: [
      "Initial Threat Assessment",
      "Strategy Development",
      "Implementation",
      "Continuous Monitoring",
      "Regular Updates & Refinement"
    ]
  },
  {
    id: "cybersecurity",
    icon: <Globe className="h-12 w-12 text-[#800020]" />,
    title: "Cybersecurity & Economic Fraud Prevention",
    description: "Comprehensive protection against cyber threats and economic fraud through advanced detection, prevention, and response strategies.",
    features: [
      "Critical infrastructure protection",
      "Financial fraud detection systems",
      "Supply chain security assessment",
      "Digital forensics and incident response",
      "Ransomware prevention and recovery"
    ],
    useCases: [
      {
        title: "Banking Sector Protection Forecast",
        description: "Our security protocols are designed to prevent coordinated cyber attacks targeting banking networks, with potential to safeguard over $500M in assets and maintain financial system stability."
      },
      {
        title: "Supply Chain Security Projection",
        description: "Implementation of our end-to-end security measures across global supply chains is expected to reduce fraud incidents by up to 75% and save approximately $30M annually."
      },
      {
        title: "Ransomware Defense Prediction",
        description: "Organizations adopting our ransomware prevention strategies can anticipate successful mitigation of attacks with projected 100% data recovery rates and zero ransom payments."
      }
    ],
    methodology: [
      "Risk Assessment & Audit",
      "Security Architecture Design",
      "Implementation & Integration",
      "Monitoring & Detection",
      "Incident Response & Recovery"
    ],
    detailedServices: [
      {
        title: "Critical Infrastructure Security",
        description: "Specialized security solutions for protecting vital infrastructure including power grids, water systems, and telecommunications networks.",
        icon: <Server className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Financial Fraud Prevention",
        description: "Advanced systems to detect and prevent financial fraud, including transaction monitoring, anomaly detection, and anti-money laundering measures.",
        icon: <AlertTriangle className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Supply Chain Risk Management",
        description: "Comprehensive assessment and mitigation of security risks throughout the supply chain, from vendors to end-users.",
        icon: <LinkIcon className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Incident Response & Recovery",
        description: "Rapid response to cybersecurity incidents, including containment, eradication, recovery, and post-incident analysis.",
        icon: <Shield className="h-6 w-6 text-[#800020]" />
      }
    ]
  },
  {
    id: "investigative-media",
    icon: <Eye className="h-12 w-12 text-[#800020]" />,
    title: "Investigative Media & Awareness",
    description: "Independent investigative journalism and media initiatives focused on exposing information warfare, promoting transparency, and building public awareness.",
    features: [
      "In-depth investigative reporting",
      "Fact-checking and verification services",
      "Media literacy campaigns",
      "Public awareness documentaries",
      "Digital threat awareness programs"
    ],
    useCases: [
      {
        title: "Cross-Border Disinformation Exposure Potential",
        description: "Our investigative methods are projected to uncover sophisticated cross-border disinformation networks, potentially leading to their dismantling and legal action against key operators."
      },
      {
        title: "Educational Impact Projection",
        description: "Implementation of our comprehensive media literacy programs could reach 100,000+ students with expected 70% improvement in critical thinking and information evaluation skills."
      },
      {
        title: "Investigative Documentary Forecast",
        description: "Our planned documentary series exposing digital manipulation tactics is projected to reach millions of viewers and potentially catalyze important policy reforms."
      }
    ],
    methodology: [
      "Initial Research & Planning",
      "Investigation & Documentation",
      "Fact Verification",
      "Public Communication",
      "Impact Assessment"
    ],
    detailedServices: [
      {
        title: "Investigative Journalism",
        description: "In-depth reporting on information warfare operations, cyber threats, and digital manipulation campaigns affecting public discourse.",
        icon: <FileText className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Fact-Checking Services",
        description: "Professional verification of claims, statements, and media to combat misinformation and provide accurate information to the public.",
        icon: <CheckCircle className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Media Literacy Programs",
        description: "Educational initiatives to help citizens critically evaluate media content, recognize manipulation, and navigate the complex information environment.",
        icon: <BookOpen className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Documentary Production",
        description: "Creation of compelling documentaries that expose information warfare tactics and raise awareness about digital threats.",
        icon: <Eye className="h-6 w-6 text-[#800020]" />
      }
    ]
  },
  {
    id: "corruption-investigation",
    icon: <Search className="h-12 w-12 text-[#800020]" />,
    title: "Corruption & Fraud Investigation",
    description: "Specialized investigation services to uncover corruption, fraud, and financial misconduct in public and private sectors.",
    features: [
      "Corporate fraud investigations",
      "Public sector corruption analysis",
      "Whistleblower support systems",
      "Evidence collection and documentation",
      "Legal coordination and reporting"
    ],
    useCases: [
      {
        title: "Infrastructure Fraud Detection Potential",
        description: "Our specialized investigation methods are projected to uncover corruption schemes in public infrastructure projects worth up to ₹500 crore, potentially leading to successful prosecutions and implementation of new anti-corruption policies."
      },
      {
        title: "Whistleblower Protection Forecast",
        description: "Implementation of our secure whistleblower channels is expected to protect dozens of informants annually, potentially exposing corporate fraud worth ₹1,000+ crore and driving stronger compliance measures."
      },
      {
        title: "Financial Investigation Projection",
        description: "Our cross-border investigation capabilities are designed to trace and potentially recover illicit funds worth ₹750+ crore while strengthening international financial monitoring systems."
      }
    ],
    methodology: [
      "Evidence Gathering",
      "Forensic Analysis",
      "Witness Protection",
      "Legal Documentation",
      "Regulatory Coordination"
    ],
    detailedServices: [
      {
        title: "Corporate Fraud Investigation",
        description: "Thorough investigation of corporate fraud, including financial misrepresentation, embezzlement, and insider trading.",
        icon: <Briefcase className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Public Sector Corruption Analysis",
        description: "Systematic analysis of corruption in government institutions, including bribery, nepotism, and misuse of public resources.",
        icon: <Building className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Whistleblower Protection",
        description: "Secure channels and legal support for whistleblowers reporting corruption, fraud, or unethical practices.",
        icon: <Shield className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Forensic Financial Analysis",
        description: "Advanced financial investigation techniques to trace illicit funds, identify irregularities, and document financial misconduct.",
        icon: <Database className="h-6 w-6 text-[#800020]" />
      }
    ]
  },
  {
    id: "education-training",
    icon: <BookOpen className="h-12 w-12 text-[#800020]" />,
    title: "Education & Training Programs",
    description: "Comprehensive educational initiatives and professional training to build capacity in information warfare defense, cybersecurity, and digital literacy.",
    features: [
      "Information warfare certification courses",
      "Cybersecurity professional development",
      "Digital literacy curriculum for schools",
      "Executive leadership training",
      "Customized organizational workshops"
    ],
    useCases: [
      {
        title: "National Security Training Projection",
        description: "Our advanced training programs are expected to equip 1,000+ government personnel with information warfare defense skills, potentially improving threat response capabilities by up to 85%."
      },
      {
        title: "Corporate Security Enhancement Forecast",
        description: "Organizations implementing our comprehensive security training can anticipate up to 60% reduction in security incidents within six months of program completion."
      },
      {
        title: "Digital Literacy Advancement Potential",
        description: "Our nationwide digital literacy initiative is projected to reach 500,000+ students, with expected 75% improvement in information security awareness and critical evaluation skills."
      }
    ],
    methodology: [
      "Needs Assessment",
      "Curriculum Development",
      "Training Delivery",
      "Performance Evaluation",
      "Continuous Improvement"
    ],
    detailedServices: [
      {
        title: "Professional Certification Programs",
        description: "Comprehensive certification courses in information warfare, cybersecurity, and digital intelligence for professionals.",
        icon: <Award className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Educational Curriculum Development",
        description: "Creation of age-appropriate digital literacy and information security curricula for schools and educational institutions.",
        icon: <BookOpen className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Executive Leadership Training",
        description: "Specialized training for organizational leaders on information warfare threats, strategic response, and crisis management.",
        icon: <Users className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Simulation Exercises",
        description: "Realistic scenario-based training exercises that simulate information warfare attacks and test organizational response capabilities.",
        icon: <Target className="h-6 w-6 text-[#800020]" />
      }
    ]
  },
  {
    id: "environmental-responsibility",
    icon: <Recycle className="h-12 w-12 text-[#800020]" />,
    title: "Environmental Responsibility",
    description: "Initiatives to combat environmental misinformation, promote sustainable practices, and support evidence-based climate action.",
    features: [
      "Environmental misinformation tracking",
      "Climate science communication",
      "Sustainable technology practices",
      "Green digital transformation consulting",
      "Environmental data integrity verification"
    ],
    useCases: [
      {
        title: "Climate Data Protection Forecast",
        description: "Our specialized security protocols are designed to defend critical climate research data from targeted attacks, ensuring the integrity of vital environmental research and policy development."
      },
      {
        title: "Green Tech Transformation Projection",
        description: "Organizations adopting our sustainable IT recommendations can expect to reduce their digital carbon footprint by approximately 40% through implementation of green computing initiatives."
      },
      {
        title: "Environmental Misinformation Defense Potential",
        description: "Our monitoring systems are projected to identify and counter coordinated misinformation campaigns targeting renewable energy projects, potentially protecting billions in sustainable investments."
      }
    ],
    methodology: [
      "Environmental Impact Assessment",
      "Strategy Development",
      "Implementation",
      "Monitoring & Verification",
      "Continuous Improvement"
    ],
    detailedServices: [
      {
        title: "Environmental Misinformation Monitoring",
        description: "Tracking and countering misinformation campaigns that undermine environmental science and climate action.",
        icon: <Eye className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Climate Science Communication",
        description: "Strategic communication initiatives to effectively communicate complex climate science to diverse audiences.",
        icon: <Globe className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Sustainable IT Consulting",
        description: "Advisory services for organizations seeking to reduce the environmental impact of their digital operations.",
        icon: <Recycle className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Environmental Data Protection",
        description: "Security measures to protect the integrity of environmental data from tampering, manipulation, or destruction.",
        icon: <Lock className="h-6 w-6 text-[#800020]" />
      }
    ]
  },
  {
    id: "social-justice",
    icon: <Users className="h-12 w-12 text-[#800020]" />,
    title: "Social Justice & Advocacy",
    description: "Supporting marginalized communities through digital empowerment, countering targeted disinformation, and promoting inclusive information ecosystems.",
    features: [
      "Digital inclusion initiatives",
      "Hate speech monitoring and response",
      "Community digital defense training",
      "Marginalized voices amplification",
      "Algorithmic bias detection and mitigation"
    ],
    useCases: [
      {
        title: "Digital Rights Advancement Projection",
        description: "Our advocacy initiatives are designed to support landmark digital rights legislation, potentially ensuring data privacy and internet access for 15+ million citizens from underserved communities across India."
      },
      {
        title: "Anti-Harassment Technology Forecast",
        description: "Implementation of our AI-powered hate speech detection systems is projected to reduce targeted harassment by up to 75% on major platforms, protecting hundreds of thousands of vulnerable users."
      },
      {
        title: "Algorithmic Equity Potential",
        description: "Our partnerships with tech companies to audit and correct algorithmic biases are expected to improve service access by up to 90% for marginalized communities and establish new industry standards."
      }
    ],
    methodology: [
      "Community Engagement",
      "Needs Assessment",
      "Solution Design",
      "Implementation",
      "Impact Measurement"
    ],
    detailedServices: [
      {
        title: "Digital Inclusion Programs",
        description: "Initiatives to bridge the digital divide and ensure equitable access to digital resources and opportunities.",
        icon: <Users className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Hate Speech Monitoring",
        description: "Systematic monitoring and analysis of online hate speech targeting vulnerable communities, with response strategies.",
        icon: <AlertTriangle className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Community Digital Defense",
        description: "Training programs that empower marginalized communities to recognize and counter targeted disinformation campaigns.",
        icon: <Shield className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Algorithmic Justice",
        description: "Research and advocacy to identify and address algorithmic bias and discrimination in digital systems.",
        icon: <Scale className="h-6 w-6 text-[#800020]" />
      }
    ]
  },
  {
    id: "government-collaboration",
    icon: <Building className="h-12 w-12 text-[#800020]" />,
    title: "Government & Institutional Collaboration",
    description: "Strategic partnerships with government agencies and institutions to strengthen national information security and develop robust policy frameworks.",
    features: [
      "Policy development and consultation",
      "National security advisory services",
      "Public sector digital transformation",
      "Cross-agency coordination frameworks",
      "Legislative and regulatory guidance"
    ],
    useCases: [
      {
        title: "National Defense Framework Projection",
        description: "Our comprehensive information warfare defense framework is designed for adoption by 25+ government agencies, with potential to improve threat response coordination by up to 70% nationwide."
      },
      {
        title: "Inter-Agency Collaboration Forecast",
        description: "Implementation of our secure information-sharing platform could connect 20+ government agencies, potentially reducing average threat response time from 48 hours to 4 hours."
      },
      {
        title: "Digital Governance Transformation Potential",
        description: "Our digital transformation initiatives for state governments are projected to modernize cybersecurity policies, protect over 100 million citizen records, and reduce security incidents by up to 60%."
      }
    ],
    methodology: [
      "Stakeholder Consultation",
      "Policy Analysis",
      "Framework Development",
      "Implementation Support",
      "Effectiveness Review"
    ],
    detailedServices: [
      {
        title: "Policy Development",
        description: "Collaborative development of comprehensive policies addressing information warfare, cybersecurity, and digital governance.",
        icon: <FileText className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "National Security Advisory",
        description: "Expert advisory services for government agencies on information warfare threats to national security.",
        icon: <Shield className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Public Sector Transformation",
        description: "Strategic guidance for digital transformation initiatives in government agencies, with a focus on security and resilience.",
        icon: <Briefcase className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Inter-Agency Coordination",
        description: "Frameworks and platforms to facilitate coordination between government agencies on information security matters.",
        icon: <Users className="h-6 w-6 text-[#800020]" />
      }
    ]
  },
  {
    id: "proactive-strategies",
    icon: <Briefcase className="h-12 w-12 text-[#800020]" />,
    title: "Proactive IW Strategies",
    description: "Forward-looking strategic planning and implementation to anticipate and prevent information warfare threats before they materialize.",
    features: [
      "Threat anticipation modeling",
      "Organizational resilience planning",
      "Strategic communication frameworks",
      "Crisis prevention protocols",
      "Preemptive defense system design"
    ],
    useCases: [
      {
        title: "Critical Infrastructure Protection Forecast",
        description: "Deployment of our AI-powered preemptive defense systems across critical infrastructure is projected to prevent dozens of sophisticated cyber attacks annually, potentially saving ₹2,000+ crore in damages."
      },
      {
        title: "Financial Sector Security Projection",
        description: "Our predictive threat detection systems for the banking sector are designed to prevent ₹1,500+ crore in potential losses and identify hundreds of emerging cyber threats before they materialize."
      },
      {
        title: "Election Integrity Assurance Potential",
        description: "Implementation of our predictive analysis systems during elections is expected to prevent thousands of information warfare attempts, ensuring democratic integrity for millions of voters."
      }
    ],
    methodology: [
      "Threat Modeling",
      "Strategy Development",
      "System Implementation",
      "Continuous Monitoring",
      "Adaptive Response"
    ],
    detailedServices: [
      {
        title: "Threat Anticipation",
        description: "Advanced modeling and analysis to identify emerging information warfare threats before they materialize.",
        icon: <Target className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Resilience Planning",
        description: "Comprehensive planning to build organizational resilience against information warfare attacks and digital disruptions.",
        icon: <Shield className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Strategic Communication",
        description: "Development of proactive communication strategies to maintain narrative integrity during information warfare events.",
        icon: <FileText className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Preemptive Defense Systems",
        description: "Design and implementation of defense systems that can identify and neutralize information threats in their early stages.",
        icon: <Lock className="h-6 w-6 text-[#800020]" />
      }
    ]
  },
  {
    id: "threat-monitoring",
    icon: <Bell className="h-12 w-12 text-[#800020]" />,
    title: "Threat Monitoring & Alerts",
    description: "Continuous surveillance of the information environment to detect emerging threats and provide timely alerts to stakeholders.",
    features: [
      "Real-time threat monitoring systems",
      "Early warning alert networks",
      "Customized threat intelligence reports",
      "Sector-specific vulnerability alerts",
      "Trend analysis and forecasting"
    ],
    useCases: [
      {
        title: "Early Warning System Projection",
        description: "Our advanced monitoring systems are designed to provide critical early warnings that could prevent major cyber attacks on Fortune 500 companies, potentially saving billions in damages."
      },
      {
        title: "Sector-Specific Threat Detection Forecast",
        description: "Implementation of our industry-specific monitoring systems is projected to identify emerging threats 40% faster than traditional security measures across multiple sectors."
      },
      {
        title: "Predictive Analysis Capability Potential",
        description: "Our predictive intelligence frameworks are expected to successfully anticipate and prevent coordinated information warfare campaigns targeting critical national infrastructure."
      }
    ],
    methodology: [
      "Continuous Surveillance",
      "Pattern Analysis",
      "Threat Assessment",
      "Alert Distribution",
      "Response Coordination"
    ],
    detailedServices: [
      {
        title: "Real-Time Monitoring",
        description: "24/7 surveillance of the information environment to detect emerging threats as they develop.",
        icon: <Eye className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Early Warning System",
        description: "Sophisticated alert system that provides timely notifications about potential information warfare threats.",
        icon: <Bell className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Threat Intelligence Reports",
        description: "Detailed, customized reports on information warfare threats relevant to specific organizations or sectors.",
        icon: <FileText className="h-6 w-6 text-[#800020]" />
      },
      {
        title: "Trend Analysis",
        description: "Advanced analysis of information warfare trends to anticipate future threat vectors and attack methodologies.",
        icon: <BarChart2 className="h-6 w-6 text-[#800020]" />
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero Section with Service Overview */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-grid-lg h-full w-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Information Warfare Services</h1>
            <p className="text-xl text-gray-100 mb-8">
              The Information Warfare Foundation offers expert services to combat digital threats, 
              promote information integrity, and build resilience against emerging challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100 px-6 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="#service-categories">
                  Explore Our Services
                </Link>
              </Button>
              <Button asChild className="bg-[#800020] border-2 border-white text-white hover:bg-[#600010] px-6 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/contact">
                  Request Consultation
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Shield className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Protection Services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Search className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Investigation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <BookOpen className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Education</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Bell className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Monitoring</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Briefcase className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Consulting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories with Quick Navigation */}
      <section id="service-categories" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Service Categories</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We offer specialized services organized into strategic categories to address the complex challenges of information warfare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Shield className="h-10 w-10 text-[#800020]" />, title: "Protection", description: "Comprehensive defense against information warfare threats and cyber attacks." },
              { icon: <Search className="h-10 w-10 text-[#800020]" />, title: "Investigation", description: "Thorough analysis and investigation of information warfare incidents and campaigns." },
              { icon: <BookOpen className="h-10 w-10 text-[#800020]" />, title: "Education", description: "Training and awareness programs to build resilience against information threats." },
              { icon: <Users className="h-10 w-10 text-[#800020]" />, title: "Advocacy", description: "Promoting policies and practices that support information integrity and digital rights." },
              { icon: <Bell className="h-10 w-10 text-[#800020]" />, title: "Monitoring", description: "Continuous surveillance and early warning systems for emerging information threats." },
              { icon: <Briefcase className="h-10 w-10 text-[#800020]" />, title: "Consulting", description: "Strategic advisory services for organizations facing complex information challenges." }
            ].map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#800020]/10 rounded-full mr-4 group-hover:bg-[#800020]/20 transition-all duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{category.description}</p>
                  <div className="flex justify-end">
                    <Button className="bg-[#800020]/10 hover:bg-[#800020]/20 text-[#800020] font-medium px-4 py-2 rounded-md flex items-center transition-all duration-300 border border-[#800020]/20 hover:border-[#800020]/40">
                      View Services <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="inline-flex rounded-md shadow-lg">
              <Button asChild className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white px-6 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-[#800020]">
                <Link href="#detailed-services" className="flex items-center">
                  See Detailed Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Visual Elements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Experience comprehensive protection with our industry-leading services and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {serviceBenefits.map((benefit, index) => (
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
          
          <div className="bg-gradient-to-r from-[#800020]/10 to-[#600010]/10 rounded-xl p-8 border border-[#800020]/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="col-span-2">
                <h3 className="text-2xl font-bold mb-4">Our Commitment to Excellence</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Information Warfare Foundation is dedicated to providing the highest quality services with measurable results. Our team of experts brings decades of combined experience in information security, digital intelligence, and strategic communications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-2" />
                    <span className="text-sm font-medium">ISO Certified</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-2" />
                    <span className="text-sm font-medium">Expert Team</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-2" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#800020] mr-2" />
                    <span className="text-sm font-medium">Guaranteed Results</span>
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

      {/* Redesigned Services List */}
      <section id="detailed-services" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Detailed Services</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Explore our comprehensive range of specialized services designed to address the complex challenges of information warfare.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="scroll-mt-24 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#800020] to-[#600010] text-white p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-white/10 rounded-full mr-4">
                        {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-[#800020] pl-4">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Zap className="h-5 w-5 text-[#800020] mr-2" /> Key Features
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
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
                        <BarChart2 className="h-5 w-5 text-[#800020] mr-2" /> Success Predictions
                        </h3>
                      <div className="space-y-4">
                        {service.useCases?.slice(0, 2).map((useCase, i) => (
                          <div key={i} className="border-l-2 border-[#800020] pl-4">
                            <h4 className="font-medium text-gray-900 dark:text-gray-100">{useCase.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{useCase.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button asChild className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white px-4 py-2 font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                      <Link href={`/contact?service=${service.id}`}>
                        Request This Service
                      </Link>
                    </Button>
                    
                    <Button asChild variant="outline" className="border-[#800020] text-[#800020] hover:bg-[#800020]/10 px-4 py-2 font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                      <Link href={`#${service.id}-details`} className="flex items-center">
                        View Details <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                {/* Detailed Service Information (Collapsed by Default) */}
                <div id={`${service.id}-details`} className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800/50 scroll-mt-24">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Detailed Services */}
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold mb-6 flex items-center">
                        <FileText className="h-5 w-5 text-[#800020] mr-2" /> Detailed {service.title} Services
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.detailedServices.map((detailedService, i) => (
                          <div 
                            key={i} 
                            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            <div className="flex items-center mb-3">
                              <div className="p-2 bg-[#800020]/10 rounded-full mr-3">
                                {detailedService.icon}
                              </div>
                              <h4 className="text-lg font-semibold">{detailedService.title}</h4>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {detailedService.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Success Predictions and Methodology */}
                    <div className="lg:col-span-1">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold">Success Predictions</h3>
                          <div className="bg-[#800020]/10 text-[#800020] text-xs font-medium px-3 py-1 rounded-full">
                            Data-Driven Forecasts
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 border-l-4 border-[#800020]/20 pl-3 italic">
                          Our success predictions are based on rigorous analysis of past performance, industry benchmarks, and advanced predictive modeling.
                        </p>
                        
                        {service.useCases?.map((useCase, i) => (
                          <div key={i} className="mb-6 last:mb-0 border-l-2 border-[#800020]/20 pl-4 hover:border-[#800020] transition-colors duration-300">
                            <div className="flex items-center mb-2">
                              <div className="w-2 h-2 rounded-full bg-[#800020] mr-2"></div>
                              <h4 className="text-lg font-semibold">{useCase.title}</h4>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">{useCase.description}</p>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <span className="mr-2">Confidence:</span>
                                <div className="flex space-x-1">
                                  <div className="w-4 h-1 bg-[#800020] rounded-full"></div>
                                  <div className="w-4 h-1 bg-[#800020] rounded-full"></div>
                                  <div className="w-4 h-1 bg-[#800020] rounded-full"></div>
                                  <div className="w-4 h-1 bg-[#800020] rounded-full"></div>
                                  <div className={`w-4 h-1 ${i % 3 === 0 ? 'bg-[#800020]' : 'bg-[#800020]/30'} rounded-full`}></div>
                                </div>
                                <span className="ml-2">{i % 3 === 0 ? 'Very High' : 'High'}</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                <span className="mr-2">Implementation:</span>
                                <span className="text-[#800020] font-medium">{i % 2 === 0 ? '3-6 months' : '6-12 months'}</span>
                              </div>
                              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                                <span className="mr-2">ROI:</span>
                                <span className="text-[#800020] font-medium">{i % 3 === 0 ? 'Very High' : i % 3 === 1 ? 'High' : 'Medium-High'}</span>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex items-center mb-4">
                            <h3 className="text-xl font-bold">Implementation Roadmap</h3>
                          </div>
                          <ul className="space-y-3">
                            {service.methodology?.map((step, i) => (
                              <li key={i} className="flex items-start group">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#800020]/10 flex items-center justify-center mt-0.5 group-hover:bg-[#800020]/20 transition-colors duration-300">
                                  <span className="text-xs font-bold text-[#800020]">{i+1}</span>
                                </div>
                                <div className="ml-3">
                                  <div className="text-gray-800 dark:text-gray-200 font-medium text-sm">{step}</div>
                                  <div className="text-xs text-[#800020] mt-1">
                                    {i === 0 ? 'Timeline: Weeks 1-2' : 
                                     i === 1 ? 'Timeline: Weeks 3-4' : 
                                     i === 2 ? 'Timeline: Weeks 5-8' : 
                                     i === 3 ? 'Timeline: Ongoing' : 
                                     'Timeline: Quarterly Reviews'}
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Hear from organizations that have successfully implemented our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The Information Warfare Foundation's services have been instrumental in protecting our organization from sophisticated disinformation campaigns.",
                author: "Rajiv Sharma",
                title: "CISO, Major Financial Institution",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "Their proactive approach to threat monitoring has helped us identify and neutralize potential threats before they could cause damage.",
                author: "Priya Patel",
                title: "Director of Security, Government Agency",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                quote: "The training programs developed by IWF have significantly improved our team's ability to recognize and respond to information warfare threats.",
                author: "Amit Kumar",
                title: "Head of IT, Multinational Corporation",
                image: "https://randomuser.me/api/portraits/men/62.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-[#800020]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#800020]">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.title}</p>
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
                <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Organization?</h2>
                <p className="text-lg text-gray-100 mb-8">
                  Contact us today to discuss how we can help safeguard your organization against information warfare threats.
                  Our experts are ready to develop a customized solution for your specific needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100 px-4 py-2 font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href="/contact">
                      Schedule a Consultation
                    </Link>
                  </Button>
                  <Button asChild className="bg-[#800020] border-2 border-white text-white hover:bg-[#600010] px-4 py-2 font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href="/case-studies">
                      View Success Predictions
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Initial Consultation</h4>
                        <p className="text-sm text-gray-200">Free 30-minute assessment of your needs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Custom Proposal</h4>
                        <p className="text-sm text-gray-200">Tailored solutions for your organization</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Implementation</h4>
                        <p className="text-sm text-gray-200">Rapid deployment of selected services</p>
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
        title="Frequently Asked Questions" 
        description="Find answers to common questions about our services."
        faqs={faqs}
      />

      {/* Newsletter Section */}
      <NewsletterSignup />
    </MainLayout>
  );
} 