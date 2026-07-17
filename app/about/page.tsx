import type { Metadata } from "next";
import AboutTheo from "@/components/home/AboutTheo";
import HowWeWork from "@/components/home/HowWeWork";

export const metadata: Metadata = {
  title: "Tentang Colorize Visual - Vendor Live Streaming Surabaya",
  description:
    "Kenali Colorize Visual, vendor live streaming dan multimedia production berbasis Surabaya untuk event profesional, ibadah, wedding, graduation, dan corporate event.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <AboutTheo />
      <HowWeWork />
    </main>
  );
}
