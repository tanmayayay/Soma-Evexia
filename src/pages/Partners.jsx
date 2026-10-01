import { Link } from 'react-router-dom'

const TRACKS = [
  {
    title: 'Manufacturing Partners',
    body: 'cGMP and ISO-certified facilities, third-party at first and captive as we scale. We audit everything — vendor audits, batch purity, logistics. If a facility cannot be audited, it cannot make for us.',
  },
  {
    title: 'Ingredient Suppliers',
    body: 'Standardized extracts with a Certificate of Analysis on every lot. No compromised raw materials, no synthetic fillers, no colorants. Identity, potency and contaminant screening before anything enters a formulation.',
  },
  {
    title: 'Clinical & Distribution',
    body: 'Longevity clinics, functional-medicine practitioners and premium fitness studios who recommend on evidence, not margins. Practitioner channels that treat nutrition as infrastructure, not upsell.',
  },
  {
    title: 'Retail',
    body: 'Premium wellness e-commerce and selective retail placement — Tata 1mg, HealthKart, Nykaa Wellness-style outlets — where the shelf context matches the formulation. Never the mass vitamin aisle.',
  },
]

const DEMANDS = [
  ['cGMP / ISO certification', 'Current, verifiable, and maintained — not aspirational.'],
  ['Third-party CoA per batch', 'Every production lot, tested independently, shared openly.'],
  ['Full traceability', 'Seed-to-shelf records that survive an audit and a customer QR scan.'],
  ['Zero synthetic fillers', 'No artificial colorants, no compromised raw materials. Ever.'],
  ['Audit access', 'Our quality team walks your floor before our name goes on your output.'],
]

export default function Partners() {
  return (
    <>
      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Partnerships</div>
            <h2>Built with people who refuse to compromise.</h2>
            <p>
              Sōma Evexia is an institution, not a label. Every formulation that leaves our house
              passes through partners who hold the same line we do — on purity, on proof, and on
              process. If that describes how you work, we should talk.
            </p>
          </div>
          <div className="uni-grid">
            {TRACKS.map((t) => (
              <div className="uni-card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">The Bar</div>
            <h2>What we demand.</h2>
            <p>
              Non-negotiable, for every partner in every track. These are entry conditions,
              not aspirations — they are how the house keeps its promise of trust above profit.
            </p>
          </div>
          <table className="table">
            <thead>
              <tr><th>Requirement</th><th>What it means</th></tr>
            </thead>
            <tbody>
              {DEMANDS.map(([req, meaning]) => (
                <tr key={req}>
                  <td className="serif" style={{ fontSize: 17 }}>{req}</td>
                  <td>{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="block">
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Start the Conversation</div>
          <h2 className="serif" style={{ fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.15, marginBottom: 20 }}>
            Tell us what you make — or where you operate.
          </h2>
          <p style={{ color: 'var(--ink2)', lineHeight: 1.8, marginBottom: 36 }}>
            Manufacturers, ingredient suppliers, clinics, distributors and retailers:
            introduce your facility, your catalogue or your footprint, and our partnerships
            team will respond.
          </p>
          <Link className="btn btn-solid" to="/contact">Partner With Us</Link>
        </div>
      </section>
    </>
  )
}
