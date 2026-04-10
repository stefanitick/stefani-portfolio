'use client'
import Image from 'next/image'
import { SiteData } from '@/lib/types'

export default function AboutPage({ data }: { data: SiteData }) {
  const { profile, expertise, skills, tools, experience } = data

  return (
    <div style={{ paddingTop: 'var(--nav-h)' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '320px 1fr',
        gap: '4rem', maxWidth: 1200, margin: '0 auto',
        padding: '4rem 2.5rem', alignItems: 'start',
      }}
        className="about-grid"
      >
        {/* Sidebar */}
        <div>
          <div style={{
            width: '100%', aspectRatio: '3/4', borderRadius: 4,
            overflow: 'hidden', marginBottom: '1.5rem',
            border: '1px solid var(--line)', position: 'relative',
          }}>
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { icon: '✉', label: profile.contact.email, href: `mailto:${profile.contact.email}` },
              { icon: 'in', label: 'linkedin.com/in/stefanitick', href: profile.contact.linkedin },
              { icon: '💬', label: `+62 81-999-001-004`, href: `https://wa.me/${profile.contact.whatsapp}` },
            ].map((l, i) => (
              <a key={i} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                fontSize: 13, color: 'var(--muted)',
                padding: '8px 0', borderBottom: '1px solid var(--line)',
              }}
                className="about-link"
              >
                <span style={{ width: 16, textAlign: 'center', fontSize: 14 }}>{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Main */}
        <div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1, marginBottom: '0.5rem',
          }}>{profile.name}</h1>
          <div style={{ fontSize: 15, color: 'var(--accent)', marginBottom: '1.5rem', fontWeight: 300 }}>
            {profile.role}
          </div>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 600, marginBottom: '3rem' }}>
            {profile.bio}
          </p>

          <SectionTitle>Experience</SectionTitle>
          <div style={{ marginBottom: '3rem' }}>
            {experience.map((e, i) => (
              <div key={i} style={{
                padding: '1.5rem 0', borderBottom: '1px solid var(--line)',
                display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'start',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500 }}>{e.company}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: '0.25rem' }}>{e.role}</div>
                </div>
                <div style={{ fontSize: 12, color: 'var(--accent)', whiteSpace: 'nowrap' }}>{e.year}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, gridColumn: '1/-1', marginTop: '0.5rem' }}>{e.desc}</div>
              </div>
            ))}
          </div>

          <SectionTitle>Expertise</SectionTitle>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem', marginBottom: '3rem',
          }}>
            {expertise.map((e, i) => (
              <div key={i} style={{
                padding: '1.25rem', border: '1px solid var(--line)',
                borderRadius: 4, background: 'var(--bg2)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500, marginBottom: '0.3rem' }}>
                  {e.icon} {e.name}
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{e.desc}</div>
              </div>
            ))}
          </div>

          <SectionTitle>Core Skills</SectionTitle>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
            {skills.map((s, i) => (
              <span key={i} className="skill-tag" style={{
                padding: '6px 14px', border: '1px solid var(--faint)',
                borderRadius: 2, fontSize: 12, color: 'var(--muted)', letterSpacing: '0.05em',
              }}>{s}</span>
            ))}
          </div>

          <SectionTitle>Tools</SectionTitle>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
            {tools.map((t, i) => (
              <span key={i} className="skill-tag" style={{
                padding: '6px 14px', border: '1px solid var(--faint)',
                borderRadius: 2, fontSize: 12, color: 'var(--muted)', letterSpacing: '0.05em',
              }}>{t}</span>
            ))}
          </div>

          <SectionTitle>Education</SectionTitle>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              padding: '1.5rem 0', borderBottom: '1px solid var(--line)',
              display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 500 }}>{profile.education.school}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: '0.25rem' }}>{profile.education.detail}</div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--accent)' }}>{profile.education.year}</div>
            </div>
          </div>

          <a href={profile.resumeUrl} download style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 28px', background: 'var(--accent)', color: '#0a0a0a',
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 14, letterSpacing: '0.1em', textTransform: 'uppercase',
            borderRadius: 2, marginBottom: '3rem',
          }}>
            ↓ Download Resume
          </a>
        </div>
      </div>

      <style>{`
        .about-link:hover { color: var(--accent) !important; }
        .skill-tag:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 500,
      letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)',
      marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: 10,
    }}>
      {children}
      <span style={{ flex: 1, height: 1, background: 'var(--line)', display: 'block' }} />
    </div>
  )
}
