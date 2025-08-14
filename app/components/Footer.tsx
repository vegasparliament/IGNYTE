"use client"

import Link from "next/link"
import { Shield, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">ALPHA ONE DEFENSE</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 mb-4 md:mb-0">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Careers
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="text-center mt-4 space-y-2">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ALPHA ONE DEFENSE. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            Developed by{" "}
            <Link
              href="https://ignyte.media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#92EBFF] hover:text-[#92EBFF]/80 transition-colors inline-flex items-center gap-1"
            >
              Ignyte Media
              <ExternalLink className="h-3 w-3" />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
