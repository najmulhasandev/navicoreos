import Link from "next/link";
import { site, nav, tiles } from "../lib/site";

export const JsonLd = ({ data }) => <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;

export const Header = () => (
  <header className="hdr"><div className="wrap bar">
    <Link className="logo" href="/" aria-label="NAVICORE OS home">NAVICORE <span>OS</span></Link>
    <nav aria-label="Main">{nav.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}</nav>
  </div></header>
);

export const Footer = () => (
  <footer className="foot"><div className="wrap fgrid">
    <div><b className="logo">NAVICORE <span>OS</span></b><p>{site.tagline}</p><p>Navigate. Build. Connect.</p></div>
    <div><h3>Explore</h3>{nav.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}</div>
    <div><h3>Navicore</h3>
      <a href={site.main}>os.navicore.co</a><a href={site.org}>navicore.co</a>
      <a href={site.software}>Navicore Software</a><a href={site.railmate}>RailMate Bangladesh</a></div>
    <div><h3>Contact</h3><a href={`mailto:${site.email}`}>{site.email}</a><p>Najmul Hasan, Founder, CEO &amp; CPO</p><p>Nusrat Jahan Bably, Co-Founder &amp; MD</p></div>
  </div><div className="wrap copy">© 2026 Navicore Software. NAVICORE OS is a product of the Navicore ecosystem.</div></footer>
);

export const Hero = ({ eyebrow, title, sub, children, aside }) => (
  <section className="hero"><div className={"wrap" + (aside ? " hgrid" : "")}>
    <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{sub && <p className="sub">{sub}</p>}{children}</div>
    {aside}
  </div></section>
);

export const Sec = ({ id, eyebrow, title, lead, alt, children }) => (
  <section id={id} className={"sec" + (alt ? " alt" : "")}><div className="wrap">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}{title && <h2>{title}</h2>}{lead && <p className="lead">{lead}</p>}{children}
  </div></section>
);

export const Pill = ({ s }) => <span className={"pill " + s}>{{ live: "Live", build: "In build", plan: "Planned" }[s]}</span>;

export const Tiles = () => (
  <div aria-label="Twelve rooms: four first, eight planned"><div className="tiles">
    {tiles.map(([n, on]) => <div key={n} className={"tile " + (on ? "on" : "off")}>{n}</div>)}
  </div><p className="legend">Gold: the first four rooms. Outlined: planned.</p></div>
);

export const Cta = ({ title = "Let’s build it together", text = "Client, partner, sponsor or licence buyer, we would like to hear from you." }) => (
  <section className="sec"><div className="wrap"><div className="band">
    <div><h2>{title}</h2><p>{text}</p></div>
    <div className="row"><a className="btn dark" href={`mailto:${site.email}?subject=NAVICORE%20OS`}>Email us</a><Link className="btn ghost" href="/partner">Ways to work with us</Link></div>
  </div></div></section>
);
