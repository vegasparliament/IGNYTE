"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Phone } from "lucide-react"
import { toast } from "sonner"
import { formatPhoneNumber } from "@/utils/formatPhoneNumber"

export default function Contact() {
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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-md">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>

        <div className="text-center mb-8">
          <a href="tel:1-800-731-9221" className="inline-flex items-center text-xl font-semibold text-[#92EBFF]">
            <Phone className="mr-2 h-5 w-5" />
            1-800-731-9221
          </a>
        </div>

        <motion.form
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-1"
              placeholder="(123) 456-7890"
            />
          </div>
          <div>
            <Label htmlFor="inquiryType">Inquiry Type</Label>
            <Select onValueChange={handleSelectChange} required>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select inquiry type" />
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
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mt-1"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
