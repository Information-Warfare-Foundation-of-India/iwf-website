import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artificial Intelligence: Ethical and Unethical Practices | IWF',
  description: 'Case study examining ethical frameworks for AI development and the challenges of unethical AI applications.',
};

export default function AIEthicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 