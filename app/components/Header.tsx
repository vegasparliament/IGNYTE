"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link as ScrollLink } from "react-scroll"

const menuItems = [
  { name: "Home", href: "home" },
  { name: "Services", href: "services" },
  { name: "About", href: "about" },
  { name: "Background Checks", href: "background-checks" },
  { name: "Careers", href: "careers" },
  { name: "Requirements", href: "hiring-requirements" },
  { name: "Security News", href: "security-news" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isCallModalOpen, setIsCallModalOpen] = useState(false)

  const handleCallNow = () => {
    setIsCallModalOpen(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-[#92EBFF]/10">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex flex-col items-start space-y-1">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-[#92EBFF]" />
                <span className="font-bold text-lg text-[#92EBFF]">AOD</span>
              </div>
              <span className="text-xs text-muted-foreground font-mono">License #: 20252100583609</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              {menuItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`text-sm cursor-pointer ${
                    activeSection === item.href ? "text-[#92EBFF]" : "text-muted-foreground hover:text-[#92EBFF]"
                  } transition-colors`}
                >
                  {item.name}
                </ScrollLink>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex items-center space-x-2 text-red-500 border-red-500 hover:bg-red-500 hover:text-white hover:animate-pulse transition-all duration-300 bg-transparent"
                onClick={handleCallNow}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">Call 24/7</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-[#92EBFF]" />
              ) : (
                <Menu className="h-6 w-6 text-[#92EBFF]" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-background/95 backdrop-blur-lg border-t border-[#92EBFF]/10"
            >
              <div className="container px-4 py-4">
                {menuItems.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`block w-full py-2 text-left ${
                      activeSection === item.href ? "text-[#92EBFF]" : "text-muted-foreground hover:text-[#92EBFF]"
                    } transition-colors`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Call Modal */}
      <AnimatePresence>
        {isCallModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm"
            onClick={() => setIsCallModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-background/90 p-8 rounded-lg shadow-lg max-w-sm w-full m-4 border border-[#92EBFF]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#92EBFF]">24/7 Support</h3>
              <p className="mb-6 text-muted-foreground">Our team is always available to assist you.</p>
              <Button
                variant="default"
                className="w-full bg-[#92EBFF] text-background hover:bg-[#92EBFF]/90 mb-4"
                onClick={() => (window.location.href = "tel:1-800-731-9221")}
              >
                Call 1-800-731-9221
              </Button>
              <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsCallModalOpen(false)}>
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
