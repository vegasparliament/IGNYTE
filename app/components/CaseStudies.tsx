'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SlideInSection from './SlideInSection'

const caseStudies = [
  {
    title: "Fortune 500 Company Security Overhaul",
    description: "Implemented a comprehensive security system for a multinational corporation, reducing security incidents by 75%.",
  },
  {
    title: "High-Profile Event Protection",
    description: "Provided security for a major international conference, ensuring the safety of world leaders and dignitaries.",
  },
  {
    title: "Executive Protection Program",
    description: "Developed and executed a personalized protection plan for a high-net-worth individual and their family.",
  },
  {
    title: "Cybersecurity Infrastructure Upgrade",
    description: "Modernized the digital security framework for a financial institution, preventing potential data breaches.",
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="full-screen-section bg-muted">
      <div className="container mx-auto px-4">
        <SlideInSection>
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 font-roboto-condensed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Case Studies
          </motion.h2>
        </SlideInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <SlideInSection key={index} fromLeft={index % 2 === 0}>
              <Card className="security-hover transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <Button variant="outline">Read More</Button>
                </CardContent>
              </Card>
            </SlideInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
