import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui'
import { RESUME } from '@/constants'
import { useMotionSafe } from '@/hooks'
import styles from './Hero.module.scss'

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  animationDuration: `${8 + Math.random() * 12}s`,
  animationDelay: `${Math.random() * 8}s`,
  size: `${1 + Math.random() * 3}px`,
}))

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
}

export function Hero() {
  const animate = useMotionSafe()
  const [typeText, setTypeText] = useState('')
  const [techIndex, setTechIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const tech = RESUME.techStack[techIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typeText.length < tech.length) {
            setTypeText(tech.slice(0, typeText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          if (typeText.length > 0) {
            setTypeText(tech.slice(0, typeText.length - 1))
          } else {
            setIsDeleting(false)
            setTechIndex((i) => (i + 1) % RESUME.techStack.length)
          }
        }
      },
      isDeleting ? 60 : 100
    )
    return () => clearTimeout(timeout)
  }, [typeText, techIndex, isDeleting])

  return (
    <section className={styles.hero} id="hero">
      {/* Aurora background */}
      <div className={styles.heroGlow} />
      {/* Background */}
      <div className={styles.bg}>
        <div className={styles.grid} />
        <div className={styles.glow1} />
        <div className={styles.glow2} />
        <div className={styles.glow3} />
        <div className={styles.particles}>
          {PARTICLES.map((p) => (
            <div
              key={p.id}
              className={styles.particle}
              style={{
                left: p.left,
                bottom: '-10px',
                width: p.size,
                height: p.size,
                animationDuration: p.animationDuration,
                animationDelay: p.animationDelay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <motion.p
          className={styles.eyebrow}
          variants={fadeUp}
          custom={0.1}
          initial={animate ? 'hidden' : false}
          animate="visible"
        >
          Available for opportunities
        </motion.p>

        <motion.h1
          className={styles.name}
          variants={fadeUp}
          custom={0.25}
          initial={animate ? 'hidden' : false}
          animate="visible"
        >
          <span className={styles.nameFirst}>{RESUME.name.split(' ')[0]}</span>
          <span className={styles.nameLast}>{RESUME.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p
          className={styles.role}
          variants={fadeUp}
          custom={0.4}
          initial={animate ? 'hidden' : false}
          animate="visible"
        >
          <span>{RESUME.role}</span>
        </motion.p>

        <motion.p
          className={styles.typewriter}
          variants={fadeUp}
          custom={0.55}
          initial={animate ? 'hidden' : false}
          animate="visible"
        >
          Currently working with{' '}
          <span style={{ color: 'var(--accent-primary)' }}>{typeText}</span>
          <span className={styles.cursor} />
        </motion.p>

        <motion.div
          className={styles.ctas}
          variants={fadeUp}
          custom={0.7}
          initial={animate ? 'hidden' : false}
          animate="visible"
        >
          <Button href="#projects" variant="primary" magnetic>
            View My Work
          </Button>
          <Button href={`mailto:${RESUME.email}`} variant="outline" magnetic>
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          className={styles.stats}
          variants={fadeUp}
          custom={0.85}
          initial={animate ? 'hidden' : false}
          animate="visible"
        >
          {RESUME.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={animate ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  )
}
