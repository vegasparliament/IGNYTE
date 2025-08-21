import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CriminalRecordsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Criminal Records Check</h1>
      <p className="text-xl mb-12">Our in-depth criminal records check provides a comprehensive view of an individual's criminal history.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>National Criminal Database Search</CardTitle>
            <CardDescription>Broad search across multiple jurisdictions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our national criminal database search includes:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Over 500 million criminal records</li>
              <li>Data from thousands of jurisdictions</li>
              <li>Rapid results for initial screening</li>
            </ul>
            <Button className="mt-6">Request Search</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>County Criminal Court Search</CardTitle>
            <CardDescription>Detailed search of county-level records</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our county-level search provides:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Felony and misdemeanor records</li>
              <li>Direct source information</li>
              <li>7-year history (or more where allowed)</li>
            </ul>
            <Button className="mt-6">Request Search</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
