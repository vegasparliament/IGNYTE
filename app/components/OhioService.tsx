"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Shield, Star, Users } from "lucide-react"

const ohioStats = [
  { icon: Shield, number: "500+", label: "Ohio Clients Protected" },
  { icon: Users, number: "50+", label: "Licensed Officers" },
  { icon: Star, number: "15+", label: "Years in Ohio" },
  { icon: MapPin, number: "88", label: "Counties Covered" },
]

const ohioCities = [
  "Columbus",
  "Cleveland",
  "Cincinnati",
  "Toledo",
  "Akron",
  "Dayton",
  "Parma",
  "Canton",
  "Youngstown",
  "Lorain",
  "Hamilton",
  "Springfield",
]

export default function OhioService() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#92EBFF]/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <MapPin className="h-8 w-8 text-[#92EBFF]" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Proudly Serving the State of Ohio</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As a fully licensed Ohio security company, we provide comprehensive protection services across all 88
            counties. From the bustling streets of Columbus to the industrial centers of Cleveland and Cincinnati, Alpha
            One Defense is your trusted security partner.
          </p>
        </motion.div>

        {/* Ohio Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {ohioStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-background/50 backdrop-blur-sm hover:bg-background/60 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-[#92EBFF] mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-[#92EBFF] mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Ohio Map Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="bg-background/30 backdrop-blur-sm border-[#92EBFF]/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Statewide Coverage</h3>
                <p className="text-muted-foreground">
                  Our licensed security professionals serve major Ohio cities and surrounding areas
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {ohioCities.map((city, index) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-[#92EBFF]/10 hover:bg-[#92EBFF]/20 transition-colors"
                  >
                    <MapPin className="h-4 w-4 text-[#92EBFF] flex-shrink-0" />
                    <span className="text-sm font-medium">{city}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ohio License Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Card className="bg-[#92EBFF]/5 border-[#92EBFF]/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Shield className="h-12 w-12 text-[#92EBFF] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ohio Licensed & Bonded</h3>
              <p className="text-muted-foreground mb-4">
                Alpha One Defense operates under Ohio Private Investigator Security Guard (PISG) License
              </p>
              <div className="text-lg font-mono text-[#92EBFF] bg-background/50 rounded-lg p-3 inline-block">
                License #: 20252100583609
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Fully insured, bonded, and compliant with all Ohio Department of Commerce regulations
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
