'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    location: '',
    startDate: '',
    details: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, serviceType: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Quote requested:', formData)
    // Here you would typically send the data to your server
  }

  return (
    <section id="quote" className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="heading-lg text-center mb-16 text-foreground">Request a Quote</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-input text-foreground"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-input text-foreground"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-input text-foreground"
          />
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger className="bg-input text-foreground">
              <SelectValue placeholder="Type of Service Needed" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="armed">Armed Security</SelectItem>
              <SelectItem value="unarmed">Unarmed Security</SelectItem>
              <SelectItem value="event">Event Security</SelectItem>
              <SelectItem value="executive">Executive Protection</SelectItem>
              <SelectItem value="patrol">Mobile Patrol</SelectItem>
              <SelectItem value="loss">Loss Prevention</SelectItem>
              <SelectItem value="custom">Custom Solution</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            name="location"
            placeholder="Service Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="bg-input text-foreground"
          />
          <Input
            type="date"
            name="startDate"
            placeholder="Desired Start Date"
            value={formData.startDate}
            onChange={handleChange}
            required
            className="bg-input text-foreground"
          />
          <Textarea
            name="details"
            placeholder="Additional Details"
            value={formData.details}
            onChange={handleChange}
            className="bg-input text-foreground"
          />
          <Button type="submit">Get My Free Quote</Button>
        </form>
        <p className="text-center mt-4 text-sm text-muted-foreground">
          Our team will respond within 24 hours to discuss your security needs.
        </p>
      </div>
    </section>
  )
}
