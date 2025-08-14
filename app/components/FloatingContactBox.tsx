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
import { MessageCircle, X, Phone, Loader2 } from "lucide-react"
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
              className="rounded-full w-14 h-14 bg-[#92EBFF] text-background hover:bg-[#92EBFF]/90 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Open Contact Form</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Contact Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: 100, y: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            exit={{ scale: 0, opacity: 0, x: 100, y: 100 }}
            className="fixed bottom-20 md:bottom-6 right-6 z-40 w-80 max-w-[calc(100vw-2rem)]"
          >
            <Card className="bg-background/95 backdrop-blur-lg border-[#92EBFF]/20 shadow-2xl">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-[#92EBFF]">Contact Us</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 hover:bg-[#92EBFF]/10"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close Contact Form</span>
                  </Button>
                </div>
                <div className="text-center">
                  <a
                    href="tel:1-800-731-9221"
                    className="inline-flex items-center text-sm font-semibold text-[#92EBFF] hover:text-[#92EBFF]/80 transition-colors"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    1-800-731-9221
                  </a>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="floating-name" className="text-xs">
                      Name
                    </Label>
                    <Input
                      id="floating-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-8 text-sm bg-background/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="floating-email" className="text-xs">
                      Email
                    </Label>
                    <Input
                      id="floating-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-8 text-sm bg-background/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="floating-phone" className="text-xs">
                      Phone
                    </Label>
                    <Input
                      id="floating-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-8 text-sm bg-background/50"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <Label htmlFor="floating-inquiry" className="text-xs">
                      Inquiry Type
                    </Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger className="h-8 text-sm bg-background/50">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="security">Security Services</SelectItem>
                        <SelectItem value="consultation">Security Consultation</SelectItem>
                        <SelectItem value="quote">Request a Quote</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="floating-message" className="text-xs">
                      Message
                    </Label>
                    <Textarea
                      id="floating-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="text-sm bg-background/50 resize-none"
                      placeholder="How can we help you?"
                      rows={3}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-8 text-sm bg-[#92EBFF] text-background hover:bg-[#92EBFF]/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
