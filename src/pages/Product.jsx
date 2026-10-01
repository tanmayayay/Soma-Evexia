import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  getProduct, getUniverse, productsByUniverse, RITUAL_STEPS, formatINR,
} from '../data/products.js'
import { useCart } from '../store/cart.jsx'

export default function Product() {
  const { id } = useParams()
  const p = getProduct(id)
  const { addItem } = useCart()
  const [qty, setQty] = useState(1)

  useEffect(() => {
    setQty(1)
    window.scrollTo(0, 0)
  }, [id])

  if (!p) {
    return (
      <section className="block">
        <div className="wrap">
          <div className="notice">
            <strong>This formulation does not exist.</strong>
            <br />
            It may have been moved to another universe. <Link to="/shop">Return to the shop</Link>.
          </div>
        </div>
      </section>
    )
  }

  const u = getUniverse(p.universe)
  const step = RITUAL_STEPS.find((s) => s.universes.includes(p.universe))
  const related = productsByUniverse(p.universe).filter((x) => x.id !== p.id).slice(0, 3)

  return (
    <section className="block">
      <div className="wrap">
        <div className="feature-row">
          <div className="fimg"><img src={p.image} alt={p.name} /></div>
          <div>
            {p.badge && <div className="eyebrow">{p.badge}</div>}
            <div className="pc-tag">{u ? `${u.name} · ${u.title}` : p.universe}</div>
            <h1
              className="serif"
              style={{ fontWeight: 400, fontSize: 'clamp(30px, 3.6vw, 46px)', lineHeight: 1.12, margin: '10px 0 16px' }}
            >
              {p.name}
            </h1>
            <div className="price" style={{ fontSize: 26 }}>
              {formatINR(p.price)}<small>{p.unit}</small>
            </div>
            <p style={{ color: 'var(--ink2)', lineHeight: 1.8, fontWeight: 300, margin: '20px 0 28px' }}>
              {p.description}
            </p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              <div className="qty">
                <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)} aria-label="Increase quantity">+</button>
              </div>
              <button className="btn btn-solid" onClick={() => addItem(p.id, qty)}>
                Add to cart
              </button>
            </div>
            <table className="table" style={{ marginTop: 36 }}>
              <tbody>
                <tr>
                  <th style={{ width: 150 }}>Universe</th>
                  <td>{u ? `${u.name} — ${u.title}` : p.universe}</td>
                </tr>
                <tr>
                  <th>Format</th>
                  <td>{p.unit}</td>
                </tr>
                <tr>
                  <th>Ritual step</th>
                  <td>{step ? step.title : '—'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: 64 }}>
            <div className="sec-head">
              <div className="eyebrow">Pairs well with</div>
              <h2>More from {u ? u.name : 'this universe'}</h2>
            </div>
            <div className="product-grid">
              {related.map((r) => (
                <Link key={r.id} to={`/product/${r.id}`} className="product-card">
                  <div className="pc-img"><img src={r.image} alt={r.name} /></div>
                  <div className="pc-body">
                    <div className="pc-tag">{u ? u.name : r.universe}</div>
                    <div className="pc-name">{r.name}</div>
                    <div className="pc-desc">{r.tagline}</div>
                    <div className="pc-row">
                      <div className="price">{formatINR(r.price)}<small>{r.unit}</small></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
