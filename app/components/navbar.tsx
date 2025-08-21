"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { useCallback } from "react"
import { useRouter } from "next/navigation"
import { Phone } from "lucide-react"

export default function Navbar() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [])
  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl text-primary">
          ABC
        </Link>
        {/* Hide desktop navigation on mobile */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrollToSection("services")}>
                Services
              </NavigationMenuLink>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/services/nationwide-background-check" title="Nationwide Background Check">
                    Comprehensive national background screening
                  </ListItem>
                  <ListItem href="/services/ohio-tenant-screening" title="Ohio Tenant Screening">
                    Thorough screening for Ohio landlords
                  </ListItem>
                  <ListItem href="/services/past-address-ssn-verification" title="Past Address/SSN Verification">
                    Verify residence history and SSN
                  </ListItem>
                  <ListItem href="/services/personal-reference-verification" title="Personal Reference Verification">
                    Validate personal references
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} onClick={() => scrollToSection("pricing")}>
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Hide desktop buttons on mobile */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Sign In</Button>
          <Button className="glow" onClick={() => scrollToSection("get-started-today")}>
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => (window.location.href = "tel:18007319221")}
          >
            <Phone className="mr-2 h-4 w-4" /> Call Us: 1 (800) 731-9221
          </Button>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
  const router = useRouter()
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          onClick={(e) => {
            e.preventDefault()
            router.push(href)
          }}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
