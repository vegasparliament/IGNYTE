import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import BackgroundChecks from "./components/BackgroundChecks"
import Careers from "./components/Careers"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CorporateSecurity from "./components/CorporateSecurity"
import AdditionalServices from "./components/AdditionalServices"
import OhioService from "./components/OhioService"
import Header from "./components/Header"
import News from "./components/News"
import HiringRequirements from "./components/HiringRequirements"
import FloatingContactBox from "./components/FloatingContactBox"

export default function Home() {
  return (
    <main className="app-container" itemScope itemType="https://schema.org/WebPage">
      <Header />
      <div className="app-content">
        <section id="home" itemScope itemType="https://schema.org/Organization">
          <Hero />
        </section>
        <section itemScope itemType="https://schema.org/Service">
          <OhioService />
        </section>
        <section id="services" itemScope itemType="https://schema.org/Service">
          <CorporateSecurity />
          <AdditionalServices />
          <Services />
        </section>
        <section id="about" itemScope itemType="https://schema.org/AboutPage">
          <About />
        </section>
        <section id="background-checks" itemScope itemType="https://schema.org/Service">
          <BackgroundChecks />
        </section>
        <section id="careers" itemScope itemType="https://schema.org/JobPosting">
          <Careers />
        </section>
        <section id="hiring-requirements" itemScope itemType="https://schema.org/WebPage">
          <HiringRequirements />
        </section>
        <section id="security-news" itemScope itemType="https://schema.org/NewsArticle">
          <News />
        </section>
        <section id="contact" itemScope itemType="https://schema.org/ContactPage">
          <Contact />
        </section>
      </div>
      <FloatingContactBox />
      <Footer />
    </main>
  )
}
