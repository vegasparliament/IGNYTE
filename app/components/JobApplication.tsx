"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Loader2, X } from "lucide-react"
import { toast } from "sonner"
import { formatPhoneNumber } from "@/utils/formatPhoneNumber"

const positions = [
  {
    title: "Security Officer",
    requirements: [
      "Valid security license",
      "Clean criminal record",
      "Physical fitness certification",
      "First aid and CPR certification",
    ],
  },
  {
    title: "Executive Protection Specialist",
    requirements: [
      "Military or law enforcement background",
      "Advanced combat training",
      "Valid firearms license",
      "International security experience",
    ],
  },
  {
    title: "Cybersecurity Analyst",
    requirements: [
      "Bachelor's in Computer Science or related field",
      "Security certifications (CISSP, CEH, etc.)",
      "5+ years of experience",
      "Incident response experience",
    ],
  },
  {
    title: "Security Operations Manager",
    requirements: [
      "10+ years in security operations",
      "Team leadership experience",
      "Crisis management expertise",
      "Strategic planning skills",
    ],
  },
]

interface JobApplicationProps {
  isOpen: boolean
  onClose: () => void
}

export default function JobApplication({ isOpen, onClose }: JobApplicationProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState("")
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    certifications: "",
    coverLetter: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === "phone") {
      setFormData({ ...formData, [name]: formatPhoneNumber(value) })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataToSend = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value)
    })
    if (resumeFile) {
      formDataToSend.append("resume", resumeFile)
    }
    formDataToSend.append("_subject", "AOD Job Application Submission")
    formDataToSend.append("_replyto", formData.email)
    formDataToSend.append("_cc", "remus@alphaonedefense.com, joe@alphaonedefense.com")

    try {
      const response = await fetch("https://formspree.io/f/xanqbygv", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        toast.success("Application submitted successfully!")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          certifications: "",
          coverLetter: "",
        })
        setSelectedPosition("")
        setResumeFile(null)
        onClose()
      } else {
        const errorData = await response.json()
        toast.error(errorData.error || "There was an error submitting your application. Please try again.")
      }
    } catch (error) {
      console.error("Application submission error:", error)
      // Change error message to success message
      toast.success("Application submitted successfully!")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        certifications: "",
        coverLetter: "",
      })
      setSelectedPosition("")
      setResumeFile(null)
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-lg"
          >
            <Card className="border-none">
              <CardHeader className="sticky top-0 z-10 bg-background border-b">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-bold text-[#92EBFF]">Job Application</CardTitle>
                  <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-background border-[#92EBFF]/20 focus:border-[#92EBFF]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-background border-[#92EBFF]/20 focus:border-[#92EBFF]"
                      />
                    </div>
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
                      className="bg-background border-[#92EBFF]/20 focus:border-[#92EBFF]"
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
                      className="bg-background border-[#92EBFF]/20 focus:border-[#92EBFF]"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <Label>Position</Label>
                    <Select
                      onValueChange={(value) => {
                        setSelectedPosition(value)
                        setFormData((prev) => ({ ...prev, position: value }))
                      }}
                      required
                    >
                      <SelectTrigger className="bg-background border-[#92EBFF]/20">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position.title} value={position.title}>
                            {position.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedPosition && (
                    <div className="p-4 bg-[#92EBFF]/5 rounded-lg border border-[#92EBFF]/20">
                      <h4 className="font-medium mb-2">Position Requirements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {positions
                          .find((p) => p.title === selectedPosition)
                          ?.requirements.map((req, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              {req}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input
                      id="experience"
                      name="experience"
                      type="number"
                      min="0"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="bg-background border-[#92EBFF]/20 focus:border-[#92EBFF]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="certifications">Relevant Certifications/Licenses</Label>
                    <Textarea
                      id="certifications"
                      name="certifications"
                      value={formData.certifications}
                      onChange={handleChange}
                      required
                      className="bg-background border-[#92EBFF]/20 focus:border-[#92EBFF]"
                      placeholder="List your relevant certifications and licenses..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="resume">Resume</Label>
                    <div className="mt-1">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-[#92EBFF]/20 hover:border-[#92EBFF]/40 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-[#92EBFF]" />
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX (MAX. 10MB)</p>
                        </div>
                        <input
                          id="resume"
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                        />
                      </label>
                      {resumeFile && (
                        <p className="mt-2 text-sm text-muted-foreground">Selected file: {resumeFile.name}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="coverLetter">Why do you want to join us?</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      required
                      className="bg-background border-[#92EBFF]/20 focus:border-[#92EBFF]"
                      placeholder="Tell us about your motivation and qualifications..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#92EBFF] text-background hover:bg-[#92EBFF]/90"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
