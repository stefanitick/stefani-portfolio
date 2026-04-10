'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import HomePage from '@/components/HomePage'
import WorkPage from '@/components/WorkPage'
import AboutPage from '@/components/AboutPage'
import ContactPage from '@/components/ContactPage'
import WorkDetail from '@/components/WorkDetail'
import { data } from '@/lib/data'
import { Work } from '@/lib/types'

type Page = 'home' | 'work' | 'about' | 'contact'

export default function Portfolio() {
  const [page, setPage] = useState<Page>('home')
  const [activeWork, setActiveWork] = useState<Work | null>(null)

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo(0, 0)
  }

  const openWork = (work: Work) => {
    if (work.featured) setActiveWork(work)
  }

  return (
    <>
      <Nav current={page} onChange={navigate} />

      {page === 'home' && (
        <HomePage
          data={data}
          onNavigate={navigate}
          onOpenWork={openWork}
        />
      )}
      {page === 'work' && (
        <WorkPage
          data={data}
          onOpenWork={openWork}
        />
      )}
      {page === 'about' && <AboutPage data={data} />}
      {page === 'contact' && <ContactPage data={data} />}

      {activeWork && (
        <WorkDetail
          work={activeWork}
          onClose={() => setActiveWork(null)}
        />
      )}
    </>
  )
}
