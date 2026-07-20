import type { MetadataRoute } from "next";

import { siteConfig } from "@/constants/site";

import { courseCatalog } from "./courses/course-data";

const staticRoutes = [
  "",
  "/about",
  "/courses",
  "/faculty",
  "/gallery",
  "/events",
  "/testimonials",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
  }));

  const courseEntries = courseCatalog.map((course) => ({
    url: `${siteConfig.url}/courses/${course.slug}`,
    lastModified: now,
  }));

  return [...staticEntries, ...courseEntries];
}
