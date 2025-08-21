"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "./navbar"
import MobileNavWrapper from "./mobile-nav-wrapper"
import ChatWidgetWrapper from "./chat-widget-wrapper"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <main className="flex-1 relative">{children}</main>

      <MobileNavWrapper />
      <ChatWidgetWrapper />
    </div>
  )
}
