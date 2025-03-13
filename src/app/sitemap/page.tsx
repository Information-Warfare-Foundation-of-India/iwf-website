import { MainLayout } from "@/components/layout/main-layout";
import { FileText, Map, ChevronRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Information Warfare Foundation of India (IWF)",
  description: "Complete navigation guide to all pages and resources on the Information Warfare Foundation of India (IWF) website.",
};

export default function SitemapPage() {
  return (
    <MainLayout>
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sitemap</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Map className="h-5 w-5" />
            <span>Last Updated: November 12, 2024</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-center mb-8">
            Welcome to the complete navigation guide for the Information Warfare Foundation of India website. 
            This sitemap provides links to all pages and resources available on our site.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Pages */}
            <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#800020]" />
                Main Pages
              </h2>
              <ul className="space-y-2">
                <SitemapLink href="/">Home</SitemapLink>
                <SitemapLink href="/about">About Us</SitemapLink>
                <SitemapLink href="/services">Services</SitemapLink>
                <SitemapLink href="/projects">Projects</SitemapLink>
                <SitemapLink href="/case-studies">Case Studies</SitemapLink>
                <SitemapLink href="/blog">Blog</SitemapLink>
                <SitemapLink href="/contact">Contact</SitemapLink>
                <SitemapLink href="/donate">Donate</SitemapLink>
                <SitemapLink href="/volunteer">Volunteer</SitemapLink>
              </ul>
            </section>

            {/* Services */}
            <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#800020]" />
                Our Services
              </h2>
              <ul className="space-y-2">
                <SitemapLink href="/services#information-warfare">Information Warfare & AI Threats</SitemapLink>
                <SitemapLink href="/services#cybersecurity">Cybersecurity & Fraud Prevention</SitemapLink>
                <SitemapLink href="/services#investigative-media">Investigative Media</SitemapLink>
                <SitemapLink href="/services#research">Research & Development</SitemapLink>
                <SitemapLink href="/services#digital-literacy">Digital Literacy Programs</SitemapLink>
                <SitemapLink href="/services#e-waste">E-Waste Management</SitemapLink>
                <SitemapLink href="/services#policy">Policy Advocacy</SitemapLink>
                <SitemapLink href="/services#corporate">Corporate Training</SitemapLink>
                <SitemapLink href="/services#threat-intelligence">Threat Intelligence</SitemapLink>
                <SitemapLink href="/services#awareness">Awareness Campaigns</SitemapLink>
              </ul>
            </section>

            {/* User Account */}
            <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#800020]" />
                User Account
              </h2>
              <ul className="space-y-2">
                <SitemapLink href="/auth/login">Login</SitemapLink>
                <SitemapLink href="/auth/register">Register</SitemapLink>
                <SitemapLink href="/profile">My Profile</SitemapLink>
                <SitemapLink href="/dashboard">Dashboard</SitemapLink>
              </ul>
            </section>

            {/* Legal & Policies */}
            <section className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#800020]" />
                Legal & Policies
              </h2>
              <ul className="space-y-2">
                <SitemapLink href="/privacy-policy">Privacy Policy</SitemapLink>
                <SitemapLink href="/terms-of-service">Terms of Service</SitemapLink>
                <SitemapLink href="/sitemap">Sitemap</SitemapLink>
              </ul>
            </section>
          </div>

          {/* XML Sitemap for Search Engines */}
          <section className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#800020]" />
              For Search Engines
            </h2>
            <p>
              If you're looking for our XML sitemap for search engine crawling purposes, please visit:
            </p>
            <div className="mt-4 space-y-2">
              <div>
                <a 
                  href="/sitemap.xml" 
                  className="inline-flex items-center gap-2 text-[#800020] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Static XML Sitemap</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div>
                <a 
                  href="/api/sitemap" 
                  className="inline-flex items-center gap-2 text-[#800020] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Dynamic XML Sitemap</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Can't Find What You're Looking For */}
          <section className="mt-12 bg-[#800020]/5 p-6 rounded-lg border border-[#800020]/10">
            <h2 className="text-xl font-semibold mb-4">Can't Find What You're Looking For?</h2>
            <p>
              If you can't find the page you're looking for, please visit our <Link href="/contact" className="text-[#800020] hover:underline">Contact Page</Link> or use the search function at the top of the website.
            </p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

function SitemapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="flex items-center gap-2 text-gray-700 hover:text-[#800020] transition-colors"
      >
        <ChevronRight className="h-4 w-4 text-[#800020]" />
        <span>{children}</span>
      </Link>
    </li>
  );
} 