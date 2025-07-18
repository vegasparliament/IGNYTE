import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PersonalReferenceVerificationPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Personal Reference Verification</h1>
      <p className="text-xl mb-12">Our personal reference verification service provides a thorough assessment of an individual's character and reputation through their provided references.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>What's Included</CardTitle>
            <CardDescription>Our reference verification covers:</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside mt-4">
              <li>Contacting and verifying references</li>
              <li>Assessing the validity of provided information</li>
              <li>Identifying potential inconsistencies or red flags</li>
              <li>Gathering insights on character and work ethic</li>
              <li>Providing a summary report of findings</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Benefits</CardTitle>
            <CardDescription>Why choose our reference verification service?</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside mt-4">
              <li>Comprehensive assessment of personal character</li>
              <li>Helps validate claims made by the individual</li>
              <li>Identifies potential concerns or discrepancies</li>
              <li>Provides valuable insights for hiring decisions</li>
              <li>Professional and discreet communication with references</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 text-center">
        <Button size="lg">Request Personal Reference Verification</Button>
      </div>
    </div>
  )
}
