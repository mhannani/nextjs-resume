'use client'

import { BasicInfo } from '@/types/resume'

interface HeaderProps {
  basicInfo: BasicInfo
}

export function Header({ basicInfo }: HeaderProps) {
  return (
    <header className="text-center">
      <h1 className="leading-tight" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--resume-text)', margin: '0 0 1rem 0' }}>
        {basicInfo.FirstName} {basicInfo.LastName}, {basicInfo.Role}
      </h1>
    </header>
  )
}
