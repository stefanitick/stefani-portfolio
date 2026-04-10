'use client'
import { useState } from 'react'

type Page = 'home' | 'work' | 'about' | 'contact'

interface NavProps {
  current: Page
  onChange: (page: Page) => void
}

export default function Nav({ current, onChange }: NavProps) {
  const links: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 'var(--nav-h)',
      display: 'flex', alignItems: 'center',
      padding: '0 2.5rem',
      borderBottom: '1px solid var(--line)',
      backdropFilter: 'blur(20px)',
      background: 'rgba(10,10,10,0.7)',
    }}>
      <button
        onClick={() => onChange('home')}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '20px',
          fontWeight: 600,
          fontStyle: 'italic',
          letterSpacing: '0.01em',
          marginRight: 'auto',
          color: 'var(--text)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Stefani<span style={{ color: 'var(--accent)' }}>.</span>
      </button>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {links.map(l => (
          <button
            key={l.id}
            onClick={() => onChange(l.id)}
            style={{
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: current === l.id ? 'var(--accent)' : 'var(--muted)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'color 0.2s',
            }}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
