/**
 * Cover Letter PDF Export API
 *
 * POST /api/export-cover-letter-pdf
 * Body: { content: string }
 * Returns: application/pdf binary
 *
 * Uses Puppeteer to render the cover letter page and export as A4 PDF.
 * Same approach as the resume PDF export.
 */
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { content } = body

    if (!content) {
      return NextResponse.json(
        { error: "Cover letter content is required" },
        { status: 400 }
      )
    }

    // Dynamic import of puppeteer
    let puppeteer
    try {
      puppeteer = await import("puppeteer")
    } catch {
      return NextResponse.json(
        {
          error: "Puppeteer is not installed. Run: npm install puppeteer",
        },
        { status: 501 }
      )
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      `http://localhost:${process.env.PORT || 3000}`

    // Step 1: Store the cover letter text temporarily
    const storeResponse = await fetch(`${baseUrl}/api/cover-letter`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    })

    if (!storeResponse.ok) {
      return NextResponse.json(
        { error: "Failed to store cover letter data" },
        { status: 500 }
      )
    }

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

    // Set viewport for A4
    await page.setViewport({ width: 1280, height: 1760 })

    // Navigate to the cover letter render page
    await page.goto(`${baseUrl}/cover-letter`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    })

    // Wait for content to render (client component fetches data asynchronously)
    await page.waitForSelector(".content", { timeout: 30000 })

    // Emulate print media so @media print CSS rules apply
    await page.emulateMediaType("print")

    // Step 3: Export as PDF
    const pdf = await page.pdf({
      format: "A4",
      margin: {
        top: "0mm",
        bottom: "0mm",
        left: "0mm",
        right: "0mm",
      },
      printBackground: true,
      preferCSSPageSize: true,
    })

    await browser.close()

    // Step 4: Return PDF binary (NO runtime change, TS-only cast)
    // Use the *exact* body type expected by NextResponse constructor
    type NextResponseBody = ConstructorParameters<typeof NextResponse>[0]
    return new NextResponse(pdf as unknown as NextResponseBody, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="cover_letter.pdf"',
        "Content-Length": String(pdf.length),
      },
    })
  } catch (error) {
    console.error("Cover letter PDF export error:", error)
    return NextResponse.json(
      {
        error: `Cover letter PDF export failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      },
      { status: 500 }
    )
  }
}