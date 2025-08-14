import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Building, Lock, Eye, Bell } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Elite Private Detail",
    description: "High-level training for unmatched protection",
  },
  {
    icon: Users,
    title: "Executive Protection",
    description: "Personalized security for VIPs",
  },
  {
    icon: Building,
    title: "Facility Security",
    description: "Comprehensive property protection",
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Advanced entry management",
  },
  {
    icon: Eye,
    title: "Surveillance",
    description: "State-of-the-art monitoring",
  },
  {
    icon: Bell,
    title: "Rapid Response",
    description: "24/7 emergency assistance",
  },
]

export default function Services() {
  return (
    <div className="bg-background py-20" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:bg-primary/5 transition-colors duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <service.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
