import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EnterpriseSolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Enterprise Solutions</h1>
      <p className="text-xl mb-12">Tailored background check solutions for large organizations with high-volume screening needs.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Custom Integration</CardTitle>
            <CardDescription>Seamlessly integrate with your existing systems</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our enterprise integration includes:</p>
            <ul className="list-disc list-inside mt-4">
              <li>API access for automated screening</li>
              <li>Integration with major ATS platforms</li>
              <li>Custom workflows and approval processes</li>
              <li>Dedicated technical support team</li>
            </ul>
            <Button className="mt-6">Learn More</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Volume Pricing</CardTitle>
            <CardDescription>Competitive rates for high-volume screening</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Benefits of our volume pricing:</p>
            <ul className="list-disc list-inside mt-4">
              <li>Tiered pricing based on annual volume</li>
              <li>Predictable monthly billing</li>
              <li>Customizable package options</li>
              <li>Regular usage reports and analytics</li>
            </ul>
            <Button className="mt-6">Get a Quote</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
