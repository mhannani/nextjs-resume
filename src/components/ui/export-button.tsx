'use client'

import { FaFileExport } from 'react-icons/fa6'

export function ExportButton() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  return (
    <div className="fixed top-24 right-4 pointer-events-none" style={{ zIndex: 100000 }}>
      <button
        onClick={handlePrint}
        className="pointer-events-auto rounded-full border-none cursor-pointer shadow-lg hover:opacity-90 transition-all duration-200 no-print flex items-center justify-center"
        style={{
          backgroundColor: '#fba68c',
          color: '#2E3D50',
          width: '40px',
          height: '40px',
          fontSize: '1.25rem',
        }}
        aria-label="Export to PDF"
      >
        <FaFileExport />
      </button>
    </div>
  )
}
