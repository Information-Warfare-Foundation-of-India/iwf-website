import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, BookOpen, Clock, Briefcase, Code, PenTool, HeartHandshake, Megaphone, Zap, Sparkles, Shield, Target, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FAQSection } from "@/components/common/faq-section";

export const metadata: Metadata = {
  title: "Volunteer | Information Warfare Foundation of India (IWF)",
  description: "Join the Information Warfare Foundation of India (IWF) as a volunteer and contribute to our mission.",
};

// FAQ data
const faqs = [
  {
    question: "What is the time commitment for volunteering?",
    answer: "We ask for a minimum commitment of 5 hours per week, but the schedule is flexible. You can choose to volunteer during weekdays, weekends, or evenings based on your availability."
  },
  {
    question: "Do I need specific qualifications to volunteer?",
    answer: "While specific qualifications depend on the role, we welcome volunteers with diverse backgrounds and skill levels. Basic computer literacy is required for most roles, and training will be provided for specific tasks."
  },
  {
    question: "Can I volunteer remotely?",
    answer: "Yes, most of our volunteer opportunities can be done remotely. We use various collaboration tools to coordinate with volunteers across different locations."
  },
  {
    question: "Will I receive a certificate for my volunteer work?",
    answer: "Yes, we provide certificates of recognition for volunteers who complete at least 50 hours of service. These certificates can be valuable for your resume and professional development."
  },
  {
    question: "Can students volunteer for academic credit?",
    answer: "Yes, we can work with educational institutions to provide volunteer opportunities that qualify for academic credit or internship requirements. Contact us with your specific requirements."
  },
  {
    question: "How will I be trained as a volunteer?",
    answer: "All volunteers receive an initial orientation followed by role-specific training. We also provide ongoing mentorship and learning opportunities throughout your volunteer experience."
  }
];

const volunteerRoles = [
  {
    id: "cybersecurity-expert",
    icon: <Code className="h-12 w-12 text-[#800020]" />,
    title: "Cybersecurity Expert",
    description: "Help identify vulnerabilities, develop security solutions, and educate others on cybersecurity best practices.",
    skills: ["Ethical Hacking", "Network Security", "Penetration Testing", "Security Analysis"],
    responsibilities: [
      "Conduct security assessments and vulnerability scans",
      "Develop and implement security solutions",
      "Create educational materials on cybersecurity",
      "Assist in incident response planning",
      "Provide technical support to other teams"
    ],
    impact: [
      {
        title: "Digital Protection",
        description: "Help protect individuals and organizations from cyber threats and attacks."
      },
      {
        title: "Knowledge Sharing",
        description: "Share expertise to build capacity within communities and organizations."
      },
      {
        title: "Security Innovation",
        description: "Contribute to developing new approaches to cybersecurity challenges."
      }
    ]
  },
  {
    id: "content-creator",
    icon: <PenTool className="h-12 w-12 text-[#800020]" />,
    title: "Content Creator",
    description: "Create engaging and informative content about digital threats, cybersecurity, and information warfare.",
    skills: ["Writing", "Graphic Design", "Video Production", "Social Media"],
    responsibilities: [
      "Develop articles, blog posts, and reports",
      "Create infographics and visual content",
      "Produce videos and multimedia presentations",
      "Manage social media content and campaigns",
      "Translate technical concepts into accessible content"
    ],
    impact: [
      {
        title: "Public Awareness",
        description: "Raise awareness about digital threats and information warfare tactics."
      },
      {
        title: "Educational Resources",
        description: "Create resources that help people understand complex digital issues."
      },
      {
        title: "Community Engagement",
        description: "Build engagement and interest in digital safety and security."
      }
    ]
  },
  {
    id: "researcher",
    icon: <Briefcase className="h-12 w-12 text-[#800020]" />,
    title: "Researcher",
    description: "Conduct research on emerging digital threats, misinformation trends, and effective countermeasures.",
    skills: ["Data Analysis", "Academic Research", "Critical Thinking", "Report Writing"],
    responsibilities: [
      "Monitor and analyze information warfare trends",
      "Conduct literature reviews and case studies",
      "Collect and analyze data on digital threats",
      "Prepare research reports and policy briefs",
      "Collaborate with academic and research institutions"
    ],
    impact: [
      {
        title: "Knowledge Creation",
        description: "Generate new insights and understanding about information warfare."
      },
      {
        title: "Evidence-Based Solutions",
        description: "Develop solutions grounded in rigorous research and analysis."
      },
      {
        title: "Policy Influence",
        description: "Inform policy decisions with high-quality research findings."
      }
    ]
  },
  {
    id: "community-organizer",
    icon: <HeartHandshake className="h-12 w-12 text-[#800020]" />,
    title: "Community Organizer",
    description: "Organize workshops, training sessions, and awareness campaigns in your local community.",
    skills: ["Event Planning", "Public Speaking", "Networking", "Leadership"],
    responsibilities: [
      "Plan and coordinate community events and workshops",
      "Develop training materials and presentations",
      "Build relationships with community organizations",
      "Recruit and coordinate local volunteers",
      "Evaluate program impact and gather feedback"
    ],
    impact: [
      {
        title: "Local Engagement",
        description: "Build grassroots involvement in digital safety and security."
      },
      {
        title: "Capacity Building",
        description: "Strengthen community resilience against information threats."
      },
      {
        title: "Network Development",
        description: "Create networks of informed and engaged citizens."
      }
    ]
  },
  {
    id: "advocate",
    icon: <Megaphone className="h-12 w-12 text-[#800020]" />,
    title: "Advocate",
    description: "Advocate for digital rights, ethical AI, and better cybersecurity policies at various levels.",
    skills: ["Communication", "Policy Analysis", "Advocacy", "Public Relations"],
    responsibilities: [
      "Monitor policy developments related to digital rights",
      "Develop policy recommendations and position papers",
      "Engage with policymakers and stakeholders",
      "Represent IWF at relevant forums and events",
      "Build coalitions with like-minded organizations"
    ],
    impact: [
      {
        title: "Policy Change",
        description: "Influence the development of better digital policies and regulations."
      },
      {
        title: "Public Discourse",
        description: "Shape public conversations about digital rights and security."
      },
      {
        title: "Institutional Partnerships",
        description: "Build relationships with key institutions and decision-makers."
      }
    ]
  }
];

// Volunteer benefits data
const volunteerBenefits = [
  {
    icon: <Clock className="h-8 w-8 text-[#800020]" />,
    title: "Skill Development",
    description: "Gain valuable skills and experience in cybersecurity, research, and advocacy."
  },
  {
    icon: <Zap className="h-8 w-8 text-[#800020]" />,
    title: "Networking",
    description: "Connect with professionals and experts in information warfare and cybersecurity."
  },
  {
    icon: <Shield className="h-8 w-8 text-[#800020]" />,
    title: "Make an Impact",
    description: "Contribute directly to protecting India's information ecosystem."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-[#800020]" />,
    title: "Recognition",
    description: "Receive certificates and recognition for your valuable contributions."
  }
];

export default function VolunteerPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="pattern-grid-lg h-full w-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h1>
            <p className="text-xl text-gray-100 mb-8">
              Make a difference by volunteering with the Information Warfare Foundation. 
              Help us build a safer digital future for India.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button asChild className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100 text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="#volunteer-roles">
                  Explore Roles
                </Link>
              </Button>
              <Button asChild className="bg-[#800020] border-2 border-white text-white hover:bg-[#600010] text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/contact">
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Code className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Cybersecurity</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <PenTool className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Content Creation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <Briefcase className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Research</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
              <HeartHandshake className="h-8 w-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Volunteer Benefits & Impact</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Joining our volunteer network offers numerous benefits and opportunities for growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {volunteerBenefits.map((benefit, index) => (
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

      {/* Volunteer Roles List */}
      <section id="volunteer-roles" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Volunteer Roles</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Explore our volunteer opportunities based on your skills and interests.
            </p>
          </div>

          <div className="space-y-16">
            {volunteerRoles.map((role) => (
              <div 
                key={role.id} 
                id={role.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden scroll-mt-24"
              >
                <div className="bg-gradient-to-r from-[#800020] to-[#600010] text-white p-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-white/10 rounded-full mr-4">
                      {role.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{role.title}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-[#800020] pl-4">
                    {role.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Zap className="h-5 w-5 text-[#800020] mr-2" /> Key Responsibilities
                      </h3>
                      <ul className="space-y-2">
                        {role.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#800020] mr-2 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Target className="h-5 w-5 text-[#800020] mr-2" /> Required Skills
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {role.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="bg-[#800020]/10 text-[#800020] px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Award className="h-5 w-5 text-[#800020] mr-2" /> Impact Areas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {role.impact.map((item, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                          <h4 className="font-semibold text-[#800020] mb-2">{item.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <Button asChild className="bg-[#800020] hover:bg-[#600010] text-white">
                      <Link href="/contact" className="flex items-center">
                        Apply for this Role <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">How to Apply</h2>
              <p className="text-lg text-gray-700 mb-6">
                Joining our volunteer network is a simple process. Follow these steps to get started:
              </p>

              <ol className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-[#800020] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Complete the Application Form</h3>
                    <p className="text-gray-600">
                      Fill out our online application form with your personal information, 
                      skills, interests, and availability.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#800020] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Interview</h3>
                    <p className="text-gray-600">
                      Selected applicants will be invited for a brief online interview to 
                      discuss their interests and potential roles.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#800020] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Orientation</h3>
                    <p className="text-gray-600">
                      Attend an orientation session to learn about our mission, values, 
                      and the projects you'll be working on.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-[#800020] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Start Volunteering</h3>
                    <p className="text-gray-600">
                      Begin contributing to projects based on your skills and interests, 
                      with support from our team.
                    </p>
                  </div>
                </li>
              </ol>

              <Button asChild className="mt-8 bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white">
                <Link href="/contact">
                  Apply Now
                </Link>
              </Button>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Volunteer Requirements</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Age Requirement</h4>
                    <p className="text-gray-600">Must be 18 years or older</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Time Commitment</h4>
                    <p className="text-gray-600">Minimum 5 hours per week</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Skills</h4>
                    <p className="text-gray-600">Relevant skills in at least one of our focus areas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Equipment</h4>
                    <p className="text-gray-600">Access to a computer and internet connection</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Commitment</h4>
                    <p className="text-gray-600">Willingness to learn and contribute to our mission</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#fff0f0] rounded-lg">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#800020] mr-3 mt-0.5" />
                  <p className="text-[#800020]">
                    <span className="font-semibold">Note:</span> We welcome volunteers from all backgrounds and experience levels. 
                    Training will be provided for specific roles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Volunteer Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from some of our current volunteers about their experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden relative">
                  <img 
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Priya Sharma"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="text-gray-600 mb-6 text-center italic">
                "Volunteering with IWF has been an incredible learning experience. I've gained 
                valuable skills in cybersecurity while contributing to a cause I'm passionate about."
              </p>
              <div className="text-center">
                <h4 className="font-bold">Priya Sharma</h4>
                <p className="text-gray-500">Cybersecurity Volunteer</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden relative">
                  <Image 
                    src="/images/team/bibhuti-bhusan-nayak.jpg"
                    alt="Rahul Patel"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="text-gray-600 mb-6 text-center italic">
                "The community of volunteers at IWF is amazing. We collaborate on meaningful 
                projects and I've made great connections with professionals in the field."
              </p>
              <div className="text-center">
                <h4 className="font-bold">Rahul Patel</h4>
                <p className="text-gray-500">Content Creator</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden relative">
                  <Image 
                    src="/images/team/niroj-mohapatra.jpg"
                    alt="Ananya Reddy"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <p className="text-gray-600 mb-6 text-center italic">
                "As a researcher with IWF, I've had the opportunity to work on cutting-edge 
                projects that address real digital threats facing our society."
              </p>
              <div className="text-center">
                <h4 className="font-bold">Ananya Reddy</h4>
                <p className="text-gray-500">Research Volunteer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Questions" 
        description="Find answers to common questions about volunteering with the Information Warfare Foundation."
        faqs={faqs}
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#800020] to-[#600010] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Join our growing network of volunteers and help us create a safer digital environment for all.
          </p>
          <Button asChild variant="outline" size="lg" className="bg-white text-[#800020] hover:bg-gray-100">
            <Link href="/contact">
              Apply to Volunteer
            </Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
} 