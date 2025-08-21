import Navbar from "./navbar"
import MobileNavWrapper from "./mobile-nav-wrapper"
import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <MobileNavWrapper />
    </div>
  )
}
