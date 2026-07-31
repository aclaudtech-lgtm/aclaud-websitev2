import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://aclaud.com/sitemap.xml",
    host: "https://aclaud.com",
  };
}
