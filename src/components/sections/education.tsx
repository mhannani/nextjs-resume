'use client'

import { Education as EducationType } from '@/types/resume'
import type { Locale } from '@/lib/i18n/config'
import { getTranslations } from '@/lib/i18n/translations'

interface EducationProps {
  education: EducationType[]
  locale: Locale
}

export function Education({ education, locale }: EducationProps) {
  const t = getTranslations(locale)

  return (
    <section className="mb-6">
      <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid var(--resume-text)', paddingBottom: '0.1rem', lineHeight: '1.8rem', color: 'var(--resume-text)', marginBottom: '0.5rem' }}>
        {t.sections.education}
      </h2>
      <div className="space-y-3">
        {education.map((edu, index) => (
          <div key={index}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--resume-text)' }}>{edu.Diploma}</h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--resume-text)' }}>{edu.School}</p>
            <p style={{ fontSize: '1.12rem', color: 'var(--resume-muted)' }}>
              {edu.Date} • {edu.Place}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
