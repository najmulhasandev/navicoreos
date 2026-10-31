import Link from "next/link";
import { Hero, Sec, Tiles, Cta, JsonLd } from "../components/ui";
import { site, SITE_URL, stats, today, withOs, rooms4, how, why } from "../lib/site";

export const metadata = { alternates: { canonical: (process.env.NEXT_PUBLIC_CANONICAL_URL || "") + "/" } };

const app = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "NAVICORE OS", url: SITE_URL, applicationCategory: "BusinessApplication", operatingSystem: "Web",
  description: "A business operating system for projects, tasks, time tracking, CRM and people, with finance, documents, AI and automation to follow.",
  publisher: { "@id": SITE_URL + "/#org" }, inLanguage: ["en", "bn"] };

export default function Home() {
  return (<>
    <JsonLd data={app} />
    <Hero eyebrow="Business operating system" title="NAVICORE OS" sub={site.tagline} aside={<Tiles />}>
      <p className="sub" style={{ fontSize: 18, color: "var(--muted)" }}>One app where a company keeps its people, its work and its customers, all connected and all kept safe.</p>
      <div className="row"><a className="btn" href={`mailto:${site.email}?subject=NAVICORE%20OS`}>Talk to us</a><Link className="btn ghost" href="/product">Explore the product</Link></div>
    </Hero>

    <Sec alt eyebrow="Built by a team that ships" title="Navicore Software’s track record">
      <div className="g4">{stats.map(([n, l]) => <div className="card" key={l}><div className="stat">{n}</div><p>{l}</p></div>)}</div>
    </Sec>

    <Sec eyebrow="The idea" title="One platform, one picture" lead="OS stands for operating system: the base everything else sits on, like Windows on a computer or Android on a phone. NAVICORE OS is that base for running a whole company.">
      <div className="g2">
        <div className="card"><p className="tag" style={{ color: "var(--muted)" }}>Today</p><h3>Many tools, no shared view</h3>
          <ol className="pts">{today.map(([a, b], i) => <li key={a}><b>0{i + 1}</b><div><strong>{a}</strong><p>{b}</p></div></li>)}</ol></div>
        <div className="card hl"><p className="tag">With NAVICORE OS</p><h3>One connected home</h3>
          <ol className="pts">{withOs.map(([a, b], i) => <li key={a}><b>0{i + 1}</b><div><strong>{a}</strong><p>{b}</p></div></li>)}</ol></div>
      </div>
    </Sec>

    <Sec alt eyebrow="What’s inside" title="One building, many rooms" lead="We open the first four rooms on strong walls and locks. The others follow one at a time, once the first ones really work.">
      <div className="g4">{rooms4.map(([n, d, l], i) => <div className="card" key={n}><div className="num">0{i + 1}</div><h3>{n}</h3><p>{d}</p><p className="like">{l}</p></div>)}</div>
      <p style={{ marginTop: 28 }}><Link href="/product" style={{ color: "var(--gold)", fontWeight: 600 }}>See every module and the technology behind it →</Link></p>
    </Sec>

    <Sec eyebrow="How it works" title="Think of a restaurant" lead="You ask for a dish, a waiter carries your order, the kitchen cooks it and the pantry holds the ingredients. When a manager taps “Show me my team’s tasks”, the request is checked, fetched and returned in a fraction of a second.">
      <div className="g3">{how.map(([t, s, d]) => <div className="card" key={t}><p className="tag">{t}</p><h3>{s}</h3><p>{d}</p></div>)}</div>
    </Sec>

    <Sec alt eyebrow="Why we are building it" title="Five reasons it matters">
      <div className="g3">{why.map(([a, b], i) => <div className="card" key={a}><div className="num">0{i + 1}</div><h3>{a}</h3><p>{b}</p></div>)}
        <div className="card gold"><p className="tag">Safe by design</p><h3>Locked houses, badges and a diary</h3><p>Security is built in from the first day, not added later.</p><p style={{ marginTop: 14 }}><Link href="/security" style={{ fontWeight: 700 }}>How we keep it safe →</Link></p></div></div>
    </Sec>

    <Sec eyebrow="Honest progress" title="See exactly where we are" lead="We report the real state of NAVICORE OS: what is live, what is in build and what is only planned.">
      <Link className="btn" href="/status">View the current state</Link>
    </Sec>
    <Cta />
  </>);
}
