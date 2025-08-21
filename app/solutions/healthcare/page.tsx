import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HealthcareSolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Healthcare Industry Solutions</h1>
      <p className="text-xl mb-12">Specialized background check solutions designed to meet the unique needs and compliance requirements of the healthcare sector.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Healthcare Professional Package</CardTitle>
            <CardDescription>Comprehensive screening for medical staff</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our healthcare package includes:</p>
            <ul className="list-disc list-inside mt-4">
              <li>OIG and GSA exclusion list checks</li>
              <li>State-specific abuse and neglect registry checks</li>
              <li>Professional license verification</li>
              <li>Drug screening coordination</li>
              <li>Healthcare sanctions search</li>
            </ul>
            <Button className="mt-6">Request Package</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Ongoing Monitoring</CardTitle>
            <CardDescription>Continuous compliance monitoring for healthcare staff</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our ongoing monitoring service includes:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Monthly OIG and GSA exclusion list checks</li>
              <li>License expiration and disciplinary action alerts</li>
              <li>Criminal record monitoring</li>
              <li>Periodic drug screening reminders</li>
            </ul>
            <Button className="mt-6">Learn More</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
