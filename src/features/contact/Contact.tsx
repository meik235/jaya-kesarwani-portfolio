import { motion } from 'framer-motion'
import { SectionHeading, Button } from '@/components/ui'
import { RESUME } from '@/constants'
import { useMotionSafe } from '@/hooks'
import { scrollReveal } from '@/utils'
import styles from './Contact.module.scss'

export function Contact() {
  const animate = useMotionSafe()

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <SectionHeading
          label="Contact"
          title={<>Let's Build<br /><span style={{ color: 'var(--accent-primary)' }}>Together</span></>}
          centered
        />

        <p className={styles.subtext}>
          Open to full-time roles, freelance projects, and interesting collaborations.
          Reach out — I respond within 24 hours.
        </p>

        <div className={styles.grid}>
          {RESUME.contact.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.card}
              {...scrollReveal(animate, i * 0.08)}
            >
              <div className={styles.icon}>{method.icon}</div>
              <p className={styles.label}>{method.label}</p>
              <p className={styles.value}>{method.value}</p>
            </motion.a>
          ))}
        </div>

        <div className={styles.cta}>
          <Button href={`mailto:${RESUME.email}`} variant="primary" magnetic>
            Send Me An Email
          </Button>
          <Button
            href={RESUME.linkedin}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}
