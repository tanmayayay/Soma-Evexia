import { Link } from 'react-router-dom'
import { UNIVERSES, PRODUCTS } from '../data/products.js'
import cellularHero from '../assets/cellular.webp'

const TRIO = PRODUCTS.filter((p) => p.badge === 'Founding Trio')

const STATS = [
  { value: '$6.1B', label: 'India nutraceuticals market, 2024' },
  { value: '11.4%', label: 'Projected CAGR to 2030' },
  { value: '6', label: 'Functional universes, one philosophy' },
  { value: '27', label: 'Formulations in the catalogue' },
]

const PILLARS = [
  { title: 'Trust Above Profit', text: 'Full disclosure of standardized actives and bioavailability. Zero synthetic fillers, zero compromised raw materials.' },
  { title: 'Science Above Trends', text: 'Guided by medical advisors and multi-tier lab validation. We formulate for measurable outcomes, never the trend cycle.' },
  { title: 'People Above Everything', text: 'An institution built for generations, not quarters. Every decision guided by integrity and responsibility to wellbeing.' },
]

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className="wrap">
        <div className="feature-row" style={{ paddingTop: 30 }}>
          <div>
            <div className="eyebrow">A Clinical Nutrition House · Est. MMXXVI</div>
            <h1 className="serif" style={{ fontWeight: 400, fontSize: 'clamp(38px, 5vw, 62px)', lineHeight: 1.08, letterSpacing: '-0.01em', marginBottom: 24 }}>
              A nutrition <em style={{ color: 'var(--accent-ink)' }}>multiverse</em> for people who treat their biology as a discipline.
            </h1>
            <p style={{ color: 'var(--ink2)', lineHeight: 1.8, fontSize: 16, maxWidth: '46ch', marginBottom: 34 }}>
              Hydration, recovery, cognition and cellular health — engineered as one coherent system. Vedic formulation philosophy, re-engineered to the precision of modern nutritional science.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link className="btn btn-solid" to="/difference">Why We&rsquo;re Different</Link>
              <Link className="btn btn-ghost" to="/science">Explore the Science</Link>
            </div>
          </div>
          <div className="fimg">
            <img src={cellularHero} alt="Soma Evexia cellular ritual" />
          </div>
        </div>
      </section>

      {/* ——— The idea ——— */}
      <section className="block" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>The Idea</div>
          <p className="serif" style={{ fontWeight: 400, fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.4, textAlign: 'center', marginBottom: 26 }}>
            The market sells isolated pills — one hero SKU, detached from everything else in a person&rsquo;s routine. No relationship between the morning capsule and the evening tonic. No system.
          </p>
          <p style={{ color: 'var(--ink2)', lineHeight: 1.85, fontSize: 16, textAlign: 'center', maxWidth: '62ch', margin: '0 auto 34px' }}>
            Sōma Evexia is the single house that treats the body as one interconnected system. Hydration that supports sleep. Recovery that supports focus. Cellular support that supports longevity. Each its own universe — all orbiting one formulation philosophy and one standard of proof.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link className="btn btn-ghost" to="/difference">Why We&rsquo;re Different</Link>
          </div>
        </div>
      </section>

      {/* ——— Universe strip ——— */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">The Nutrition Multiverse</div>
            <h2>Six universes. One formulation philosophy.</h2>
            <p>Not a shelf of disconnected bottles — each universe solves one dimension of human performance, all orbiting a single standard of proof.</p>
          </div>
          <div className="uni-grid">
            {UNIVERSES.map((u) => (
              <Link key={u.id} className="uni-card" to="/universes">
                <span className="glyph">{u.glyph}</span>
                <h3><span>{u.name}</span> · {u.title}</h3>
                <p>{u.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Founding ritual ——— */}
      <section className="block" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">The Founding Ritual</div>
            <h2>Reset. Recover. <em className="serif" style={{ color: 'var(--accent-ink)' }}>Optimize.</em></h2>
            <p>Three formulations — one from each of the most urgent universes. Not products to buy, but a daily sequence to live by: morning hydration, evening down-regulation, concentrated cellular support.</p>
          </div>
          <div className="product-grid">
            {TRIO.map((p) => (
              <Link key={p.id} className="product-card" to={`/product/${p.id}`}>
                <div className="pc-img"><img src={p.image} alt={p.name} /></div>
                <div className="pc-body">
                  <div className="pc-tag">{p.badge}</div>
                  <div className="pc-name">{p.name}</div>
                  <div className="pc-desc">{p.tagline}</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="btn btn-ghost" to="/ritual">Discover the Ritual</Link>
          </div>
        </div>
      </section>

      {/* ——— Science teaser ——— */}
      <section className="block">
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>The Science</div>
          <h2 className="serif" style={{ fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.2, textAlign: 'center', marginBottom: 22 }}>
            Vedic Bio-Engineering — classical principles of balance and restoration, re-engineered to the precision of modern nutritional science.
          </h2>
          <p style={{ color: 'var(--ink2)', lineHeight: 1.85, textAlign: 'center', maxWidth: '60ch', margin: '0 auto 34px' }}>
            Clinically validated actives. Standardized botanical extracts. Multi-tier lab validation on every batch. A deliberate third category — neither marketing veneer over tradition, nor a purely synthetic clinical line.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link className="btn btn-ghost" to="/science">Inside the Science</Link>
          </div>
        </div>
      </section>

      {/* ——— Partners teaser ——— */}
      <section className="block" style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '88px 0' }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'var(--bg)' }}>For Partners</div>
          <h2 className="serif" style={{ fontWeight: 400, fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.2, textAlign: 'center', marginBottom: 22 }}>
            For manufacturers, clinics and retail partners.
          </h2>
          <p style={{ lineHeight: 1.85, textAlign: 'center', maxWidth: '60ch', margin: '0 auto 34px', opacity: 0.75 }}>
            Sōma Evexia is built as an institution, not a label. We work with manufacturing partners on formulation and quality discipline, with longevity clinics and practitioners on evidence-first protocols, and with premium retail on considered placement. If you hold the same standard of proof, we should talk.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link className="btn" to="/partners" style={{ borderColor: 'var(--bg)', color: 'var(--bg)' }}>Partner With Us</Link>
          </div>
        </div>
      </section>

      {/* ——— Pillars ——— */}
      <section className="block">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">What We Stand On</div>
            <h2>Three pillars. No exceptions.</h2>
          </div>
          <div className="pillars">
            {PILLARS.map((pl) => (
              <div key={pl.title} className="pillar">
                <h4>{pl.title}</h4>
                <p>{pl.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Stats band ——— */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '64px 0' }}>
        <div className="wrap stats-grid">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="serif" style={{ fontSize: 'clamp(30px, 3.4vw, 44px)', fontWeight: 400, marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink2)', lineHeight: 1.6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Closing CTA ——— */}
      <section className="block">
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Begin</div>
          <h2 className="serif" style={{ fontWeight: 400, fontSize: 'clamp(30px, 3.6vw, 46px)', marginBottom: 18 }}>
            Treat your biology as a <em style={{ color: 'var(--accent-ink)' }}>discipline.</em>
          </h2>
          <p style={{ color: 'var(--ink2)', lineHeight: 1.8, marginBottom: 36 }}>
            Build your daily sequence across the founding universes — or start a conversation with the house.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn-solid" to="/ritual">Begin the Ritual</Link>
            <Link className="btn btn-ghost" to="/contact">Talk to Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
