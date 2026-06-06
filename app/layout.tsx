import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Colorize Visual | Live Streaming & Multimedia Production",
  description: "Professional live streaming and multimedia solutions based in Surabaya. We deliver broadcast-ready solutions for events, worship, corporate meetings, weddings, and multimedia installations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${sora.variable}`}>
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
