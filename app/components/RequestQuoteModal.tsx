'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface RequestQuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RequestQuoteModal({ isOpen, onClose }: RequestQuoteModalProps) {
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
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you with a custom quote.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Select onValueChange={handleSelectChange}>
            <SelectTrigger>
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
          />
          <Input
            type="date"
            name="startDate"
            placeholder="Desired Start Date"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <Textarea
            name="details"
            placeholder="Additional Details"
            value={formData.details}
            onChange={handleChange}
          />
          <Button type="submit">Submit Quote Request</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
