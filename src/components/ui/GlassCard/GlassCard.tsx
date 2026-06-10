import styles from './GlassCard.module.scss'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  featured?: boolean
  onClick?: () => void
}

export function GlassCard({ children, className = '', featured = false, onClick }: GlassCardProps) {
  return (
    <div
      className={`${styles.card} ${featured ? styles.featured : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
