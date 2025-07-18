import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import BackgroundChecks from "./components/BackgroundChecks"
import Careers from "./components/Careers"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CorporateSecurity from "./components/CorporateSecurity"
import AdditionalServices from "./components/AdditionalServices"
import Header from "./components/Header"

export default function Home() {
  return (
    <main className="app-container">
      <Header />
      <div className="app-content">
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <CorporateSecurity />
          <AdditionalServices />
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="background-checks">
          <BackgroundChecks />
        </section>
        <section id="careers">
          <Careers />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  )
}
