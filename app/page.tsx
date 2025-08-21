"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  Phone,
  Mail,
} from "lucide-react"
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
import Image from "next/image"
import ServiceRequestForm from "./components/service-request-form"

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
      <div className="min-h-screen">
        <ChatWidgetWrapper />

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/ace-logo.png"
                alt="ACE Background Check"
                width={400}
                height={120}
                priority
                className="mx-auto w-auto h-20 md:h-28 lg:h-32"
              />
            </div>

            {/* Trust Badge */}
            <div className="mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Trusted by 10,000+ Companies
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Professional Background Checks You Can Trust
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Fast, accurate, and compliant background screening services for employers, landlords, and individuals. Get
              the information you need to make informed decisions.
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
                View Our Services
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Why Choose ACE Background Check?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We provide comprehensive, accurate, and fast background screening services with industry-leading
                compliance and customer support.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-white">Fast Turnaround</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Most reports completed within 24-48 hours</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-white">FCRA Compliant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Fully compliant with all federal and state regulations</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CheckCircle className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-white">Accurate Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">99.9% accuracy rate with comprehensive verification</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-white">Expert Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Dedicated customer support team available 24/7</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24">
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

        {/* Industries We Serve */}
        <div>
          <IndustriesSection />
        </div>

        {/* Pricing Section */}
        <div id="pricing" ref={pricingRef}>
          <PricingPlans />
        </div>

        {/* Testimonials Section */}
        <div>
          <Testimonials />
        </div>

        {/* Contact Section */}
        <section className="py-20 px-4" ref={getStartedRef}>
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Get Started Today</h2>
                <p className="text-gray-300 mb-8">
                  Ready to streamline your background check process? Contact us today to learn more about our services
                  and get a custom quote for your needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3 text-primary" />
                    <span>info@acebackgroundcheck.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>123 Business Ave, Suite 100, City, State 12345</span>
                  </div>
                </div>
              </div>
              <div>
                <ServiceRequestForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-12 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4">ACE Background Check</h3>
                <p className="text-gray-400">Professional background screening services you can trust.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Criminal Background Checks</li>
                  <li>Employment Verification</li>
                  <li>Education Verification</li>
                  <li>Reference Checks</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Industries</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Healthcare</li>
                  <li>Education</li>
                  <li>Finance</li>
                  <li>Technology</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 ACE Background Check. All rights reserved.</p>
            </div>
          </div>
        </footer>
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
