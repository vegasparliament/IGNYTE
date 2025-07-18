"use client"

import { Home, Search, Menu, ChevronRight, DollarSign, Phone } from "lucide-react"
import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const [activeTab, setActiveTab] = useState("home")
  const [open, setOpen] = useState(false)
  const closeSheet = () => setOpen(false)

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="flex items-center justify-around bg-background/80 backdrop-blur-lg border-t border-border/50 h-16 px-4">
          <NavItem
            icon={<Home className="h-5 w-5" />}
            label="Home"
            onClick={() => scrollToSection("home")}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            icon={<Search className="h-5 w-5" />}
            label="Services"
            onClick={() => scrollToSection("services")}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <NavItem
            icon={<DollarSign className="h-5 w-5" />}
            label="Pricing"
            onClick={() => scrollToSection("pricing")}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "flex flex-col items-center justify-center h-full rounded-none flex-1",
                  activeTab === "menu" && "text-primary",
                )}
                onClick={() => {
                  setActiveTab("menu")
                  setOpen(true)
                }}
              >
                <Menu className="h-5 w-5" />
                <span className="text-xs mt-1">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] bg-background/95 backdrop-blur-lg border-l border-border/50"
            >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services">
                    <AccordionTrigger>Services</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <MobileNavLink
                          label="Nationwide Background Check"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="Ohio Tenant Screening"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="Past Address/SSN Verification"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="Personal Reference Verification"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="Past Employment Verification"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="Ohio County Criminal Record"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="Federal Bankruptcy, Liens & Judgments"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="Professional License Verification"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="Education Verification"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="National Sex Offenders Registry"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="People Locator"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="Ohio Driver's History"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="Federal Criminal"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="Death Records"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                        <MobileNavLink
                          label="UCC Records"
                          onClick={() => scrollToSection("services")}
                          closeSheet={closeSheet}
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-4 space-y-2">
                  <MobileNavLink label="Services" onClick={() => scrollToSection("services")} closeSheet={closeSheet} />
                  <MobileNavLink label="Pricing" onClick={() => scrollToSection("pricing")} closeSheet={closeSheet} />
                  <MobileNavLink label="About" onClick={() => scrollToSection("about")} closeSheet={closeSheet} />
                  <MobileNavLink
                    label="Contact"
                    onClick={() => scrollToSection("get-started-today")}
                    closeSheet={closeSheet}
                  />
                </div>
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => {
                    window.location.href = "tel:18007319221"
                    closeSheet()
                  }}
                >
                  <Phone className="mr-2 h-4 w-4" /> Call Us: 1 (800) 731-9221
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Spacer for bottom navigation */}
      <div className="h-16 md:hidden" />
    </>
  )
}

function NavItem({ href, icon, label, activeTab, setActiveTab, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center flex-1 h-full",
        activeTab === label.toLowerCase() && "text-primary",
      )}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  )
}

function MobileNavLink({ label, onClick, closeSheet }) {
  return (
    <button
      onClick={() => {
        onClick()
        closeSheet()
      }}
      className="flex items-center justify-between py-3 text-sm hover:text-primary transition-colors w-full"
    >
      {label}
      <ChevronRight className="h-4 w-4" />
    </button>
  )
}
