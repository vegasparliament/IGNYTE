"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Phone, Loader2, Shield, Clock, CheckCircle } from "lucide-react"
import { toast } from "sonner"
import { formatPhoneNumber } from "@/utils/formatPhoneNumber"

export default function FloatingContactBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    _subject: "AOD Contact Form Submission",
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

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/meoezgkw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success("Message received! We'll get back to you soon.")
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          message: "",
          _subject: "AOD Contact Form Submission",
          _replyto: "",
          _cc: "remus@alphaonedefense.com, joe@alphaonedefense.com",
        })
        setIsOpen(false)
      } else {
        toast.error("There was an error sending your message. Please try again.")
      }
    } catch (error) {
      toast.error("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Floating Contact Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-20 md:bottom-6 right-6 z-40"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="rounded-full w-16 h-16 bg-gradient-to-r from-[#92EBFF] to-[#92EBFF]/80 text-background hover:from-[#92EBFF]/90 hover:to-[#92EBFF]/70 shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#92EBFF]/20 backdrop-blur-sm group"
            >
              <div className="flex flex-col items-center">
                <MessageCircle className="h-5 w-5 mb-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium">Contact</span>
              </div>
              <span className="sr-only">Open Contact Form</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Contact Form */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[45] bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ scale: 0, opacity: 0, x: 100, y: 100 }}
              animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              exit={{ scale: 0, opacity: 0, x: 100, y: 100 }}
              className="fixed bottom-20 md:bottom-6 right-6 z-[50] w-96 max-w-[calc(100vw-2rem)]"
            >
              <Card className="bg-background/95 backdrop-blur-xl border border-[#92EBFF]/30 shadow-2xl ring-1 ring-[#92EBFF]/10 overflow-hidden">
                {/* Header with gradient */}
                <CardHeader className="pb-3 bg-gradient-to-r from-[#92EBFF]/10 to-[#92EBFF]/5 border-b border-[#92EBFF]/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-[#92EBFF]" />
                      <CardTitle className="text-lg text-[#92EBFF]">Contact Alpha One Defense</CardTitle>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8 hover:bg-[#92EBFF]/10 rounded-full"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close Contact Form</span>
                    </Button>
                  </div>

                  {/* Quick contact info */}
                  <div className="space-y-2 mt-3">
                    <div className="text-center">
                      <a
                        href="tel:1-800-731-9221"
                        className="inline-flex items-center text-lg font-bold text-[#92EBFF] hover:text-[#92EBFF]/80 transition-colors"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        1-800-731-9221
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-green-500" />
                        <span>24/7 Available</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span>Licensed PISG</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-4">
                  <div className="mb-4 p-3 bg-[#92EBFF]/5 rounded-lg border border-[#92EBFF]/10">
                    <p className="text-xs text-muted-foreground text-center">
                      <strong className="text-[#92EBFF]">Elite Security Services</strong> • Ohio Licensed • Professional
                      consultation available 24/7
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="floating-name" className="text-xs font-medium text-[#92EBFF]">
                          Full Name *
                        </Label>
                        <Input
                          id="floating-name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-9 text-sm bg-background/70 border-[#92EBFF]/20 focus:border-[#92EBFF] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="floating-phone" className="text-xs font-medium text-[#92EBFF]">
                          Phone *
                        </Label>
                        <Input
                          id="floating-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="h-9 text-sm bg-background/70 border-[#92EBFF]/20 focus:border-[#92EBFF] transition-colors"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="floating-email" className="text-xs font-medium text-[#92EBFF]">
                        Email Address *
                      </Label>
                      <Input
                        id="floating-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-9 text-sm bg-background/70 border-[#92EBFF]/20 focus:border-[#92EBFF] transition-colors"
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="floating-inquiry" className="text-xs font-medium text-[#92EBFF]">
                        Service Interest *
                      </Label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger className="h-9 text-sm bg-background/70 border-[#92EBFF]/20 focus:border-[#92EBFF]">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="executive-protection">Executive Protection</SelectItem>
                          <SelectItem value="facility-security">Facility Security</SelectItem>
                          <SelectItem value="event-security">Event Security</SelectItem>
                          <SelectItem value="background-checks">Background Checks</SelectItem>
                          <SelectItem value="security-consultation">Security Consultation</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="quote">Request Quote</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="floating-message" className="text-xs font-medium text-[#92EBFF]">
                        Message *
                      </Label>
                      <Textarea
                        id="floating-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="text-sm bg-background/70 border-[#92EBFF]/20 focus:border-[#92EBFF] resize-none transition-colors"
                        placeholder="Please describe your security needs or questions..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-3">
                      <Button
                        type="submit"
                        className="w-full h-10 text-sm bg-gradient-to-r from-[#92EBFF] to-[#92EBFF]/80 text-background hover:from-[#92EBFF]/90 hover:to-[#92EBFF]/70 font-medium transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Send Secure Message
                          </>
                        )}
                      </Button>

                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">
                          <CheckCircle className="inline h-3 w-3 text-green-500 mr-1" />
                          Response within 2 hours • Confidential consultation
                        </p>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
