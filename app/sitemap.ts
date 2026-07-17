import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    {
      path: "",
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteUrl}/works/bannernew1.JPG`,
        `${siteUrl}/carouselbaru/1.jpg`,
      ],
    },
    { path: "/about", changeFrequency: "monthly", priority: 0.75 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    {
      path: "/works",
      changeFrequency: "weekly",
      priority: 0.85,
      images: [
        `${siteUrl}/works/bannernew1.JPG`,
        `${siteUrl}/works/foto1.jpg`,
        `${siteUrl}/works/foto2.jpg`,
        `${siteUrl}/event/1.jpg`,
      ],
    },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  ] as const;

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: "images" in route ? [...route.images] : undefined,
  }));
}
