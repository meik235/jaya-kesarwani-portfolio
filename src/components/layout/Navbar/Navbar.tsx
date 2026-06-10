import { useState, useEffect } from 'react'
import { NAV_ITEMS, RESUME } from '@/constants'
import { useActiveSection } from '@/hooks'
import styles from './Navbar.module.scss'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <span className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span>{'<'}</span>{RESUME.name.split(' ')[0]}<span>{' />'}</span>
          </span>

          <div className={styles.nav}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${activeSection === item.href.slice(1) ? styles.active : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
              >
                {item.label}
              </a>
            ))}
            <a href={`mailto:${RESUME.email}`} className={styles.cta}>
              Hire Me
            </a>
          </div>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
          >
            {item.label}
          </a>
        ))}
        <a href={`mailto:${RESUME.email}`} style={{ color: 'var(--accent-primary)' }}>
          Hire Me
        </a>
      </div>
    </>
  )
}
