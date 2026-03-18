"use client"

import { useEffect, useState } from "react"

/**
 * Cover Letter Render Page
 *
 * Renders a cover letter for Puppeteer PDF export with professional
 * DIN 5008-inspired formatting, structured parsing, and serif typography.
 */

interface LetterStructure {
  senderBlock: string[]
  recipientBlock: string[]
  dateLine: string | null
  subjectLine: string | null
  greeting: string | null
  bodyParagraphs: string[][]
  signOff: string | null
  senderName: string[]
}

function isDateLine(line: string): boolean {
  return [
    /\d{1,2}\.\s*\w+\s+\d{4}/,
    /\w+\s+\d{1,2},?\s+\d{4}/,
    /\d{1,2}\.\d{1,2}\.\d{4}/,
    /\d{4}-\d{2}-\d{2}/,
  ].some((p) => p.test(line))
}

function isSubjectLine(line: string): boolean {
  return /^(Betreff|Re|Subject|Objet)\s*:/i.test(line.trim())
}

function isGreeting(line: string): boolean {
  const t = line.trim()
  return (
    t.startsWith("Sehr geehrte") ||
    t.startsWith("Dear ") ||
    t.startsWith("Liebe ") ||
    t.startsWith("Lieber ") ||
    t.startsWith("Guten Tag") ||
    t.startsWith("Hallo ")
  )
}

function isSignOff(line: string): boolean {
  const t = line.trim()
  return (
    t.startsWith("Mit freundlichen") ||
    t.startsWith("Mit besten") ||
    t.startsWith("Hochachtungsvoll") ||
    t.startsWith("Freundliche Gr") ||
    t.startsWith("Sincerely") ||
    t.startsWith("Best regards") ||
    t.startsWith("Kind regards") ||
    t.startsWith("Yours faithfully") ||
    t.startsWith("Yours sincerely") ||
    t.startsWith("Regards")
  )
}

function parseCoverLetter(text: string): LetterStructure {
  const lines = text.split("\n")
  const structure: LetterStructure = {
    senderBlock: [],
    recipientBlock: [],
    dateLine: null,
    subjectLine: null,
    greeting: null,
    bodyParagraphs: [],
    signOff: null,
    senderName: [],
  }

  type Phase = "sender" | "recipient" | "pre-body" | "body" | "post-signoff"
  let phase: Phase = "sender"
  let currentParagraph: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim()

    switch (phase) {
      case "sender":
        if (!trimmed) {
          if (structure.senderBlock.length > 0) phase = "recipient"
          continue
        }
        if (isDateLine(trimmed) || isSubjectLine(trimmed) || isGreeting(trimmed)) {
          phase = "recipient"
          i--
          continue
        }
        structure.senderBlock.push(trimmed)
        break

      case "recipient":
        if (!trimmed) {
          if (structure.recipientBlock.length > 0) phase = "pre-body"
          continue
        }
        if (isDateLine(trimmed) && !structure.dateLine) {
          structure.dateLine = trimmed
          if (structure.recipientBlock.length > 0) phase = "pre-body"
          continue
        }
        if (isSubjectLine(trimmed)) {
          structure.subjectLine = trimmed
          phase = "pre-body"
          continue
        }
        if (isGreeting(trimmed)) {
          structure.greeting = trimmed
          phase = "body"
          continue
        }
        structure.recipientBlock.push(trimmed)
        break

      case "pre-body":
        if (!trimmed) continue
        if (isDateLine(trimmed) && !structure.dateLine) {
          structure.dateLine = trimmed
          continue
        }
        if (isSubjectLine(trimmed)) {
          structure.subjectLine = trimmed
          continue
        }
        if (isGreeting(trimmed)) {
          structure.greeting = trimmed
          phase = "body"
          continue
        }
        break

      case "body":
        if (isSignOff(trimmed)) {
          if (currentParagraph.length > 0) {
            structure.bodyParagraphs.push([...currentParagraph])
            currentParagraph = []
          }
          structure.signOff = trimmed
          phase = "post-signoff"
          continue
        }
        if (!trimmed) {
          if (currentParagraph.length > 0) {
            structure.bodyParagraphs.push([...currentParagraph])
            currentParagraph = []
          }
          continue
        }
        currentParagraph.push(trimmed)
        break

      case "post-signoff":
        if (!trimmed) continue
        structure.senderName.push(trimmed)
        break
    }
  }

  if (currentParagraph.length > 0) {
    structure.bodyParagraphs.push([...currentParagraph])
  }

  return structure
}

export default function CoverLetterPage() {
  const [coverLetter, setCoverLetter] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCoverLetter() {
      try {
        const resp = await fetch("/api/cover-letter")
        if (resp.ok) {
          const data = await resp.json()
          setCoverLetter(data.content)
        }
      } catch (e) {
        console.error("Failed to fetch cover letter:", e)
      } finally {
        setLoading(false)
      }
    }
    fetchCoverLetter()
  }, [])

  if (loading) {
    return (
      <main className="cover-letter-page flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-gray-500 text-sm">Loading...</p>
      </main>
    )
  }

  if (!coverLetter) {
    return (
      <main className="cover-letter-page flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-gray-500 text-sm">No cover letter data found.</p>
      </main>
    )
  }

  let text = coverLetter.trim()
  if (text.startsWith("```")) {
    text = text.replace(/^```\w*\n?/, "").replace(/\n?```$/, "")
  }

  const letter = parseCoverLetter(text)

  return (
    <main className="cover-letter-page min-h-screen flex justify-center bg-gray-100 py-8 print:py-0 print:bg-white">
      <div
        className="content"
        style={{
          width: "210mm",
          minHeight: "297mm",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "10mm 18mm 18mm 18mm",
          fontSize: "11pt",
          lineHeight: "1.6",
          color: "#1a1a1a",
          fontFamily: "'Georgia', 'Times New Roman', serif",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.12)",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* Top accent border (hidden in print) */}
        <div
          className="no-print"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #004852, #2E3D50)",
          }}
        />

        {/* Sender contact info */}
        {letter.senderBlock.length > 0 && (
          <div
            style={{
              fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
              fontSize: "9.5pt",
              lineHeight: "1.5",
              color: "#555",
              marginBottom: "8mm",
            }}
          >
            {letter.senderBlock.map((line, i) => (
              <div key={`sender-${i}`} style={{ margin: 0 }}>
                {i === 0 ? (
                  <span style={{ fontWeight: 600, color: "#004852", fontSize: "10pt" }}>
                    {line}
                  </span>
                ) : (
                  line
                )}
              </div>
            ))}
          </div>
        )}

        {/* Recipient address */}
        {letter.recipientBlock.length > 0 && (
          <div style={{ fontSize: "11pt", lineHeight: "1.5", marginBottom: "6mm" }}>
            {letter.recipientBlock.map((line, i) => (
              <div key={`rcpt-${i}`} style={{ margin: 0 }}>
                {i === 0 ? <span style={{ fontWeight: 700 }}>{line}</span> : line}
              </div>
            ))}
          </div>
        )}

        {/* Date */}
        {letter.dateLine && (
          <div style={{ fontSize: "10.5pt", color: "#444", marginBottom: "6mm", textAlign: "right" }}>
            {letter.dateLine}
          </div>
        )}

        {/* Subject */}
        {letter.subjectLine && (
          <div style={{ fontSize: "11.5pt", fontWeight: 700, color: "#004852", marginBottom: "6mm" }}>
            {letter.subjectLine}
          </div>
        )}

        {/* Greeting */}
        {letter.greeting && (
          <p style={{ marginTop: "4mm", marginBottom: "4mm", fontSize: "11pt" }}>
            {letter.greeting}
          </p>
        )}

        {/* Body */}
        <div style={{ marginTop: "2mm" }}>
          {letter.bodyParagraphs.map((paragraph, pIdx) => (
            <p
              key={`para-${pIdx}`}
              style={{
                marginTop: 0,
                marginBottom: "4mm",
                textAlign: "justify",
                hyphens: "auto",
                lineHeight: "1.65",
              }}
            >
              {paragraph.join(" ")}
            </p>
          ))}
        </div>

        {/* Sign-off */}
        {letter.signOff && (
          <p style={{ marginTop: "8mm", marginBottom: "2mm", fontSize: "11pt" }}>
            {letter.signOff}
          </p>
        )}

        {/* Sender name */}
        {letter.senderName.length > 0 && (
          <div style={{ marginTop: "1mm", fontWeight: 600, color: "#004852" }}>
            {letter.senderName.map((line, i) => (
              <div key={`name-${i}`}>{line}</div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
