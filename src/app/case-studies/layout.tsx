import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Information Warfare Foundation',
  description: 'Explore our case studies on Information Warfare, Artificial Intelligence Ethics, and Cybersecurity Research.',
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 