"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Clock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ClientButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  return (
    <Button size="lg" onClick={onClick}>
      {children}
    </Button>
  )
}

const formatPhoneNumber = (value: string) => {
  if (!value) return value
  const phoneNumber = value.replace(/[^\d]/g, "")
  const phoneNumberLength = phoneNumber.length
  if (phoneNumberLength < 4) return phoneNumber
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
}

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("https://formspree.io/f/xovjnqjk", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        toast({
          title: "Request Submitted Successfully",
          description: "Thank you! A representative will contact you shortly to assist with your auto glass needs.",
          className: "bg-green-50 dark:bg-green-900",
        })
        setFormData({ name: "", phone: "", service: "" })
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }) => {
      const { name, value } = e.target
      setFormData((prev) => ({
        ...prev,
        [name]: name === "phone" ? formatPhoneNumber(value) : value,
      }))
    },
    [],
  )

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative bg-background text-foreground py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-background"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Expert Auto Glass Repair & Installation</h2>
            <p className="text-lg mb-4">
              Trust our skilled technicians for all your auto glass needs. We provide top-quality service for
              windshields, power windows, and more.
            </p>
            <div className="flex items-center mb-8 text-primary">
              <Clock className="mr-2" />
              <span className="font-semibold">24/7 Emergency Services Available</span>
            </div>
            <ClientButton onClick={scrollToServices}>Our Services</ClientButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="bg-card text-card-foreground p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">Get Started</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(***) ***-****"
                    maxLength={14}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <Select
                    name="service"
                    value={formData.service}
                    onValueChange={(value) => handleChange({ target: { name: "service", value } })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="windshield-replacement">Windshield Replacement</SelectItem>
                      <SelectItem value="power-window-repair">Power Window Repair</SelectItem>
                      <SelectItem value="quarter-back-glass-replacement">Quarter & Back Glass Replacement</SelectItem>
                      <SelectItem value="water-leak-detection">Water Leak Detection & Repair</SelectItem>
                      <SelectItem value="gasket-replacement">Gasket Replacement</SelectItem>
                      <SelectItem value="mobile-installation">Mobile Installation Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full">
                  Get Started
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

