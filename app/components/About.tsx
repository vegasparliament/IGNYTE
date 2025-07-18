"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const achievements = [
  { number: "45+", label: "Years of Combined Experience" },
  { number: "24/7", label: "Support Available" },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About ALPHA ONE DEFENSE
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-sm md:text-base mb-4 text-muted-foreground">
              At ALPHA ONE DEFENSE, we are committed to providing unparalleled security solutions that safeguard lives,
              assets, and peace of mind. Our mission is to set the gold standard in the security industry through
              innovation, expertise, and unwavering dedication to our clients' safety.
            </p>
            <p className="text-sm md:text-base mb-4 text-muted-foreground">
              We believe in a proactive approach to security, constantly evolving our strategies and leveraging
              cutting-edge technologies to stay ahead of potential threats and ensure the highest level of protection
              for our clients.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden glow"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lupulone_group_of_secret_service_and_soldiers_and_police_male_459921db-1df0-4c84-b0e5-e543f45f47d9_2-OgzE21iQG7BCNDJliECAabwIusnLmY.png"
              alt="Elite Tactical Team Member in Combat Gear"
              layout="fill"
              objectFit="cover"
              className="filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8">Our Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="glass hover:glow transition-all duration-300 hover:scale-105 hover:bg-primary/5"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{achievement.number}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{achievement.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
