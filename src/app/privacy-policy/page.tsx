import { MainLayout } from "@/components/layout/main-layout";
import { Shield, Lock, FileText, MapPin, Phone, Mail, Globe } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Information Warfare Foundation of India (IWF)",
  description: "Our commitment to protecting your privacy and personal information at the Information Warfare Foundation of India (IWF).",
};

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Lock className="h-5 w-5" />
            <span>Last Updated: November 12, 2024</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-[#800020]" />
              Introduction
            </h2>
            <p>
              The Information Warfare Foundation of India (IWF) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you use our website and services.
            </p>
            <p>
              By accessing or using our website, you agree to the terms of this Privacy Policy. We encourage you to read this document carefully to understand our policies and practices regarding your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when you register, subscribe to our newsletter, or contact us.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and actions taken.</li>
              <li><strong>Device Information:</strong> Information about your device, browser, IP address, and operating system.</li>
              <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience on our website.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing and maintaining our website and services</li>
              <li>Improving and personalizing your experience</li>
              <li>Communicating with you about our programs, events, and initiatives</li>
              <li>Analyzing usage patterns to enhance our website functionality</li>
              <li>Protecting against unauthorized access and security threats</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf.</li>
              <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
              <li><strong>With Your Consent:</strong> We may share your information with your consent or as otherwise disclosed at the time of collection.</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-6 space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <MapPin className="h-5 w-5 text-[#800020]" />
                </div>
                <div>
                  <p className="font-semibold">Address:</p>
                  <p>Rajkanika, Kendrapara, Odisha, India, 754220</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Phone className="h-5 w-5 text-[#800020]" />
                </div>
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p><a href="tel:+918339006000" className="text-[#800020] hover:underline">+91 833 900 6000</a></p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Mail className="h-5 w-5 text-[#800020]" />
                </div>
                <div>
                  <p className="font-semibold">Email:</p>
                  <p><a href="mailto:privacy@iwf.org.in" className="text-[#800020] hover:underline">privacy@iwf.org.in</a></p>
                  <p><a href="mailto:info@iwf.org.in" className="text-[#800020] hover:underline">info@iwf.org.in</a></p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  <Globe className="h-5 w-5 text-[#800020]" />
                </div>
                <div>
                  <p className="font-semibold">Website:</p>
                  <p><a href="https://iwf.org.in" className="text-[#800020] hover:underline">https://iwf.org.in</a></p>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-12 border-t pt-8">
            <div className="flex flex-col items-end">
              <div className="mb-2">
                <div className="italic text-right font-signature text-2xl mb-2">
                  Chairman's Signature
                </div>
              </div>
              <p className="font-semibold">Chairman</p>
              <p>Information Warfare Foundation of India</p>
              <p>November 12, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 