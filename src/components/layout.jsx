import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../store/cart.jsx'
import { formatINR, UNIVERSES } from '../data/products.js'

export function Header({ onCartOpen }) {
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const close = () => setOpen(false)
  const links = [
    ['/difference', 'Difference'],
    ['/universes', 'Universes'],
    ['/science', 'Science'],
    ['/partners', 'Partners'],
    ['/contact', 'Contact'],
  ]
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="wordmark" onClick={close}>SŌMA <span>EVEXIA</span></Link>
        <nav className={'main-nav' + (open ? ' open' : '')}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={close}
              className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button className="cart-btn" onClick={onCartOpen} aria-label="Open cart">
            Cart <span className="cart-count">{count}</span>
          </button>
          <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link to="/" className="wordmark">SŌMA <span>EVEXIA</span></Link>
          <p style={{ marginTop: 18 }}>
            A luxury clinical nutrition house. A nutrition multiverse for people who
            treat their biology as a discipline — hydration, recovery, cognition and
            cellular health, engineered as one coherent system.
          </p>
        </div>
        <div>
          <h5>Universes</h5>
          {UNIVERSES.map((u) => (
            <Link key={u.id} to={`/shop?u=${u.id}`}>{u.name} · {u.title}</Link>
          ))}
        </div>
        <div>
          <h5>House</h5>
          <Link to="/difference">Why we're different</Link>
          <Link to="/science">The science</Link>
          <Link to="/philosophy">Philosophy</Link>
          <Link to="/partners">Partner with us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h5>Formulations</h5>
          <Link to="/shop">All formulations</Link>
          <Link to="/ritual">Build your ritual</Link>
          <Link to="/account">Account</Link>
        </div>
      </div>
      <div className="footer-base">
        <p>© 2026 Sōma Evexia. Concept build · indicative pricing.</p>
        <p>Trust above profit · Science above trends · People above everything</p>
      </div>
    </footer>
  )
}

export function CartDrawer({ open, onClose }) {
  const { items, updateQty, removeItem, subtotal } = useCart()
  const navigate = useNavigate()
  const goCheckout = () => { onClose(); navigate('/checkout') }
  return (
    <>
      <div className={'drawer-overlay' + (open ? ' open' : '')} onClick={onClose} />
      <aside className={'cart-drawer' + (open ? ' open' : '')} aria-hidden={!open}>
        <div className="drawer-head">
          <h3>Your Ritual</h3>
          <button className="drawer-close" onClick={onClose} aria-label="Close cart">✕</button>
        </div>
        <div className="drawer-body">
          {items.length === 0 && (
            <div className="drawer-empty">
              <p className="serif" style={{ fontSize: 20, marginBottom: 10 }}>Your ritual is empty.</p>
              <p style={{ fontSize: 14 }}>Begin with the Founding Trio — Reset, Recover, Optimize.</p>
            </div>
          )}
          {items.map(({ product, qty }) => (
            <div className="drawer-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="di-info">
                <div className="di-name">{product.name}</div>
                <div className="di-unit">{product.unit} · {formatINR(product.price)}</div>
                <div className="di-row">
                  <span className="qty">
                    <button onClick={() => updateQty(product.id, qty - 1)} aria-label="Decrease">−</button>
                    <span>{qty}</span>
                    <button onClick={() => updateQty(product.id, qty + 1)} aria-label="Increase">+</button>
                  </span>
                  <button onClick={() => removeItem(product.id)}
                    style={{ border: 0, background: 'none', color: 'var(--ink2)', cursor: 'pointer', fontSize: 13 }}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="drawer-foot">
            <div className="drawer-total"><span>Subtotal</span><strong>{formatINR(subtotal)}</strong></div>
            <button className="btn btn-solid" style={{ width: '100%' }} onClick={goCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
