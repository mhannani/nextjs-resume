/**
 * PDF Export API
 *
 * POST /api/export-pdf
 * Body: { data: ResumeData, locale: "en" | "de" }
 * Returns: application/pdf binary
 *
 * Uses Puppeteer to render the resume page server-side and export as PDF.
 * The tailored resume data is stored in the shared in-memory store,
 * then Puppeteer navigates to the page with ?tailored=true to read it.
 */
import { NextRequest, NextResponse } from "next/server"
import { setTailoredData, clearTailoredData } from "@/lib/tailored-store"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { data, locale = "en" } = body

    if (!data) {
      return NextResponse.json(
        { error: "Resume data is required" },
        { status: 400 }
      )
    }

    // Dynamic import of puppeteer (only available server-side)
    let puppeteer
    try {
      puppeteer = await import("puppeteer")
    } catch {
      return NextResponse.json(
        {
          error: "Puppeteer is not installed. Run: npm install puppeteer",
          fallback: "Use window.print() in the browser for now",
        },
        { status: 501 }
      )
    }

    // Step 1: Store the tailored data in the shared in-memory store
    setTailoredData(locale, data)

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      `http://localhost:${process.env.PORT || 3000}`

    // Step 2: Launch Puppeteer and render the page
    const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || undefined
    const browser = await puppeteer.default.launch({
      headless: true,
      executablePath,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
    })

    const page = await browser.newPage()

    // Set viewport to A4-ish dimensions
    await page.setViewport({ width: 1280, height: 1760 })

    // Navigate to the resume page with tailored flag so it reads from the store
    await page.goto(`${baseUrl}/${locale}?tailored=true`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    })

    // Wait for content to fully render
    await page.waitForSelector(".content", { timeout: 10000 })

    // Emulate print media so @media print CSS rules apply
    await page.emulateMediaType("print")

    // Step 3: Export as PDF
    const pdf = await page.pdf({
      format: "A4",
      margin: {
        top: "0.5cm",
        bottom: "0.5cm",
        left: "0",
        right: "0",
      },
      printBackground: true,
      preferCSSPageSize: true,
    })

    await browser.close()

    // Clean up tailored data from the store
    clearTailoredData(locale)

    // Step 4: Return PDF binary (NO runtime change, TS-only cast)
    type NextResponseBody = ConstructorParameters<typeof NextResponse>[0]
    return new NextResponse(pdf as unknown as NextResponseBody, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="resume_${locale}.pdf"`,
        "Content-Length": String(pdf.length),
      },
    })
  } catch (error) {
    console.error("PDF export error:", error)
    return NextResponse.json(
      {
        error: `PDF export failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      },
      { status: 500 }
    )
  }
}