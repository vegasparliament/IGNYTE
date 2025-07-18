import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EducationSolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Education Industry Solutions</h1>
      <p className="text-xl mb-12">Tailored background check solutions for educational institutions to ensure a safe learning environment.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Educator Screening Package</CardTitle>
            <CardDescription>Comprehensive checks for teaching staff</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our educator screening package includes:</p>
            <ul className="list-disc list-inside mt-4">
              <li>National criminal database search</li>
              <li>Sex offender registry check</li>
              <li>Education verification</li>
              <li>Teaching credential verification</li>
              <li>Child abuse and neglect registry check</li>
            </ul>
            <Button className="mt-6">Request Package</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Student Safety Screening</CardTitle>
            <CardDescription>Background checks for volunteers and contractors</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our student safety screening includes:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Criminal history check</li>
              <li>Sex offender registry check</li>
              <li>Identity verification</li>
              <li>Reference checks</li>
            </ul>
            <Button className="mt-6">Learn More</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
