import { Cursor } from '@/components/ui'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

interface PageWrapperProps {
  children: React.ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
