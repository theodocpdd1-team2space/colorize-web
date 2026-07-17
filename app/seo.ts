import type { Metadata } from "next";

export const siteUrl = "https://colorizevisual.com";
export const brandName = "Colorize Visual";
export const phoneNumber = "+62895345902896";
export const emailAddress = "theofilus267@gmail.com";
export const instagramUrl = "https://instagram.com/colorizevisual";

export const seoKeywords = [
  "live streaming Surabaya",
  "jasa live streaming Surabaya",
  "vendor live streaming Surabaya",
  "multicam Surabaya",
  "jasa multicam Surabaya",
  "broadcasting event Surabaya",
  "jasa broadcasting Surabaya",
  "jasa dokumentasi live streaming",
  "live streaming wedding Surabaya",
  "jasa live streaming wedding Surabaya",
  "jasa live streaming event Surabaya",
  "live streaming graduation Surabaya",
  "multimedia production Surabaya",
  "videotron event Surabaya",
  "hybrid event Surabaya",
];

export const defaultDescription =
  "Colorize Visual menyediakan jasa live streaming Surabaya, multicam production, broadcasting, videotron, dan multimedia installation untuk wedding, event, sekolah, gereja, dan corporate.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: brandName,
  title: {
    default: "Jasa Live Streaming Surabaya | Colorize Visual",
    template: "%s | Colorize Visual",
  },
  description: defaultDescription,
  keywords: seoKeywords,
  authors: [{ name: brandName }],
  creator: brandName,
  publisher: brandName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: brandName,
    title: "Jasa Live Streaming Surabaya | Colorize Visual",
    description: defaultDescription,
    images: [
      {
        url: "/works/bannernew1.JPG",
        width: 1200,
        height: 800,
        alt: "Colorize Visual live streaming and multicam production setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Live Streaming Surabaya | Colorize Visual",
    description: defaultDescription,
    images: ["/works/bannernew1.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: brandName,
  alternateName: "Colorize Visual Surabaya",
  url: siteUrl,
  image: `${siteUrl}/works/bannernew1.JPG`,
  logo: `${siteUrl}/file.svg`,
  description: defaultDescription,
  telephone: phoneNumber,
  email: emailAddress,
  priceRange: "$$",
  areaServed: [
    "Surabaya",
    "Sidoarjo",
    "Gresik",
    "Malang",
    "East Java",
    "Indonesia",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surabaya",
    addressRegion: "East Java",
    addressCountry: "ID",
  },
  sameAs: [instagramUrl],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Jasa Live Streaming Surabaya",
        serviceType: "Live streaming production",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Multicam Event Production",
        serviceType: "Multicam broadcasting",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Multimedia Installation",
        serviceType: "Audio visual and multimedia installation",
      },
    },
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: brandName,
  url: siteUrl,
  inLanguage: ["id-ID", "en-US"],
  description: defaultDescription,
};

export function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
