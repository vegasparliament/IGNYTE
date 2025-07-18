"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ServiceRequestForm } from "@/app/components/service-request-form"
import { submitServiceRequest } from "@/app/actions/submit-service-request"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  details: string[]
  additionalFields?: {
    name: string
    label: string
    type: "input" | "textarea" | "select"
    options?: string[]
  }[]
  scrollToGetStarted: () => void
}

export default function ServiceCard({
  icon,
  title,
  description,
  details,
  additionalFields,
  scrollToGetStarted,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [showForm])

  const handleCloseForm = () => {
    setIsClosing(true)
    setTimeout(() => {
      setShowForm(false)
      setIsClosing(false)
    }, 300) // Match this with the animation duration
  }

  return (
    <>
      <Card className="group border-border/50 bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80 transition-colors">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="mr-4 text-primary">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="space-y-4">
            <div className={cn("grid transition-all duration-300", isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden">
                <ul className="list-disc list-inside space-y-2 pt-4 border-t border-border/50">
                  {details.map((detail, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                aria-controls={`details-${title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex-1"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-2" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-2" />
                    Show More
                  </>
                )}
              </Button>
              <Button className="flex-1 glow" onClick={scrollToGetStarted}>
                Start Process
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      {showForm && (
        <div
          className={cn(
            "fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            "animate-fade-in",
            isClosing && "animate-fade-out",
          )}
          onClick={handleCloseForm}
        >
          <div
            className={cn(
              "bg-card rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto",
              "animate-scale-in",
              isClosing && "animate-scale-out",
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-card p-4 flex justify-between items-center border-b">
              <h2 className="text-2xl font-bold">{title}</h2>
              <Button variant="ghost" size="icon" onClick={handleCloseForm}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="p-6">
              <ServiceRequestForm
                serviceName={title}
                onSubmit={submitServiceRequest}
                additionalFields={additionalFields}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
