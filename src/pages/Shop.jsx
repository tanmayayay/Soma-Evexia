import { Link, useSearchParams } from 'react-router-dom'
import { PRODUCTS, UNIVERSES, formatINR, getUniverse } from '../data/products.js'
import { useCart } from '../store/cart.jsx'

function ProductCard({ p }) {
  const { addItem } = useCart()
  const u = getUniverse(p.universe)
  return (
    <Link to={`/product/${p.id}`} className="product-card">
      <div className="pc-img"><img src={p.image} alt={p.name} /></div>
      <div className="pc-body">
        <div className="pc-tag">{u ? u.name : p.universe}</div>
        <div className="pc-name">{p.name}</div>
        <div className="pc-desc">{p.tagline}</div>
        <div className="pc-row">
          <div className="price">{formatINR(p.price)}<small>{p.unit}</small></div>
          <button
            className="btn btn-ghost"
            style={{ padding: '10px 22px' }}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(p.id) }}
            aria-label={`Add ${p.name} to cart`}
          >
            Add
          </button>
        </div>
      </div>
    </Link>
  )
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const active = searchParams.get('u') || 'all'

  const list = active === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.universe === active)

  const setFilter = (id) => {
    if (id === 'all') setSearchParams({})
    else setSearchParams({ u: id })
  }

  return (
    <section className="block">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">The Catalogue</div>
          <h2>Shop by universe</h2>
          <p>
            Every formulation belongs to a universe — a dimension of one coherent
            system. Filter to explore a single universe, or browse the full multiverse.
          </p>
        </div>

        <div className="pills">
          <button
            className={active === 'all' ? 'pill active' : 'pill'}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          {UNIVERSES.map((u) => (
            <button
              key={u.id}
              className={active === u.id ? 'pill active' : 'pill'}
              onClick={() => setFilter(u.id)}
            >
              {u.name}
            </button>
          ))}
        </div>

        <p style={{ fontSize: 13, letterSpacing: '0.1em', color: 'var(--ink2)', marginBottom: 26 }}>
          {list.length} formulation{list.length === 1 ? '' : 's'}
        </p>

        {list.length === 0 ? (
          <div className="notice">
            <strong>No formulations in this universe yet.</strong>
            <br />
            <Link to="/shop">Browse the full catalogue</Link>.
          </div>
        ) : (
          <div className="product-grid">
            {list.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        )}
      </div>
    </section>
  )
}
