import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceRequestForm } from "@/app/components/service-request-form"
import { submitServiceRequest } from "@/app/actions/submit-service-request"

export default function PastAddressSSNVerificationPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Past Address/Social Security Verification</h1>
      <p className="text-xl mb-12">Our comprehensive verification service ensures the accuracy of an individual's past addresses and Social Security Number (SSN).</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>What's Included</CardTitle>
            <CardDescription>Our verification service covers:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside mt-4">
              <li>SSN validation and verification</li>
              <li>Address history trace</li>
              <li>Alias name search</li>
              <li>Death master file check</li>
              <li>Fraud detection alerts</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Benefits</CardTitle>
            <CardDescription>Why choose our verification service?</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside mt-4">
              <li>Accurate and up-to-date information</li>
              <li>Helps prevent identity fraud</li>
              <li>Comprehensive address history</li>
              <li>Identifies potential red flags</li>
              <li>Fast and efficient process</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <ServiceRequestForm 
          serviceName="Past Address/SSN Verification" 
          onSubmit={submitServiceRequest}
          additionalFields={[
            {
              name: "verificationPeriod",
              label: "Verification Period",
              type: "select",
              options: ["Last 5 years", "Last 10 years", "Entire history"]
            },
            {
              name: "includeAliases",
              label: "Include Alias Search",
              type: "select",
              options: ["Yes", "No"]
            }
          ]}
        />
      </div>
    </div>
  )
}
