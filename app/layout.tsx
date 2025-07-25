import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "sonner"
import SplashScreen from "./components/SplashScreen"
import BottomNav from "./components/BottomNav"
import type React from "react"

export const metadata: Metadata = {
  title: "Alpha One Defense - Elite Private Security Services in Ohio | Licensed PISG Company",
  description:
    "Professional security services in Ohio. Licensed PISG company providing elite private detail officers, executive protection, facility security, and cybersecurity solutions across all 88 Ohio counties. 24/7 emergency response available.",
  keywords: [
    "security services Ohio",
    "private security Columbus",
    "executive protection Cleveland",
    "security guards Cincinnati",
    "PISG licensed security",
    "Ohio security company",
    "cybersecurity Ohio",
    "background checks Ohio",
    "security consulting",
    "facility security",
    "event security Ohio",
    "armed security guards",
    "unarmed security officers",
    "security training Ohio",
    "threat assessment",
    "risk management",
    "corporate security",
    "industrial security",
    "retail security",
    "healthcare security",
  ],
  authors: [{ name: "Alpha One Defense" }],
  creator: "Alpha One Defense",
  publisher: "Alpha One Defense",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://alphaonedefense.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alpha One Defense - Elite Private Security Services in Ohio",
    description:
      "Professional security services across Ohio. Licensed PISG company providing executive protection, facility security, and cybersecurity solutions. Available 24/7 in all 88 Ohio counties.",
    url: "https://alphaonedefense.com",
    siteName: "Alpha One Defense",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alpha One Defense - Professional Security Services in Ohio",
      },
      {
        url: "/security-news-og.jpg",
        width: 1200,
        height: 630,
        alt: "Latest Cybersecurity News and Security Intelligence from Alpha One Defense",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha One Defense - Elite Security Services Ohio",
    description:
      "Licensed PISG security company serving all 88 Ohio counties. Executive protection, facility security, cybersecurity solutions. 24/7 emergency response.",
    images: ["/twitter-image.jpg"],
    site: "@alphaonedefense",
    creator: "@alphaonedefense",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Security Services",
  classification: "Business",
  other: {
    "geo.region": "US-OH",
    "geo.placename": "Ohio",
    "geo.position": "40.4173;-82.9071",
    ICBM: "40.4173, -82.9071",
    "DC.title": "Alpha One Defense - Professional Security Services Ohio",
    "DC.creator": "Alpha One Defense",
    "DC.subject": "Security Services, Executive Protection, Cybersecurity, Ohio",
    "DC.description": "Licensed private security company serving Ohio with elite protection services",
    "DC.publisher": "Alpha One Defense",
    "DC.contributor": "Alpha One Defense Security Team",
    "DC.date": new Date().toISOString(),
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://alphaonedefense.com",
    "DC.source": "https://alphaonedefense.com",
    "DC.language": "en",
    "DC.relation": "https://alphaonedefense.com",
    "DC.coverage": "Ohio, United States",
    "DC.rights": "Copyright Alpha One Defense",
    // Social Media Optimization
    "fb:app_id": "your-facebook-app-id",
    "twitter:site": "@alphaonedefense",
    "twitter:creator": "@alphaonedefense",
    "article:publisher": "https://www.facebook.com/alphaonedefense",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" itemScope itemType="https://schema.org/Organization">
      <head>
        {/* Enhanced Social Media Meta Tags */}
        <meta property="og:site_name" content="Alpha One Defense" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="Alpha One Defense" />
        <meta property="article:publisher" content="https://www.facebook.com/alphaonedefense" />
        <meta name="twitter:site" content="@alphaonedefense" />
        <meta name="twitter:creator" content="@alphaonedefense" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SecurityService",
              name: "Alpha One Defense",
              alternateName: "AOD Security",
              description:
                "Professional private security services company licensed in Ohio, providing elite protection, executive security, facility security, and cybersecurity solutions.",
              url: "https://alphaonedefense.com",
              logo: "https://alphaonedefense.com/logo.png",
              image: "https://alphaonedefense.com/og-image.jpg",
              telephone: "+1-800-731-9221",
              email: "info@alphaonedefense.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Security Street",
                addressLocality: "Columbus",
                addressRegion: "OH",
                postalCode: "43215",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "39.9612",
                longitude: "-82.9988",
              },
              areaServed: [
                {
                  "@type": "State",
                  name: "Ohio",
                  alternateName: "OH",
                },
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "40.4173",
                  longitude: "-82.9071",
                },
                geoRadius: "500000",
              },
              foundingDate: "2010",
              numberOfEmployees: "50-100",
              slogan: "Elite Private Detail Officers - Setting the Standard in Professional Security",
              knowsAbout: [
                "Executive Protection",
                "Facility Security",
                "Cybersecurity",
                "Background Checks",
                "Risk Assessment",
                "Threat Analysis",
                "Security Consulting",
                "Emergency Response",
              ],
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Professional License",
                recognizedBy: {
                  "@type": "Organization",
                  name: "Ohio Department of Commerce",
                },
              },
              license: "PISG License #20252100583609",
              serviceType: [
                "Private Security",
                "Executive Protection",
                "Facility Security",
                "Event Security",
                "Cybersecurity Services",
                "Background Investigation",
                "Risk Assessment",
                "Security Consulting",
              ],
              priceRange: "$$-$$$",
              paymentAccepted: ["Cash", "Credit Card", "Check", "Bank Transfer"],
              currenciesAccepted: "USD",
              openingHours: "Mo-Su 00:00-23:59",
              availableLanguage: ["English"],
              sameAs: [
                "https://www.linkedin.com/company/alpha-one-defense",
                "https://www.facebook.com/alphaonedefense",
                "https://twitter.com/alphaonedefense",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  author: {
                    "@type": "Person",
                    name: "Corporate Client",
                  },
                  reviewBody: "Exceptional security services. Professional, reliable, and highly trained officers.",
                },
              ],
            }),
          }}
        />

        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://alphaonedefense.com/#organization",
              name: "Alpha One Defense",
              image: "https://alphaonedefense.com/logo.png",
              telephone: "+1-800-731-9221",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Security Street",
                addressLocality: "Columbus",
                addressRegion: "OH",
                postalCode: "43215",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 39.9612,
                longitude: -82.9988,
              },
              url: "https://alphaonedefense.com",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "$$-$$$",
            }),
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What security services does Alpha One Defense provide in Ohio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Alpha One Defense provides comprehensive security services including executive protection, facility security, event security, cybersecurity consulting, background checks, and 24/7 emergency response across all 88 Ohio counties.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Alpha One Defense licensed in Ohio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Alpha One Defense is fully licensed by the Ohio Department of Commerce with PISG License #20252100583609. We are fully insured, bonded, and compliant with all Ohio regulations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas in Ohio does Alpha One Defense serve?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We provide security services across all 88 Ohio counties, including major cities like Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, and surrounding areas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Alpha One Defense provide 24/7 security services?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide 24/7 security services and emergency response. Our team is available around the clock to handle urgent security needs and emergency situations.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://alphaonedefense.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Security Services",
                  item: "https://alphaonedefense.com#services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "About Us",
                  item: "https://alphaonedefense.com#about",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Background Checks",
                  item: "https://alphaonedefense.com#background-checks",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Careers",
                  item: "https://alphaonedefense.com#careers",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Security News",
                  item: "https://alphaonedefense.com#security-news",
                },
                {
                  "@type": "ListItem",
                  position: 7,
                  name: "Contact",
                  item: "https://alphaonedefense.com#contact",
                },
              ],
            }),
          }}
        />

        {/* Additional Meta Tags for Enhanced SEO */}
        <meta name="geo.region" content="US-OH" />
        <meta name="geo.placename" content="Ohio" />
        <meta name="geo.position" content="40.4173;-82.9071" />
        <meta name="ICBM" content="40.4173, -82.9071" />
        <meta name="language" content="en" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        <meta name="expires" content="never" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://newsapi.org" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//newsapi.org" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//facebook.com" />
        <link rel="dns-prefetch" href="//twitter.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
      </head>
      <body className="overflow-x-clip" itemScope itemType="https://schema.org/WebPage">
        <SplashScreen />
        {children}
        <BottomNav />
        <Toaster />
      </body>
    </html>
  )
}
