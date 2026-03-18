'use client'

import { Experience as ExperienceType } from '@/types/resume'
import type { Locale } from '@/lib/i18n/config'
import { getTranslations } from '@/lib/i18n/translations'

interface ExperienceProps {
  experience: ExperienceType[]
  locale: Locale
}

export function Experience({ experience, locale }: ExperienceProps) {
  const t = getTranslations(locale)

  return (
    <section className="mb-6">
      <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid var(--resume-text)', paddingBottom: '0.1rem', lineHeight: '1.8rem', color: 'var(--resume-text)', marginBottom: '0.5rem' }}>
        {t.sections.experience}
      </h2>
      <div className="space-y-3">
        {experience.map((exp, expIndex) =>
          exp.Positions.map((position, posIndex) => (
            <div key={`${expIndex}-${posIndex}`} className="mb-4">
              <div className="flex justify-between items-center mb-1" style={{ height: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--resume-text)' }}>{position.Title}</h3>
                </div>
                <div className="text-right whitespace-nowrap ml-4">
                  <p style={{ fontSize: '1.12rem', fontWeight: 700, color: 'var(--resume-text)' }}>{position.Date}, {position.location}</p>
                </div>
              </div>

              <div className="mb-1">
                <p style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--resume-text)' }}>{position.company}</p>
                {position.company_details && (
                  <p style={{ fontSize: '1.2rem', fontWeight: 'normal', color: 'var(--resume-muted)' }}>
                    {position.company_details}
                  </p>
                )}
              </div>

              <ul className="list-none space-y-1 mb-3" style={{ color: 'var(--resume-text)' }}>
                {position.Details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="before:content-['●'] before:mr-2">
                    {detail}
                  </li>
                ))}
              </ul>

              {position.Badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 mb-2">
                  {position.Badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className="inline-block rounded-full px-2 py-1"
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 400,
                        backgroundColor: 'var(--resume-badge-bg)',
                        color: 'var(--resume-text)',
                      }}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  )
}
