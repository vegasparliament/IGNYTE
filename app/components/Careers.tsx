"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Check } from "lucide-react"
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

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#92EBFF] text-background hover:bg-[#92EBFF]/90 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsApplicationOpen(true)}
          >
            Apply Now
          </Button>
        </div>
      </div>

      <JobApplication isOpen={isApplicationOpen} onClose={() => setIsApplicationOpen(false)} />
    </section>
  )
}
