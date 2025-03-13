"use client";

import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Heart, Shield, Users, BookOpen, Recycle } from "lucide-react";
import Link from "next/link";

const impactAreas = [
  {
    icon: <Shield className="h-10 w-10 text-[#800020]" />,
    title: "Cybersecurity Research",
    description: "Fund research on emerging cyber threats and develop countermeasures to protect individuals and organizations."
  },
  {
    icon: <Users className="h-10 w-10 text-[#800020]" />,
    title: "Community Education",
    description: "Support digital literacy programs and cybersecurity awareness campaigns for vulnerable communities."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-[#800020]" />,
    title: "Training Programs",
    description: "Help us train the next generation of cybersecurity experts and information warfare specialists."
  },
  {
    icon: <Recycle className="h-10 w-10 text-[#800020]" />,
    title: "E-Waste Management",
    description: "Support our initiatives to promote sustainable e-waste management and recycling practices."
  }
];

const donationOptions = [
  { amount: 500, label: "₹500", description: "Supports digital literacy for 5 students" },
  { amount: 1000, label: "₹1,000", description: "Funds a cybersecurity workshop" },
  { amount: 2500, label: "₹2,500", description: "Enables research on emerging threats" },
  { amount: 5000, label: "₹5,000", description: "Sponsors a community awareness campaign" },
  { amount: 10000, label: "₹10,000", description: "Funds development of security tools" },
  { amount: 0, label: "Custom", description: "Choose your own amount" }
];

export default function DonatePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#800020] to-[#600010] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-xl text-gray-100">
              Your donation helps us combat digital threats and build a safer cyberspace for India.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Options Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Make a Donation</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Choose an Amount</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {donationOptions.map((option, index) => (
                    <div 
                      key={index} 
                      className={`border ${index === 2 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors`}
                    >
                      <p className="font-bold text-xl mb-1">{option.label}</p>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Custom Amount (₹)
                  </label>
                  <input
                    type="number"
                    id="custom-amount"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter amount"
                    min="100"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Donation Type
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input type="radio" name="donation-type" className="mr-2" defaultChecked />
                      <span>One-time</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="donation-type" className="mr-2" />
                      <span>Monthly</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="donation-type" className="mr-2" />
                      <span>Annually</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Personal Information
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Email Address"
                    />
                    <input
                      type="tel"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Phone Number"
                    />
                    <input
                      type="text"
                      className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="PAN Number (for tax benefits)"
                    />
                  </div>
                </div>
                
                <Button asChild className="bg-gradient-to-r from-[#800020] to-[#600010] hover:from-[#900030] hover:to-[#700020] text-white w-full">
                  <Link href="/donate/checkout">
                    Proceed to Payment
                  </Link>
                </Button>
                
                <div className="mt-4 text-center text-sm text-gray-600">
                  <p>Secure payment powered by Razorpay</p>
                  <div className="flex justify-center mt-2 space-x-3">
                    <img src="/images/payment/visa.svg" alt="Visa" className="h-8" />
                    <img src="/images/payment/mastercard.svg" alt="Mastercard" className="h-8" />
                    <img src="/images/payment/rupay.svg" alt="RuPay" className="h-8" />
                    <img src="/images/payment/upi.svg" alt="UPI" className="h-8" />
                    <img src="/images/payment/netbanking.svg" alt="Net Banking" className="h-8" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Impact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Your Impact</h2>
              
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-red-500 mr-4" />
                  <h3 className="text-xl font-bold">Why Donate?</h3>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Your donation directly supports our mission to combat misinformation, 
                  cybercrime, unethical AI, and e-waste through research, education, and advocacy.
                </p>
                
                <div className="space-y-4">
                  {impactAreas.map((area, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 mr-4">
                        {area.icon}
                      </div>
                      <div>
                        <h4 className="font-bold">{area.title}</h4>
                        <p className="text-gray-600">{area.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Tax Benefits</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Tax Deduction</h4>
                      <p className="text-gray-600">
                        Donations to IWF are eligible for tax deduction under Section 80G of the Income Tax Act.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Receipt</h4>
                      <p className="text-gray-600">
                        You will receive an official donation receipt for tax purposes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Transparency</h4>
                      <p className="text-gray-600">
                        We provide detailed reports on how your donation is utilized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Other Ways to Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond financial contributions, there are many ways you can support our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Corporate Partnerships</h3>
              <p className="text-gray-600 mb-6 text-center">
                Partner with us through CSR initiatives, sponsorships, or in-kind donations.
              </p>
              <div className="text-center">
                <Button asChild variant="outline">
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Volunteer Your Time</h3>
              <p className="text-gray-600 mb-6 text-center">
                Contribute your skills and expertise to our various projects and initiatives.
              </p>
              <div className="text-center">
                <Button asChild variant="outline">
                  <a href="/volunteer">Learn More</a>
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Spread Awareness</h3>
              <p className="text-gray-600 mb-6 text-center">
                Share our mission with your network and help us reach more people.
              </p>
              <div className="text-center">
                <Button asChild variant="outline">
                  <Link href="/blog">Read Our Blog</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about donations and support.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Is my donation tax-deductible?</h3>
                <p className="text-gray-600">
                  Yes, donations to the Information Warfare Foundation are eligible for tax deduction 
                  under Section 80G of the Income Tax Act. You will receive an official receipt for tax purposes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">How is my donation used?</h3>
                <p className="text-gray-600">
                  Your donation directly supports our programs in cybersecurity research, digital literacy education, 
                  information warfare countermeasures, and e-waste management initiatives. We provide transparent 
                  reporting on fund utilization.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Can I make a recurring donation?</h3>
                <p className="text-gray-600">
                  Yes, we offer options for monthly and annual recurring donations. This helps us plan our 
                  programs more effectively and ensures sustained support for our initiatives.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept various payment methods including credit/debit cards, UPI, net banking, 
                  and digital wallets through our secure payment gateway powered by Razorpay.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Can I donate in memory or honor of someone?</h3>
                <p className="text-gray-600">
                  Yes, you can make a donation in memory or honor of someone special. Please indicate this 
                  in the notes section during the donation process, and we will acknowledge your tribute appropriately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#800020] to-[#600010] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/patterns/circuit-board.svg')", backgroundSize: "cover" }}></div>
        <div className="absolute top-20 left-[10%] w-32 h-32 bg-[#800020] rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-[15%] w-40 h-40 bg-[#600010] rounded-full opacity-20 blur-xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your support helps us create a safer digital environment for all Indians.
          </p>
          <Button variant="accent" size="lg" className="bg-white hover:bg-gray-100 text-[#800020] border-2 border-white hover:border-gray-100 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Donate Now
          </Button>
        </div>
      </section>
    </MainLayout>
  );
} 