"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Briefcase, MapPin } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Law Enforcement Support",
    description: "Providing backup and assistance to local law enforcement agencies.",
  },
  {
    icon: Users,
    title: "Government Escorts",
    description: "Secure transportation and protection for government officials and dignitaries.",
  },
  {
    icon: Briefcase,
    title: "Backup Details",
    description: "Additional security personnel for high-risk situations or large-scale events.",
  },
  {
    icon: MapPin,
    title: "On-Location Services",
    description: "Comprehensive security solutions tailored to specific locations and events.",
  },
]

export default function AdditionalServices() {
  return (
    <section id="additional-services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Specialized Security Solutions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm hover:bg-background/60 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
