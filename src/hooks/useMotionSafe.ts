/**
 * Returns false (skip initial animation) when the document is hidden —
 * e.g. headless preview tools, background tabs. In a real browser the page
 * is always visible so this returns true and Framer Motion plays normally.
 */
export function useMotionSafe(): boolean {
  if (typeof document === 'undefined') return true
  return !document.hidden
}
