import Link from "next/link";
import { SITE } from "@/content/site";

/** Text wordmark with a simple geometric mark. [TODO: confirm with founder] swap in the official NAVICORE logo files. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label={`${SITE.name} home`}>
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" className="shrink-0">
        <rect width="32" height="32" rx="9" fill="#6B1220" />
        <path d="M10 23V9l12 14V9" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight text-maroon">{SITE.name}</span>
    </Link>
  );
}
