import styles from './SectionHeading.module.scss'

interface SectionHeadingProps {
  label: string
  title: React.ReactNode
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ label, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={styles.wrapper} style={centered ? { textAlign: 'center' } : undefined}>
      <p className={styles.label}>{label}</p>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle} style={centered ? { margin: '16px auto 0' } : undefined}>{subtitle}</p>}
    </div>
  )
}
