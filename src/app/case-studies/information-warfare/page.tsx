"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Shield, AlertTriangle, Eye, Zap, FileText, CheckCircle, Target, Users, Clock, Download, BookOpen, BarChart, Globe, Search, Lock, TrendingUp, Building, Activity } from 'lucide-react';
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";

// Key findings data
const keyFindings = [
  {
    icon: <AlertTriangle className="h-8 w-8 text-[#800020]" />,
    title: "Disinformation Patterns",
    description: "Identified recurring patterns in state-sponsored disinformation campaigns targeting democratic processes."
  },
  {
    icon: <Eye className="h-8 w-8 text-[#800020]" />,
    title: "Detection Accuracy",
    description: "Developed detection methodologies with 85% accuracy in identifying coordinated inauthentic behavior."
  },
  {
    icon: <Zap className="h-8 w-8 text-[#800020]" />,
    title: "Response Effectiveness",
    description: "Measured effectiveness of various counter-narrative strategies in mitigating information attacks."
  },
  {
    icon: <Globe className="h-8 w-8 text-[#800020]" />,
    title: "Global Impact",
    description: "Documented information warfare tactics across 17 countries, revealing common vulnerabilities and effective countermeasures."
  }
];

// Research methodology steps
const methodologySteps = [
  {
    title: "Data Collection",
    description: "Gathering information from diverse sources including social media, news outlets, and government communications."
  },
  {
    title: "Pattern Analysis",
    description: "Identifying recurring patterns and signatures in disinformation campaigns using advanced analytics."
  },
  {
    title: "Attribution Assessment",
    description: "Evaluating the origins and motivations behind information warfare activities through technical and contextual analysis."
  },
  {
    title: "Impact Evaluation",
    description: "Measuring the reach, engagement, and influence of information operations on target audiences."
  },
  {
    title: "Response Testing",
    description: "Evaluating the effectiveness of various countermeasures and response strategies in real-world scenarios."
  }
];

// Case examples
const caseExamples = [
  {
    id: "election-interference",
    title: "Election Interference Campaign",
    description: "Analysis of a coordinated cross-platform disinformation operation targeting electoral processes in a South Asian democracy.",
    icon: <Target className="h-6 w-6 text-[#800020]" />,
    fullCase: {
      background: "In 2019, a major South Asian democracy faced an unprecedented information warfare campaign during its national elections. The operation involved coordinated efforts across multiple social media platforms, messaging apps, and traditional media outlets to influence voter behavior and undermine trust in the electoral process.",
      challenges: [
        "Identifying the sources of disinformation across multiple platforms",
        "Distinguishing between organic political discourse and coordinated manipulation",
        "Measuring the actual impact on voter behavior and election outcomes",
        "Developing real-time countermeasures during an ongoing election",
        "Balancing response efforts with concerns about freedom of expression"
      ],
      approach: "Our research team deployed a multi-layered monitoring system that combined automated content analysis with human verification. We established a network of local partners to provide contextual understanding and rapid response capabilities. The approach included real-time monitoring of social media platforms, analysis of network patterns to identify coordinated behavior, and tracking of narrative evolution across different communication channels.",
      methodology: [
        "Social network analysis to map information flow patterns",
        "Natural language processing to identify narrative clusters",
        "Temporal analysis to track the evolution of disinformation narratives",
        "Attribution analysis using technical and behavioral indicators",
        "Impact assessment through polling and engagement metrics"
      ],
      outcomes: "The research identified three distinct disinformation networks operating across five major platforms, with evidence suggesting state sponsorship of at least one network. We documented over 50,000 pieces of coordinated inauthentic content reaching an estimated 25 million voters. Through collaboration with electoral authorities and platform providers, approximately 30% of the malicious content was removed or labeled, and public awareness campaigns reached millions of voters with media literacy resources.",
      lessons: "This case demonstrated the sophisticated nature of modern election interference operations and the importance of pre-established monitoring and response mechanisms. Key lessons included the need for cross-platform analysis, the value of combining technical and contextual expertise, and the importance of stakeholder collaboration in developing effective countermeasures."
    }
  },
  {
    id: "corporate-reputation",
    title: "Corporate Reputation Attack",
    description: "Documentation of sophisticated information warfare tactics used against a multinational corporation during a crisis.",
    icon: <Building className="h-6 w-6 text-[#800020]" />,
    fullCase: {
      background: "In 2021, a multinational technology corporation became the target of a sophisticated information warfare campaign following a controversial product launch. The campaign combined legitimate criticism with fabricated claims, manipulated media, and coordinated harassment of company representatives, resulting in significant reputational damage and financial losses.",
      challenges: [
        "Distinguishing between legitimate criticism and malicious manipulation",
        "Identifying the actors behind anonymous attacks",
        "Measuring reputational and financial impact in real-time",
        "Developing appropriate response strategies without escalating the situation",
        "Protecting employees targeted by harassment campaigns"
      ],
      approach: "Our team conducted a comprehensive analysis of the information environment surrounding the corporation, including social media discourse, news coverage, financial analyst reports, and internal communications. We employed advanced attribution techniques to identify the primary actors behind the campaign and mapped their motivations, capabilities, and tactics.",
      methodology: [
        "Digital forensics to analyze manipulated media and identify origins",
        "Sentiment analysis across multiple platforms to track impact",
        "Financial impact modeling to quantify damage",
        "Stakeholder mapping to understand influence pathways",
        "Response simulation to test potential countermeasures"
      ],
      outcomes: "The analysis revealed a coordinated campaign involving a competitor, activist groups, and opportunistic participants. We documented techniques including synthetic media creation, astroturfing, strategic amplification, and targeted harassment. The corporation implemented a transparent communication strategy based on our recommendations, resulting in a 40% improvement in sentiment metrics within three months and recovery of approximately 60% of the initial market value loss.",
      lessons: "This case highlighted the vulnerability of corporate entities to information warfare tactics and the importance of proactive reputation management strategies. Key lessons included the need for rapid detection capabilities, transparent crisis communication protocols, and resilience-building measures to withstand information attacks."
    }
  },
  {
    id: "military-deception",
    title: "Military Deception Operation",
    description: "Examination of military deception techniques employed in a regional conflict to manipulate adversary perceptions.",
    icon: <Shield className="h-6 w-6 text-[#800020]" />,
    fullCase: {
      background: "During a regional conflict in 2020, military forces employed sophisticated information warfare tactics to shape battlefield perceptions and influence decision-making. The operation combined traditional military deception techniques with modern digital capabilities, creating a multi-domain information operation that significantly impacted the conflict's trajectory.",
      challenges: [
        "Analyzing information operations in an active conflict zone",
        "Distinguishing between intentional deception and fog of war",
        "Assessing the impact of information operations on military decision-making",
        "Identifying the technical infrastructure supporting the operation",
        "Evaluating countermeasures employed by the targeted forces"
      ],
      approach: "Our research team conducted a post-conflict analysis using a combination of open-source intelligence, technical analysis of digital artifacts, and interviews with military experts and participants. We reconstructed the timeline of information operations and mapped them against key military decisions and battlefield outcomes.",
      methodology: [
        "Chronological mapping of information operations against battlefield events",
        "Technical analysis of digital deception techniques",
        "Comparative analysis of official communications and ground truth",
        "Assessment of psychological impact on decision-makers",
        "Evaluation of detection and countermeasure effectiveness"
      ],
      outcomes: "The analysis documented a comprehensive deception operation that successfully manipulated adversary perceptions of force disposition, capabilities, and intentions. Key techniques included false signal generation, social media manipulation, selective disclosure of information, and exploitation of media reporting patterns. The operation demonstrably influenced several critical military decisions, potentially shortening the conflict by several weeks.",
      lessons: "This case illustrated the growing integration of information warfare into conventional military operations and the challenges of maintaining accurate situational awareness in information-contested environments. Key lessons included the importance of multi-source intelligence verification, the value of information warfare training for commanders, and the need for resilient command and control systems."
    }
  },
  {
    id: "health-misinformation",
    title: "Public Health Misinformation",
    description: "Investigation of coordinated campaigns spreading health misinformation during a pandemic response.",
    icon: <Activity className="h-6 w-6 text-[#800020]" />,
    fullCase: {
      background: "During the global pandemic of 2020-2021, several coordinated campaigns emerged to spread misinformation about public health measures, treatments, and vaccines. These campaigns exploited public anxiety and institutional trust gaps to undermine official health guidance and promote alternative narratives, significantly impacting public health outcomes.",
      challenges: [
        "Tracking rapidly evolving misinformation across multiple languages and platforms",
        "Identifying the sources and motivations behind misinformation campaigns",
        "Measuring the impact on public health behaviors and outcomes",
        "Developing effective counter-messaging without reinforcing misinformation",
        "Coordinating response efforts across public health agencies, platforms, and fact-checkers"
      ],
      approach: "Our team established a global monitoring system tracking pandemic-related misinformation across 12 languages and 20 major platforms. We employed a combination of automated content detection, network analysis, and epidemiological impact modeling to identify high-risk misinformation and prioritize response efforts.",
      methodology: [
        "Content analysis to identify and categorize misinformation narratives",
        "Network analysis to map spread patterns and influential nodes",
        "Correlation analysis between misinformation prevalence and health behaviors",
        "A/B testing of counter-messaging approaches",
        "Longitudinal tracking of narrative evolution and adaptation"
      ],
      outcomes: "The research identified five major misinformation narratives with distinct origins, spread patterns, and impacts. We documented clear correlations between misinformation exposure and vaccine hesitancy, non-compliance with public health measures, and use of unproven treatments. Through partnerships with health authorities and technology platforms, we developed targeted counter-messaging that demonstrably improved information literacy and health behaviors in heavily affected communities.",
      lessons: "This case demonstrated the direct impact of information warfare on public health outcomes and the challenges of maintaining information integrity during a crisis. Key lessons included the importance of pre-established trusted information sources, the need for culturally appropriate counter-messaging, and the value of cross-sector collaboration in addressing complex information threats."
    }
  }
];

// Research resources
const resources = [
  {
    title: "Technical Report",
    description: "Comprehensive technical analysis of information warfare methodologies and countermeasures.",
    icon: <FileText className="h-6 w-6 text-[#800020]" />,
    link: "#technical-report"
  },
  {
    title: "Detection Framework",
    description: "Practical framework for detecting and analyzing information warfare activities.",
    icon: <Search className="h-6 w-6 text-[#800020]" />,
    link: "#detection-framework"
  },
  {
    title: "Response Playbook",
    description: "Step-by-step guide for responding to information warfare attacks.",
    icon: <BookOpen className="h-6 w-6 text-[#800020]" />,
    link: "#response-playbook"
  },
  {
    title: "Data Visualization",
    description: "Interactive visualizations of information warfare patterns and impacts.",
    icon: <BarChart className="h-6 w-6 text-[#800020]" />,
    link: "#data-visualization"
  }
];

export default function InformationWarfareCaseStudy() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-grid-lg h-full w-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/case-studies"
              className="inline-flex items-center text-white hover:text-gray-200 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Information Warfare: Protection, Detection, Reaction
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              An in-depth analysis of modern information warfare tactics, protection strategies, detection methodologies, and reaction frameworks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100 text-lg font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link href="#key-findings">
                  Key Findings
                </Link>
              </Button>
              <Button asChild className="bg-[#800020] hover:bg-[#600010] text-white border-2 border-white hover:border-white text-lg font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link href="#methodology">
                  Research Methodology
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 relative rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#800020]/80 to-[#600010]/80 z-10 opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Shield className="h-20 w-20 text-white opacity-90" />
              </div>
              <Image
                src="/images/case-studies/content/information-warfare-reaction.jpg"
                alt="Information Warfare Reaction - People analyzing digital threats and responding to information attacks"
                width={1920}
                height={1080}
                className="w-full h-64 md:h-[500px] object-cover"
                priority
              />
            </div>

            {/* Key Findings Section */}
            <div id="key-findings" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-8 text-center">Key Research Findings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyFindings.map((finding, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-start">
                      <div className="p-3 bg-[#800020]/10 rounded-full mr-4 flex-shrink-0">
                        {finding.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{finding.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{finding.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Introduction to Information Warfare</h2>
              <p>
                Information warfare represents one of the most significant security challenges of the 21st century. 
                As societies become increasingly dependent on digital infrastructure and information systems, 
                the potential for manipulation, disruption, and exploitation of information has grown exponentially.
              </p>
              <p>
                This case study examines the multifaceted nature of information warfare, focusing on three critical aspects:
                protection against information attacks, detection of ongoing campaigns, and appropriate reaction strategies.
              </p>

              <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-[#800020]/10 rounded-full mr-3">
                      <Shield className="h-6 w-6 text-[#800020]" />
                    </div>
                    <h3 className="text-xl font-bold m-0">Protection</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 m-0">
                    Strategies and frameworks for protecting information infrastructure and building resilience against disinformation.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-[#800020]/10 rounded-full mr-3">
                      <Eye className="h-6 w-6 text-[#800020]" />
                    </div>
                    <h3 className="text-xl font-bold m-0">Detection</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 m-0">
                    Advanced methodologies for identifying coordinated information operations and disinformation campaigns.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-[#800020]/10 rounded-full mr-3">
                      <Zap className="h-6 w-6 text-[#800020]" />
                    </div>
                    <h3 className="text-xl font-bold m-0">Reaction</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 m-0">
                    Frameworks for rapid response to information attacks and mitigating their impact on organizations and society.
                  </p>
                </div>
              </div>

              <h2>The Evolving Landscape of Information Warfare</h2>
              <p>
                Information warfare has evolved significantly from its early conceptualizations. 
                Modern information warfare encompasses a broad spectrum of activities, including:
              </p>
              <ul>
                <li>Strategic disinformation campaigns</li>
                <li>Computational propaganda</li>
                <li>Social media manipulation</li>
                <li>Deep fakes and synthetic media</li>
                <li>Hack-and-leak operations</li>
                <li>Influence operations targeting democratic processes</li>
              </ul>
              
              <p>
                These tactics are increasingly employed by both state and non-state actors to achieve strategic objectives 
                without resorting to conventional military action. The asymmetric nature of information warfare makes it 
                particularly attractive to actors with limited resources but significant technical capabilities.
              </p>
            </div>

            {/* Research Methodology Section */}
            <div id="methodology" className="my-16 scroll-mt-24 bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-8 text-center">Research Methodology</h2>
              <div className="space-y-6">
                {methodologySteps.map((step, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#800020]/10 flex items-center justify-center mt-0.5 group-hover:bg-[#800020]/20 transition-colors duration-300">
                      <span className="text-lg font-bold text-[#800020]">{index + 1}</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Protection Strategies</h2>
              <p>
                Effective protection against information warfare requires a multi-layered approach that addresses 
                technical, organizational, and societal vulnerabilities:
              </p>
              
              <h3>Technical Protection Measures</h3>
              <p>
                Technical protection focuses on securing information systems and infrastructure against unauthorized 
                access, manipulation, or disruption. Key components include:
              </p>
              <ul>
                <li>Advanced encryption and authentication protocols</li>
                <li>Network segmentation and access controls</li>
                <li>Regular security audits and penetration testing</li>
                <li>Secure software development practices</li>
                <li>Backup and recovery systems</li>
              </ul>

              <h3>Organizational Resilience</h3>
              <p>
                Organizations must develop internal resilience to withstand and recover from information attacks:
              </p>
              <ul>
                <li>Comprehensive information security policies</li>
                <li>Regular staff training on information security and disinformation recognition</li>
                <li>Crisis communication plans</li>
                <li>Incident response teams</li>
                <li>Regular simulation exercises</li>
              </ul>

              <h3>Societal Protection</h3>
              <p>
                At the societal level, protection involves building collective resilience against disinformation:
              </p>
              <ul>
                <li>Media literacy education</li>
                <li>Support for independent journalism</li>
                <li>Public awareness campaigns</li>
                <li>Cross-sector collaboration between government, industry, and civil society</li>
                <li>International cooperation and information sharing</li>
              </ul>
            </div>

            {/* Case Examples Section */}
            <div className="my-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Case Examples</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseExamples.map((example, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-start">
                      <div className="p-3 bg-[#800020]/10 rounded-full mr-4 flex-shrink-0">
                        {example.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{example.description}</p>
                        <Button asChild variant="outline" className="border-[#800020] text-[#800020] hover:bg-[#800020]/10">
                          <Link href={`#${example.id}`} className="flex items-center">
                            <Eye className="h-4 w-4 mr-2" /> View Detailed Case Study
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Case Studies */}
            <div className="my-16 space-y-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Detailed Case Studies</h2>
              
              {caseExamples.map((example, index) => (
                <div key={index} id={example.id} className="scroll-mt-24 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-[#800020]/10 rounded-full mr-4">
                      {example.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{example.title}</h3>
                  </div>
                  
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <h4 className="text-xl font-semibold text-[#800020]">Background</h4>
                    <p>{example.fullCase.background}</p>
                    
                    <h4 className="text-xl font-semibold text-[#800020]">Key Challenges</h4>
                    <ul>
                      {example.fullCase.challenges.map((challenge, i) => (
                        <li key={i}>{challenge}</li>
                      ))}
                    </ul>
                    
                    <h4 className="text-xl font-semibold text-[#800020]">Our Approach</h4>
                    <p>{example.fullCase.approach}</p>
                    
                    <h4 className="text-xl font-semibold text-[#800020]">Methodology</h4>
                    <ul>
                      {example.fullCase.methodology.map((method, i) => (
                        <li key={i}>{method}</li>
                      ))}
                    </ul>
                    
                    <h4 className="text-xl font-semibold text-[#800020]">Outcomes</h4>
                    <p>{example.fullCase.outcomes}</p>
                    
                    <h4 className="text-xl font-semibold text-[#800020]">Lessons Learned</h4>
                    <p>{example.fullCase.lessons}</p>
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <Button asChild variant="outline" className="border-[#800020] text-[#800020] hover:bg-[#800020]/10">
                      <Link href="#" className="flex items-center">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Top
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Detection Methodologies</h2>
              <p>
                Timely detection of information warfare activities is crucial for effective response. 
                Modern detection approaches combine technical tools with human analysis:
              </p>

              <h3>Technical Detection</h3>
              <ul>
                <li>AI-powered content analysis to identify synthetic media</li>
                <li>Network traffic analysis to detect unusual patterns</li>
                <li>Social network analysis to identify coordinated inauthentic behavior</li>
                <li>Sentiment analysis to track manipulation of public discourse</li>
                <li>Automated fact-checking systems</li>
              </ul>

              <h3>Human Intelligence</h3>
              <ul>
                <li>Open-source intelligence gathering</li>
                <li>Expert analysis of emerging narratives</li>
                <li>Cross-platform monitoring of information flows</li>
                <li>Collaboration with international partners</li>
                <li>Engagement with affected communities</li>
              </ul>

              <h3>Hybrid Approaches</h3>
              <p>
                The most effective detection systems combine technical tools with human expertise, 
                creating a feedback loop that continuously improves detection capabilities:
              </p>
              <ul>
                <li>Human-in-the-loop machine learning systems</li>
                <li>Collaborative analysis platforms</li>
                <li>Threat intelligence sharing networks</li>
                <li>Multi-disciplinary analysis teams</li>
              </ul>

              <h2>Reaction Frameworks</h2>
              <p>
                Once information warfare activities are detected, organizations and societies must respond 
                effectively to mitigate harm and build resilience against future attacks:
              </p>

              <h3>Immediate Response</h3>
              <ul>
                <li>Rapid assessment of the nature and scope of the attack</li>
                <li>Containment measures to limit spread of disinformation</li>
                <li>Strategic communication to affected stakeholders</li>
                <li>Coordination with relevant authorities</li>
                <li>Documentation for future analysis</li>
              </ul>

              <h3>Medium-Term Actions</h3>
              <ul>
                <li>Corrective messaging to counter disinformation</li>
                <li>Engagement with platform providers to remove harmful content</li>
                <li>Support for affected individuals or groups</li>
                <li>Public education about the nature of the attack</li>
                <li>Technical remediation of compromised systems</li>
              </ul>

              <h3>Long-Term Strategy</h3>
              <ul>
                <li>Comprehensive analysis of the attack</li>
                <li>Updating protection measures based on lessons learned</li>
                <li>Enhancing detection capabilities</li>
                <li>Building broader societal resilience</li>
                <li>Advocating for policy and regulatory responses</li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="my-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Research Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-start">
                      <div className="p-3 bg-[#800020]/10 rounded-full mr-4 flex-shrink-0">
                        {resource.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>
                        <Button asChild variant="outline" className="border-[#800020] text-[#800020] hover:bg-[#800020]/10">
                          <Link href={resource.link} className="flex items-center">
                            <Download className="h-4 w-4 mr-2" /> Download Resource
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Conclusion</h2>
              <p>
                Information warfare represents a complex and evolving threat landscape that requires 
                coordinated responses across technical, organizational, and societal domains. 
                By implementing robust protection measures, deploying advanced detection methodologies, 
                and developing comprehensive reaction frameworks, organizations and societies can build 
                resilience against information attacks and mitigate their potential harm.
              </p>
              <p>
                The findings of this case study highlight the importance of a proactive and collaborative 
                approach to information warfare defense. As information warfare tactics continue to evolve, 
                ongoing research, knowledge sharing, and capacity building will be essential to maintaining 
                effective protection against these sophisticated threats.
              </p>
              <p>
                The detailed case studies presented here demonstrate the diverse manifestations of information 
                warfare across different contexts and the need for tailored approaches to address specific threats. 
                By learning from these real-world examples, organizations and policymakers can develop more 
                effective strategies for protecting against, detecting, and responding to information warfare activities.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-16 bg-gradient-to-r from-[#800020] to-[#600010] text-white p-8 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="pattern-grid-lg h-full w-full"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4">Interested in Our Research?</h2>
                <p className="text-lg text-gray-100 mb-6">
                  Contact us to learn more about our information warfare research or to discuss collaboration opportunities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100">
                    <Link href="/contact">
                      Contact Research Team
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link href="/case-studies">
                      Explore More Case Studies
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 