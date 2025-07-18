import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function PremiumPackagePage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Premium Background Check Package</h1>
      <p className="text-xl mb-12">Our most comprehensive background screening solution for enterprises that demand the highest level of due diligence.</p>
      
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Premium Package Includes:</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              <span>National Criminal Database Search</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              <span>County Criminal Court Search (10-year history)</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              <span>Federal Criminal Search</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              <span>Enhanced Employment Verification (up to 7 years)</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              <span>Education Verification</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              <span>Professional License Verification</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              <span>Global Watchlist Search</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-green-500 mr-2" />
              <span>Credit Report (where legal)</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center">
        <Button size="lg">Get a Quote for Premium Package</Button>
      </div>
    </div>
  )
}
