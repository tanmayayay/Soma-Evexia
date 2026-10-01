import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../store/cart.jsx'
import { formatINR } from '../data/products.js'

export default function Cart() {
  const { items, updateQty, removeItem, subtotal } = useCart()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <section className="block">
        <div className="wrap">
          <div className="eyebrow">Your Cart</div>
          <div className="sec-head">
            <h2>The cart is empty.</h2>
            <p>Begin with the Founding Trio — Reset, Recover, Optimize.</p>
          </div>
          <div className="notice" style={{ marginBottom: 30 }}>
            Your cart is currently empty. <strong>Continue shopping</strong> to explore the multiverse.
          </div>
          <Link to="/shop" className="btn btn-solid">Continue shopping</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="block">
      <div className="wrap">
        <div className="eyebrow">Your Cart</div>
        <div className="sec-head">
          <h2>Review your ritual.</h2>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Unit</th>
              <th>Quantity</th>
              <th style={{ textAlign: 'right' }}>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ id, qty, product }) => (
              <tr key={id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 2, display: 'block' }}
                  />
                </td>
                <td><strong style={{ fontWeight: 500 }}>{product.name}</strong></td>
                <td style={{ color: 'var(--ink2)' }}>{product.unit}</td>
                <td>
                  <span className="qty">
                    <button onClick={() => updateQty(id, qty - 1)} aria-label="Decrease quantity">−</button>
                    <span>{qty}</span>
                    <button onClick={() => updateQty(id, qty + 1)} aria-label="Increase quantity">+</button>
                  </span>
                </td>
                <td style={{ textAlign: 'right', fontWeight: 500 }}>{formatINR(product.price * qty)}</td>
                <td style={{ textAlign: 'right' }}>
                  <button onClick={() => removeItem(id)} className="btn btn-ghost" style={{ padding: '8px 14px' }}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 30 }}>
          <div style={{ minWidth: 320, maxWidth: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--line)' }}>
              <span style={{ color: 'var(--ink2)' }}>Subtotal</span>
              <strong style={{ fontWeight: 500 }}>{formatINR(subtotal)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid var(--line)' }}>
              <span style={{ color: 'var(--ink2)' }}>Shipping</span>
              <span>Free</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0' }}>
              <span className="serif" style={{ fontSize: 18 }}>Total</span>
              <span className="serif" style={{ fontSize: 20 }}>{formatINR(subtotal)}</span>
            </div>
            <button onClick={() => navigate('/checkout')} className="btn btn-solid" style={{ width: '100%', marginTop: 8 }}>
              Proceed to checkout
            </button>
            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <Link to="/shop" style={{ fontSize: 13, color: 'var(--ink2)', letterSpacing: '0.08em' }}>
                or continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
