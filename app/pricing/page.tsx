import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Transparent Pricing Plans</h1>
      <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
        Choose the plan that best fits your business needs. All plans come with our core features and dedicated support.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard
          title="Basic"
          price="$49"
          description="Perfect for small businesses and startups"
          features={[
            "National Criminal Database Check",
            "SSN Trace",
            "Sex Offender Registry Search",
            "Basic Employment Verification (1 employer)"
          ]}
        />
        <PricingCard
          title="Professional"
          price="$99"
          description="Ideal for growing companies with regular hiring needs"
          features={[
            "All Basic features",
            "County Criminal Court Search (7-year history)",
            "Education Verification (1 institution)",
            "Employment Verification (up to 3 employers)",
            "Professional License Verification"
          ]}
          highlighted
        />
        <PricingCard
          title="Enterprise"
          price="Custom"
          description="Tailored solutions for large organizations"
          features={[
            "All Professional features",
            "Custom integration options",
            "Dedicated account manager",
            "Volume discounts",
            "Customizable screening packages"
          ]}
        />
      </div>
    </div>
  )
}

function PricingCard({ title, price, description, features, highlighted = false }: {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <Card className={highlighted ? "border-primary shadow-lg" : ""}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold mb-4">{price}</div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-primary mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={highlighted ? "default" : "outline"}>
          {price === "Custom" ? "Contact Sales" : "Get Started"}
        </Button>
      </CardFooter>
    </Card>
  )
}
