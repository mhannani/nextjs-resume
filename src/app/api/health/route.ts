import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    service: "resume",
    timestamp: new Date().toISOString(),
  });
}
