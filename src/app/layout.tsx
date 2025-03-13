import type { Metadata } from "next";
import { Inter, Roboto_Mono, Audiowide } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/lib/auth-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const audiowide = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-audiowide",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Information Warfare Foundation of India - IWF",
  description: "Empowering organizations to lead in the digital age through cybersecurity, ethical AI, and information warfare research.",
  keywords: "information warfare, cybersecurity, AI ethics, digital literacy, IWF, India",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [
      { url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Legacy favicon support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Modern favicon support */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
        {/* PWA support */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#800020" />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} ${audiowide.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
