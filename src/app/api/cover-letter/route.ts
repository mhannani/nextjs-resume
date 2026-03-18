/**
 * Cover Letter Data API
 *
 * GET /api/cover-letter    → Returns stored cover letter text
 * PUT /api/cover-letter    → Stores cover letter text (from backend before PDF export)
 */
import { NextRequest, NextResponse } from "next/server"

// In-memory store for cover letter text (same pattern as resume API)
let storedCoverLetter: string | null = null

export async function GET() {
  if (!storedCoverLetter) {
    return NextResponse.json(
      { error: "No cover letter stored" },
      { status: 404 }
    )
  }

  return NextResponse.json({
    content: storedCoverLetter,
  })
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { content } = body as { content: string }

    if (!content) {
      return NextResponse.json(
        { error: "Cover letter content is required" },
        { status: 400 }
      )
    }

    storedCoverLetter = content

    return NextResponse.json({
      success: true,
      message: "Cover letter stored",
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to store cover letter" },
      { status: 500 }
    )
  }
}
