"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Shield, Clock, FileCheck, Users, Building, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { formatPhoneNumber } from "@/utils/formatPhoneNumber"

const checkTypes = [
  {
    icon: Users,
    title: "Individual Background Checks",
    description:
      "Comprehensive personal background verification for employment, tenant screening, and personal security.",
    features: ["Criminal History", "Employment Verification", "Education Verification", "Reference Checks"],
  },
  {
    icon: Building,
    title: "Corporate Background Checks",
    description:
      "Business verification and due diligence services for partnerships, investments, and vendor screening.",
    features: ["Business Registration", "Financial History", "Legal Compliance", "Reputation Analysis"],
  },
  {
    icon: Shield,
    title: "Security Clearance Support",
    description:
      "Assistance with security clearance applications and background investigations for government positions.",
    features: ["SF-86 Assistance", "Interview Preparation", "Documentation Support", "Clearance Maintenance"],
  },
  {
    icon: FileCheck,
    title: "Pre-Employment Screening",
    description: "Thorough screening services to help employers make informed hiring decisions.",
    features: [
      "Drug Testing Coordination",
      "Skills Verification",
      "Professional License Checks",
      "Social Media Screening",
    ],
  },
]

const benefits = [
  "Nationwide coverage across all 50 states",
  "Fast turnaround times (24-72 hours)",
  "FCRA compliant processes",
  "Secure, encrypted data handling",
  "24/7 customer support",
  "Competitive pricing packages",
]

export default function BackgroundChecks() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    checkType: "",
    urgency: "",
    details: "",
    _subject: "AOD Background Check Request",
    _replyto: "",
    _cc: "remus@alphaonedefense.com, joe@alphaonedefense.com",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === "phone") {
      setFormData((prev) => ({ ...prev, [name]: formatPhoneNumber(value) }))
    } else if (name === "email") {
      setFormData((prev) => ({ ...prev, [name]: value, _replyto: value }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xpwaqjbr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Background check request received! We'll contact you within 24 hours.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          checkType: "",
          urgency: "",
          details: "",
          _subject: "AOD Background Check Request",
          _replyto: "",
          _cc: "remus@alphaonedefense.com, joe@alphaonedefense.com",
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
    <section id="background-checks" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Nationwide Background Checks</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive background verification services across all 50 states. Fast, accurate, and FCRA compliant
            investigations for individuals and businesses.
          </p>
        </motion.div>

        {/* Service Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {checkTypes.map((check, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/50 backdrop-blur-sm hover:bg-background/60 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <check.icon className="h-8 w-8 text-[#92EBFF]" />
                    <CardTitle className="text-xl">{check.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{check.description}</p>
                  <ul className="space-y-2">
                    {check.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-[#92EBFF] rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <Card className="bg-background/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <Clock className="h-6 w-6 text-[#92EBFF]" />
                Why Choose Our Background Check Services?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#92EBFF] flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Request Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <Search className="h-6 w-6 text-[#92EBFF]" />
                Request Background Check
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
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
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="checkType">Type of Background Check</Label>
                    <Select onValueChange={(value) => handleSelectChange("checkType", value)} required>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select check type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual Background Check</SelectItem>
                        <SelectItem value="corporate">Corporate Background Check</SelectItem>
                        <SelectItem value="security-clearance">Security Clearance Support</SelectItem>
                        <SelectItem value="pre-employment">Pre-Employment Screening</SelectItem>
                        <SelectItem value="tenant">Tenant Screening</SelectItem>
                        <SelectItem value="custom">Custom Investigation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select onValueChange={(value) => handleSelectChange("urgency", value)} required>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard (3-5 business days)</SelectItem>
                        <SelectItem value="expedited">Expedited (1-2 business days)</SelectItem>
                        <SelectItem value="rush">Rush (24-48 hours)</SelectItem>
                        <SelectItem value="emergency">Emergency (Same day)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    className="bg-background/50"
                    placeholder="Please provide any specific requirements, scope of investigation, or additional information..."
                    rows={4}
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
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Request Background Check
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  All background checks are conducted in compliance with FCRA regulations. We'll contact you within 24
                  hours to discuss your specific requirements and provide a detailed quote.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
