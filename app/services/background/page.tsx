import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BackgroundChecksPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Background Checks</h1>
      <p className="text-xl mb-12">Our comprehensive background check services provide you with accurate and timely information to make informed decisions.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Criminal Record Checks</CardTitle>
            <CardDescription>National and international criminal history searches</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our criminal record checks include:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Federal criminal searches</li>
              <li>State and county criminal searches</li>
              <li>International criminal checks</li>
              <li>Sex offender registry checks</li>
            </ul>
            <Button className="mt-6">Learn More</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Civil Record Checks</CardTitle>
            <CardDescription>Comprehensive civil litigation history</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our civil record checks cover:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Federal civil court searches</li>
              <li>State and county civil court searches</li>
              <li>Bankruptcies and liens</li>
              <li>Judgments</li>
            </ul>
            <Button className="mt-6">Learn More</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
