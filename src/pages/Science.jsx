import { Link } from 'react-router-dom'

const PILLARS = [
  {
    title: 'Standardization',
    body: 'Every active is quantified, not implied — 50% bacosides on Bacopa, microencapsulated CoQ10, bio-fermented L-Carnitine. Extraction and processing are locked so that batch twelve is identical to batch one. An ingredient list is a claim; a specification is a promise.',
  },
  {
    title: 'Bioavailability',
    body: 'Potency means nothing if it never reaches the blood. Formats are engineered for uptake — lipid encapsulation, sublingual delivery, delayed-release capsules — chosen per active, not per fashion. We formulate for what arrives, not what is printed.',
  },
  {
    title: 'Validation',
    body: 'Multi-tier lab testing on every production run, third-party Certificates of Analysis, a standing medical advisory, and published trial data where the claim requires it. If it cannot be tested, it does not go on the label.',
  },
  {
    title: 'Traceability',
    body: 'Batch-level QR validation on every unit — seed to shelf. Consumers can review the third-party CoA for the exact batch in their hand. Transparency is not a marketing page; it is printed on the pack.',
  },
]

export default function Science() {
  return (
    <>
      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">The Science</div>
            <h2>Vedic Bio-Engineering.</h2>
            <p>
              A deliberate third category. Clinically validated nutritional actives combined with
              time-tested Vedic botanical logic — processed and stabilized using modern extraction
              and bioavailability science. It is not a marketing veneer over Ayurveda, and it is not
              a purely synthetic clinical line. It is classical principles of balance and restoration,
              re-engineered to meet the precision, stability and proof standards of modern nutrition.
            </p>
          </div>
          <div className="pillars">
            {PILLARS.map((p) => (
              <div className="pillar" key={p.title}>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Regulatory Clarity</div>
            <h2>One license per track. Never blended.</h2>
            <p>
              The core nutrition line is manufactured and sold under Sōma Evexia's own FSSAI
              food and health-supplement license — positioned, marketed and regulated strictly as
              clinical-grade nutrition. A small Ayurvedic catalogue runs as a separate track through
              a third-party partner holding a dedicated AYUSH license. Two regulatory tracks, in
              parallel, with claims that never cross between them.
            </p>
          </div>
          <table className="table">
            <thead>
              <tr><th>Track</th><th>License</th><th>What lives here</th></tr>
            </thead>
            <tbody>
              <tr>
                <td className="serif" style={{ fontSize: 17 }}>Core Nutrition Line</td>
                <td>FSSAI food / health supplement</td>
                <td>The multiverse — Hydro, Somnus, Cortex, Cellular, Vitality, Terra</td>
              </tr>
              <tr>
                <td className="serif" style={{ fontSize: 17 }}>AYUSH Catalogue</td>
                <td>Third-party AYUSH license</td>
                <td>A small, separate classical catalogue — distinct track, distinct claims</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="block">
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Why It Matters</div>
          <h2 className="serif" style={{ fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.15, marginBottom: 20 }}>
            Science above trends, in every decision.
          </h2>
          <p style={{ color: 'var(--ink2)', lineHeight: 1.8, marginBottom: 36 }}>
            See how this discipline separates the house from a shelf of disconnected bottles —
            and from the generic grooming brands that sell promises instead of proof.
          </p>
          <Link className="btn btn-solid" to="/difference">How We Differ</Link>
        </div>
      </section>
    </>
  )
}
