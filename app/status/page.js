import Link from "next/link";
import { Hero, Sec, Pill, Cta } from "../../components/ui";
import { meta, state, STATUS_DATE } from "../../lib/site";
export const metadata = meta("Current state of NAVICORE OS", "An honest, dated report of what is live, what is in build and what is planned for NAVICORE OS, including infrastructure and quality checks.", "/status");

export default function Status() {
  return (<>
    <Hero eyebrow={`Current state · ${STATUS_DATE}`} title="Where NAVICORE OS stands today" sub="Foundation first, then the first four rooms, then everything else. This page is updated as the build moves, and it says plainly what is not started." />
    <Sec alt>
      <div className="g3">{state.summary.map(([l, s, h, d]) => <div className={"card" + (s === "build" ? " hl" : "")} key={h}><div className="mh"><p className="tag">{l}</p><Pill s={s} /></div><h3>{h}</h3><p>{d}</p></div>)}</div>
    </Sec>
    <Sec eyebrow="By area" title="Status of each part">
      <div className="card">{state.areas.map(([a, s, d]) => <div className="trow" key={a}><b>{a}</b><span><Pill s={s} /></span><span>{d}</span></div>)}</div>
    </Sec>
    <Sec alt eyebrow="Infrastructure" title="Where it runs">
      <div className="g4">{state.infra.map(([a, b]) => <div className="card" key={a}><p className="tag">{a}</p><h3 style={{ fontSize: 18 }}>{b}</h3></div>)}</div>
    </Sec>
    <Sec eyebrow="Quality gate" title="Nothing is finished until the checks pass" lead="Like checking homework: “it’s all correct” is not enough, the working has to be shown. Every milestone must clear this list before the next begins.">
      <div className="g2">
        <div className="card"><h3>Definition of done</h3><ul className="ticks">{state.done.map((x) => <li key={x}>{x}</li>)}</ul></div>
        <div className="card hl"><h3>Up next</h3><ul className="ticks">{state.next.map((x) => <li key={x}>{x}</li>)}</ul></div>
      </div>
    </Sec>
    <Sec alt eyebrow="Follow along" title="Want a closer look?" lead="Sponsors and partners can ask for a walkthrough of the current build.">
      <div className="row"><Link className="btn" href="/partner">Ways to work with us</Link><Link className="btn ghost" href="/roadmap">See the roadmap</Link></div>
    </Sec>
    <Cta title="Back the next room" text="Every step on this page is built one proven stage at a time. Join us for the next one." />
  </>);
}
