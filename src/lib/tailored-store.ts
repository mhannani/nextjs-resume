/**
 * Shared in-memory store for tailored resume data.
 * Used by the PDF export flow: the backend POSTs tailored data,
 * and Puppeteer renders the page reading from this store.
 */
import type { ResumeData } from '@/types/resume'

const store: Map<string, ResumeData> = new Map()

export function setTailoredData(locale: string, data: ResumeData) {
  store.set(`tailored_${locale}`, data)
}

export function getTailoredData(locale: string): ResumeData | undefined {
  return store.get(`tailored_${locale}`)
}

export function clearTailoredData(locale: string) {
  store.delete(`tailored_${locale}`)
}
