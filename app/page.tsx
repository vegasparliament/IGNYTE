import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Manufacturers from "./components/Manufacturers"
import CarModels from "./components/CarModels"
import ServiceAreas from "./components/ServiceAreas"
import MobileInstallation from "./components/MobileInstallation"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Manufacturers />
        <CarModels />
        <MobileInstallation />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

