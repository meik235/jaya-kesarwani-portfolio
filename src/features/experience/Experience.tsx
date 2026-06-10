import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeading, Tag } from '@/components/ui'
import { RESUME } from '@/constants'
import { useMotionSafe } from '@/hooks'
import { scrollReveal } from '@/utils'
import styles from './Experience.module.scss'

export function Experience() {
  const animate = useMotionSafe()
  const lineRef = useRef<HTMLDivElement>(null)
  const inView = useInView(lineRef, { once: true, amount: 0.1 })

  return (
    <section className={styles.section} id="experience">
      <div className={styles.inner}>
        <SectionHeading
          label="Experience"
          title={<>Where I've<br /><span style={{ color: 'var(--accent-primary)' }}>Worked</span></>}
        />

        <div className={styles.timeline}>
          <div
            ref={lineRef}
            className={`${styles.timelineLine} ${inView || !animate ? styles.animate : ''}`}
            style={{ height: (inView || !animate) ? '100%' : '0' }}
          />

          {RESUME.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              className={styles.item}
              {...scrollReveal(animate, i * 0.15, { opacity: 0, x: -30 })}
            >
              <div className={styles.header}>
                <h3 className={styles.company}>{exp.company}</h3>
                <p className={styles.role}>{exp.role}</p>
                <p className={styles.period}>{exp.period}</p>
              </div>

              <div className={styles.tags}>
                {exp.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className={styles.groups}>
                {exp.groups.map((group) => (
                  <div key={group.heading} className={styles.group}>
                    <p className={styles.groupHeading}>{group.heading}</p>
                    <ul className={styles.bullets}>
                      {group.bullets.map((bullet, bi) => (
                        <li key={bi} className={styles.bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
