import { NextResponse } from "next/server"

export async function POST(req: Request) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = "This is a simulated response from the Alpha One Defense AI assistant. How can I help you today?"

  return NextResponse.json({ role: "assistant", content: response })
}
