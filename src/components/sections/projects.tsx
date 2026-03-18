'use client'

import { Project } from '@/types/resume'
import type { Locale } from '@/lib/i18n/config'
import { getTranslations } from '@/lib/i18n/translations'
import { ExternalLink } from 'lucide-react'

interface ProjectsProps {
  projects: Project[]
  locale: Locale
}

export function Projects({ projects, locale }: ProjectsProps) {
  const t = getTranslations(locale)

  return (
    <section className="mb-6">
      <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid var(--resume-text)', paddingBottom: '0.1rem', lineHeight: '1.8rem', color: 'var(--resume-text)', marginBottom: '0.5rem' }}>
        {t.sections.projects}
      </h2>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div key={index} className="mb-3">
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--resume-text)' }}>
              {project.ProjectTitle}
              {project.AppUrl && (
                <a
                  href={project.AppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--resume-muted)', marginLeft: '0.4rem', verticalAlign: 'middle' }}
                >
                  <ExternalLink style={{ width: '1rem', height: '1rem', display: 'inline' }} />
                </a>
              )}
            </h3>
            <p style={{ fontSize: '1.12rem', color: 'var(--resume-text)' }} className="mb-1">
              {project.Description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.Badges.map((badge, badgeIndex) => (
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
          </div>
        ))}
      </div>
    </section>
  )
}
