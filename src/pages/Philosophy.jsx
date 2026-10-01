import { Link } from 'react-router-dom'

const PILLARS = [
  {
    title: 'Trust Above Profit',
    text: 'Full disclosure of standardized active botanical components and bioavailability metrics. Zero synthetic fillers, artificial colorants, or compromised raw materials — with batch-level traceability a consumer can verify.',
  },
  {
    title: 'Science Above Trends',
    text: 'Guided by medical advisors, published clinical trials, and multi-tier lab validation. We formulate for measurable health outcomes rather than marketing promises — efficacy first, always.',
  },
  {
    title: 'People Above Everything',
    text: 'An institution built for generations, not quarters. Every decision — from sourcing to pricing to claims — is guided by integrity and our responsibility to improve human wellbeing.',
  },
]

const SIGNATURE = [
  {
    title: 'Formulation signature',
    text: 'Naturally-derived, high-bioavailability actives with distinct ingredient logic across every universe. Recognizable in the formula before the label is ever read.',
  },
  {
    title: 'Sensorial identity',
    text: 'Elevated formats — elixirs, ampoules, gelées and sachets. Never just another capsule on a shelf of capsules.',
  },
  {
    title: 'Visual language',
    text: 'Disciplined, modern, understated packaging across a multiverse of formats. Matte surfaces, structural forms, monochromatic palettes — no ornamentation, no noise.',
  },
  {
    title: 'Brand philosophy',
    text: 'A coherent worldview that treats the whole body as one connected system, not a shelf of unrelated SKUs. Many universes, one philosophy.',
  },
]

const ROADMAP = [
  {
    phase: 'Phase 01',
    title: 'Launch & Prove',
    text: 'The three-SKU founding trio goes live via D2C and premium wellness retail. Establish the formulation signature and the multiverse design language as the brand\u2019s primary defensibility.',
  },
  {
    phase: 'Phase 02',
    title: 'Expand the Multiverse',
    text: 'Introduce the AYUSH catalogue extension through a licensed third-party partner, and open the Somnus, Cortex and Terra universes — broadening reach without diluting the core line\u2019s regulatory clarity.',
  },
  {
    phase: 'Phase 03',
    title: 'Scale Distribution',
    text: 'Move from third-party manufacturing toward owned production capacity. Deepen ties with longevity clinics, premium fitness studios and functional-medicine practitioners.',
  },
]

export default function Philosophy() {
  return (
    <>
      {/* ——— Essay ——— */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Philosophy</div>
            <h2>Vedic Bio-Engineering</h2>
            <p>The formulation philosophy at the heart of Soma Evexia — and the reason the house exists at all.</p>
          </div>
          <div style={{ maxWidth: 760 }}>
            <p style={{ fontSize: 18, lineHeight: 1.9, marginBottom: 22 }}>
              Vedic Bio-Engineering combines clinically validated nutritional actives with time-tested
              Vedic botanical logic — processed and stabilized using modern extraction and
              bioavailability science.
            </p>
            <p style={{ color: 'var(--ink2)', lineHeight: 1.9, marginBottom: 22 }}>
              It is not a marketing veneer over traditional Ayurveda, nor a purely synthetic clinical
              line. It is a deliberate third category: classical principles of balance and restoration,
              re-engineered to meet the precision, stability and proof standards of modern nutritional
              science. Every formula must clear both bars — the wisdom of the tradition and the
              evidence of the laboratory — or it does not carry the name.
            </p>
            <p style={{ color: 'var(--ink2)', lineHeight: 1.9, marginBottom: 22 }}>
              The modern individual does not need another isolated bottle marketed as a miracle. They
              need an interconnected system — hydration that supports sleep, recovery that supports
              focus, cellular support that supports longevity. Soma Evexia translates that need into a
              credible, multiversal nutrition system built for the whole person, not one occasion.
            </p>
            <p className="serif" style={{ fontStyle: 'italic', fontSize: 20, lineHeight: 1.7, color: 'var(--accent-ink)' }}>
              A nutrition multiverse for people who treat their biology as a discipline.
            </p>
          </div>
        </div>
      </section>

      {/* ——— Pillars ——— */}
      <section className="block" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Positioning</div>
            <h2>Three pillars. No exceptions.</h2>
          </div>
          <div className="pillars">
            {PILLARS.map((p) => (
              <div key={p.title} className="pillar">
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Formulation signature ——— */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Defensibility</div>
            <h2>The formulation signature</h2>
            <p>
              Early defensibility will not come primarily from patents. It comes from a recognizable,
              difficult-to-copy product DNA — Soma Evexia becomes recognizable before the logo is even seen.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--line)', border: '1px solid var(--line)' }}>
            {SIGNATURE.map((s, i) => (
              <div key={s.title} style={{ background: 'var(--surface)', padding: '34px 30px' }}>
                <div style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--accent-ink)', marginBottom: 12, fontWeight: 500 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="serif" style={{ fontWeight: 500, fontSize: 20, marginBottom: 10 }}>{s.title}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--ink2)' }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Roadmap ——— */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">Roadmap</div>
            <h2>Sequenced deliberately</h2>
            <p>Credibility and formulation mastery first, multiverse expansion second, owned production only once the brand has earned the right.</p>
          </div>
          <div className="pillars">
            {ROADMAP.map((r) => (
              <div key={r.phase} className="pillar">
                <div style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--accent-ink)', marginBottom: 10, fontWeight: 500 }}>{r.phase}</div>
                <h4 style={{ fontStyle: 'normal' }}>{r.title}</h4>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Founder's promise ——— */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="notice" style={{ padding: '48px 52px', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>The Founder&apos;s Promise</div>
            <p className="serif" style={{ fontStyle: 'italic', fontSize: 'clamp(19px, 2.4vw, 25px)', lineHeight: 1.65, color: 'var(--ink)', marginBottom: 24 }}>
              &ldquo;As founders of Soma Evexia, we commit to building an institution that places trust
              above profit, science above trends, and people above everything else. Every decision we
              make shall be guided by integrity, innovation, and our responsibility to improve human
              wellbeing for generations to come.&rdquo;
            </p>
            <p style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink2)' }}>
              The Founding Board · Horizon 2035
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link className="btn btn-solid" to="/shop">Explore the Collection</Link>
          </div>
        </div>
      </section>
    </>
  )
}
