import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what some of our satisfied clients have to say about our background check services.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah Johnson"
            role="HR Manager, TechCorp"
            image="/placeholder.svg?height=100&width=100"
            quote="Ace Background Check has streamlined our hiring process. Their quick turnaround and accurate reports have saved us countless hours and potential hiring mistakes."
          />
          <TestimonialCard
            name="Michael Chen"
            role="CEO, FinanceHub"
            image="/placeholder.svg?height=100&width=100"
            quote="In the finance industry, thorough background checks are crucial. Ace Background Check's global screening services have been invaluable in our international hiring efforts."
          />
          <TestimonialCard
            name="Emily Rodriguez"
            role="Director of Talent Acquisition, HealthCare Inc."
            image="/placeholder.svg?height=100&width=100"
            quote="The healthcare-specific checks provided by Ace Background Check ensure we're compliant with all regulations. Their attention to detail is unmatched."
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, role, image, quote }: { name: string; role: string; image: string; quote: string }) {
  return (
    <Card className="bg-secondary">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <p className="italic">"{quote}"</p>
      </CardContent>
    </Card>
  )
}
