"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  X,
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  FileCheck,
  Send,
  Loader2,
} from "lucide-react"
import { toast } from "sonner"
import { formatPhoneNumber } from "../../utils/formatPhoneNumber"

interface JobApplicationProps {
  isOpen: boolean
  onClose: () => void
}

export default function JobApplication({ isOpen, onClose }: JobApplicationProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "Ohio",
    zipCode: "",
    position: "",
    experience: "",
    availability: "",
    coverLetter: "",
  })

  const [resume, setResume] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const positions = [
    "Armed Security Officer",
    "Unarmed Security Officer",
    "Security Supervisor",
    "Mobile Patrol Officer",
    "Event Security Specialist",
    "Corporate Security Officer",
    "Loss Prevention Specialist",
    "Security Consultant",
    "Emergency Response Officer",
    "Executive Protection Specialist",
  ]

  const experienceLevels = [
    "Entry Level (0-1 years)",
    "Some Experience (1-3 years)",
    "Experienced (3-5 years)",
    "Senior Level (5-10 years)",
    "Expert Level (10+ years)",
  ]

  const availabilityOptions = [
    "Full-time",
    "Part-time",
    "Weekends Only",
    "Nights Only",
    "Flexible Schedule",
    "On-call Availability",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (name === "phone") {
      const formatted = formatPhoneNumber(value)
      setFormData((prev) => ({ ...prev, [name]: formatted }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      validateAndSetFile(file)
    }
  }

  const validateAndSetFile = (file: File) => {
    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]

    if (!allowedTypes.includes(file.type)) {
      toast.error("Please upload a PDF, DOC, or DOCX file")
      return
    }

    // Validate file size (10MB max)
    const maxSize = 10 * 1024 * 1024 // 10MB in bytes
    if (file.size > maxSize) {
      toast.error("File size must be less than 10MB")
      return
    }

    setResume(file)
    toast.success(`Resume "${file.name}" selected successfully`)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      validateAndSetFile(file)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    const requiredFields = ["firstName", "lastName", "email", "phone", "position"]
    const missingFields = requiredFields.filter((field) => !formData[field as keyof typeof formData])

    if (missingFields.length > 0) {
      toast.error(`Please fill in all required fields: ${missingFields.join(", ")}`)
      return
    }

    if (!resume) {
      toast.error("Please upload your resume")
      return
    }

    setIsSubmitting(true)

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData()

      // Add all form fields explicitly
      formDataToSend.append("firstName", formData.firstName)
      formDataToSend.append("lastName", formData.lastName)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("address", formData.address)
      formDataToSend.append("city", formData.city)
      formDataToSend.append("state", formData.state)
      formDataToSend.append("zipCode", formData.zipCode)
      formDataToSend.append("position", formData.position)
      formDataToSend.append("experience", formData.experience)
      formDataToSend.append("availability", formData.availability)
      formDataToSend.append("coverLetter", formData.coverLetter)

      // Add file with proper name
      formDataToSend.append("resume", resume, resume.name)

      // Add additional fields for email routing
      formDataToSend.append("_cc", "remus@alphaonedefense.com,joe@alphaonedefense.com")
      formDataToSend.append("_replyto", formData.email)
      formDataToSend.append(
        "_subject",
        `AOD Job Application - ${formData.position} - ${formData.firstName} ${formData.lastName}`,
      )

      console.log("Submitting application to Formspree...")

      const response = await fetch("https://formspree.io/f/xanqbygv", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      })

      console.log("Response status:", response.status)
      const responseData = await response.json()
      console.log("Response data:", responseData)

      if (response.ok) {
        toast.success("Application submitted successfully! We'll review your application within 24 hours.")

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "Ohio",
          zipCode: "",
          position: "",
          experience: "",
          availability: "",
          coverLetter: "",
        })
        setResume(null)
        onClose()
      } else {
        console.error("Formspree error:", responseData)
        toast.error(responseData.error || "Failed to submit application. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      toast.error("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <Card className="bg-background/95 backdrop-blur-sm border-2">
              <CardHeader className="relative pb-6">
                <Button variant="ghost" size="sm" className="absolute right-4 top-4 h-8 w-8 p-0" onClick={onClose}>
                  <X className="h-4 w-4" />
                </Button>
                <div className="text-center">
                  <CardTitle className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                    Join Alpha One Defense
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Apply for a rewarding career in professional security services
                  </p>
                  <div className="flex justify-center gap-2 mt-4">
                    <Badge variant="secondary" className="bg-[#92EBFF]/10 text-[#92EBFF]">
                      Licensed PISG Company
                    </Badge>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                      Competitive Benefits
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-500">
                      Career Growth
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <User className="h-5 w-5 text-[#92EBFF]" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="border-2 focus:border-[#92EBFF]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="border-2 focus:border-[#92EBFF]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-2 focus:border-[#92EBFF]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="(555) 123-4567"
                          className="border-2 focus:border-[#92EBFF]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-[#92EBFF]" />
                      Address Information
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-sm font-medium">
                        Street Address
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="border-2 focus:border-[#92EBFF]"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-sm font-medium">
                          City
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="border-2 focus:border-[#92EBFF]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-sm font-medium">
                          State
                        </Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="border-2 focus:border-[#92EBFF]"
                          readOnly
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode" className="text-sm font-medium">
                          ZIP Code
                        </Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="border-2 focus:border-[#92EBFF]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Position Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-[#92EBFF]" />
                      Position Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="position" className="text-sm font-medium">
                          Desired Position *
                        </Label>
                        <Select onValueChange={(value) => handleSelectChange("position", value)}>
                          <SelectTrigger className="border-2 focus:border-[#92EBFF]">
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                          <SelectContent>
                            {positions.map((position) => (
                              <SelectItem key={position} value={position}>
                                {position}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience" className="text-sm font-medium">
                          Experience Level
                        </Label>
                        <Select onValueChange={(value) => handleSelectChange("experience", value)}>
                          <SelectTrigger className="border-2 focus:border-[#92EBFF]">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            {experienceLevels.map((level) => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability" className="text-sm font-medium flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Availability
                      </Label>
                      <Select onValueChange={(value) => handleSelectChange("availability", value)}>
                        <SelectTrigger className="border-2 focus:border-[#92EBFF]">
                          <SelectValue placeholder="Select your availability" />
                        </SelectTrigger>
                        <SelectContent>
                          {availabilityOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-[#92EBFF]" />
                      Resume Upload *
                    </h3>
                    <div
                      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                        dragActive
                          ? "border-[#92EBFF] bg-[#92EBFF]/5"
                          : "border-muted-foreground/25 hover:border-[#92EBFF]/50"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      {resume ? (
                        <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2 text-green-600">
                            <CheckCircle className="h-5 w-5" />
                            <span className="font-medium">Resume Selected</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <div className="font-medium">{resume.name}</div>
                            <div>{formatFileSize(resume.size)}</div>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setResume(null)}
                            className="mt-2"
                          >
                            Remove File
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto" />
                          <div>
                            <p className="text-sm font-medium">Drop your resume here or click to browse</p>
                            <p className="text-xs text-muted-foreground">Supports PDF, DOC, DOCX (Max 10MB)</p>
                          </div>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                            id="resume-upload"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => document.getElementById("resume-upload")?.click()}
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Choose File
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Cover Letter (Optional)</h3>
                    <div className="space-y-2">
                      <Label htmlFor="coverLetter" className="text-sm font-medium">
                        Tell us why you'd be a great fit for Alpha One Defense
                      </Label>
                      <Textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Share your motivation, relevant experience, and what makes you an ideal candidate for our security team..."
                        className="border-2 focus:border-[#92EBFF] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="flex-1 bg-transparent"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-[#92EBFF] to-[#92EBFF]/80 text-background hover:from-[#92EBFF]/90 hover:to-[#92EBFF]/70 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  </div>

                  <div className="text-center text-xs text-muted-foreground pt-4 border-t">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <AlertCircle className="h-3 w-3" />
                      <span>Your application will be reviewed within 24 hours</span>
                    </div>
                    <p>All information is confidential and will only be used for employment consideration.</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
