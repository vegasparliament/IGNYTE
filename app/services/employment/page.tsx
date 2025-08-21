import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmploymentVerificationPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Employment Verification</h1>
      <p className="text-xl mb-12">Our employment verification service ensures that the information provided by candidates is accurate and complete.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Standard Employment Verification</CardTitle>
            <CardDescription>Verify basic employment details</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our standard verification includes:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Company name and address</li>
              <li>Dates of employment</li>
              <li>Job title(s)</li>
              <li>Reason for leaving (if available)</li>
            </ul>
            <Button className="mt-6">Request Verification</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Enhanced Employment Verification</CardTitle>
            <CardDescription>In-depth employment history check</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our enhanced verification includes:</p>
            <ul className="list-disc list-inside mt-4">
              <li>All standard verification items</li>
              <li>Salary information (where legal)</li>
              <li>Performance information (if available)</li>
              <li>Eligibility for rehire</li>
            </ul>
            <Button className="mt-6">Request Verification</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
