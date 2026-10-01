import { useState } from 'react'
import {
  RITUAL_STEPS, RITUAL_DISCOUNT, productsByUniverse, getUniverse, getProduct, formatINR,
} from '../data/products.js'
import { useCart } from '../store/cart.jsx'

const STEP_COPY = {
  reset: 'Begin the day by replacing what the night and modern life deplete. One hydration formulation — the baseline every other ritual stands on.',
  recover: 'Close the day with intention. One evening formulation engineered for down-regulation and sleep architecture — recovery you can feel by morning.',
  optimize: 'The credibility core. One concentrated formulation for cellular health and cognitive composure — where the multiverse shows its teeth.',
}

export default function Ritual() {
  const { addItem } = useCart()
  const [sel, setSel] = useState({ reset: null, recover: null, optimize: null })

  const chosen = RITUAL_STEPS
    .map((s) => (sel[s.id] ? getProduct(sel[s.id]) : null))
    .filter(Boolean)

  const subtotal = chosen.reduce((n, p) => n + p.price, 0)
  const discount = Math.round(subtotal * RITUAL_DISCOUNT)
  const total = subtotal - discount
  const complete = chosen.length === RITUAL_STEPS.length

  const addRitual = () => {
    chosen.forEach((p) => addItem(p.id, 1))
  }

  return (
    <section className="block">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">The Ritual Builder</div>
          <h2>Reset → Recover → Optimize</h2>
          <p>
            A nutrition multiverse is not a shelf of bottles — it is a daily discipline.
            Choose one formulation for each of the three movements of the day and they
            work as a single system: hydration that supports sleep, recovery that
            supports focus, cellular support that supports longevity.
          </p>
        </div>

        {RITUAL_STEPS.map((step, i) => {
          const options = step.universes.flatMap(productsByUniverse)
          return (
            <div key={step.id} style={{ marginBottom: 60 }}>
              <div className="eyebrow">Step {i + 1} of {RITUAL_STEPS.length}</div>
              <h3 className="serif" style={{ fontWeight: 400, fontSize: 'clamp(24px, 2.8vw, 34px)', marginBottom: 10 }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--ink2)', fontWeight: 300, lineHeight: 1.75, maxWidth: '68ch', marginBottom: 26 }}>
                {STEP_COPY[step.id]}
              </p>
              <div className="product-grid" role="radiogroup" aria-label={`Choose a ${step.title} formulation`}>
                {options.map((p) => {
                  const active = sel[step.id] === p.id
                  const u = getUniverse(p.universe)
                  return (
                    <div
                      key={p.id}
                      className="product-card"
                      role="radio"
                      aria-checked={active}
                      tabIndex={0}
                      onClick={() => setSel({ ...sel, [step.id]: p.id })}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSel({ ...sel, [step.id]: p.id }) } }}
                      style={{
                        cursor: 'pointer',
                        borderColor: active ? 'var(--accent)' : undefined,
                        boxShadow: active ? 'var(--card-shadow)' : undefined,
                        transform: active ? 'translateY(-6px)' : undefined,
                      }}
                    >
                      <div className="pc-img"><img src={p.image} alt={p.name} /></div>
                      <div className="pc-body">
                        <div className="pc-tag">{u ? u.name : p.universe}</div>
                        <div className="pc-name">{p.name}</div>
                        <div className="pc-desc">{p.tagline}</div>
                        <div className="pc-row">
                          <div className="price">{formatINR(p.price)}<small>{p.unit}</small></div>
                          <span
                            style={{
                              fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500,
                              color: active ? 'var(--accent-ink)' : 'var(--ink2)',
                            }}
                          >
                            {active ? 'Selected' : 'Select'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}

        <div
          style={{
            background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 2,
            padding: '36px 34px', maxWidth: 640,
          }}
        >
          <div className="eyebrow">Your ritual</div>
          {chosen.length === 0 ? (
            <p style={{ color: 'var(--ink2)', fontWeight: 300, lineHeight: 1.7 }}>
              Select one formulation for each step above. Completing all three movements
              unlocks the ritual pricing.
            </p>
          ) : (
            <div>
              {RITUAL_STEPS.map((step) => {
                const p = sel[step.id] ? getProduct(sel[step.id]) : null
                return (
                  <div
                    key={step.id}
                    style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--line)', fontSize: 14 }}
                  >
                    <span style={{ color: 'var(--ink2)' }}>
                      <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{step.title}</strong>
                      {' — '}{p ? p.name : <em style={{ fontStyle: 'normal', opacity: 0.6 }}>not chosen yet</em>}
                    </span>
                    <span className="serif">{p ? formatINR(p.price) : '—'}</span>
                  </div>
                )
              })}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0 6px', fontSize: 14, color: 'var(--ink2)' }}>
                <span>Subtotal</span>
                <span className="serif" style={{ color: 'var(--ink)' }}>{formatINR(subtotal)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 14, color: 'var(--accent-ink)' }}>
                <span>Ritual discount ({Math.round(RITUAL_DISCOUNT * 100)}%)</span>
                <span className="serif">− {formatINR(discount)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0 22px', fontSize: 18 }}>
                <span style={{ fontWeight: 500 }}>Total</span>
                <span className="serif">{formatINR(total)}</span>
              </div>
              <button
                className="btn btn-solid"
                disabled={!complete}
                onClick={addRitual}
                style={{ opacity: complete ? 1 : 0.45, cursor: complete ? 'pointer' : 'not-allowed', width: '100%' }}
              >
                {complete ? 'Add ritual to cart' : 'Choose all three steps'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
