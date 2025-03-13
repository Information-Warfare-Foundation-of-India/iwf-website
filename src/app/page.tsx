import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { HeroSlider } from "@/components/home/hero-slider";
import { StatsSection } from "@/components/home/stats-section";
import { AboutSection } from "@/components/home/about-section";
import { ServicesSection } from "@/components/home/services-section";
import { CTASection } from "@/components/home/cta-section";
import { BlogSection } from "@/components/home/blog-section";
import { PartnersSection } from "@/components/home/partners-section";
import { NewsletterSignup } from "@/components/common/newsletter-signup";

export const metadata: Metadata = {
  title: "Information Warfare Foundation of India - IWF",
  description: "Leading organization in India dedicated to cybersecurity, ethical AI, and information warfare research. Join us in shaping a secure digital future.",
};

export default function Home() {
  return (
    <MainLayout>
      <HeroSlider />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <BlogSection />
      <NewsletterSignup dark={true} />
      <PartnersSection />
    </MainLayout>
  );
}
