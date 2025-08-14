"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Fingerprint,
  Shield,
  FileCheck,
  Clock,
  AlertTriangle,
  CheckCircle,
  Phone,
  Mail,
  ExternalLink,
  Target,
  Users,
  Award,
} from "lucide-react"

const fingerprintRequirements = [
  {
    title: "BCI Fingerprint Background Checks",
    description: "Required for all registrations",
    icon: Fingerprint,
    required: true,
    details: [
      "Must not be older than 30 days",
      "Required for all PISGS registrations",
      "Use reason code 4749.06 for registrants",
      "Use reason code 4749.03 for Qualifying Agents",
    ],
  },
  {
    title: "FBI Fingerprint Background Checks",
    description: "Required only for Firearm Bearer (FAB) applicants",
    icon: Shield,
    required: false,
    details: [
      "Only required for FAB endorsement",
      "Must not be older than 30 days",
      "Direct copy must be sent to PISGS",
      "Select 'private investigator/security guard' reason",
    ],
  },
]

const webcheckInfo = {
  title: "Ohio WebCheck Process",
  steps: [
    "Visit Ohio Attorney General's Office WebCheck Location",
    "Bring PISGS WebCheck Instruction Sheet",
    "Select 'License for private investigator/security guard' reason code",
    "Complete electronic fingerprint process",
    "Ensure proper delivery of results",
  ],
}

const fabRequirements = {
  nonPeaceOfficers: [
    "OPOTA Firearm Training Certificate (20 hours)",
    "FBI fingerprint results (not older than 30 days)",
    "Direct copy sent to PISGS",
    "Pass FBI background check",
  ],
  peaceOfficers: [
    "Ohio Peace Officer Basic Training Certificate",
    "Most current re-qualification score sheet",
    "FBI fingerprint results (not older than 30 days)",
    "Direct copy sent to PISGS",
  ],
}

const renewalInfo = [
  {
    title: "Initial Training",
    duration: "18 months",
    description: "OPOTC certified private security firearm training course",
  },
  {
    title: "Requalification",
    duration: "12 months",
    description: "OPOTC certified requalification course",
  },
]

export default function HiringRequirements() {
  return (
    <section id="hiring-requirements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ohio Security Personnel Requirements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete guide to fingerprinting, background checks, and firearm-bearer endorsement requirements for
            security professionals in Ohio under PISGS regulations.
          </p>
        </motion.div>

        {/* Fingerprint Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Fingerprint Background Check Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fingerprintRequirements.map((req, index) => (
              <Card key={index} className="bg-background/50 backdrop-blur-sm border-[#92EBFF]/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <req.icon className="h-8 w-8 text-[#92EBFF]" />
                    <div>
                      <CardTitle className="text-xl">{req.title}</CardTitle>
                      {req.required ? (
                        <Badge variant="destructive" className="mt-1">
                          Required
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="mt-1">
                          FAB Only
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{req.description}</p>
                  <ul className="space-y-2">
                    {req.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* WebCheck Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-[#92EBFF]/5 border-[#92EBFF]/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <FileCheck className="h-8 w-8 text-[#92EBFF]" />
                {webcheckInfo.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Step-by-Step Process:</h4>
                  <ol className="space-y-3">
                    {webcheckInfo.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-[#92EBFF] text-background rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-background/50 rounded-lg">
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-orange-500" />
                      Important Timing
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Fingerprint background checks must not be older than 30 days from submission date.
                    </p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-lg">
                    <h5 className="font-semibold mb-2">Out-of-State Process</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      Mail-in option available (allow 30-60 days processing time)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Send to: Ohio Bureau Of Criminal Investigation, PO BOX 365, London Ohio 43140
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Firearm Bearer Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Firearm-Bearer (FAB) Endorsement Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-background/50 backdrop-blur-sm border-[#92EBFF]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-[#92EBFF]" />
                  Non-Peace Officers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {fabRequirements.nonPeaceOfficers.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-[#92EBFF]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-[#92EBFF]" />
                  Commissioned Peace Officers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {fabRequirements.peaceOfficers.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Training Duration */}
          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="h-6 w-6 text-[#92EBFF]" />
                Training & Renewal Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renewalInfo.map((info, index) => (
                  <div key={index} className="p-4 bg-background/50 rounded-lg">
                    <h4 className="font-semibold mb-2">{info.title}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-[#92EBFF]" />
                      <span className="font-medium text-[#92EBFF]">{info.duration}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="bg-orange-500/5 border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-orange-600">
                <AlertTriangle className="h-6 w-6" />
                Important Requirements & Restrictions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Firearm Carrying Rules:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Must have current FAB endorsement on registration card
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Only carry weapon type listed on FAB endorsement
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Must carry registration card while armed on duty
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      CCW permit does NOT qualify for work-related firearm carry
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Multi-Company Employment:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      FAB only applies to specific registered company
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Separate FAB required for each company
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      Renewal required before expiration date
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Card className="bg-[#92EBFF]/5 border-[#92EBFF]/20 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Need Help with Requirements?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Alpha One Defense assists with all PISGS registration and FAB endorsement processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-[#92EBFF] text-background hover:bg-[#92EBFF]/90"
                  onClick={() => (window.location.href = "tel:1-800-731-9221")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call 1-800-731-9221
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("mailto:civilianident@ohioago.gov", "_blank")}
                  className="bg-transparent"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  BCI Questions
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>BCI Questions: (877) 224-0043 or civilianident@ohioago.gov</p>
                <p className="mt-2">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-[#92EBFF]"
                    onClick={() =>
                      window.open(
                        "https://www.ohioattorneygeneral.gov/Business/Services-for-Business/Private-Investigator-and-Security-Guard",
                        "_blank",
                      )
                    }
                  >
                    Ohio Attorney General PISGS Information
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
