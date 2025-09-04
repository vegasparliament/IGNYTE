"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, MapPin, PenToolIcon as Tool } from "lucide-react"
import type React from "react" // Import React

const ClientButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  return (
    <Button
      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default function MobileInstallation() {
  const features = [
    { icon: MapPin, text: "Service at your location" },
    { icon: Clock, text: "Flexible scheduling" },
    { icon: Tool, text: "Full range of services" },
    { icon: CheckCircle, text: "Quality guaranteed" },
  ]

  const handleScheduleClick = () => {
    const heroSection = document.querySelector("form")
    heroSection?.scrollIntoView({ behavior: "smooth" })
    const serviceSelect = document.querySelector('select[name="service"]') as HTMLSelectElement
    if (serviceSelect) {
      serviceSelect.value = "mobile-installation"
      serviceSelect.dispatchEvent(new Event("change", { bubbles: true }))
    }
  }

  return (
    <div className="relative bg-background py-16 px-4 overflow-hidden" id="mobile-installation">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent"></div>
      <div className="container mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Mobile Installation Service</h2>
          <p className="text-xl text-muted-foreground">Can't come to us? Our expert team brings the service to you!</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-8 w-8 text-blue-500" />
                  </div>
                  <div className="text-lg">{feature.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-black/20 backdrop-blur-xl p-8 rounded-lg shadow-2xl border border-white/10"
          >
            <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
            <ol className="list-decimal list-inside space-y-4 mb-6">
              <li>Schedule your appointment</li>
              <li>We come to your location</li>
              <li>Expert service performed on-site</li>
              <li>Enjoy your repaired vehicle</li>
            </ol>
            <ClientButton onClick={handleScheduleClick}>Schedule Mobile Service</ClientButton>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

