import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PastEmploymentVerificationPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Past Employment Verification</h1>
      <p className="text-xl mb-12">Our past employment verification service provides a comprehensive check of an individual's work history, ensuring accuracy and authenticity.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>What's Included</CardTitle>
            <CardDescription>Our employment verification covers:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside mt-4">
              <li>Verification of past employers</li>
              <li>Confirmation of employment dates</li>
              <li>Job titles and responsibilities</li>
              <li>Reason for leaving (when available)</li>
              <li>Eligibility for rehire status</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Benefits</CardTitle>
            <CardDescription>Why choose our employment verification service?</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside mt-4">
              <li>Accurate assessment of work history</li>
              <li>Helps prevent resume fraud</li>
              <li>Provides insights into work performance</li>
              <li>Assists in making informed hiring decisions</li>
              <li>Compliant with employment laws and regulations</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 text-center">
        <Button size="lg">Request Employment Verification</Button>
      </div>
    </div>
  )
}
