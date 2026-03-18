'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={
        'inline-flex items-center justify-center rounded-md w-9 h-9 ' +
        'text-muted-foreground hover:bg-accent hover:text-accent-foreground ' +
        'transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ' +
        (className || '')
      }
      aria-label="Toggle theme"
    >
      <Sun size={20} className="hidden dark:block" />
      <Moon size={20} className="block dark:hidden" />
    </button>
  )
}
