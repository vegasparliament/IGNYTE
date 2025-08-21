'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-transparent">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our background check solutions are tailored to meet the unique needs of various industries.
          </p>
        </div>
        <Tabs defaultValue="healthcare" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:max-w-[640px] mx-auto">
            <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="healthcare" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Healthcare Industry Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Compliance & Regulations</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• HIPAA compliance verification</li>
                      <li>• OIG and GSA exclusion checks</li>
                      <li>• State-specific healthcare regulations</li>
                      <li>• Medical board certifications</li>
                      <li>• DEA license verification</li>
                      <li>• Healthcare sanctions screening</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Additional Services</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Drug screening programs</li>
                      <li>• Professional license verification</li>
                      <li>• Clinical privileges history</li>
                      <li>• Patient abuse registry checks</li>
                      <li>• Ongoing license monitoring</li>
                      <li>• Medical fraud screening</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="finance" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Finance Industry Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Regulatory Compliance</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• FINRA compliance checks</li>
                      <li>• SEC registration verification</li>
                      <li>• Anti-money laundering screening</li>
                      <li>• Global sanctions checks</li>
                      <li>• Financial fraud history</li>
                      <li>• Securities violations screening</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Industry-Specific Checks</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Credit history reports</li>
                      <li>• Bankruptcy records</li>
                      <li>• Professional certifications</li>
                      <li>• Trading license verification</li>
                      <li>• International background checks</li>
                      <li>• Regulatory actions history</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="technology" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Technology Industry Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Technical Verification</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Technical certification verification</li>
                      <li>• Code repository history</li>
                      <li>• Patent verification</li>
                      <li>• Security clearance checks</li>
                      <li>• Project portfolio verification</li>
                      <li>• Open source contributions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Additional Screening</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Global education verification</li>
                      <li>• Work visa status</li>
                      <li>• Non-disclosure agreements</li>
                      <li>• IP rights violations</li>
                      <li>• Social media screening</li>
                      <li>• Professional references</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="education" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Education Industry Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Safety & Compliance</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Sex offender registry checks</li>
                      <li>• Child abuse clearances</li>
                      <li>• FBI fingerprint screening</li>
                      <li>• Education verification</li>
                      <li>• Teaching license verification</li>
                      <li>• State-specific education compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Additional Services</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Professional reference checks</li>
                      <li>• Student safety screening</li>
                      <li>• Volunteer background checks</li>
                      <li>• International qualification verification</li>
                      <li>• Ongoing monitoring services</li>
                      <li>• Academic misconduct checks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
