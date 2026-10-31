import { Hero, Sec, Cta } from "../../components/ui";
import { meta, steps, horizon } from "../../lib/site";
export const metadata = meta("Roadmap: eleven phases, one gate at a time", "The NAVICORE OS roadmap: foundation and work management first, then knowledge, finance, AI, automation, collaboration, analytics and enterprise hardening.", "/roadmap");

export default function Roadmap() {
  return (<>
    <Hero eyebrow="Roadmap" title="A deliberate path, one gate at a time" sub="Focus creates excellence. Expansion follows validation. Nothing moves to the next step until the one before it truly works." />
    <Sec alt eyebrow="Four steps" title="From foundation to scale">
      <div className="g4">{steps.map(([s, st, h, ph], i) => <div className={"card step" + (i === 0 ? " gold" : "")} key={s}>
        <p className="tag">{s} · {st}</p><h3>{h}</h3>
        <ul className="ticks">{ph.map(([p, d]) => <li key={p}><b>{p}.</b> {d}</li>)}</ul></div>)}</div>
    </Sec>
    <Sec eyebrow="Beyond the phases" title="The longer horizon">
      <div className="g3">{horizon.map(([a, b]) => <div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div>
    </Sec>
    <Sec alt eyebrow="How we hold ourselves to it" title="The definition of done">
      <p className="lead">Every milestone ends with working code, tests, documentation and a recorded decision. We keep a changelog, a task list and a tech-debt register in the repository, and nothing counts as finished until the automatic checks have really run and passed.</p>
      <p className="quote">Build it to run Navicore first. <span>Then other companies get their own locked house.</span></p>
    </Sec>
    <Cta />
  </>);
}
