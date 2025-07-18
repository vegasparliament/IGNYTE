import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function ComplianceAndLicensing() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="heading-lg text-center mb-16 text-foreground">Compliance and Licensing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Licensing Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">We are a fully licensed Private Investigator Security Guard (PISG) company, adhering to all state regulations.</p>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-accent mr-2" />
                <span className="text-foreground">PISG License: OH1234567</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Insurance and Bonding</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span className="text-muted-foreground">Comprehensive Liability Insurance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span className="text-muted-foreground">Workers' Compensation Coverage</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-2" />
                  <span className="text-muted-foreground">Surety Bond</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-foreground">Training Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">All our security personnel undergo rigorous training, including:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                <li>Advanced security officer training</li>
                <li>First aid and CPR certification</li>
                <li>Conflict resolution and de-escalation techniques</li>
                <li>Firearms training for armed personnel</li>
                <li>Emergency response procedures</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
