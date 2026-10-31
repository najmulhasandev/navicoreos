import { Hero, Sec, Cta } from "../../components/ui";
import { meta, pillars, defence } from "../../lib/site";
export const metadata = meta("Security and multi-tenant isolation", "How NAVICORE OS protects company data: per-company isolation, role-based permissions, an append-only audit log, MFA and passkeys, encryption and OWASP Top 10 checks.", "/security");

export default function Security() {
  return (<>
    <Hero eyebrow="Security" title="Safe from day one" sub="A company’s information is precious, so safety comes first, not last. Locks added later are far harder and riskier than locks built in." />
    <Sec alt eyebrow="Four foundations" title="The strong walls and locks">
      <div className="g2">{pillars.map(([a, b], i) => <div className="card" key={a}><div className="num">0{i + 1}</div><h3>{a}</h3><p>{b}</p></div>)}</div>
    </Sec>
    <Sec eyebrow="Defence in depth" title="Every layer checked" lead="Beyond the four foundations, every module meets the same bar before it ships.">
      <div className="g4">{defence.map((d) => <div className="card" key={d}><p style={{ color: "#fff", fontWeight: 600 }}>{d}</p></div>)}</div>
    </Sec>
    <Sec alt eyebrow="A deliberate choice" title="Why chat is not end-to-end encrypted">
      <p className="quote">Admins and auditors must be able to review company communications. <span>So we protect messages in transit and at rest, and keep the audit trail intact.</span></p>
    </Sec>
    <Cta title="Questions about security?" text="We are happy to walk your technical team through the architecture." />
  </>);
}
