import { RESUME } from '@/constants'
import styles from './Footer.module.scss'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>
          <span>{'<'}</span>{RESUME.name}<span>{' />'}</span>
        </span>
        <div className={styles.links}>
          <a href={RESUME.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={RESUME.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${RESUME.email}`}>Email</a>
        </div>
        <p className={styles.copy}>
          © {year} {RESUME.name} · Built with React + TypeScript
        </p>
      </div>
    </footer>
  )
}
