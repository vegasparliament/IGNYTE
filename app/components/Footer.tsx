"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import type React from "react"
import Image from "next/image"

const ClientLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1Asset%207HCAG-wCEuD2vWlAQtrL0VMBZCJmVrKQ9tR6.svg"
                alt="High Class Auto Glass Logo"
                width={36}
                height={36}
                className="mr-2"
              />
              <h4 className="text-lg font-semibold">High Class Auto Glass</h4>
            </div>
            <p className="text-sm">Expert auto glass repair and installation services.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <ClientLink href="#services" className="text-sm hover:underline">
                  Services
                </ClientLink>
              </li>
              <li>
                <ClientLink href="#manufacturers" className="text-sm hover:underline">
                  Manufacturers
                </ClientLink>
              </li>
              <li>
                <ClientLink href="#car-models" className="text-sm hover:underline">
                  Car Models
                </ClientLink>
              </li>
              <li>
                <ClientLink href="#mobile-installation" className="text-sm hover:underline">
                  Mobile Installation
                </ClientLink>
              </li>
              <li>
                <ClientLink href="#service-areas" className="text-sm hover:underline">
                  Service Areas
                </ClientLink>
              </li>
              <li>
                <ClientLink href="#contact" className="text-sm hover:underline">
                  Contact Us
                </ClientLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <Link href="https://facebook.com" className="text-foreground hover:text-primary">
                <Facebook size={24} />
              </Link>
              <Link href="https://twitter.com" className="text-foreground hover:text-primary">
                <Twitter size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-foreground hover:text-primary">
                <Instagram size={24} />
              </Link>
            </div>
            <p className="text-sm">
              Phone:{" "}
              <a href="tel:702-343-1175" className="hover:underline">
                702-343-1175
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:highclassautoglassllc@gmail.com" className="hover:underline">
                Email us
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p>&copy; {new Date().getFullYear()} High Class Auto Glass. All rights reserved.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Designed by:{" "}
            <a href="https://www.Ignyte.media" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Ignyte Media
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

