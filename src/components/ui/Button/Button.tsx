import { useRef, useEffect } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  magnetic?: boolean
  target?: string
  rel?: string
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  magnetic = false,
  target,
  rel,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null)

  useEffect(() => {
    if (!magnetic || !ref.current) return
    const el = ref.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) translateY(-2px)`
    }

    const handleMouseLeave = () => {
      el.style.transform = ''
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [magnetic])

  const cls = `${styles.button} ${styles[variant]} ${className}`

  if (href) {
    return (
      <a ref={ref} href={href} className={cls} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button ref={ref} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
