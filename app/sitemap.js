import { SITE_URL, nav } from "../lib/site";
export default function sitemap() {
  const now = new Date("2026-10-31");
  return [["Home", "/"], ...nav].map(([, p]) => ({ url: SITE_URL + (p === "/" ? "" : p), lastModified: now, changeFrequency: p === "/status" ? "weekly" : "monthly", priority: p === "/" ? 1 : p === "/status" ? 0.7 : 0.8 }));
}
