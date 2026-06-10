import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '@/components/ui'
import { useMotionSafe } from '@/hooks'
import { scrollReveal } from '@/utils'
import styles from './RPGSheet.module.scss'

interface SkillNode {
  name: string
  level: number   // 1–5
  xp: number      // 0–100
  years: string
  tag: string
  projects: string[]
  color: string
}

interface SkillCategory {
  category: string
  icon: string
  color: string
  skills: SkillNode[]
}

const SKILL_DATA: SkillCategory[] = [
  {
    category: 'Languages',
    icon: '⌨',
    color: '#63dcb4',
    skills: [
      { name: 'Python', level: 5, xp: 90, years: '3+ yrs', tag: 'MASTER', color: '#63dcb4', projects: ['AI Audio Labeling', 'FastAPI Microservices'] },
      { name: 'TypeScript', level: 4, xp: 80, years: '2+ yrs', tag: 'EXPERT', color: '#63dcb4', projects: ['React Platform (10k+ users)', 'Expert Availability System'] },
      { name: 'Go', level: 4, xp: 75, years: '2 yrs', tag: 'EXPERT', color: '#63dcb4', projects: ['Web3 Wallet Monitor', 'Concurrent Worker Pools'] },
      { name: 'JavaScript', level: 5, xp: 88, years: '3+ yrs', tag: 'MASTER', color: '#63dcb4', projects: ['Google Workspace Automation', 'Frontend Platforms'] },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙',
    color: '#4facfe',
    skills: [
      { name: 'FastAPI', level: 5, xp: 92, years: '2+ yrs', tag: 'MASTER', color: '#4facfe', projects: ['AI Annotation Pipelines', 'DynamoDB Microservices'] },
      { name: 'Node.js', level: 4, xp: 78, years: '2+ yrs', tag: 'EXPERT', color: '#4facfe', projects: ['Expert Availability System', 'REST API Services'] },
      { name: 'Express.js', level: 4, xp: 72, years: '2 yrs', tag: 'EXPERT', color: '#4facfe', projects: ['REST APIs', 'Backend Services'] },
    ],
  },
  {
    category: 'Frontend',
    icon: '◈',
    color: '#a78bfa',
    skills: [
      { name: 'React.js', level: 5, xp: 88, years: '3+ yrs', tag: 'MASTER', color: '#a78bfa', projects: ['10k+ User Platform', 'Expert Availability System'] },
      { name: 'Next.js', level: 4, xp: 76, years: '1+ yr', tag: 'EXPERT', color: '#a78bfa', projects: ['SSR/SSG Apps', 'App Router Migration'] },
      { name: 'Redux Toolkit', level: 4, xp: 74, years: '2 yrs', tag: 'EXPERT', color: '#a78bfa', projects: ['State Management', 'Complex UI Flows'] },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁',
    color: '#f59e0b',
    skills: [
      { name: 'AWS S3', level: 4, xp: 80, years: '2+ yrs', tag: 'EXPERT', color: '#f59e0b', projects: ['Audio Dataset Storage', 'File Processing Pipelines'] },
      { name: 'DynamoDB', level: 4, xp: 75, years: '2 yrs', tag: 'EXPERT', color: '#f59e0b', projects: ['High-Throughput Data', 'Microservice DBs'] },
      { name: 'Lambda', level: 3, xp: 60, years: '1 yr', tag: 'SKILLED', color: '#f59e0b', projects: ['Serverless Functions', 'Event-Driven Processing'] },
      { name: 'Docker', level: 3, xp: 62, years: '1+ yr', tag: 'SKILLED', color: '#f59e0b', projects: ['Containerization', 'Dev Environments'] },
    ],
  },
  {
    category: 'Architecture',
    icon: '◎',
    color: '#f472b6',
    skills: [
      { name: 'Microservices', level: 4, xp: 82, years: '2+ yrs', tag: 'EXPERT', color: '#f472b6', projects: ['Annotation Pipelines', 'Wallet Monitor'] },
      { name: 'System Design', level: 4, xp: 78, years: '2 yrs', tag: 'EXPERT', color: '#f472b6', projects: ['High-Concurrency Systems', 'Distributed Services'] },
      { name: 'Concurrency (Go)', level: 4, xp: 76, years: '2 yrs', tag: 'EXPERT', color: '#f472b6', projects: ['Goroutine Worker Pools', 'Parallel Blockchain Streams'] },
    ],
  },
]

const TAG_COLORS: Record<string, string> = {
  MASTER: '#63dcb4',
  EXPERT: '#4facfe',
  SKILLED: '#a78bfa',
  APPRENTICE: '#f59e0b',
}

export function RPGSheet() {
  const animate = useMotionSafe()
  const [selected, setSelected] = useState<SkillNode | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const totalXP = SKILL_DATA.flatMap(c => c.skills).reduce((sum, s) => sum + s.xp, 0)
  const maxXP = SKILL_DATA.flatMap(c => c.skills).length * 100

  return (
    <section className={styles.section} id="skill-tree">
      <div className={styles.inner}>
        <SectionHeading
          label="RPG Sheet"
          title={<>Skill <span style={{ color: 'var(--accent-primary)' }}>Tree</span></>}
          subtitle="Click any skill node to inspect level, XP, and projects where it was used."
        />

        {/* Character header */}
        <motion.div className={styles.charCard} {...scrollReveal(animate, 0.1)}>
          <div className={styles.charLeft}>
            <div className={styles.avatar}>
              <span>JK</span>
              <div className={styles.avatarGlow} />
            </div>
            <div className={styles.charInfo}>
              <div className={styles.charName}>Jaya Kesarwani</div>
              <div className={styles.charClass}>
                <span className={styles.classBadge}>Full Stack Engineer</span>
                <span className={styles.levelBadge}>LVL 4</span>
              </div>
              <div className={styles.charMeta}>
                <span>📍 Bengaluru, India</span>
                <span>⚔ 4+ Years Active</span>
              </div>
            </div>
          </div>
          <div className={styles.charRight}>
            <div className={styles.xpLabel}>
              <span>TOTAL XP</span>
              <span className={styles.xpValue}>{totalXP} / {maxXP}</span>
            </div>
            <div className={styles.xpTrack}>
              <motion.div
                className={styles.xpFill}
                initial={{ width: 0 }}
                animate={{ width: `${(totalXP / maxXP) * 100}%` }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
              />
            </div>
            <div className={styles.statRow}>
              <div className={styles.statChip} style={{ '--chip-color': '#63dcb4' } as React.CSSProperties}>
                <span className={styles.statChipVal}>5</span>
                <span className={styles.statChipLabel}>Categories</span>
              </div>
              <div className={styles.statChip} style={{ '--chip-color': '#4facfe' } as React.CSSProperties}>
                <span className={styles.statChipVal}>{SKILL_DATA.flatMap(c => c.skills).length}</span>
                <span className={styles.statChipLabel}>Skills</span>
              </div>
              <div className={styles.statChip} style={{ '--chip-color': '#a78bfa' } as React.CSSProperties}>
                <span className={styles.statChipVal}>{SKILL_DATA.flatMap(c => c.skills).filter(s => s.tag === 'MASTER').length}</span>
                <span className={styles.statChipLabel}>Mastered</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skill grid */}
        <div className={styles.treeGrid}>
          {SKILL_DATA.map((cat, ci) => (
            <motion.div
              key={cat.category}
              className={`${styles.catGroup} ${activeCategory === cat.category ? styles.catActive : ''}`}
              style={{ '--cat-color': cat.color } as React.CSSProperties}
              {...scrollReveal(animate, 0.1 + ci * 0.07)}
            >
              <button
                className={styles.catHeader}
                onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
              >
                <span className={styles.catIcon}>{cat.icon}</span>
                <span className={styles.catName}>{cat.category}</span>
                <span className={styles.catCount}>{cat.skills.length} skills</span>
                <span className={styles.catChevron}>{activeCategory === cat.category ? '▲' : '▼'}</span>
              </button>

              <div className={styles.skillNodes}>
                {cat.skills.map((skill, si) => (
                  <motion.button
                    key={skill.name}
                    className={`${styles.node} ${selected?.name === skill.name ? styles.nodeSelected : ''}`}
                    style={{ '--node-color': skill.color } as React.CSSProperties}
                    onClick={() => setSelected(selected?.name === skill.name ? null : skill)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    initial={animate ? { opacity: 0, x: -20 } : false}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + si * 0.05 }}
                  >
                    <div className={styles.nodeTop}>
                      <span className={styles.nodeName}>{skill.name}</span>
                      <span
                        className={styles.nodeTag}
                        style={{ color: TAG_COLORS[skill.tag] }}
                      >
                        {skill.tag}
                      </span>
                    </div>
                    <div className={styles.nodeXpRow}>
                      <div className={styles.nodeXpTrack}>
                        <motion.div
                          className={styles.nodeXpFill}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.xp}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 + si * 0.05 }}
                        />
                      </div>
                      <span className={styles.nodeXpNum}>{skill.xp}</span>
                    </div>
                    <div className={styles.nodeMeta}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          className={`${styles.nodeStar} ${i < skill.level ? styles.nodeStarFilled : ''}`}
                        >★</span>
                      ))}
                      <span className={styles.nodeYears}>{skill.years}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className={styles.detailPanel}
              style={{ '--panel-color': selected.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <button className={styles.panelClose} onClick={() => setSelected(null)}>✕</button>
              <div className={styles.panelHeader}>
                <span className={styles.panelName}>{selected.name}</span>
                <span className={styles.panelTag} style={{ color: TAG_COLORS[selected.tag] }}>
                  {selected.tag}
                </span>
              </div>
              <div className={styles.panelStats}>
                <div className={styles.panelStat}>
                  <span className={styles.panelStatLabel}>LEVEL</span>
                  <span className={styles.panelStatVal}>{selected.level} / 5</span>
                </div>
                <div className={styles.panelStat}>
                  <span className={styles.panelStatLabel}>XP</span>
                  <span className={styles.panelStatVal}>{selected.xp} / 100</span>
                </div>
                <div className={styles.panelStat}>
                  <span className={styles.panelStatLabel}>EXPERIENCE</span>
                  <span className={styles.panelStatVal}>{selected.years}</span>
                </div>
              </div>
              <div className={styles.panelXpBar}>
                <motion.div
                  className={styles.panelXpFill}
                  initial={{ width: 0 }}
                  animate={{ width: `${selected.xp}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className={styles.panelProjects}>
                <div className={styles.panelProjectsLabel}>USED IN PROJECTS</div>
                {selected.projects.map(p => (
                  <div key={p} className={styles.panelProject}>
                    <span className={styles.panelProjectDot} />
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
