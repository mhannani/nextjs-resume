import type { Locale } from './config'

export const translations = {
  en: {
    sections: {
      profile: 'PROFILE',
      experience: 'EXPERIENCE',
      projects: 'PROJECTS',
      education: 'EDUCATION',
      skills: 'SKILLS',
      languages: 'LANGUAGES',
      certificates: 'CERTIFICATES',
      interests: 'INTERESTS',
    },
  },
  de: {
    sections: {
      profile: 'PROFIL',
      experience: 'BERUFSERFAHRUNG',
      projects: 'PROJEKTE',
      education: 'AUSBILDUNG',
      skills: 'FÄHIGKEITEN',
      languages: 'SPRACHEN',
      certificates: 'ZERTIFIKATE',
      interests: 'INTERESSEN',
    },
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}
