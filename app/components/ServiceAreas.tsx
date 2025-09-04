"use client"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

const serviceAreas = [
  { name: "Las Vegas", color: "bg-red-500" },
  { name: "North Las Vegas", color: "bg-blue-500" },
  { name: "Henderson", color: "bg-green-500" },
  { name: "Summerlin", color: "bg-yellow-500" },
  { name: "Spring Valley", color: "bg-purple-500" },
  { name: "Paradise", color: "bg-pink-500" },
  { name: "Boulder City", color: "bg-indigo-500" },
  { name: "Mesquite", color: "bg-orange-500" },
  { name: "Pahrump", color: "bg-teal-500" },
  { name: "Laughlin", color: "bg-cyan-500" },
]

export default function ServiceAreas() {
  return (
    <div className="bg-background py-16 px-4" id="service-areas">
      <div className="container mx-auto max-w-5xl">
        <motion.h3
          className="text-3xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Service Areas
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.name}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg -m-0.5 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"></div>
              <div className="relative flex items-center p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-primary/10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:-translate-y-1">
                <div className={`w-6 h-6 ${area.color} rounded-full mr-4 shadow-lg`}></div>
                <span className="text-foreground font-medium">{area.name}</span>
                <MapPin className="ml-auto text-primary w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
