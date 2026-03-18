import { getResumeData } from '@/data'
import { getTailoredData } from '@/lib/tailored-store'
import { Header } from '@/components/sections/header'
import { Contacts } from '@/components/sections/contacts'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Education } from '@/components/sections/education'
import { Skills } from '@/components/sections/skills'
import { Languages } from '@/components/sections/languages'
import { Certificates } from '@/components/sections/certificates'
import { ExportButton } from '@/components/ui/export-button'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import type { Locale } from '@/lib/i18n/config'
import { i18n } from '@/lib/i18n/config'
import { getTranslations } from '@/lib/i18n/translations'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function Home({
  params,
  searchParams,
}: {
  params: { locale: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  if (!i18n.locales.includes(params.locale as Locale)) {
    notFound()
  }

  let resumeData
  if (searchParams.tailored === 'true') {
    const tailored = getTailoredData(params.locale)
    resumeData = tailored || await getResumeData(params.locale as Locale)
  } else {
    resumeData = await getResumeData(params.locale as Locale)
  }

  return (
    <main className="resume-page min-h-screen flex justify-center pt-2 pb-4">
      <ExportButton />
      <LanguageSwitcher currentLocale={params.locale as Locale} />

      <div
        className="content w-[80rem] min-h-[110rem] mx-auto mt-2 mb-4 py-16 transition-all duration-200"
        style={{
          backgroundColor: 'var(--resume-bg)',
          boxShadow: '1rem 2rem 3rem rgba(46, 61, 80, 0.3)',
        }}
      >
        <div className="px-12 py-2">
          <Header basicInfo={resumeData.BasicInfo} />
          <Contacts contacts={resumeData.BasicInfo.Contacts} />
          {resumeData.Profile && (
            <section className="mb-6">
              <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid var(--resume-text)', paddingBottom: '0.1rem', lineHeight: '1.8rem', color: 'var(--resume-text)', marginBottom: '0.5rem' }}>
                {getTranslations(params.locale as Locale).sections.profile}
              </h2>
              <p style={{ fontSize: '1.12rem', color: 'var(--resume-text)', lineHeight: '1.5' }}>
                {resumeData.Profile}
              </p>
            </section>
          )}
          <Experience experience={resumeData.Experience} locale={params.locale as Locale} />
          <Projects projects={resumeData.Projects} locale={params.locale as Locale} />
          <Education education={resumeData.Education} locale={params.locale as Locale} />
          <Skills skills={resumeData.Skills} locale={params.locale as Locale} />
          {resumeData.Certificates && resumeData.Certificates.length > 0 && (
            <Certificates certificates={resumeData.Certificates} />
          )}
          <Languages languages={resumeData.Languages} locale={params.locale as Locale} />
        </div>
      </div>
    </main>
  )
}
