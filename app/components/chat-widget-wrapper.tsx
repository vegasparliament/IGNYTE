"use client"

import { Suspense } from "react"
import ChatWidget from "./chat-widget"

function ChatWidgetFallback() {
  return <div className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-primary/20 animate-pulse z-50" />
}

export default function ChatWidgetWrapper() {
  return (
    <Suspense fallback={<ChatWidgetFallback />}>
      <ChatWidget />
    </Suspense>
  )
}
