import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../store/cart.jsx'
import { formatINR } from '../data/products.js'

const METHODS = [
  { id: 'razorpay', label: 'Razorpay (test mode)', hint: 'Pay online with UPI, cards or netbanking. Test keys only — no real charge is made.' },
  { id: 'cod', label: 'Cash on Delivery', hint: 'Pay in cash or UPI when your order arrives at your door.' },
  { id: 'upi', label: 'UPI Direct', hint: 'Pay directly to our UPI id, shared with you on order confirmation.' },
  { id: 'whatsapp', label: 'WhatsApp Order', hint: 'We message you on WhatsApp to confirm the order and collect payment.' },
]

const NEXT_STEP = {
  razorpay: 'test key required — see docs/PAYMENTS.md before going live',
  cod: 'keep the amount ready — pay on delivery',
  upi: 'our UPI id will be shared on your confirmation message',
  whatsapp: "we'll message your order details on WhatsApp shortly",
}

const FIELDS = [
  { key: 'name', label: 'Full name', type: 'text', placeholder: 'Your full name' },
  { key: 'phone', label: 'Phone', type: 'tel', placeholder: '10-digit mobile number' },
  { key: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
  { key: 'address', label: 'Address', type: 'text', placeholder: 'Flat, street, landmark' },
  { key: 'city', label: 'City', type: 'text', placeholder: 'City' },
  { key: 'pincode', label: 'Pincode', type: 'text', placeholder: '6-digit pincode' },
]

export default function Checkout() {
  const { items, subtotal, clear } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', city: '', pincode: '' })
  const [method, setMethod] = useState('razorpay')
  const [error, setError] = useState('')
  const [order, setOrder] = useState(null)

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setError('')
  }

  const placeOrder = () => {
    const missing = FIELDS.filter((f) => !form[f.key].trim())
    if (missing.length > 0) {
      setError('Please complete all fields: ' + missing.map((f) => f.label).join(', ') + '.')
      return
    }
    const newOrder = {
      id: 'SE-' + Date.now().toString(36).toUpperCase(),
      date: new Date().toISOString(),
      items: items.map(({ id, qty, product }) => ({ id, name: product.name, qty, price: product.price })),
      total: subtotal,
      name: form.name.trim(),
      method,
    }
    try {
      const raw = localStorage.getItem('soma-orders')
      const prev = raw ? JSON.parse(raw) : []
      localStorage.setItem('soma-orders', JSON.stringify([newOrder, ...(Array.isArray(prev) ? prev : [])]))
    } catch {}
    clear()
    setOrder(newOrder)
    window.scrollTo(0, 0)
  }

  if (order) {
    const methodLabel = METHODS.find((m) => m.id === order.method)?.label || order.method
    return (
      <section className="block">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <div className="eyebrow">Order Confirmed</div>
          <h2 className="serif" style={{ fontSize: 42, fontWeight: 400, marginBottom: 18 }}>
            Thank you, {order.name.split(' ')[0]}.
          </h2>
          <p style={{ color: 'var(--ink2)', lineHeight: 1.8, marginBottom: 28 }}>
            Your ritual is being prepared. Order <strong style={{ color: 'var(--ink)' }}>{order.id}</strong> —{' '}
            {order.items.reduce((s, i) => s + i.qty, 0)} items, {formatINR(order.total)} via {methodLabel}.
          </p>
          <div className="notice" style={{ marginBottom: 30 }}>
            <strong>Next step:</strong> {NEXT_STEP[order.method]}.
          </div>
          <button onClick={() => navigate('/account')} className="btn btn-solid">
            View my orders
          </button>
        </div>
      </section>
    )
  }

  if (items.length === 0) {
    return (
      <section className="block">
        <div className="wrap">
          <div className="eyebrow">Checkout</div>
          <div className="notice" style={{ marginBottom: 30 }}>
            There is nothing to check out — your cart is empty.
          </div>
          <Link to="/shop" className="btn btn-solid">Continue shopping</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="block">
      <div className="wrap">
        <div className="eyebrow">Checkout</div>
        <div className="sec-head">
          <h2>Complete your order.</h2>
        </div>

        <style>{`@media (max-width: 900px) { .co-grid { grid-template-columns: 1fr !important; } }`}</style>
        <div className="co-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'start' }}>

          <div>
            {error && (
              <div className="notice" style={{ marginBottom: 24, borderColor: '#b3554d' }}>
                {error}
              </div>
            )}
            {FIELDS.map((f) => (
              <div className="field" key={f.key}>
                <label htmlFor={'co-' + f.key}>{f.label}</label>
                <input
                  id={'co-' + f.key}
                  className="input"
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key]}
                  onChange={set(f.key)}
                />
              </div>
            ))}

            <h3 className="serif" style={{ fontSize: 24, fontWeight: 500, margin: '36px 0 20px' }}>
              Payment method
            </h3>
            <div style={{ border: '1px solid var(--line)', borderRadius: 2 }}>
              {METHODS.map((m, i) => (
                <label
                  key={m.id}
                  style={{
                    display: 'flex', gap: 14, padding: '18px 20px',
                    borderBottom: i < METHODS.length - 1 ? '1px solid var(--line)' : 'none',
                    cursor: 'pointer', alignItems: 'flex-start',
                    background: method === m.id ? 'var(--bg2)' : 'transparent',
                  }}
                >
                  <input
                    type="radio"
                    name="pay-method"
                    checked={method === m.id}
                    onChange={() => setMethod(m.id)}
                    style={{ marginTop: 4, accentColor: 'var(--accent)' }}
                  />
                  <span>
                    <span style={{ display: 'block', fontWeight: 500, fontSize: 15 }}>{m.label}</span>
                    <span style={{ display: 'block', fontSize: 13, color: 'var(--ink2)', marginTop: 4, lineHeight: 1.6 }}>{m.hint}</span>
                  </span>
                </label>
              ))}
            </div>

            <button onClick={placeOrder} className="btn btn-accent" style={{ width: '100%', marginTop: 30 }}>
              Place order · {formatINR(subtotal)}
            </button>
          </div>

          <aside style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 2, padding: '30px 28px' }}>
            <h3 className="serif" style={{ fontSize: 22, fontWeight: 500, marginBottom: 20 }}>Order summary</h3>
            {items.map(({ id, qty, product }) => (
              <div key={id} style={{ display: 'flex', gap: 14, marginBottom: 18, alignItems: 'center' }}>
                <img src={product.image} alt={product.name} style={{ width: 52, height: 52, objectFit: 'cover', borderRadius: 2 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{product.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink2)' }}>Qty {qty} · {product.unit}</div>
                </div>
                <div style={{ fontSize: 14 }}>{formatINR(product.price * qty)}</div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--line)', marginTop: 20, paddingTop: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--ink2)', marginBottom: 8 }}>
                <span>Subtotal</span><span>{formatINR(subtotal)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--ink2)', marginBottom: 12 }}>
                <span>Shipping</span><span>Free</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="serif" style={{ fontSize: 17 }}>Total</span>
                <span className="serif" style={{ fontSize: 19 }}>{formatINR(subtotal)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
