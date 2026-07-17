import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import ServicesList from "@/components/home/ServicesList";
import PackagePreview from "@/components/home/PackagePreview";
import { siteUrl } from "../seo";

export const metadata: Metadata = {
  title: "Jasa Live Streaming Surabaya, Multicam, Videotron & Multimedia",
  description:
    "Layanan Colorize Visual meliputi live streaming, multicam production, broadcasting system, videotron, hybrid event, dan multimedia installation di Surabaya.",
  alternates: {
    canonical: "/services",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Live Streaming Surabaya",
  provider: {
    "@type": "LocalBusiness",
    name: "Colorize Visual",
    url: siteUrl,
  },
  areaServed: "Surabaya, East Java, Indonesia",
  serviceType: [
    "Live Streaming Production",
    "Multicam Event Production",
    "Broadcasting System",
    "Videotron",
    "Hybrid Event",
    "Multimedia Installation",
  ],
};

export default function Services() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <JsonLd data={servicesJsonLd} />
      <ServicesList />
      <PackagePreview />
    </main>
  );
}
