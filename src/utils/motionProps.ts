/**
 * Returns Framer Motion props for a scroll-reveal animation.
 * When the page is hidden (headless preview, background tab),
 * skips the animation and renders elements visible immediately.
 */
export function scrollReveal(
  animate: boolean,
  delay = 0,
  from: Record<string, number> = { opacity: 0, y: 30 }
) {
  const to: Record<string, number> = {}
  for (const key of Object.keys(from)) {
    to[key] = key === 'opacity' ? 1 : 0
  }

  if (!animate) {
    return { initial: to } as const
  }

  return {
    initial: from,
    whileInView: to,
    viewport: { once: true, amount: 0.05 } as const,
    transition: { duration: 0.55, delay, ease: 'easeOut' } as const,
  }
}
