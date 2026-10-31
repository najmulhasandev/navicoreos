import { Hero, Sec, Pill, Cta } from "../../components/ui";
import { meta, modules, stack, rooms4 } from "../../lib/site";
export const metadata = meta("Product: modules and technology", "Explore NAVICORE OS modules: People Directory, Work Management, CRM & Sales, Knowledge, Finance, AI, Automation, Collaboration and Analytics, built on Next.js, NestJS and PostgreSQL.", "/product");

export default function Product() {
  return (<>
    <Hero eyebrow="Product" title="Every room a company needs" sub="Ten modules, one shared foundation of identity, permissions, notifications, an audit diary and file storage, so the whole app feels like one smooth building." />
    <Sec alt eyebrow="Modules" title="What is built, and what comes next" lead="The first four rooms are in build. The rest are planned and sequenced, so each new room stands on ground that has been proven.">
      <div className="g2">{modules.map(([n, s, d, f]) => <div className="card" key={n}>
        <div className="mh"><h3>{n}</h3><Pill s={s} /></div><p>{d}</p>
        <ul className="ticks">{f.map((x) => <li key={x}>{x}</li>)}</ul></div>)}</div>
    </Sec>
    <Sec eyebrow="The first four rooms" title="In everyday words">
      <div className="g4">{rooms4.map(([n, d, l], i) => <div className="card" key={n}><div className="num">0{i + 1}</div><h3>{n}</h3><p>{d}</p><p className="like">{l}</p></div>)}</div>
    </Sec>
    <Sec alt eyebrow="Technology" title="Built on stable, widely adopted technology" lead="A modular monolith in a Turborepo monorepo. Each module is self-contained with its own domain boundary, designed so it can be extracted later if there is ever a real operational reason.">
      <div className="card">{stack.map(([a, b]) => <div className="trow" key={a} style={{ gridTemplateColumns: "1fr 2.4fr" }}><b>{a}</b><span>{b}</span></div>)}</div>
    </Sec>
    <Cta />
  </>);
}
