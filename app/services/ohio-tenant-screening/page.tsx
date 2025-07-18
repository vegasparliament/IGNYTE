import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceRequestForm } from "@/app/components/service-request-form"
import { submitServiceRequest } from "@/app/actions/submit-service-request"

export default function OhioTenantScreeningPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Ohio Tenant Screening</h1>
      <p className="text-xl mb-12">Our Ohio tenant screening service provides landlords and property managers with comprehensive background checks tailored for the Ohio rental market.</p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>What's Included</CardTitle>
            <CardDescription>Our Ohio tenant screening covers:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside mt-4">
              <li>Ohio county criminal record search</li>
              <li>Credit report (with tenant's consent)</li>
              <li>Eviction history</li>
              <li>Employment verification</li>
              <li>Previous landlord references</li>
              <li>Sex offender registry check</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Benefits</CardTitle>
            <CardDescription>Why choose our Ohio tenant screening?</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside mt-4">
              <li>Tailored for Ohio landlord-tenant laws</li>
              <li>Fast turnaround time</li>
              <li>FCRA compliant</li>
              <li>Online tenant application system</li>
              <li>Customizable screening criteria</li>
              <li>Expert support for Ohio landlords</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <ServiceRequestForm 
          serviceName="Ohio Tenant Screening" 
          onSubmit={submitServiceRequest}
          additionalFields={[
            {
              name: "propertyType",
              label: "Property Type",
              type: "select",
              options: ["Apartment", "Single Family Home", "Multi-Family Home", "Condominium"]
            },
            {
              name: "numberOfUnits",
              label: "Number of Units",
              type: "input"
            }
          ]}
        />
      </div>
    </div>
  )
}
