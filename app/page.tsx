"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Clock,
  Shield,
  Search,
  Home,
  MapPin,
  UserCheck,
  Building,
  Scale,
  Award,
  BookOpen,
  UserX,
  Compass,
  Truck,
  Gavel,
  Skull,
  FileSignature,
  Users,
  Star,
} from "lucide-react"
import Link from "next/link"
import type React from "react"
import { useRouter } from "next/navigation"
import Testimonials from "./components/testimonials"
import PricingPlans from "./components/pricing-plans"
import ServiceCard from "./components/service-card"
import IndustriesSection from "./components/industries-section"
import { useRef } from "react"
import { useToast } from "@/components/ui/use-toast"
import { ToastProvider } from "@/components/ui/toast"
import ChatWidgetWrapper from "./components/chat-widget-wrapper"

export default function HomePage() {
  const router = useRouter()
  const getStartedRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const { toast } = useToast()

  const scrollToGetStarted = () => {
    getStartedRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Trusted by 10,000+ Companies
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Professional Background Screening Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Comprehensive, accurate, and compliant background checks for businesses of all sizes. Protect your
                organization with our industry-leading screening services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={scrollToGetStarted}>
                  Get Started Today
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  onClick={scrollToPricing}
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Ace Background Check?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Industry-leading technology, unmatched accuracy, and exceptional customer service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-white">Comprehensive Screening</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Criminal history, employment verification, education checks, and more - all in one platform
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader>
                  <Clock className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-white">Fast Turnaround</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Most background checks completed within 24-48 hours with real-time status updates
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-white">FCRA Compliant</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Fully compliant with federal and state regulations, ensuring legal protection
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-white">Industry Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Over 15 years of experience serving businesses across all industries
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-white">Accurate Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    99.8% accuracy rate with comprehensive quality assurance processes
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader>
                  <Star className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-white">24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Dedicated customer support team available around the clock
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-background">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Comprehensive Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a wide range of background screening services to meet your specific needs. From basic checks to
                in-depth investigations, we've got you covered.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Search className="w-8 h-8 text-primary" />}
                title="Nationwide Background Check"
                description="Comprehensive national background screening"
                details={[
                  "Multi-jurisdictional criminal record search",
                  "National sex offender registry check",
                  "Social security number verification",
                  "Address history verification",
                  "Federal criminal record search",
                ]}
                additionalFields={[
                  {
                    name: "searchType",
                    label: "Type of Search",
                    type: "select",
                    options: ["Standard", "Enhanced", "Comprehensive"],
                  },
                  {
                    name: "urgency",
                    label: "Urgency",
                    type: "select",
                    options: ["Standard (3-5 business days)", "Rush (1-2 business days)", "Urgent (24 hours)"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<Home className="w-8 h-8 text-primary" />}
                title="Ohio Tenant Screening"
                description="Thorough screening for Ohio landlords"
                details={[
                  "Credit history reports",
                  "Eviction history search",
                  "Criminal background check",
                  "Income verification",
                  "Previous landlord references",
                ]}
                additionalFields={[
                  {
                    name: "propertyType",
                    label: "Property Type",
                    type: "select",
                    options: ["Apartment", "Single Family Home", "Multi-Family Home", "Condominium"],
                  },
                  {
                    name: "numberOfUnits",
                    label: "Number of Units",
                    type: "input",
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<MapPin className="w-8 h-8 text-primary" />}
                title="Past Address/SSN Verification"
                description="Verify residence history and SSN"
                details={[
                  "SSN validation and verification",
                  "Address history trace",
                  "Alias name search",
                  "Death master file check",
                  "Fraud detection alerts",
                ]}
                additionalFields={[
                  {
                    name: "verificationPeriod",
                    label: "Verification Period",
                    type: "select",
                    options: ["Last 5 years", "Last 10 years", "Entire history"],
                  },
                  {
                    name: "includeAliases",
                    label: "Include Alias Search",
                    type: "select",
                    options: ["Yes", "No"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<UserCheck className="w-8 h-8 text-primary" />}
                title="Personal Reference Verification"
                description="Validate personal references"
                details={[
                  "Contacting and verifying references",
                  "Assessing the validity of provided information",
                  "Identifying potential inconsistencies or red flags",
                  "Providing a summary report of findings",
                ]}
                additionalFields={[
                  {
                    name: "numberOfReferences",
                    label: "Number of References",
                    type: "select",
                    options: ["1", "2", "3", "4", "5+"],
                  },
                  {
                    name: "referenceType",
                    label: "Type of References",
                    type: "select",
                    options: ["Personal", "Professional", "Academic", "Mixed"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<Building className="w-8 h-8 text-primary" />}
                title="Past Employment Verification"
                description="Confirm previous work history"
                details={[
                  "Contacting previous employers",
                  "Verifying dates of employment",
                  "Confirming job titles and responsibilities",
                  "Gathering information on performance and reason for leaving",
                ]}
                additionalFields={[
                  {
                    name: "employmentPeriod",
                    label: "Employment Period to Verify",
                    type: "select",
                    options: ["Last 5 years", "Last 10 years", "Entire history"],
                  },
                  {
                    name: "includePerformance",
                    label: "Include Performance Information",
                    type: "select",
                    options: ["Yes", "No"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<Scale className="w-8 h-8 text-primary" />}
                title="Ohio County Criminal Record"
                description="Detailed criminal record check for Ohio counties"
                details={[
                  "County-level criminal record search",
                  "Felony and misdemeanor checks",
                  "Court records verification",
                  "Arrest and conviction information",
                ]}
                additionalFields={[
                  {
                    name: "countyName",
                    label: "Ohio County Name",
                    type: "input",
                  },
                  {
                    name: "searchPeriod",
                    label: "Search Period",
                    type: "select",
                    options: ["7 years", "10 years", "Entire history"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<Gavel className="w-8 h-8 text-primary" />}
                title="Federal Bankruptcy, Liens & Judgments"
                description="Comprehensive financial background check"
                details={[
                  "Federal bankruptcy records search",
                  "Tax liens verification",
                  "Civil judgments check",
                  "Financial responsibility assessment",
                ]}
                additionalFields={[
                  {
                    name: "searchScope",
                    label: "Search Scope",
                    type: "select",
                    options: ["Bankruptcy Only", "Liens Only", "Judgments Only", "All"],
                  },
                  {
                    name: "timeFrame",
                    label: "Time Frame",
                    type: "select",
                    options: ["Last 7 years", "Last 10 years", "Entire history"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<Award className="w-8 h-8 text-primary" />}
                title="Professional License Verification"
                description="Validate professional credentials"
                details={[
                  "License authenticity verification",
                  "Current status check",
                  "Disciplinary action review",
                  "Expiration date confirmation",
                ]}
                additionalFields={[
                  {
                    name: "licenseType",
                    label: "License Type",
                    type: "input",
                  },
                  {
                    name: "state",
                    label: "State",
                    type: "input",
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<BookOpen className="w-8 h-8 text-primary" />}
                title="Education Verification"
                description="Confirm educational background"
                details={[
                  "Degree verification",
                  "Attendance dates confirmation",
                  "Major and minor validation",
                  "Academic honors verification",
                ]}
                additionalFields={[
                  {
                    name: "educationLevel",
                    label: "Education Level",
                    type: "select",
                    options: ["High School", "Associate's", "Bachelor's", "Master's", "Doctorate"],
                  },
                  {
                    name: "includeTranscript",
                    label: "Include Transcript Request",
                    type: "select",
                    options: ["Yes", "No"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<UserX className="w-8 h-8 text-primary" />}
                title="National Sex Offenders Registry"
                description="Comprehensive sex offender check"
                details={[
                  "National database search",
                  "State-specific registry checks",
                  "Offender location information",
                  "Offense details verification",
                ]}
                additionalFields={[
                  {
                    name: "includeAliases",
                    label: "Include Alias Search",
                    type: "select",
                    options: ["Yes", "No"],
                  },
                  {
                    name: "searchRadius",
                    label: "Search Radius",
                    type: "select",
                    options: ["5 miles", "10 miles", "25 miles", "50 miles", "Nationwide"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<Compass className="w-8 h-8 text-primary" />}
                title="People Locator"
                description="Find and verify individual locations"
                details={[
                  "Current address verification",
                  "Phone number validation",
                  "Social media presence check",
                  "Public records search",
                ]}
                additionalFields={[
                  {
                    name: "searchDepth",
                    label: "Search Depth",
                    type: "select",
                    options: ["Basic", "Standard", "Deep"],
                  },
                  {
                    name: "includeSocialMedia",
                    label: "Include Social Media Search",
                    type: "select",
                    options: ["Yes", "No"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<Truck className="w-8 h-8 text-primary" />}
                title="Ohio Driver's History"
                description="Comprehensive driving record check"
                details={[
                  "License status verification",
                  "Traffic violations check",
                  "DUI/DWI record search",
                  "Accident history review",
                ]}
                additionalFields={[
                  {
                    name: "recordPeriod",
                    label: "Record Period",
                    type: "select",
                    options: ["3 years", "5 years", "7 years", "Full history"],
                  },
                  {
                    name: "includePointsBalance",
                    label: "Include Points Balance",
                    type: "select",
                    options: ["Yes", "No"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<Gavel className="w-8 h-8 text-primary" />}
                title="Federal Criminal"
                description="In-depth federal criminal record check"
                details={[
                  "Federal court records search",
                  "Multi-district check",
                  "Felony and misdemeanor verification",
                  "Sentencing information",
                ]}
                additionalFields={[
                  {
                    name: "searchPeriod",
                    label: "Search Period",
                    type: "select",
                    options: ["7 years", "10 years", "Entire history"],
                  },
                  {
                    name: "includeAppealStatus",
                    label: "Include Appeal Status",
                    type: "select",
                    options: ["Yes", "No"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<Skull className="w-8 h-8 text-primary" />}
                title="Death Records"
                description="Verify death records and related information"
                details={[
                  "Social Security Death Index check",
                  "State death records search",
                  "Obituary verification",
                  "Last known address confirmation",
                ]}
                additionalFields={[
                  {
                    name: "searchScope",
                    label: "Search Scope",
                    type: "select",
                    options: ["State-level", "National", "International"],
                  },
                  {
                    name: "includeObituaries",
                    label: "Include Obituary Search",
                    type: "select",
                    options: ["Yes", "No"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
              <ServiceCard
                icon={<FileSignature className="w-8 h-8 text-primary" />}
                title="UCC Records"
                description="Uniform Commercial Code filings search"
                details={[
                  "Statewide UCC filings check",
                  "Lien verification",
                  "Secured transactions review",
                  "Debtor-creditor relationship assessment",
                ]}
                additionalFields={[
                  {
                    name: "searchJurisdiction",
                    label: "Search Jurisdiction",
                    type: "select",
                    options: ["State-level", "County-level", "Both"],
                  },
                  {
                    name: "includeExpiredFilings",
                    label: "Include Expired Filings",
                    type: "select",
                    options: ["Yes", "No"],
                  },
                ]}
                scrollToGetStarted={scrollToGetStarted}
              />
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive background screening solutions tailored to your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card/80 backdrop-blur-sm border-border hover:bg-card/90 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">Criminal Background Checks</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    Comprehensive criminal history searches at county, state, and federal levels
                  </CardDescription>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border hover:bg-card/90 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">Employment Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    Verify employment history, job titles, dates of employment, and salary information
                  </CardDescription>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border hover:bg-card/90 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">Education Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    Confirm degrees, certifications, and educational achievements
                  </CardDescription>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border hover:bg-card/90 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">Reference Checks</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    Professional reference verification and character assessments
                  </CardDescription>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border hover:bg-card/90 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">Drug Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    Pre-employment and random drug screening services
                  </CardDescription>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border hover:bg-card/90 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white">Credit Checks</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    Financial responsibility verification for positions handling money
                  </CardDescription>
                  <Button variant="outline" className="w-full bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <div className="bg-background">
          <IndustriesSection />
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="bg-background" ref={pricingRef}>
          <PricingPlans />
        </div>

        {/* Testimonials Section */}
        <div className="bg-background">
          <Testimonials />
        </div>

        {/* Contact Form Section */}
        <section id="get-started-today" className="py-24 bg-background" ref={getStartedRef}>
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and one of our experts will contact you within 24 hours
                </p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <form
                    className="space-y-6"
                    action="https://formspree.io/f/xkgokylz"
                    method="POST"
                    onSubmit={(e) => {
                      e.preventDefault()
                      const form = e.target as HTMLFormElement
                      fetch(form.action, {
                        method: "POST",
                        body: new FormData(form),
                        headers: {
                          Accept: "application/json",
                        },
                      }).then((response) => {
                        if (response.ok) {
                          toast({
                            title: "Success!",
                            description: "Your request has been submitted. We'll contact you soon.",
                            duration: 5000,
                          })
                          form.reset()
                          scrollToGetStarted()
                        } else {
                          toast({
                            title: "Error",
                            description: "There was a problem submitting your request. Please try again.",
                            variant: "destructive",
                            duration: 5000,
                          })
                        }
                      })
                    }}
                  >
                    <input type="hidden" name="_cc" value="JABOLOGA@msn.com" />
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input id="firstName" placeholder="John" name="firstName" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input id="lastName" placeholder="Doe" name="lastName" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Work Email
                      </label>
                      <Input id="email" type="email" placeholder="john@company.com" name="email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(XXX) XXX-XXXX"
                        maxLength={14}
                        onInput={(e) => {
                          const input = e.currentTarget
                          let value = input.value.replace(/\D/g, "")
                          if (value.length > 0) {
                            value = `(${value.slice(0, 3)}${value.length > 3 ? ") " : ""}${value.slice(3, 6)}${value.length > 6 ? "-" : ""}${value.slice(6, 10)}`
                          }
                          input.value = value
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input id="company" placeholder="Company Name" name="company" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Required
                      </label>
                      <Select name="service">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nationwide">Nationwide Background Check</SelectItem>
                          <SelectItem value="ohio-tenant">Ohio Tenant Screening</SelectItem>
                          <SelectItem value="address-ssn">Past Address/SSN Verification</SelectItem>
                          <SelectItem value="personal-reference">Personal Reference Verification</SelectItem>
                          <SelectItem value="employment">Past Employment Verification</SelectItem>
                          <SelectItem value="ohio-criminal">Ohio County Criminal Record</SelectItem>
                          <SelectItem value="federal-bankruptcy">Federal Bankruptcy, Liens & Judgments</SelectItem>
                          <SelectItem value="professional-license">Professional License Verification</SelectItem>
                          <SelectItem value="education">Education Verification</SelectItem>
                          <SelectItem value="sex-offender">National Sex Offenders Registry</SelectItem>
                          <SelectItem value="people-locator">People Locator</SelectItem>
                          <SelectItem value="ohio-driver">Ohio Driver's History</SelectItem>
                          <SelectItem value="federal-criminal">Federal Criminal</SelectItem>
                          <SelectItem value="death-records">Death Records</SelectItem>
                          <SelectItem value="ucc-records">UCC Records</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Tell us about your specific needs..." name="message" />
                    </div>
                    <Button type="submit" className="w-full">
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies who trust Ace Background Check for their screening needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your First Check
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-neutral-900 text-neutral-200">
          <div className="container px-4 mx-auto py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Ace Background Check</h3>
                <p className="text-neutral-400">Leading provider of comprehensive background screening solutions.</p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-neutral-500 hover:text-neutral-300">
                    {/* Facebook icon */}
                  </a>
                  <a href="#" className="text-neutral-500 hover:text-neutral-300">
                    {/* Twitter icon */}
                  </a>
                  <a href="#" className="text-neutral-500 hover:text-neutral-300">
                    {/* LinkedIn icon */}
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#services" className="text-neutral-400 hover:text-neutral-200">
                      Background Checks
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-neutral-400 hover:text-neutral-200">
                      Criminal Records
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-neutral-400 hover:text-neutral-200">
                      Employment Verification
                    </Link>
                  </li>
                  <li>
                    <Link href="#services" className="text-neutral-400 hover:text-neutral-200">
                      Education Verification
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/enterprise" className="text-neutral-400 hover:text-neutral-200">
                      Enterprise Solutions
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#about" className="text-neutral-400 hover:text-neutral-200">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#about#careers" className="text-neutral-400 hover:text-neutral-200">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#about#press" className="text-neutral-400 hover:text-neutral-200">
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-neutral-400 hover:text-neutral-200">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="text-neutral-400 hover:text-neutral-200">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-neutral-400 hover:text-neutral-200">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-neutral-400 hover:text-neutral-200">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-neutral-400 hover:text-neutral-200">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-neutral-400 hover:text-neutral-200">
                      FCRA Compliance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
              <p>&copy; {new Date().getFullYear()} Ace Background Check. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <ChatWidgetWrapper />
      </div>
    </ToastProvider>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
