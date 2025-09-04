"use client"
import { motion } from "framer-motion"

const carModels = [
  "Toyota",
  "Honda",
  "Dodge",
  "BMW",
  "Audi",
  "Chevrolet",
  "Kia",
  "Acura",
  "Nissan",
  "Ford",
  "Cadillac",
  "Subaru",
  "Hyundai",
  "Volkswagen",
  "Mazda",
  "Infiniti",
  "Tesla",
  "Jeep",
  "Chrysler",
  "Mercedes",
]

export default function CarModels() {
  return (
    <div className="bg-background py-16 px-4" id="car-models">
      <div className="container mx-auto max-w-4xl">
        <motion.h3
          className="text-3xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Car Models We Service
        </motion.h3>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {carModels.map((model, index) => (
            <motion.span
              key={model}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-foreground hover:bg-primary/20 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {model}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

