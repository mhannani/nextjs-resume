'use client'

import type { Locale } from '@/lib/i18n/config'
import { getTranslations } from '@/lib/i18n/translations'

interface SkillsProps {
  skills: string[]
  locale: Locale
}

export function Skills({ skills, locale }: SkillsProps) {
  const t = getTranslations(locale)

  return (
    <section className="mb-6">
      <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid var(--resume-text)', paddingBottom: '0.1rem', lineHeight: '1.8rem', color: 'var(--resume-text)', marginBottom: '0.5rem' }}>
        {t.sections.skills}
      </h2>
      <ul className="list-none space-y-1" style={{ fontSize: '1.12rem', color: 'var(--resume-text)' }}>
        {skills.map((skill, index) => (
          <li key={index} className="before:content-['●'] before:mr-2">{skill}</li>
        ))}
      </ul>
    </section>
  )
}
