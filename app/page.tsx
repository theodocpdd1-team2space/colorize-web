import type { Metadata } from "next";
import HeroVideo from "@/components/home/HeroVideo";
import ClientMarquee from "@/components/home/ClientMarquee";
import BigIntroStatement from "@/components/home/BigIntroStatement";
import AboutTheo from "@/components/home/AboutTheo";
import ServicesList from "@/components/home/ServicesList";
import ProductionCarousel from "@/components/home/ProductionCarousel";
import NetflixDocumentation from "@/components/home/NetflixDocumentation";
import FeaturedWorks from "@/components/home/FeaturedWorks";
import HowWeWork from "@/components/home/HowWeWork";
import PackagePreview from "@/components/home/PackagePreview";
import PromoCTA from "@/components/home/PromoCTA";
import FAQ from "@/components/home/FAQ";
import ContactSection from "@/components/home/ContactSection";
import { siteUrl } from "./seo";

export const metadata: Metadata = {
  title: "Jasa Live Streaming Surabaya | Colorize Visual",
  description:
    "Colorize Visual menyediakan jasa live streaming Surabaya, multicam production, broadcasting, videotron, dan multimedia installation untuk wedding, event, sekolah, gereja, dan corporate.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: siteUrl,
  },
};

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <BigIntroStatement />
      <ClientMarquee />
      <ServicesList />
      <NetflixDocumentation />
      <ProductionCarousel />
      <FeaturedWorks />
      <HowWeWork />
      <PackagePreview />
      <AboutTheo />
      <PromoCTA />
      <FAQ />
      <ContactSection />
    </main>
  );
}
