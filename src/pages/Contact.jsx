import { useState } from 'react'

const TOPICS = [
  'General enquiry',
  'Manufacturing partnership',
  'Ingredient supply',
  'Distribution & retail',
  'Press',
  'Careers',
]

const CARDS = [
  {
    title: 'Partnership Enquiries',
    body: 'Manufacturers, ingredient suppliers, clinics, distributors and retailers — introduce your facility, catalogue or footprint via the form.',
  },
  {
    title: 'Press',
    body: 'Editorial features and media enquiries. Share your outlet, deadline and angle via the form.',
  },
  {
    title: 'General',
    body: 'Questions about the house, the multiverse or a formulation. We read everything.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete your name, email and message before sending.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      setError('That email address does not look complete — please check it.')
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <section className="block">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Contact</div>
          <h2>Talk to the house.</h2>
          <p>
            Manufacturers, vendors, practitioners, press and customers — one door.
            Tell us who you are and what brings you; the right team will take it from there.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56 }} className="contact-grid">
          <div>
            {sent ? (
              <div className="notice">
                <strong>Received.</strong> Thank you — your enquiry is with the right team.
                We respond within two business days.
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="field">
                  <label htmlFor="ct-name">Full name</label>
                  <input id="ct-name" className="input" value={form.name} onChange={set('name')} placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="ct-email">Email</label>
                  <input id="ct-email" className="input" type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" />
                </div>
                <div className="field">
                  <label htmlFor="ct-topic">Topic</label>
                  <select id="ct-topic" className="select" value={form.topic} onChange={set('topic')}>
                    {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="ct-message">Message</label>
                  <textarea id="ct-message" className="input" rows={6} value={form.message} onChange={set('message')}
                    placeholder="What do you make, where do you operate, or what would you like to know?" />
                </div>
                {error && <p style={{ color: '#a33f2e', fontSize: 14, marginBottom: 16 }}>{error}</p>}
                <button type="submit" className="btn btn-solid">Send Enquiry</button>
              </form>
            )}
          </div>

          <div>
            {CARDS.map((c) => (
              <div key={c.title} style={{ borderTop: '1px solid var(--accent)', paddingTop: 22, marginBottom: 34 }}>
                <h4 className="serif" style={{ fontWeight: 500, fontSize: 20, marginBottom: 10 }}>{c.title}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--ink2)' }}>{c.body}</p>
              </div>
            ))}
            <div className="notice" style={{ marginTop: 8 }}>
              <strong>Corporate office</strong> — shared on enquiry, once we know the nature of your visit.
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
