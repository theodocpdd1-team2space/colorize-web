import type { Metadata } from "next";
import PackagePreview from "@/components/home/PackagePreview";
import JsonLd from "@/components/seo/JsonLd";
import { cinemaPackages, streamingPackages } from "@/lib/packages";
import { siteUrl } from "../seo";

const title = "Harga Paket Live Streaming Mirrorless Surabaya";
const description = "Paket live streaming mirrorless Colorize Visual mulai Rp1,75 juta. Rekaman via Google Drive atau salin ke media klien; flashdisk untuk paket mulai Rp3,8 juta.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/pricelist",
  },
  openGraph: { title, description, url: "/pricelist", type: "website", images: ["/works/bannernew1.JPG"] },
  twitter: { card: "summary_large_image", title, description, images: ["/works/bannernew1.JPG"] },
};

export default function PricelistPage() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "Paket Live Streaming Colorize Visual",
        url: `${siteUrl}/pricelist`,
        itemListElement: [...streamingPackages, ...cinemaPackages].map((pkg) => ({
          "@type": "Offer",
          name: pkg.title,
          url: `${siteUrl}/pricelist`,
          priceSpecification: { "@type": "PriceSpecification", minPrice: pkg.priceAmount, priceCurrency: "IDR" },
          itemOffered: { "@type": "Service", name: `Paket ${pkg.title}`, description: pkg.description.id, provider: { "@type": "Organization", name: "Colorize Visual", url: siteUrl } },
        })),
      }} />
      <PackagePreview />
    </main>
  );
}
