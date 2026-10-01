import { Link } from 'react-router-dom'
import { UNIVERSES } from '../data/products.js'

export default function Universes() {
  return (
    <section className="block">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">The Multiverse</div>
          <h2>Six universes. One formulation philosophy.</h2>
          <p>
            Soma Evexia is not a single product line — it is a multiverse: a set of distinct functional
            universes, each solving one dimension of human performance, all built on the same
            formulation philosophy and the same standard of proof.
          </p>
        </div>

        {UNIVERSES.map((u, i) => (
          <div key={u.id} className={`feature-row${i % 2 === 1 ? ' flip' : ''}`}>
            <div>
              <div className="eyebrow">Universe {String(i + 1).padStart(2, '0')}</div>
              <h3>{u.name} · {u.title}</h3>
              <p className="serif" style={{ fontStyle: 'italic', fontSize: 19, color: 'var(--accent-ink)', marginBottom: 18 }}>
                {u.tagline}
              </p>
              <p>{u.description}</p>
              <Link className="btn btn-ghost" to={`/shop?u=${u.id}`}>Shop {u.name}</Link>
            </div>
            <div className="fimg">
              <img src={u.image} alt={`${u.name} — ${u.title}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
