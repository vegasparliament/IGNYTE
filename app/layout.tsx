import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "sonner"
import SplashScreen from "./components/SplashScreen"
import BottomNav from "./components/BottomNav"
import type React from "react"

export const metadata: Metadata = {
  title: "ALPHA ONE DEFENSE - Elite Security Solutions",
  description: "Protecting Your Assets with Unparalleled Expertise and Advanced Strategies",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-clip">
        <SplashScreen />
        {children}
        <BottomNav />
        <Toaster />
      </body>
    </html>
  )
}
