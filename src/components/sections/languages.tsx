'use client'

import { Language } from '@/types/resume'
import type { Locale } from '@/lib/i18n/config'
import { getTranslations } from '@/lib/i18n/translations'

interface LanguagesProps {
  languages: Language[]
  locale: Locale
}

export function Languages({ languages, locale }: LanguagesProps) {
  const t = getTranslations(locale)

  return (
    <section className="mb-6">
      <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid var(--resume-text)', paddingBottom: '0.1rem', lineHeight: '1.8rem', color: 'var(--resume-text)', marginBottom: '0.5rem' }}>
        {t.sections.languages}
      </h2>
      <div className="flex gap-6" style={{ fontSize: '1.12rem', color: 'var(--resume-text)' }}>
        {languages.map((language, index) => (
          <div key={index}>
            <span className="font-semibold">{language.Name}:</span> {language.Level}
          </div>
        ))}
      </div>
    </section>
  )
}
