'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from 'framer-motion'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, inquiryType: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your server
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="heading-section text-center text-foreground mb-20"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-input text-foreground text-lg py-6"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-input text-foreground text-lg py-6"
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-input text-foreground text-lg py-6"
            />
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="bg-input text-foreground text-lg py-6">
                <SelectValue placeholder="Type of Inquiry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="service">Service Request</SelectItem>
                <SelectItem value="career">Career Inquiry</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-input text-foreground text-lg py-4"
              rows={6}
            />
            <Button type="submit" className="btn-hover text-lg py-6 px-8 w-full">Submit</Button>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="heading-subsection text-foreground mb-8">Contact Information</h3>
            <p className="mb-4 text-muted-foreground text-xl">Phone: (555) 123-4567</p>
            <p className="mb-4 text-muted-foreground text-xl">Email: info@alphaonedefense.com</p>
            <p className="mb-4 text-muted-foreground text-xl">Address: 123 Security St, Columbus, OH 43215</p>
            <p className="mb-8 text-muted-foreground text-xl">Business Hours: Monday - Friday, 9am - 5pm</p>
            <h4 className="heading-card text-foreground mb-4">Emergency Contact</h4>
            <p className="text-muted-foreground text-xl">For urgent security needs: (555) 987-6543</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
