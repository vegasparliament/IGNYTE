"use client"

import { useState, useEffect } from "react"
import { Home, Shield, User, Mail, Phone, Search } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"

const navItems = [
  { name: "Home", href: "home", icon: Home },
  { name: "Services", href: "services", icon: Shield },
  { name: "About", href: "about", icon: User },
  { name: "Requirements", href: "hiring-requirements", icon: Search },
  { name: "Contact", href: "contact", icon: Mail },
]

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState("home")
  const [isCallModalOpen, setIsCallModalOpen] = useState(false)

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

  const handleCallNow = () => {
    setIsCallModalOpen(true)
  }

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t border-[#92EBFF]/10 md:hidden">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {navItems.map((item) => (
            <ScrollLink
              key={item.href}
              to={item.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex flex-col items-center py-2 px-3 transition-all ${
                activeSection === item.href ? "text-[#92EBFF]" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-xs">{item.name}</span>
              {activeSection === item.href && (
                <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-[#92EBFF] rounded-full transform -translate-x-1/2" />
              )}
            </ScrollLink>
          ))}
          <button
            onClick={handleCallNow}
            className="flex flex-col items-center py-2 px-3 transition-all text-red-500 animate-pulse hover:animate-none"
          >
            <Phone className="h-5 w-5 mb-1" />
            <span className="text-xs">Call 24/7</span>
          </button>
        </div>
      </nav>
      {isCallModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="bg-background p-6 rounded-lg shadow-lg w-5/6 max-w-sm">
            <h3 className="text-xl font-bold mb-4">Call Now 24/7</h3>
            <p className="mb-4">Our support line is always available.</p>
            <div className="flex flex-col space-y-2">
              <button
                className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                onClick={() => (window.location.href = "tel:1-800-731-9221")}
              >
                Call 1-800-731-9221
              </button>
              <button
                className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
                onClick={() => setIsCallModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
