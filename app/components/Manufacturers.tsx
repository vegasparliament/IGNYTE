"use client"
import { motion } from "framer-motion"
import { Truck } from "lucide-react"

const manufacturers = [
  "Freightliner",
  "Peterbilt",
  "Kenworth",
  "Mack",
  "Volvo",
  "Western Star",
  "International",
  "Isuzu",
  "Hino",
]

export default function Manufacturers() {
  return (
    <div className="bg-background py-16 px-4 relative overflow-hidden" id="manufacturers">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.h3
          className="text-3xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Semi Truck Manufacturers We Service
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {manufacturers.map((manufacturer, index) => (
            <motion.div
              key={manufacturer}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card/30 backdrop-blur-sm rounded-lg p-6 h-full border border-primary/10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <Truck className="text-primary w-8 h-8" />
                  <span className="text-sm font-medium text-muted-foreground">{`0${index + 1}`.slice(-2)}</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{manufacturer}</h4>
                <div className="w-12 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </div>
  )
}
