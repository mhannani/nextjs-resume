import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { i18n } from '@/lib/i18n/config'
import type { Locale } from '@/lib/i18n/config'

export default function RootPage() {
  // Get browser language preference from Accept-Language header
  const headersList = headers()
  const acceptLanguage = headersList.get('accept-language') || ''

  // Parse the Accept-Language header to find preferred locale
  let preferredLocale: Locale = i18n.defaultLocale

  // Simple language detection from Accept-Language header
  // Format: "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7"
  const languages = acceptLanguage.split(',').map((lang) => {
    const [code] = lang.split(';')
    return code.trim().split('-')[0].toLowerCase()
  })

  // Find the first language that matches our supported locales
  for (const lang of languages) {
    if (i18n.locales.includes(lang as Locale)) {
      preferredLocale = lang as Locale
      break
    }
  }

  // Redirect to the preferred locale
  redirect(`/${preferredLocale}`)
}
