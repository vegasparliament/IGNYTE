import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">About Ace Background Check</h1>
      <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
        We are a leading provider of comprehensive background screening solutions, committed to helping businesses make informed decisions and create safer workplaces.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              At Ace Background Check, our mission is to provide accurate, timely, and compliant background screening services that empower organizations to make confident hiring decisions and maintain safe environments.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside">
              <li>Accuracy and reliability in all our reports</li>
              <li>Commitment to data privacy and security</li>
              <li>Exceptional customer service</li>
              <li>Continuous innovation in screening technology</li>
              <li>Compliance with all relevant laws and regulations</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <TeamMember
          name="John Doe"
          role="CEO & Founder"
          image="/placeholder.svg?height=200&width=200"
        />
        <TeamMember
          name="Jane Smith"
          role="Chief Technology Officer"
          image="/placeholder.svg?height=200&width=200"
        />
        <TeamMember
          name="Mike Johnson"
          role="Head of Customer Success"
          image="/placeholder.svg?height=200&width=200"
        />
      </div>
      
      <div className="text-center">
        <Button size="lg">Join Our Team</Button>
      </div>
    </div>
  )
}

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-muted-foreground">{role}</p>
      </CardContent>
    </Card>
  )
}
