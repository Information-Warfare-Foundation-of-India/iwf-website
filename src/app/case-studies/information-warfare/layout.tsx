import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Information Warfare: Protection, Detection, Reaction | IWF',
  description: 'Case study on information warfare examining protection strategies, detection methods, and reaction frameworks.',
};

export default function InformationWarfareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 