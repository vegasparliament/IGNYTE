"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon, Phone } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import type React from "react"

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Manufacturers", href: "#manufacturers" },
  { name: "Car Models", href: "#car-models" },
  { name: "Mobile Installation", href: "#mobile-installation" },
  { name: "Service Areas", href: "#service-areas" },
  { name: "Contact", href: "#contact" },
]

const ClientLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    }
    if (onClick) onClick()
  }

  return (
    <Link href={href} onClick={handleClick} className="transition-colors duration-200 hover:text-[#A9F3FF]">
      {children}
    </Link>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const elem = document.getElementById(hash.replace("#", ""))
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <motion.header
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1Asset%207HCAG-wCEuD2vWlAQtrL0VMBZCJmVrKQ9tR6.svg"
            alt="GCAG Logo"
            width={36}
            height={36}
            className="mr-2"
          />
          <span className="text-2xl font-bold">HCAG</span>
        </Link>
        <nav className="hidden md:flex items-center">
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full md:w-auto">
            {navItems.map((item) => (
              <li key={item.name} className="w-full md:w-auto">
                <Button
                  variant="ghost"
                  className="w-full md:w-auto justify-start md:justify-center hover:bg-highlight/20 hover:text-highlight transition-colors duration-200"
                  asChild
                >
                  <ClientLink href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </ClientLink>
                </Button>
              </li>
            ))}
            <li className="w-full md:w-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full md:w-auto justify-start md:justify-center"
                    onClick={(e) => {
                      e.stopPropagation()
                      // Don't close the mobile menu here
                    }}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    <span>Call Us</span>
                  </Button>
                </DialogTrigger>
                <DialogContent onInteractOutside={(e) => e.preventDefault()}>
                  <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogDescription>Call us now for immediate assistance!</DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-center items-center py-4">
                    <Button asChild variant="default" size="lg">
                      <a href="tel:702-343-1175" className="text-lg">
                        <Phone className="mr-2 h-5 w-5" /> 702-343-1175
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className="md:hidden bg-background p-4 absolute top-full left-0 right-0 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start hover:bg-highlight/20 hover:text-highlight transition-colors duration-200"
                    asChild
                  >
                    <ClientLink href={item.href} onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </ClientLink>
                  </Button>
                </li>
              ))}
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Don't close the mobile menu here
                      }}
                    >
                      <Phone className="mr-2 h-4 w-4" /> Call Us
                    </Button>
                  </DialogTrigger>
                  <DialogContent onInteractOutside={(e) => e.preventDefault()}>
                    <DialogHeader>
                      <DialogTitle>Contact Us</DialogTitle>
                      <DialogDescription>Call us now for immediate assistance!</DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center items-center py-4">
                      <Button asChild variant="default" size="lg">
                        <a href="tel:702-343-1175" className="text-lg">
                          <Phone className="mr-2 h-5 w-5" /> 702-343-1175
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
