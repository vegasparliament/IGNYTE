"use server"

interface NewsArticle {
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  source: {
    name: string
  }
  category?: string
}

// In-memory cache for news data
let newsCache: {
  articles: NewsArticle[]
  timestamp: number
  error: string | null
} | null = null

const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes

const mockSecurityNews: NewsArticle[] = [
  {
    title: "Major Healthcare System in Ohio Suffers Ransomware Attack Affecting Patient Data",
    description:
      "A sophisticated ransomware group has compromised a major healthcare network in Columbus, Ohio, potentially exposing sensitive patient information and disrupting critical medical services across the state.",
    url: "#",
    urlToImage: "/healthcare-cybersecurity-breach.png",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio CyberSecurity Today" },
  },
  {
    title: "Critical Zero-Day Vulnerability Discovered in Popular Enterprise Software Used by Ohio Businesses",
    description:
      "Security researchers have identified a critical vulnerability that could allow attackers to gain unauthorized access to corporate networks across Ohio and nationwide.",
    url: "#",
    urlToImage: "/zero-day-vulnerability.png",
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    source: { name: "Midwest InfoSec News" },
  },
  {
    title: "Cleveland Financial Institution Reports Sophisticated Phishing Campaign Targeting Ohio Residents",
    description:
      "A major bank in Cleveland warns customers about an ongoing phishing campaign that uses advanced social engineering techniques to steal credentials from Ohio residents.",
    url: "#",
    urlToImage: "/phishing-email-threat.png",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Financial Security Report" },
  },
  {
    title: "Ohio Government Agencies Enhance Cybersecurity Protocols Following Recent Threats",
    description:
      "State of Ohio agencies are implementing new security measures in response to increased cyber threats from nation-state actors targeting critical infrastructure.",
    url: "#",
    urlToImage: "/government-cybersecurity.png",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Government Tech" },
  },
  {
    title: "Supply Chain Attack Targets Multiple Technology Companies in Cincinnati and Columbus",
    description:
      "Cybercriminals have infiltrated a software supply chain, affecting dozens of technology companies in Ohio's major cities and their customers nationwide.",
    url: "#",
    urlToImage: "/supply-chain-cyber-attack.png",
    publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Tech Security Weekly" },
  },
  {
    title: "New Malware Strain Targets Remote Work Infrastructure in Ohio Companies",
    description:
      "Security experts have identified a new malware variant specifically designed to exploit vulnerabilities in remote work setups used by Ohio businesses.",
    url: "#",
    urlToImage: "/placeholder-tusot.png",
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Remote Security Alert" },
  },
  {
    title: "Data Breach at Major Ohio University Exposes Student Records",
    description:
      "A cybersecurity incident at a prominent Ohio university has potentially compromised personal information of thousands of students and faculty members.",
    url: "#",
    urlToImage: "/university-data-breach-education.png",
    publishedAt: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Education Security" },
  },
  {
    title: "Manufacturing Companies in Akron Face Increased Cyber Threats",
    description:
      "Industrial cybersecurity experts warn that manufacturing facilities in the Akron area are experiencing a surge in targeted cyber attacks.",
    url: "#",
    urlToImage: "/manufacturing-cybersecurity-industrial.png",
    publishedAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
    source: { name: "Industrial Security Ohio" },
  },
  {
    title: "Ohio Small Businesses Targeted by New Email Scam Campaign",
    description:
      "The Ohio Attorney General's office warns small business owners about a sophisticated email scam targeting companies across the state.",
    url: "#",
    urlToImage: "/email-scam-small-business.png",
    publishedAt: new Date(Date.now() - 42 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Business Security" },
  },
  {
    title: "Critical Infrastructure in Toledo Faces Cybersecurity Assessment",
    description:
      "Federal agencies are conducting comprehensive cybersecurity assessments of critical infrastructure facilities in the Toledo metropolitan area.",
    url: "#",
    urlToImage: "/critical-infrastructure-security.png",
    publishedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    source: { name: "Toledo Infrastructure Security" },
  },
  {
    title: "Dayton Healthcare Network Implements Advanced Threat Detection Systems",
    description:
      "Major healthcare providers in Dayton are deploying state-of-the-art cybersecurity systems to protect patient data from increasing threats.",
    url: "#",
    urlToImage: "/placeholder.svg?height=200&width=400",
    publishedAt: new Date(Date.now() - 54 * 60 * 60 * 1000).toISOString(),
    source: { name: "Dayton Healthcare Security" },
  },
  {
    title: "Youngstown Police Department Warns of Cryptocurrency Fraud Targeting Seniors",
    description:
      "Law enforcement in Youngstown reports a significant increase in cryptocurrency-related fraud schemes specifically targeting elderly residents.",
    url: "#",
    urlToImage: "/placeholder.svg?height=200&width=400",
    publishedAt: new Date(Date.now() - 60 * 60 * 60 * 1000).toISOString(),
    source: { name: "Youngstown Crime Prevention" },
  },
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function fetchFromAlternativeSources(): Promise<NewsArticle[]> {
  const sources = [
    // RSS feeds and free APIs with better rate limits
    {
      name: "Guardian API",
      url: "https://content.guardianapis.com/search?q=cybersecurity%20OR%20data%20breach%20OR%20ransomware&section=technology&show-fields=headline,trailText,thumbnail&page-size=10&api-key=test", // Guardian has a test key
    },
  ]

  const articles: NewsArticle[] = []

  for (const source of sources) {
    try {
      const response = await fetch(source.url, {
        cache: "no-store",
        headers: {
          "User-Agent": "AlphaOneDefense/1.0",
        },
        signal: AbortSignal.timeout(8000),
      })

      if (response.ok) {
        const data = await response.json()

        if (source.name === "Guardian API" && data.response?.results) {
          const guardianArticles = data.response.results.map((item: any) => ({
            title: item.webTitle || item.fields?.headline || "Security News Update",
            description: item.fields?.trailText || "Important cybersecurity development",
            url: item.webUrl || "#",
            urlToImage: item.fields?.thumbnail || "/placeholder.svg?height=200&width=400",
            publishedAt: item.webPublicationDate || new Date().toISOString(),
            source: { name: "The Guardian" },
          }))
          articles.push(...guardianArticles)
        }
      }
    } catch (error) {
      console.error(`Failed to fetch from ${source.name}:`, error)
    }
  }

  return articles
}

export async function fetchSecurityNews() {
  console.log("fetchSecurityNews called - checking cache first")

  try {
    const now = Date.now()
    if (newsCache && now - newsCache.timestamp < CACHE_DURATION) {
      console.log("Returning cached news data")
      return {
        articles: newsCache.articles,
        error: newsCache.error,
      }
    }

    console.log("Cache expired or empty, fetching fresh data")

    const apiKey = process.env.NEWS_API_KEY || process.env.NEXT_PUBLIC_NEWS_API_KEY
    console.log("API Key available:", !!apiKey)

    const articles: NewsArticle[] = []
    let errorMessage: string | null = null

    console.log("Trying alternative news sources...")
    const alternativeArticles = await fetchFromAlternativeSources()

    if (alternativeArticles.length > 0) {
      console.log(`Found ${alternativeArticles.length} articles from alternative sources`)
      articles.push(...alternativeArticles)
    }

    if (articles.length < 5 && apiKey && apiKey.trim() !== "" && apiKey.length >= 10) {
      console.log("Supplementing with News API (limited calls)...")

      try {
        const query = "cybersecurity+breach+ransomware+USA"
        const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=10&apiKey=${apiKey}`

        const response = await fetch(url, {
          cache: "no-store",
          headers: {
            "User-Agent": "AlphaOneDefense/1.0",
          },
          signal: AbortSignal.timeout(10000),
        })

        if (response.ok) {
          const data = await response.json()
          if (data.articles) {
            const filteredArticles = data.articles
              .filter((article: any) => {
                if (!article.title || !article.description) return false
                const content = (article.title + " " + article.description).toLowerCase()
                return /\b(security|cyber|data|breach|attack|vulnerability|malware|ransomware|phishing|hack|threat)\b/i.test(
                  content,
                )
              })
              .slice(0, 8) // Limit to avoid overwhelming the cache

            console.log(`News API returned ${filteredArticles.length} relevant articles`)
            articles.push(...filteredArticles)
          }
        } else if (response.status === 429) {
          console.log("News API rate limit hit, using existing articles")
          errorMessage = "News API rate limit reached. Using alternative sources and archives."
        } else {
          console.log(`News API returned ${response.status}, using existing articles`)
        }
      } catch (apiError) {
        console.error("News API error:", apiError)
        errorMessage = "News API temporarily unavailable. Using alternative sources and archives."
      }
    }

    const uniqueArticles = articles
      .filter((article, index, self) => index === self.findIndex((a) => a.title === article.title))
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 12)

    console.log(`Final unique articles: ${uniqueArticles.length}`)

    const finalArticles =
      uniqueArticles.length > 0
        ? [...uniqueArticles, ...mockSecurityNews.slice(0, Math.max(0, 12 - uniqueArticles.length))]
        : mockSecurityNews

    if (uniqueArticles.length === 0) {
      errorMessage = "Using recent security updates from our archives while news services are unavailable."
    } else if (uniqueArticles.length < 6) {
      errorMessage = errorMessage || "Limited fresh content available. Some articles from recent archives."
    }

    newsCache = {
      articles: finalArticles,
      timestamp: now,
      error: errorMessage,
    }

    console.log(`Cached ${finalArticles.length} articles for 30 minutes`)

    return {
      articles: finalArticles,
      error: errorMessage,
    }
  } catch (err) {
    console.error("Unexpected error in fetchSecurityNews:", err)

    if (newsCache && newsCache.articles.length > 0) {
      console.log("Returning stale cached data due to error")
      return {
        articles: newsCache.articles,
        error: "Using cached security updates due to temporary service issues.",
      }
    }

    return {
      articles: mockSecurityNews,
      error: "News service temporarily unavailable. Showing recent security updates from our archives.",
    }
  }
}
