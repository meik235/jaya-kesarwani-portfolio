import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui'
import { RESUME } from '@/constants'
import { useMotionSafe } from '@/hooks'
import { scrollReveal } from '@/utils'
import styles from './About.module.scss'

export function About() {
  const animate = useMotionSafe()

  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <motion.div className={styles.left} {...scrollReveal(animate, 0)}>
          <SectionHeading
            label="About Me"
            title={<>The Engineer<br />Behind The Code</>}
          />

          <p className={styles.summary}>{RESUME.summary}</p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>◎</span>
              <span>{RESUME.location}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>✉</span>
              <a href={`mailto:${RESUME.email}`}>{RESUME.email}</a>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>◈</span>
              <a href={RESUME.linkedin} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/jaya-kesarwani
              </a>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaIcon}>⌥</span>
              <a href={RESUME.github} target="_blank" rel="noopener noreferrer">
                github.com/meik235
              </a>
            </div>
          </div>

          <div className={styles.edu}>
            <p className={styles.eduDegree}>{RESUME.education.degree}</p>
            <p className={styles.eduUni}>{RESUME.education.university}</p>
            <p className={styles.eduYear}>Graduated {RESUME.education.year}</p>
          </div>
        </motion.div>

        <motion.div
          className={styles.terminal}
          {...scrollReveal(animate, 0.15, { opacity: 0, x: 40 })}
        >
          <div className={styles.terminalBar}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <span className={styles.termTitle}>~/jaya-kesarwani/profile.json</span>
          </div>
          <div className={styles.terminalBody}>
            <div><span className={styles.prompt}>$ </span><span className={styles.cmd}>cat profile.json</span></div>
            <div>{'{'}</div>
            <div className={styles.indent}><span className={styles.key}>"name"</span>: <span className={styles.str}>"{RESUME.name}"</span>,</div>
            <div className={styles.indent}><span className={styles.key}>"role"</span>: <span className={styles.str}>"{RESUME.role}"</span>,</div>
            <div className={styles.indent}><span className={styles.key}>"location"</span>: <span className={styles.str}>"{RESUME.location}"</span>,</div>
            <div className={styles.indent}><span className={styles.key}>"experience"</span>: <span className={styles.val}>3</span>,</div>
            <div className={styles.indent}><span className={styles.key}>"usersServed"</span>: <span className={styles.str}>"10k+"</span>,</div>
            <div className={styles.indent}><span className={styles.key}>"stack"</span>: [</div>
            {RESUME.techStack.slice(0, 5).map((tech, i) => (
              <div key={tech} className={styles.indent} style={{ paddingLeft: '48px' }}>
                <span className={styles.str}>"{tech}"</span>{i < 4 ? ',' : ''}
              </div>
            ))}
            <div className={styles.indent}>{'],'}</div>
            <div className={styles.indent}><span className={styles.key}>"openToWork"</span>: <span className={styles.val}>true</span></div>
            <div>{'}'}</div>
            <div style={{ marginTop: '8px' }}>
              <span className={styles.prompt}>$ </span>
              <span className={styles.comment}>// Always building something new...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
