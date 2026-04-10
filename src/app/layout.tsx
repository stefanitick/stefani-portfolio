import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stefani Tick — Creative Strategist',
  description: 'Motion Designer turned Creative & Marketing Strategist — turning complex ideas into clear, moving stories.',
  openGraph: {
    title: 'Stefani Tick — Creative Strategist',
    description: 'Motion Designer turned Creative & Marketing Strategist',
    images: ['/profile.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
