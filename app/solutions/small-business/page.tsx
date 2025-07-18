import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SmallBusinessSolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Small Business Solutions</h1>
      <p className="text-xl mb-12">Affordable and efficient background check solutions tailored for small and growing businesses.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Starter Package</CardTitle>
            <CardDescription>Essential screening for small teams</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our starter package includes:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Basic criminal background check</li>
              <li>SSN trace</li>
              <li>National sex offender registry search</li>
              <li>Simple online ordering system</li>
            </ul>
            <Button className="mt-6">Get Started</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Growth Package</CardTitle>
            <CardDescription>Comprehensive screening for expanding businesses</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our growth package includes:</p>
            <ul className="list-disc list-inside mt-4">
              <li>All Starter Package features</li>
              <li>Employment verification (up to 2 employers)</li>
              <li>Education verification</li>
              <li>Professional license verification</li>
            </ul>
            <Button className="mt-6">Learn More</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
