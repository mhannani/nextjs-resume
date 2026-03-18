'use client'

import { Certificate } from '@/types/resume'

interface CertificatesProps {
  certificates: Certificate[]
}

export function Certificates({ certificates }: CertificatesProps) {
  return (
    <section className="mb-6">
      <h2 style={{ fontSize: '1.5rem', borderBottom: '2px solid var(--resume-text)', paddingBottom: '0.1rem', lineHeight: '1.8rem', color: 'var(--resume-text)', marginBottom: '0.5rem' }}>
        CERTIFICATES
      </h2>
      <div className="space-y-2">
        {certificates.map((cert, index) => (
          <div key={index} style={{ fontSize: '1.12rem' }}>
            <a
              href={cert.Certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-primary hover:underline"
            >
              {cert.Course}
            </a>
            <span style={{ color: 'var(--resume-muted)' }}> - {cert.Platform} ({cert.Year})</span>
          </div>
        ))}
      </div>
    </section>
  )
}
