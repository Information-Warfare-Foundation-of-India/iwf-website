"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Brain, AlertTriangle, Check, X } from 'lucide-react';
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";

export default function AIEthicsCaseStudy() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/case-studies"
              className="inline-flex items-center text-white hover:text-gray-200 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Artificial Intelligence: Ethical and Unethical Practices
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Examining the ethical dimensions of artificial intelligence applications, contrasting responsible AI development with potentially harmful implementations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100 text-lg font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link href="#ethical-practices">
                  Ethical Practices
                </Link>
              </Button>
              <Button asChild className="bg-[#800020] hover:bg-[#600010] text-white border-2 border-white hover:border-white text-lg font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link href="#unethical-applications">
                  Unethical Applications
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
                <Brain className="h-20 w-20 text-white opacity-90" />
              </div>
              <Image
                src="/images/case-studies/content/ai-ethics-development.jpg"
                alt="Advanced AI and Robotics - Realistic visualization of artificial intelligence and robotic systems"
                width={1920}
                height={1080}
                className="w-full h-64 md:h-[500px] object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Introduction to AI Ethics</h2>
              <p>
                Artificial Intelligence (AI) technologies are transforming virtually every aspect of modern society, 
                from healthcare and education to finance and national security. As these systems become more powerful 
                and ubiquitous, the ethical implications of their development and deployment have become increasingly 
                significant.
              </p>
              <p>
                This case study examines the ethical dimensions of AI applications, contrasting responsible 
                development practices with potentially harmful implementations, and exploring governance frameworks 
                that can guide the future of AI innovation.
              </p>

              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <Check className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold m-0">Ethical AI Practices</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 m-0">
                    Frameworks and approaches for developing AI systems that respect human rights, 
                    promote fairness, and enhance human welfare.
                  </p>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-4">
                    <X className="h-8 w-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold m-0">Unethical AI Applications</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 m-0">
                    Analysis of AI systems that may violate ethical principles, infringe on rights, 
                    or cause societal harm.
                  </p>
                </div>
              </div>

              <h2>The Ethical Landscape of Artificial Intelligence</h2>
              <p>
                The development and deployment of AI systems raise a wide range of ethical considerations:
              </p>
              <ul>
                <li><strong>Fairness and Bias:</strong> Ensuring AI systems do not perpetuate or amplify existing social biases</li>
                <li><strong>Transparency and Explainability:</strong> Making AI decision-making processes understandable to humans</li>
                <li><strong>Privacy:</strong> Protecting personal data used to train and operate AI systems</li>
                <li><strong>Accountability:</strong> Establishing clear responsibility for AI actions and decisions</li>
                <li><strong>Safety and Security:</strong> Ensuring AI systems operate reliably and securely</li>
                <li><strong>Human Autonomy:</strong> Preserving human agency and decision-making authority</li>
                <li><strong>Societal Impact:</strong> Considering broader effects on employment, inequality, and social structures</li>
              </ul>
              
              <p>
                These considerations form the foundation for ethical frameworks that guide responsible AI development.
              </p>

              <h2>Ethical AI Development Practices</h2>
              <p>
                Responsible AI development incorporates ethical considerations throughout the entire lifecycle 
                of AI systems, from conception and design to deployment and monitoring:
              </p>
              
              <h3>Inclusive Design and Development</h3>
              <p>
                Ethical AI begins with inclusive design processes that consider diverse perspectives and needs:
              </p>
              <ul>
                <li>Diverse development teams that include a range of backgrounds and expertise</li>
                <li>Stakeholder engagement to understand potential impacts on different communities</li>
                <li>Participatory design approaches that involve end-users in the development process</li>
                <li>Consideration of accessibility and universal design principles</li>
                <li>Ethical impact assessments at early stages of development</li>
              </ul>

              <h3>Data Ethics</h3>
              <p>
                Responsible data practices are fundamental to ethical AI development:
              </p>
              <ul>
                <li>Transparent data collection with informed consent</li>
                <li>Rigorous data quality assessment and bias detection</li>
                <li>Representative and diverse training datasets</li>
                <li>Privacy-preserving techniques such as differential privacy and federated learning</li>
                <li>Secure data storage and access controls</li>
              </ul>

              <h3>Testing and Validation</h3>
              <p>
                Comprehensive testing helps identify and address potential ethical issues:
              </p>
              <ul>
                <li>Fairness testing across different demographic groups</li>
                <li>Adversarial testing to identify potential vulnerabilities</li>
                <li>Red-teaming exercises to identify potential misuses</li>
                <li>Real-world pilot testing in controlled environments</li>
                <li>Ongoing monitoring and evaluation after deployment</li>
              </ul>

              <div className="my-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border-l-4 border-green-600">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-green-700 dark:text-green-400 mb-2">Case Example: Healthcare AI</h4>
                    <p className="m-0 text-gray-800 dark:text-gray-200">
                      Our research documented a healthcare AI system developed with strong ethical principles. 
                      The development team included medical professionals, ethicists, and patient advocates. 
                      The system was trained on diverse, representative data and underwent rigorous fairness testing. 
                      The deployment included clear explanations of AI recommendations and maintained human oversight 
                      for all clinical decisions, resulting in improved patient outcomes while respecting autonomy.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Unethical AI Applications</h2>
              <p>
                Despite progress in ethical AI development, there are numerous examples of AI applications 
                that raise serious ethical concerns:
              </p>

              <h3>Mass Surveillance Systems</h3>
              <p>
                AI-powered surveillance technologies can enable unprecedented monitoring of individuals:
              </p>
              <ul>
                <li>Facial recognition systems deployed without consent or oversight</li>
                <li>Predictive policing algorithms that may reinforce discriminatory practices</li>
                <li>Social credit systems that can restrict individual freedoms</li>
                <li>Workplace monitoring tools that infringe on employee privacy</li>
                <li>Emotion recognition technologies deployed without scientific validation</li>
              </ul>

              <h3>Manipulation and Influence</h3>
              <p>
                AI systems can be used to manipulate individuals and shape public discourse:
              </p>
              <ul>
                <li>Microtargeted political messaging based on psychological profiles</li>
                <li>Deepfakes and synthetic media used to spread disinformation</li>
                <li>Recommendation algorithms that promote extremist content</li>
                <li>Addictive design patterns that maximize engagement at the expense of well-being</li>
                <li>Personalized pricing that exploits individual vulnerabilities</li>
              </ul>

              <h3>Autonomous Weapons Systems</h3>
              <p>
                The development of AI-powered weapons raises profound ethical questions:
              </p>
              <ul>
                <li>Systems that can select and engage targets without human intervention</li>
                <li>Lowered thresholds for armed conflict due to reduced human cost</li>
                <li>Challenges in establishing accountability for algorithmic decisions</li>
                <li>Potential for rapid escalation in machine-to-machine interactions</li>
                <li>Risks of proliferation to non-state actors</li>
              </ul>

              <div className="my-8 p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border-l-4 border-red-600">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-red-700 dark:text-red-400 mb-2">Case Example: Biased Hiring Algorithm</h4>
                    <p className="m-0 text-gray-800 dark:text-gray-200">
                      Our analysis identified an AI hiring system that systematically discriminated against certain demographic groups. 
                      The system was trained on historical hiring data that reflected past biases, and developers failed to test for fairness 
                      across different groups. The lack of transparency in the decision-making process made it difficult for candidates to 
                      challenge rejections. After deployment, the system amplified existing workplace disparities before being identified and discontinued.
                    </p>
                  </div>
                </div>
              </div>

              <h2>Governance Frameworks for Ethical AI</h2>
              <p>
                Addressing the ethical challenges of AI requires robust governance frameworks that span 
                technical, organizational, and societal dimensions:
              </p>

              <h3>Principles and Standards</h3>
              <ul>
                <li>International principles for ethical AI development</li>
                <li>Industry-specific standards and best practices</li>
                <li>Certification mechanisms for responsible AI systems</li>
                <li>Common benchmarks for fairness, transparency, and safety</li>
                <li>Ethical codes of conduct for AI practitioners</li>
              </ul>

              <h3>Organizational Governance</h3>
              <ul>
                <li>Ethics review boards for AI projects</li>
                <li>Clear accountability structures for AI decisions</li>
                <li>Diverse and inclusive AI development teams</li>
                <li>Whistleblower protections for reporting ethical concerns</li>
                <li>Regular ethical audits of AI systems</li>
              </ul>

              <h3>Regulatory Approaches</h3>
              <ul>
                <li>Risk-based regulatory frameworks for high-risk AI applications</li>
                <li>Mandatory impact assessments for certain AI systems</li>
                <li>Transparency requirements for algorithmic decision-making</li>
                <li>Liability frameworks for AI-related harms</li>
                <li>International coordination on AI governance</li>
              </ul>

              <h2>Balancing Innovation and Ethics</h2>
              <p>
                A key challenge in AI ethics is balancing the drive for innovation with ethical considerations. 
                Rather than viewing ethics as a constraint on innovation, responsible approaches recognize that 
                ethical AI is ultimately more sustainable, trusted, and beneficial in the long term.
              </p>
              <p>
                Strategies for balancing innovation and ethics include:
              </p>
              <ul>
                <li>Incorporating ethics from the earliest stages of research and development</li>
                <li>Adopting agile and iterative approaches to ethical assessment</li>
                <li>Investing in research on technical approaches to fairness, explainability, and privacy</li>
                <li>Creating incentives for ethical innovation through funding, recognition, and market demand</li>
                <li>Building ethics capacity through education and training for AI practitioners</li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                The ethical dimensions of artificial intelligence will continue to evolve as the technology advances. 
                By developing robust ethical frameworks, implementing responsible development practices, and establishing 
                effective governance mechanisms, we can harness the potential of AI to benefit humanity while mitigating risks.
              </p>
              <p>
                The Information Warfare Foundation is committed to advancing ethical AI practices through research, 
                education, and collaboration with stakeholders across sectors. By promoting a thoughtful approach to 
                AI development and deployment, we aim to contribute to a future where AI technologies enhance human 
                welfare, respect fundamental rights, and strengthen democratic values.
              </p>
            </div>

            <div className="mt-12 flex justify-between items-center">
              <Button asChild variant="outline">
                <Link href="/case-studies">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Case Studies
                </Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white">
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 