"use client"

import { useState, useEffect } from "react"
import { Home, Shield, User, Phone } from "lucide-react"
import type React from "react"

const navItems = [
  { name: "Home", href: "home", icon: Home },
  { name: "Services", href: "services", icon: Shield },
  { name: "About", href: "about", icon: User },
  { name: "Contact", href: "contact", icon: Phone },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: "auto", block: "start" })
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Main Content */}
      <main className="flex-1 pb-20 md:pb-0">{children}</main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-background/80 backdrop-blur-lg border-t border-[#92EBFF]/10">
          <div className="flex justify-around items-center max-w-md mx-auto">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex flex-col items-center py-3 px-5 transition-all ${
                  activeSection === item.href ? "text-[#92EBFF]" : "text-muted-foreground"
                }`}
              >
                <item.icon className="h-6 w-6 mb-1" />
                <span className="text-xs">{item.name}</span>
                {activeSection === item.href && (
                  <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-[#92EBFF] rounded-full transform -translate-x-1/2" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
