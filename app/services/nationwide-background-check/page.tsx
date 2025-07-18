import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceRequestForm } from "@/app/components/service-request-form"
import { submitServiceRequest } from "@/app/actions/submit-service-request"

export default function NationwideBackgroundCheckPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Nationwide Background Check</h1>
      <p className="text-xl mb-12">Our comprehensive nationwide background check provides a thorough screening of an individual's history across the United States.</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>What's Included</CardTitle>
            <CardDescription>Our nationwide background check covers:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside mt-4">
              <li>National criminal database search</li>
              <li>Sex offender registry check</li>
              <li>Federal criminal record search</li>
              <li>State and county criminal record searches</li>
              <li>Address history verification</li>
              <li>Social Security number trace</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Benefits</CardTitle>
            <CardDescription>Why choose our nationwide background check?</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside mt-4">
              <li>Comprehensive coverage across all 50 states</li>
              <li>Fast turnaround time</li>
              <li>FCRA compliant</li>
              <li>Customizable search parameters</li>
              <li>Integration with other verification services</li>
              <li>Expert analysis and support</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <ServiceRequestForm 
          serviceName="Nationwide Background Check" 
          onSubmit={submitServiceRequest}
          additionalFields={[
            {
              name: "searchType",
              label: "Type of Search",
              type: "select",
              options: ["Standard", "Enhanced", "Comprehensive"]
            },
            {
              name: "urgency",
              label: "Urgency",
              type: "select",
              options: ["Standard (3-5 business days)", "Rush (1-2 business days)", "Urgent (24 hours)"]
            }
          ]}
        />
      </div>
    </div>
  )
}
