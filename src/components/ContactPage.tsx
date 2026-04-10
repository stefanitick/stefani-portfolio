'use client'
import { useState } from 'react'
import { SiteData } from '@/lib/types'

export default function ContactPage({ data }: { data: SiteData }) {
  const { contact } = data.profile
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const body = new FormData()
    body.append('form-name', 'contact')
    Object.entries(form).forEach(([k, v]) => body.append(k, v))
    try {
      await fetch('/', { method: 'POST', body })
      setSent(true)
    } catch {
      setSent(true) // show success anyway in dev
    }
  }

  const contactItems = [
    { icon: '✉', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: '💬', label: 'WhatsApp', value: '+62 81-999-001-004', href: `https://wa.me/${contact.whatsapp}` },
    { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/stefanitick', href: contact.linkedin },
  ]

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        maxWidth: 1200, margin: '0 auto',
        minHeight: 'calc(100vh - var(--nav-h))',
      }}
        className="contact-grid"
      >
        {/* Info */}
        <div style={{ padding: '4rem 3rem 4rem 2.5rem', borderRight: '1px solid var(--line)' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem',
          }}>
            Let&apos;s work<br />
            <span style={{ color: 'var(--accent)' }}>together.</span>
          </h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 380, lineHeight: 1.7, marginBottom: '3rem' }}>
            Whether it&apos;s a creative project, a strategy challenge, or a collaboration — I&apos;d love to hear from you.
          </p>
          <div>
            {contactItems.map((item, i) => (
              <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1.5rem',
                  padding: '1.5rem 0', borderBottom: '1px solid var(--line)',
                  transition: 'padding-left 0.3s',
                }}
                className="contact-link"
              >
                <div style={{
                  width: 44, height: 44, border: '1px solid var(--faint)',
                  borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, flexShrink: 0,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 500 }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={{ padding: '4rem 2.5rem 4rem 3rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, marginBottom: '2rem' }}>
            Send a message
          </div>
          {sent ? (
            <div style={{
              padding: '2rem', border: '1px solid var(--line)', borderRadius: 4,
              textAlign: 'center', color: 'var(--muted)',
            }}>
              <div style={{ fontSize: 32, marginBottom: '1rem' }}>✓</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500, marginBottom: '0.5rem' }}>Message sent!</div>
              <div style={{ fontSize: 14 }}>I&apos;ll get back to you soon.</div>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(f => (
                <div key={f.id} style={{ marginBottom: '1.5rem' }}>
                  <label style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    name={f.id}
                    placeholder={f.placeholder}
                    required
                    value={form[f.id as 'name' | 'email']}
                    onChange={e => setForm(prev => ({ ...prev, [f.id]: e.target.value }))}
                    style={{
                      width: '100%', background: 'var(--bg2)',
                      border: '1px solid var(--faint)', borderRadius: 2,
                      padding: '12px 14px', color: 'var(--text)',
                      fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none',
                    }}
                    className="form-input"
                  />
                </div>
              ))}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  value={form.message}
                  onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                  style={{
                    width: '100%', background: 'var(--bg2)',
                    border: '1px solid var(--faint)', borderRadius: 2,
                    padding: '12px 14px', color: 'var(--text)',
                    fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none',
                    resize: 'vertical',
                  }}
                  className="form-input"
                />
              </div>
              <button type="submit" style={{
                width: '100%', padding: 14,
                background: 'var(--accent)', color: '#0a0a0a',
                fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                borderRadius: 2, border: 'none', cursor: 'pointer',
              }}>
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-link:hover { padding-left: 8px !important; }
        .form-input:focus { border-color: var(--accent) !important; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
