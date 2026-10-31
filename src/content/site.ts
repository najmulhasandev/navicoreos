/** Site-wide constants. Nothing here is a claim about customers, numbers or prices. */
export const SITE = {
  name: "NAVICORE OS",
  descriptor: "business operating system",
  /** Always pair the brand with a descriptor; never target bare "navicore". */
  fullName: "NAVICORE OS business operating system",
  homeTitle: "NAVICORE OS: the business operating system for companies",
  homeDescription:
    "NAVICORE OS is a business operating system: people, projects, clients, finance, communication, approvals and an executive overview in one platform.",
  tagline: "Innovating Journeys. Building Futures.",
  orgName: "NAVICORE",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://os.navicore.co",
  orgUrl: process.env.NEXT_PUBLIC_ORG_URL ?? "https://www.navicore.co",
  locale: "en_US",
  ogImage: "/og.png",
} as const;

/**
 * The statuses on this site come from the NAVICORE OS Master Reference.
 * Its latest dated status entry is 24 August 2026.
 * [TODO: confirm with founder] Re-confirm every status label before launch.
 */
export const STATUS_AS_OF = "2026-08-24";
export const STATUS_AS_OF_LABEL = "August 2026";

/** Show the founder-question markers in the page? Always in dev; opt-in in production. */
export const SHOW_TODOS =
  process.env.NODE_ENV !== "production" || process.env.SHOW_TODOS === "1";
