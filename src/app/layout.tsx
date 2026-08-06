import type { Metadata } from "next";
import {
  Commissioner,
  Instrument_Serif,
  Instrument_Sans,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const commissioner = Commissioner({
  variable: "--font-primary",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  style: "italic",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Examinr.ai Waitlist",
  description: "The official public waitlist for Examinr.ai",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Examinr.ai waitlist",
    description: "The official public waitlist for Examinr.ai",
    url: "https://examinr-ai.vercel.app",
    siteName: "Examinr.ai",
    type: "website",
    images: [
      {
        url: "https://examinr-ai.vercel.app/hero.png",
        width: 1200,
        height: 630,
        alt: "Examinr.ai",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${commissioner.variable} ${instrumentSerif.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <Analytics />
      <body className="min-h-full flex flex-col font-primary text-text-accent bg-app-bg">
        {children}
      </body>
    </html>
  );
}
