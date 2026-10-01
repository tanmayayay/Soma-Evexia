import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatINR } from '../data/products.js'

function loadOrders() {
  try {
    const raw = localStorage.getItem('soma-orders')
    const arr = raw ? JSON.parse(raw) : []
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

const fmtDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch {
    return iso
  }
}

export default function Account() {
  const [orders] = useState(loadOrders)

  return (
    <section className="block">
      <div className="wrap">
        <div className="eyebrow">Account</div>
        <div className="sec-head">
          <h2>Your orders.</h2>
          <p>A record of every ritual you have begun with us.</p>
        </div>

        {orders.length === 0 ? (
          <>
            <div className="notice" style={{ marginBottom: 30 }}>
              You have not placed any orders yet. <strong>Begin with the Founding Trio</strong> — Reset, Recover, Optimize.
            </div>
            <Link to="/shop" className="btn btn-solid">Explore the shop</Link>
          </>
        ) : (
          <div style={{ display: 'grid', gap: 24, maxWidth: 860 }}>
            {orders.map((o) => (
              <article key={o.id} style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 2, padding: '28px 30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 18 }}>
                  <div>
                    <div className="serif" style={{ fontSize: 20 }}>{o.id}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink2)', marginTop: 4 }}>
                      {fmtDate(o.date)} · {o.name} · {o.method}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
                      border: '1px solid var(--accent)', color: 'var(--accent-ink)',
                      padding: '8px 16px', borderRadius: 999,
                    }}
                  >
                    Confirmed
                  </span>
                </div>
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: 16 }}>
                  {(o.items || []).map((i) => (
                    <div key={i.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, padding: '6px 0' }}>
                      <span style={{ color: 'var(--ink2)' }}>{i.qty} × {i.name}</span>
                      <span>{formatINR(i.price * i.qty)}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--line)', marginTop: 12, paddingTop: 14 }}>
                  <span className="serif" style={{ fontSize: 16 }}>Total</span>
                  <span className="serif" style={{ fontSize: 18 }}>{formatINR(o.total)}</span>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="notice" style={{ marginTop: 48, maxWidth: 860 }}>
          <strong>Sign in</strong> — full accounts with order history across devices arrive with Supabase. For now, orders are kept on this device only.
        </div>
      </div>
    </section>
  )
}
