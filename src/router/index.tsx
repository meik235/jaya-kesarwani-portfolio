import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PageWrapper } from '@/components/layout'
import { Hero } from '@/features/hero'
import { About } from '@/features/about'
import { Skills } from '@/features/skills'
import { Experience } from '@/features/experience'
import { Projects } from '@/features/projects'
import { Contact } from '@/features/contact'
import { RPGSheet } from '@/features/rpg'

function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <About />
      <Skills />
      <RPGSheet />
      <Experience />
      <Projects />
      <Contact />
    </PageWrapper>
  )
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
