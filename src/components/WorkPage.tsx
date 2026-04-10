'use client'
import { useState } from 'react'
import { SiteData, Work } from '@/lib/types'

interface WorkPageProps {
  data: SiteData
  onOpenWork: (work: Work) => void
}

const FILTERS = ['All', 'Motion', 'Visual Design', 'Strategy', 'Web / Tool']

export default function WorkPage({ data, onOpenWork }: WorkPageProps) {
  const [active, setActive] = useState('All')

  const filtered = (arr: Work[]) =>
    active === 'All' ? arr : arr.filter(w => w.category === active)

  const featured = filtered(data.works.filter(w => w.featured))
  const nonFeatured = filtered(data.works.filter(w => !w.featured))

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* Header */}
      <div style={{ padding: '4rem 2.5rem 2rem', maxWidth: 1200, margin: '0 auto', borderBottom: '1px solid var(--line)' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(3rem,6vw,5rem)', marginBottom: '1rem',
        }}>Work</h1>
        <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 500 }}>
          Projects, campaigns, systems, and visual work — from motion to strategy.
        </p>
      </div>

      {/* Filter */}
      <div style={{
        display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
        padding: '1.5rem 2.5rem', maxWidth: 1200, margin: '0 auto',
        borderBottom: '1px solid var(--line)',
      }}>
        {FILTERS.map(f => (
          <button key={f} onClick={() => setActive(f)} style={{
            padding: '7px 16px',
            border: '1px solid ' + (active === f ? 'var(--accent)' : 'var(--faint)'),
            borderRadius: 2, fontSize: 12, letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: active === f ? '#0a0a0a' : 'var(--muted)',
            background: active === f ? 'var(--accent)' : 'none',
            cursor: 'pointer', transition: 'all 0.2s',
          }}>{f}</button>
        ))}
      </div>

      {/* Featured works */}
      {featured.length > 0 && (
        <>
          <SectionLabel>Featured Work</SectionLabel>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 1, background: 'var(--line)',
            maxWidth: 1200, margin: '0 auto', padding: '0 2.5rem',
          }}>
            {featured.map(w => (
              <button
                key={w.id}
                onClick={() => onOpenWork(w)}
                style={{
                  background: 'var(--bg)', padding: '2rem', cursor: 'pointer',
                  textAlign: 'left', border: 'none', transition: 'background 0.2s',
                }}
                className="work-card-featured"
              >
                <div style={{
                  width: '100%', aspectRatio: '16/9', background: 'var(--bg3)',
                  borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2.5rem', fontFamily: 'var(--font-display)', fontWeight: 700,
                  color: 'var(--faint)', marginBottom: '1.25rem', position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute', top: 10, right: 10, fontSize: 9,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    padding: '4px 8px', background: 'rgba(200,169,110,0.9)',
                    color: '#0a0a0a', fontWeight: 700, borderRadius: 2,
                  }}>Featured</span>
                  {w.emoji}
                </div>
                <div style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.4rem' }}>{w.category}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, marginBottom: '0.5rem' }}>{w.title}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{w.shortDesc}</div>
                {w.tools && w.tools.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: '1rem' }}>
                    {w.tools.map((t, i) => (
                      <span key={i} style={{
                        fontSize: 10, padding: '3px 8px',
                        border: '1px solid var(--faint)', borderRadius: 2,
                        color: 'var(--muted)', letterSpacing: '0.05em',
                      }}>{t}</span>
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Non-featured works */}
      {nonFeatured.length > 0 && (
        <>
          <SectionLabel style={{ marginTop: '2rem' }}>Other Work</SectionLabel>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem', maxWidth: 1200, margin: '0 auto',
            padding: '0 2.5rem 4rem',
          }}>
            {nonFeatured.map(w => (
              <div key={w.id} style={{
                background: 'var(--bg2)', border: '1px solid var(--line)',
                borderRadius: 4, overflow: 'hidden',
              }}
                className="work-card-small"
              >
                <div style={{
                  aspectRatio: '4/3', background: 'var(--bg3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.8rem', fontFamily: 'var(--font-display)',
                  fontWeight: 700, color: 'var(--faint)',
                }}>{w.emoji}</div>
                <div style={{ padding: '1rem' }}>
                  <div style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.3rem' }}>{w.category}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500, marginBottom: '0.3rem' }}>{w.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{w.shortDesc}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <style>{`
        .work-card-featured:hover { background: var(--bg2) !important; }
        .work-card-small { transition: border-color 0.2s, transform 0.2s; }
        .work-card-small:hover { border-color: var(--faint) !important; transform: translateY(-2px); }
      `}</style>
    </div>
  )
}

function SectionLabel({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      padding: '2rem 2.5rem 1rem', maxWidth: 1200, margin: '0 auto',
      fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
      color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '1rem',
      ...style,
    }}>
      {children}
      <span style={{ flex: 1, height: 1, background: 'var(--line)', display: 'block' }} />
    </div>
  )
}
