import { ResumeData } from '@/types/resume'
import type { Locale } from '@/lib/i18n/config'

export async function getResumeData(locale: Locale): Promise<ResumeData> {
  const resumeModule = await import(`./resume.${locale}`)
  return resumeModule.resumeData
}

// For static generation
export { resumeData as resumeDataEn } from './resume.en'
export { resumeData as resumeDataDe } from './resume.de'
