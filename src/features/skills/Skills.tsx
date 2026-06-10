import { motion } from 'framer-motion'
import { SectionHeading, Tag } from '@/components/ui'
import { RESUME } from '@/constants'
import { useMotionSafe } from '@/hooks'
import { scrollReveal } from '@/utils'
import styles from './Skills.module.scss'

export function Skills() {
  const animate = useMotionSafe()

  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <SectionHeading
          label="Skills"
          title={<>Tech Stack &amp;<br /><span style={{ color: 'var(--accent-primary)' }}>Expertise</span></>}
          subtitle="The tools and technologies I use to build production-grade systems."
        />

        <div className={styles.grid}>
          {RESUME.skills.map((category, i) => (
            <motion.div
              key={category.category}
              className={styles.categoryCard}
              {...scrollReveal(animate, i * 0.08)}
            >
              <div className={styles.categoryHeader}>
                <div className={styles.icon}>{category.icon}</div>
                <span className={styles.name}>{category.category}</span>
              </div>
              <div className={styles.tags}>
                {category.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
