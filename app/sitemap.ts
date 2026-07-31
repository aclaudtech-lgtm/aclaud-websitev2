import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/engineering", "/contracting", "/contact", "/privacy", "/accessibility"];
  return routes.map((route) => ({
    url: `https://aclaud.com${route}`,
    lastModified: new Date("2026-07-30T00:00:00.000Z"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/engineering" ? 0.9 : 0.6,
  }));
}
