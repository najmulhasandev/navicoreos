import { Hero, Sec, JsonLd } from "../../components/ui";
import { site, meta, ways, faqs } from "../../lib/site";
export const metadata = meta("Partner, licence or sponsor", "Use, licence, partner on, sponsor or commission a platform like NAVICORE OS. Talk to Navicore Software about clients, licensing, partnerships and sponsorship.", "/partner");

const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };

export default function Partner() {
  return (<>
    <JsonLd data={faq} />
    <Hero eyebrow="Work with us" title="Five ways to be part of it" sub="Use it, licence it, partner with us, sponsor it, or have Navicore Software build one like it for you." />
    <Sec alt>
      <div className="g3">{ways.map(([t, h, d]) => <div className="card" key={h}><p className="tag">{t}</p><h3>{h}</h3><p>{d}</p></div>)}
        <div className="card gold"><p className="tag">Get in touch</p><h3>Start a conversation</h3>
          <p><a href={`mailto:${site.email}?subject=NAVICORE%20OS`} style={{ fontWeight: 700 }}>{site.email}</a></p>
          <p><a href={site.org}>navicore.co</a></p><p style={{ marginTop: 12 }}>We reply personally.</p></div></div>
    </Sec>
    <Sec eyebrow="Questions" title="Frequently asked">
      {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
    </Sec>
  </>);
}
