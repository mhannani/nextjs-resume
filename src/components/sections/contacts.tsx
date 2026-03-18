'use client'

import { ContactInfo } from '@/types/resume'
import { FaPhone, FaEnvelope, FaGithub, FaLinkedinIn, FaEarthAfrica } from 'react-icons/fa6'

interface ContactsProps {
  contacts: ContactInfo[]
}

const iconMap: Record<string, any> = {
  'fas fa-phone': FaPhone,
  'fa-solid fa-envelope': FaEnvelope,
  'fab fa-github': FaGithub,
  'fa-brands fa-linkedin-in': FaLinkedinIn,
  'fa-solid fa-earth-africa': FaEarthAfrica,
}

export function Contacts({ contacts }: ContactsProps) {
  return (
    <div className="flex flex-wrap justify-between" style={{ fontSize: '1.12rem', lineHeight: '4rem', color: 'var(--resume-text)' }}>
      {contacts.map((contact, index) => {
        const Icon = iconMap[contact.Icon] || FaEnvelope
        const content = (
          <div key={index} className="flex items-center" style={{ gap: '0.5rem' }}>
            <Icon style={{ fontSize: '1.5rem', color: 'var(--resume-text)' }} />
            <span>{contact.Info}</span>
          </div>
        )

        return contact.Url ? (
          <a
            key={index}
            href={contact.Url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            {content}
          </a>
        ) : (
          content
        )
      })}
    </div>
  )
}
