"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Loader2, Shield } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { formatPhoneNumber } from "@/utils/formatPhoneNumber"

const keyPoints = ["Elite Training", "Selective Recruitment", "Military Background", "Discreet Operations"]

export default function Hero() {
  const [currentPoint, setCurrentPoint] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: "",
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoint((prev) => (prev + 1) % keyPoints.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: string } },
  ) => {
    const { name, value } = e.target
    if (name === "phone") {
      setFormData((prev) => ({ ...prev, [name]: formatPhoneNumber(value) }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const submissionData = {
      ...formData,
      _subject: "AOD Get Started Form Submission",
      _replyto: formData.email,
      _cc: "remus@alphaonedefense.com, joe@alphaonedefense.com",
    }

    try {
      const response = await fetch("https://formspree.io/f/xgvozkzg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      if (response.ok) {
        toast.success("Your request has been received. We'll be in touch soon!")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          message: "",
        })
      } else {
        toast.error("There was an error submitting your request. Please try again.")
      }
    } catch (error) {
      toast.error("There was an error submitting your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lupulone_A_group_of_bodyguards_wearing_black_suits_._The_body_e47977ac-2e72-434e-b426-d72475af0bd5_2-Wp9Tc3jIAC4bkdRZagrDugylCqviVh.png")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start space-y-6 max-w-xl w-full"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-[#92EBFF] font-mono">Elite</span>{" "}
              <span className="whitespace-nowrap">Private Detail</span>{" "}
              <span className="whitespace-nowrap">Officers</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-md">
              Setting the standard in professional security services with unmatched expertise.
            </p>

            <div className="h-20 overflow-hidden w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPoint}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-medium text-[#92EBFF]"
                >
                  {keyPoints[currentPoint]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md lg:w-[400px]"
          >
            <Card className="bg-background/80 backdrop-blur-md border-[#92EBFF]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-bold text-[#92EBFF]">
                  <Shield className="h-5 w-5" />
                  Get Started
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background/50"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="serviceType">Service Type</Label>
                    <Select
                      name="serviceType"
                      onValueChange={(value) => handleChange({ target: { name: "serviceType", value } })}
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="private-detail">Elite Private Detail</SelectItem>
                        <SelectItem value="executive-protection">Executive Protection</SelectItem>
                        <SelectItem value="facility-security">Facility Security</SelectItem>
                        <SelectItem value="event-security">Event Security</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background/50"
                      placeholder="Please provide any specific details or questions about our services."
                      rows={3}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#92EBFF] text-background hover:bg-[#92EBFF]/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Request Urgent Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    *We prioritize urgent requests and will respond within 2 hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
