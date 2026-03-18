'use client'

import Link from 'next/link'
import type { Locale } from '@/lib/i18n/config'
import { localeFlags, localeNames } from '@/lib/i18n/config'

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const otherLocale: Locale = currentLocale === 'en' ? 'de' : 'en'

  return (
    <div className="fixed top-4 right-4 pointer-events-none" style={{ zIndex: 100000 }}>
      <Link
        href={`/${otherLocale}`}
        className="pointer-events-auto rounded-full border-none cursor-pointer shadow-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center no-print"
        style={{
          backgroundColor: '#fba68c',
          color: '#2E3D50',
          width: '40px',
          height: '40px',
          fontSize: '1.25rem',
        }}
        aria-label={`Switch to ${localeNames[otherLocale]}`}
        title={`Switch to ${localeNames[otherLocale]}`}
      >
        {localeFlags[otherLocale]}
      </Link>
    </div>
  )
}
