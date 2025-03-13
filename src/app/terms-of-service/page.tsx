import { MainLayout } from "@/components/layout/main-layout";
import { FileText, Scale, Shield, MapPin, Phone, Mail, Globe } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service | Information Warfare Foundation of India (IWF)",
  description: "Terms and conditions governing the use of Information Warfare Foundation of India (IWF) website and services.",
};

export default function TermsOfServicePage() {
  return (
    <MainLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <FileText className="h-5 w-5" />
            <span>Last Updated: November 12, 2024</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Scale className="h-6 w-6 text-[#800020]" />
              Introduction
            </h2>
            <p>
              Welcome to the Information Warfare Foundation of India (IWF). These Terms of Service ("Terms") govern your access to and use of our website, services, and content. By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p>
              Please read these Terms carefully before using our website. If you do not agree to these Terms, you may not access or use our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p>
              By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are using our website on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our website after such modifications will constitute your acknowledgment of the modified Terms and agreement to abide by them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use of Our Website</h2>
            <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use our website in any way that violates any applicable law or regulation</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our website</li>
              <li>Attempt to gain unauthorized access to our systems or user accounts</li>
              <li>Use our website to transmit any malware, viruses, or other malicious code</li>
              <li>Collect or harvest any information from our website without our consent</li>
              <li>Impersonate or misrepresent your affiliation with any person or entity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
            <p>
              Our website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by the Information Warfare Foundation of India (IWF) and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent, except as follows:
            </p>
            <ul>
              <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
              <li>You may store files that are automatically cached by your web browser for display enhancement purposes</li>
              <li>You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use and not for further reproduction, publication, or distribution</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Contributions</h2>
            <p>
              Our website may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features that allow users to post, submit, publish, display, or transmit content or materials. Any content you post to our website will be considered non-confidential and non-proprietary.
            </p>
            <p>
              By providing any user contribution on our website, you grant us and our affiliates and service providers a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such content in any media formats and through any media channels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <p>
              Your use of our website is at your own risk. Our website and its content are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p>
              We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that our website or the server that makes it available are free of viruses or other harmful components.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, the Information Warfare Foundation of India (IWF) shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use our website</li>
              <li>Any conduct or content of any third party on our website</li>
              <li>Any content obtained from our website</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless the Information Warfare Foundation of India (IWF), its officers, directors, employees, and agents, from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in India for the resolution of any dispute arising from these Terms or your use of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding these Terms of Service, please contact us at:
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
                  <p><a href="mailto:legal@iwf.org.in" className="text-[#800020] hover:underline">legal@iwf.org.in</a></p>
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