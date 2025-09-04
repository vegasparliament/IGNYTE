"use client"
import { motion } from "framer-motion"
import { Card, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    name: "Windshield Replacement",
    description:
      "Our expert technicians use state-of-the-art equipment to replace your windshield, ensuring optimal visibility and safety.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Windshield%20Repair%20&%20Replacement-Npp9JoanRtanZuv2SwmFsi6iOBoU4w.png",
    duration: "2-3 hours",
  },
  {
    name: "Power Window Repair",
    description:
      "We diagnose and fix issues with power windows, from faulty motors to damaged regulators, restoring smooth operation.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Power%20Window%20Replacement-G394WUyuz1axowP8wSrBrOgWIuaraG.png",
    duration: "1-2 hours",
  },
  {
    name: "Quarter & Back Glass Replacement",
    description:
      "Whether it's quarter windows or back glass, we provide precise fitting and installation for a factory-perfect finish.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Quarter%20&%20Back%20Glass%20Replacement-L8zIr37d6G8N3JN38jNl1UoNF4wcpx.png",
    duration: "3-4 hours",
  },
  {
    name: "Water Leak Detection & Repair",
    description:
      "Our team uses advanced techniques to identify and fix water leaks, preventing interior damage and mold growth.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Water%20Leak%20Detection%20&%20Repair-HuUdVwSJyqHlef3Ycdo0OTRgprO4Ge.png",
    duration: "2-4 hours",
  },
  {
    name: "Gasket Replacement",
    description:
      "We replace worn-out or damaged gaskets to ensure a proper seal, preventing water leaks and wind noise.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gasket%20Replacement-khpgua6jmkRDkeZ8wDIiTtCl9j465M.png",
    duration: "1-2 hours",
  },
]

export default function Services() {
  return (
    <div className="bg-background py-16 px-4" id="services">
      <div className="container mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          Our Services
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href="#contact">
                <Card className="overflow-hidden border-0 bg-black/20 backdrop-blur-xl transition-all duration-300 hover:scale-105">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <CardTitle className="text-lg font-semibold text-white mb-2">{service.name}</CardTitle>
                        <p className="text-sm text-gray-300 line-clamp-2">{service.description}</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs text-white">
                        {service.duration}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
