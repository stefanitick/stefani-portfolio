'use client'
import Image from 'next/image'
import { SiteData, Work } from '@/lib/types'

interface HomePageProps {
  data: SiteData
  onNavigate: (page: 'work' | 'contact') => void
  onOpenWork: (work: Work) => void
}

export default function HomePage({ data, onNavigate, onOpenWork }: HomePageProps) {
  const featured = data.works.filter(w => w.featured).slice(0, 4)

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: 'calc(100vh - var(--nav-h))',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '6rem 2.5rem 4rem',
        gap: '4rem',
        maxWidth: 1200,
        margin: '0 auto',
      }}>
        <div>
          <div style={{
            fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--accent)', marginBottom: '1.5rem',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ display: 'block', width: 32, height: 1, background: 'var(--accent)' }} />
            Surabaya, Indonesia
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}>
            Stefani<br />
            <span style={{ color: 'var(--accent)' }}>Tick.</span>
          </h1>

          <p style={{
            fontSize: 16, color: 'var(--muted)', fontWeight: 300,
            maxWidth: 400, lineHeight: 1.7, marginBottom: '2.5rem',
          }}>
            Motion Designer turned Creative &amp; Marketing Strategist — turning complex ideas into clear, moving stories.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate('work')} style={{
              padding: '12px 28px',
              background: 'var(--accent)', color: '#0a0a0a',
              fontFamily: 'var(--font-display)', fontWeight: 600,
              fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase',
              borderRadius: 2, border: 'none', cursor: 'pointer',
            }}>
              View Work
            </button>
            <button onClick={() => onNavigate('contact')} style={{
              padding: '12px 28px',
              border: '1px solid var(--faint)', color: 'var(--muted)',
              fontSize: 13, letterSpacing: '0.05em', textTransform: 'uppercase',
              borderRadius: 2, background: 'none', cursor: 'pointer',
            }}>
              Get in Touch
            </button>
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 360, height: 420, position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -2,
              border: '1px solid var(--accent)',
              borderRadius: 4, opacity: 0.4,
              transform: 'translate(8px, 8px)',
            }} />
            <Image
              src={data.profile.photo}
              alt={data.profile.name}
              fill
              style={{ objectFit: 'cover', objectPosition: 'top', borderRadius: 4, filter: 'grayscale(15%)' }}
              priority
            />
            <div style={{
              position: 'absolute', bottom: -20, left: -20,
              background: 'var(--bg2)', border: '1px solid var(--line)',
              padding: '16px 20px', borderRadius: 4,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, color: 'var(--accent)' }}>9+</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section style={{
        padding: '5rem 2.5rem',
        borderTop: '1px solid var(--line)',
        maxWidth: 1200, margin: '0 auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '3rem' }}>
          <span style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>01 /</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 300, fontStyle: 'italic' }}>
            Expertise
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 1,
          border: '1px solid var(--line)',
        }}>
          {data.expertise.map((e, i) => (
            <div key={i} style={{
              padding: '2rem 1.5rem',
              borderRight: '1px solid var(--line)',
              background: 'var(--bg)',
              position: 'relative',
              overflow: 'hidden',
            }}
              className="expertise-card"
            >
              <div style={{ fontSize: 28, marginBottom: '1rem', lineHeight: 1 }}>{e.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, marginBottom: '0.5rem' }}>{e.name}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{e.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section style={{ padding: '5rem 2.5rem', borderTop: '1px solid var(--line)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '3rem', maxWidth: 1200, margin: '0 auto 3rem' }}>
          <span style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>02 /</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 300, fontStyle: 'italic' }}>
            Selected Work
          </h2>
        </div>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem',
        }}>
          {featured.map(w => (
            <button
              key={w.id}
              onClick={() => onOpenWork(w)}
              style={{
                background: 'var(--bg2)', border: '1px solid var(--line)',
                borderRadius: 4, overflow: 'hidden', cursor: 'pointer',
                textAlign: 'left', transition: 'border-color 0.3s',
              }}
              className="featured-card"
            >
              <div style={{
                height: 200, background: 'var(--bg3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3rem', fontFamily: 'var(--font-display)',
                fontWeight: 700, color: 'var(--faint)', position: 'relative',
              }}>
                <span style={{
                  position: 'absolute', top: 12, left: 12,
                  fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'var(--accent)', background: 'rgba(200,169,110,0.15)',
                  padding: '4px 10px', borderRadius: 2,
                }}>{w.category}</span>
                {w.emoji}
              </div>
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>{w.category}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: '0.5rem' }}>{w.title}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{w.shortDesc}</div>
                {w.tools && w.tools.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: '0.75rem' }}>
                    {w.tools.map((t, i) => (
                      <span key={i} style={{
                        fontSize: 10, padding: '3px 8px',
                        border: '1px solid var(--faint)', borderRadius: 2,
                        color: 'var(--muted)', letterSpacing: '0.05em',
                      }}>{t}</span>
                    ))}
                  </div>
                )}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8, marginTop: '1rem',
                  fontSize: 12, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>
                  View Project →
                </div>
              </div>
            </button>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button onClick={() => onNavigate('work')} style={{
            padding: '12px 28px', border: '1px solid var(--faint)', color: 'var(--muted)',
            fontSize: 13, letterSpacing: '0.05em', textTransform: 'uppercase',
            borderRadius: 2, background: 'none', cursor: 'pointer',
          }}>
            View All Work →
          </button>
        </div>
      </section>

      <style>{`
        .expertise-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: var(--accent);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .expertise-card:hover { background: var(--bg2) !important; }
        .expertise-card:hover::before { transform: scaleX(1); }
        .featured-card:hover { border-color: var(--accent) !important; }
      `}</style>
    </div>
  )
}
