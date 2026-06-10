import styles from './Tag.module.scss'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className = '' }: TagProps) {
  return <span className={`${styles.tag} ${className}`}>{children}</span>
}
