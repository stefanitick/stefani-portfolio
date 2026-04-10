'use client'
import { useEffect } from 'react'
import { Work } from '@/lib/types'

interface WorkDetailProps {
  work: Work
  onClose: () => void
}

export default function WorkDetail({ work, onClose }: WorkDetailProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 200,
      background: 'rgba(5,5,5,0.97)',
      overflowY: 'auto', padding: '2rem',
    }}>
      {/* Close */}
      <button onClick={onClose} style={{
        position: 'fixed', top: '1.5rem', right: '2rem',
        fontSize: 24, color: 'var(--muted)', background: 'none',
        border: 'none', cursor: 'pointer', zIndex: 201, lineHeight: 1,
      }}>✕</button>

      <div style={{ maxWidth: 900, margin: '0 auto', paddingTop: '3rem' }}>

        <div style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          {work.category}
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300, fontStyle: 'italic',
          fontSize: 'clamp(2rem,5vw,4rem)', lineHeight: 1.1, marginBottom: '0.5rem',
        }}>
          {work.emoji} {work.title}
        </h1>
        <div style={{ fontSize: 16, color: 'var(--muted)', fontWeight: 300, marginBottom: '2rem' }}>
          {work.subtitle}
        </div>

        <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 660 }}>
          {work.fullDesc || work.shortDesc}
        </p>

        {/* Tools */}
        {work.tools && work.tools.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Tools Used
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {work.tools.map((t, i) => (
                <span key={i} style={{
                  fontSize: 12, padding: '5px 12px',
                  border: '1px solid var(--faint)', borderRadius: 2,
                  color: 'var(--muted)', letterSpacing: '0.05em',
                }}>{t}</span>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        {work.gallery && work.gallery.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Gallery
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {work.gallery.map((item, i) => (
                item.type === 'video' ? (
                  <div key={i} style={{
                    gridColumn: i === 0 ? '1/-1' : undefined,
                    aspectRatio: i === 0 ? '21/9' : '16/9',
                    borderRadius: 4, overflow: 'hidden',
                    border: '1px solid var(--line)',
                  }}>
                    <iframe
                      src={item.src}
                      title={item.caption}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div key={i} style={{
                    gridColumn: i === 0 ? '1/-1' : undefined,
                    aspectRatio: i === 0 ? '21/9' : '16/9',
                    background: 'var(--bg2)',
                    border: '1px solid var(--line)',
                    borderRadius: 4,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column', gap: 8,
                    fontSize: '2rem', color: 'var(--faint)',
                  }}>
                    {/* Replace with <Image> when real photos are added */}
                    <span>{work.emoji}</span>
                    <span style={{ fontSize: 12, color: 'var(--muted)' }}>{item.caption}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {work.tags && work.tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {work.tags.map((t, i) => (
              <span key={i} style={{
                padding: '5px 12px', border: '1px solid var(--faint)',
                borderRadius: 2, fontSize: 12, color: 'var(--muted)',
              }}>{t}</span>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
