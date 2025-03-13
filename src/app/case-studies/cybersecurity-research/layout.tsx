import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cyber Security: Research and Prediction | IWF',
  description: 'Case study on advanced cybersecurity research methodologies and predictive approaches to identify emerging threats.',
};

export default function CybersecurityResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 