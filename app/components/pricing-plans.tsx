import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

export default function PricingPlans() {
  return (
    <section className="py-24 bg-transparent">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that best fits your business needs. All plans come with our core features and dedicated support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price="$49"
            description="Perfect for small businesses and startups"
            features={[
              "Basic criminal background check",
              "Employment verification (1 employer)",
              "Education verification (1 institution)",
              "24/7 email support"
            ]}
          />
          <PricingCard
            title="Professional"
            price="$99"
            description="Ideal for growing companies with regular hiring needs"
            features={[
              "Comprehensive criminal background check",
              "Employment verification (up to 3 employers)",
              "Education verification (up to 2 institutions)",
              "Credit history check",
              "24/7 email and phone support"
            ]}
            highlighted
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            description="Tailored solutions for large organizations"
            features={[
              "Full-suite background checks",
              "Unlimited employment & education verifications",
              "Global screening",
              "Ongoing monitoring",
              "Dedicated account manager",
              "API access for integration"
            ]}
          />
        </div>
      </div>
    </section>
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
    <Card className={`${highlighted ? "border-primary shadow-lg" : ""} bg-secondary`}>
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
