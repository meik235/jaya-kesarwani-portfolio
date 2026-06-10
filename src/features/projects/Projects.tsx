import { motion } from 'framer-motion'
import { SectionHeading, Tag } from '@/components/ui'
import { RESUME } from '@/constants'
import { useMotionSafe } from '@/hooks'
import { scrollReveal } from '@/utils'
import styles from './Projects.module.scss'

export function Projects() {
  const animate = useMotionSafe()

  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <SectionHeading
          label="Projects"
          title={<>Things I've<br /><span style={{ color: 'var(--accent-primary)' }}>Built</span></>}
          subtitle="Selected projects showcasing backend systems, concurrent architecture, and frontend engineering."
        />

        <div className={styles.grid}>
          {RESUME.projects.map((project, i) => (
            <motion.div
              key={project.number}
              className={`${styles.card} ${project.featured ? styles.featured : ''}`}
              {...scrollReveal(animate, i * 0.1, { opacity: 0, y: 40 })}
            >
              <p className={styles.number}>Project {project.number}</p>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className={styles.footer}>
                {project.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                  >
                    <span>View on GitHub</span>
                    <span>→</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
