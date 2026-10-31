import Link from "next/link";
import { Hero } from "../components/ui";
export const metadata = { title: "Page not found", robots: { index: false } };
export default function NotFound() { return <Hero eyebrow="404" title="This room does not exist" sub="Let’s get you back to the main building."><Link className="btn" href="/">Back to home</Link></Hero>; }
