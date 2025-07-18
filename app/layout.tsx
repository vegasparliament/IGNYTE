import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Layout from "./components/layout"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ace Background Check",
  description: "Comprehensive background screening solutions for businesses of all sizes.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-dark`}>
        <Layout>{children}</Layout>
        <Toaster />
      </body>
    </html>
  )
}
