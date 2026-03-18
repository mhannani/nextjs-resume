import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

export const metadata: Metadata = {
  title: 'Mohamed HANNANI - Generative AI Scientist',
  description: 'Data Scientist with a robust data analysis, statistical modeling, data mining, and machine learning background.',
  keywords: ['Data Scientist', 'AI', 'Machine Learning', 'Resume', 'CV', 'Mohamed HANNANI'],
  authors: [{ name: 'Mohamed HANNANI', url: 'https://mhannani.me' }],
  openGraph: {
    title: 'Mohamed HANNANI - Generative AI Scientist',
    description: 'Data Scientist with a robust data analysis, statistical modeling, data mining, and machine learning background.',
    url: 'https://resume.mhannani.me',
    siteName: 'Mohamed HANNANI Resume',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
