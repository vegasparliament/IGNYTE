"use client"

import { Suspense } from "react"
import { MobileNav } from "./mobile-nav"

function MobileNavFallback() {
  return <div className="h-16 md:hidden bg-background/80 backdrop-blur-lg border-t border-border/50" />
}

export default function MobileNavWrapper() {
  return (
    <Suspense fallback={<MobileNavFallback />}>
      <MobileNav />
    </Suspense>
  )
}
