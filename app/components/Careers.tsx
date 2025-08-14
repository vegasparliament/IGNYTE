"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Check, CheckCircle } from "lucide-react"
import JobApplication from "./JobApplication"
import Image from "next/image"

const benefits = [
  "Competitive salary and bonuses",
  "Comprehensive health insurance",
  "Ongoing professional training",
  "Career advancement opportunities",
]

const requirements = [
  "Strong ethical principles",
  "Professional security experience",
  "Excellent physical condition",
  "Strong communication skills",
]

export default function Careers() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false)

  return (
    <section id="careers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-[400px] mb-12 rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lupulone_group_of_secret_service_and_soldiers_males_and_femal_4c116a8e-561b-4156-8f55-53bee608ce4a_2-sGdWzwUJQEWsUewNBzVsLBB5tMczgQ.png"
            alt="AOD Security Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-4xl font-bold mb-4">Join AOD</h2>
            <p className="text-xl text-white/90 max-w-2xl">
              Welcome to Alpha One Defense, where excellence meets opportunity. Join our elite team of security
              professionals and be part of something extraordinary.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-background/50 backdrop-blur-lg border-[#92EBFF]/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="h-5 w-5 text-[#92EBFF]" />
                <h3 className="text-xl font-bold text-[#92EBFF]">Benefits</h3>
              </div>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#92EBFF] flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-background/50 backdrop-blur-lg border-[#92EBFF]/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="h-5 w-5 text-[#92EBFF]" />
                <h3 className="text-xl font-bold text-[#92EBFF]">Requirements</h3>
              </div>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#92EBFF] flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4 text-[#92EBFF]">Ready to Join Our Elite Team?</h3>
            <p className="text-muted-foreground mb-6">
              Take the first step towards a rewarding career in professional security. Our comprehensive application
              process ensures we find the right fit for both you and our organization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
              <div className="flex items-center justify-center gap-2 p-3 bg-[#92EBFF]/5 rounded-lg border border-[#92EBFF]/10">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Quick Application</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 bg-[#92EBFF]/5 rounded-lg border border-[#92EBFF]/10">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-3 bg-[#92EBFF]/5 rounded-lg border border-[#92EBFF]/10">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Professional Growth</span>
              </div>
            </div>
          </div>

          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#92EBFF] to-[#92EBFF]/60 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-[#92EBFF] to-[#92EBFF]/80 text-background hover:from-[#92EBFF]/90 hover:to-[#92EBFF]/70 transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-[#92EBFF]/25 px-12 py-6 text-lg font-bold rounded-full border-2 border-[#92EBFF]/20 backdrop-blur-sm group"
              onClick={() => setIsApplicationOpen(true)}
            >
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="flex flex-col items-start">
                  <span className="text-xl font-bold">Apply Now</span>
                  <span className="text-xs opacity-90 font-normal">Join Alpha One Defense</span>
                </div>
                <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</div>
              </div>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4 max-w-md mx-auto">
            All applications are reviewed within 24 hours. We're committed to finding exceptional security
            professionals.
          </p>
        </div>
      </div>

      <JobApplication isOpen={isApplicationOpen} onClose={() => setIsApplicationOpen(false)} />
    </section>
  )
}
