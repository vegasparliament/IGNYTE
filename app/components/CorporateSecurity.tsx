"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Shield, Lock, Eye, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Comprehensive Protection",
    description: "Tailored security solutions for your entire corporate infrastructure",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Advanced systems to manage and monitor entry points",
  },
  {
    icon: Eye,
    title: "Surveillance",
    description: "State-of-the-art camera systems and 24/7 monitoring",
  },
  {
    icon: Users,
    title: "Executive Protection",
    description: "Personalized security for high-profile corporate individuals",
  },
]

export default function CorporateSecurity() {
  return (
    <section id="corporate-security" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Secure Your Business</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Protecting your business with advanced technology and expert strategies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-secondary">
                  <CardContent className="p-6">
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lupulone_A_group_of_bodyguards_wearing_black_suits_._The_body_1555c59e-d145-49cd-9747-940d161ef7bf_0-ACRYgUnEeuZ2Y2YndTaTsdVqWMLvza.png"
              alt="Corporate Security"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold mb-2 text-white">Elite Protection Services</h3>
              <p className="text-white/90 mb-4">
                Our expert team provides comprehensive security solutions for businesses of all sizes.
              </p>
              <Button className="bg-[#92EBFF] text-background hover:bg-[#92EBFF]/90">Learn More</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
