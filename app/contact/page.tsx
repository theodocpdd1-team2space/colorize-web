import type { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";
import FAQ from "@/components/home/FAQ";

export const metadata: Metadata = {
  title: "Kontak Colorize Visual - Konsultasi Live Streaming Surabaya",
  description:
    "Hubungi Colorize Visual untuk konsultasi kebutuhan live streaming, multicam, broadcasting, videotron, dan multimedia production di Surabaya.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <ContactSection />
      <FAQ />
    </main>
  );
}
