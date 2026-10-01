import { Link } from 'react-router-dom'

const ROWS = [
  {
    aspect: 'Formulation',
    generic: 'Proprietary blends and trend-led actives, chosen for the label — not the body.',
    soma: 'Standardized actives with disclosed dosages, built on Vedic botanical logic and clinical validation.',
  },
  {
    aspect: 'Transparency',
    generic: 'Hidden dosages behind blend names. You never know what you are actually taking.',
    soma: 'Full disclosure of every active, plus batch-level QR traceability from sourcing to shelf.',
  },
  {
    aspect: 'System',
    generic: 'Isolated SKUs with no relationship to each other — a morning capsule that knows nothing of the evening tonic.',
    soma: 'A multiverse: six universes, one coherent system. Hydration that supports sleep; recovery that supports focus.',
  },
  {
    aspect: 'Design',
    generic: 'Noisy packaging and loud claims, competing for shelf attention.',
    soma: 'Matte, structural, minimal. Status signalled through material quality and formulation precision — never shouting.',
  },
  {
    aspect: 'Proof',
    generic: 'Marketing claims dressed as science; trends chased quarter to quarter.',
    soma: 'Medical advisors, published trials, multi-tier lab validation. Formulated for measurable outcomes.',
  },
]

const REFUSALS = [
  { n: '01', title: 'No proprietary blends.', text: 'If we will not disclose the dosage, we will not sell the formulation. Every active is stated, every dose is exact.' },
  { n: '02', title: 'No synthetic fillers.', text: 'No artificial colorants, no compromised raw materials, no shortcuts in sourcing. Ever.' },
  { n: '03', title: 'No trend-chasing.', text: 'We do not formulate for the trend cycle. If an ingredient has no evidence, it has no place in the house.' },
  { n: '04', title: 'No isolated miracle SKUs.', text: 'A single bottle marketed as a miracle is a confession of no system. Every formulation belongs to a universe, and every universe belongs to the whole.' },
  { n: '05', title: 'No shouting.', text: 'We are the quiet, obvious choice for someone who already knows what they value. Loudness is what brands do when the product cannot speak.' },
]

export default function Difference() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="block">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="eyebrow">The Difference</div>
          <h1 className="serif" style={{ fontWeight: 400, fontSize: 'clamp(38px, 5vw, 62px)', lineHeight: 1.08, marginBottom: 24 }}>
            Not another <em style={{ color: 'var(--accent-ink)' }}>wellness brand.</em>
          </h1>
          <p style={{ color: 'var(--ink2)', lineHeight: 1.85, fontSize: 17, maxWidth: '60ch' }}>
            The nutrition industry has a trust problem, and it knows it. Sōma Evexia exists because nobody was building the alternative — a house that treats the body as one system, discloses everything, and proves what it claims.
          </p>
        </div>
      </section>

      {/* ——— The problem ——— */}
      <section className="block" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', paddingTop: 72, paddingBottom: 72 }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="eyebrow">The Problem</div>
          <h2 className="serif" style={{ fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 42px)', lineHeight: 1.2, marginBottom: 26 }}>
            Crowded, but fragmented.
          </h2>
          <p style={{ color: 'var(--ink2)', lineHeight: 1.85, fontSize: 16, marginBottom: 18 }}>
            The supplements market is full and broken at the same time. On one side, the mass vitamin aisle — generic formulations competing on price and shelf reach. On the other, single-SKU wellness fads with trend-led superfood branding and marketing that talks about wellness without proving anything.
          </p>
          <p style={{ color: 'var(--ink2)', lineHeight: 1.85, fontSize: 16, marginBottom: 18 }}>
            What almost no one offers is a system. Consumers are sold an isolated pill, powder or shot with no relationship to anything else in their routine — hydration disconnected from sleep, recovery disconnected from focus, cellular health disconnected from all of it.
          </p>
          <p style={{ color: 'var(--ink)', lineHeight: 1.85, fontSize: 16 }}>
            The modern individual does not need another isolated bottle marketed as a miracle. They need one house, one philosophy, one standard of proof — across every universe of human function.
          </p>
        </div>
      </section>

      {/* ——— Comparison ——— */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Side by Side</div>
            <h2>Generic brands vs. Sōma Evexia</h2>
            <p>Five dimensions where the category settled for less — and where we refused to.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: '16%' }}></th>
                  <th style={{ width: '42%' }}>Generic brands</th>
                  <th style={{ width: '42%' }}>Sōma Evexia</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.aspect}>
                    <td><strong className="serif" style={{ fontWeight: 500, fontSize: 16 }}>{r.aspect}</strong></td>
                    <td style={{ color: 'var(--ink2)' }}>{r.generic}</td>
                    <td>{r.soma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ——— Refusals ——— */}
      <section className="block" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Our Discipline</div>
            <h2>Five things we refuse to do.</h2>
            <p>Constraints are the brand. These five are non-negotiable — for every formulation, every partner, every quarter.</p>
          </div>
          <div className="pillars" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {REFUSALS.map((r) => (
              <div key={r.n} className="pillar">
                <div className="serif" style={{ fontSize: 13, letterSpacing: '0.3em', color: 'var(--accent-ink)', marginBottom: 12 }}>{r.n}</div>
                <h4>{r.title}</h4>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="block">
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Go Deeper</div>
          <h2 className="serif" style={{ fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 44px)', marginBottom: 18 }}>
            The proof behind the <em style={{ color: 'var(--accent-ink)' }}>position.</em>
          </h2>
          <p style={{ color: 'var(--ink2)', lineHeight: 1.8, marginBottom: 36 }}>
            Read how Vedic Bio-Engineering actually works — or start a conversation about building with us.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn-solid" to="/science">Inside the Science</Link>
            <Link className="btn btn-ghost" to="/partners">Partner With Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
