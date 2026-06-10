import styles from './Badge.module.scss'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'violet' | 'amber'
  className?: string
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantClass = variant !== 'default' ? styles[variant] : ''
  return (
    <span className={`${styles.badge} ${variantClass} ${className}`}>
      {children}
    </span>
  )
}
