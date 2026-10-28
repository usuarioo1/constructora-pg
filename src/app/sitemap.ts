import type { MetadataRoute } from "next";
import { siteConfig } from "./_lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
  ];
}
