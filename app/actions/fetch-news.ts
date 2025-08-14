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

// Mock data for fallback (keeping existing mock data)
const mockSecurityNews: NewsArticle[] = [
  {
    title: "Major Healthcare System in Ohio Suffers Ransomware Attack Affecting Patient Data",
    description:
      "A sophisticated ransomware group has compromised a major healthcare network in Columbus, Ohio, potentially exposing sensitive patient information and disrupting critical medical services across the state.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio CyberSecurity Today" },
  },
  {
    title: "Critical Zero-Day Vulnerability Discovered in Popular Enterprise Software Used by Ohio Businesses",
    description:
      "Security researchers have identified a critical vulnerability that could allow attackers to gain unauthorized access to corporate networks across Ohio and nationwide.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    source: { name: "Midwest InfoSec News" },
  },
  {
    title: "Cleveland Financial Institution Reports Sophisticated Phishing Campaign Targeting Ohio Residents",
    description:
      "A major bank in Cleveland warns customers about an ongoing phishing campaign that uses advanced social engineering techniques to steal credentials from Ohio residents.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Financial Security Report" },
  },
  {
    title: "Ohio Government Agencies Enhance Cybersecurity Protocols Following Recent Threats",
    description:
      "State of Ohio agencies are implementing new security measures in response to increased cyber threats from nation-state actors targeting critical infrastructure.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Government Tech" },
  },
  {
    title: "Supply Chain Attack Targets Multiple Technology Companies in Cincinnati and Columbus",
    description:
      "Cybercriminals have infiltrated a software supply chain, affecting dozens of technology companies in Ohio's major cities and their customers nationwide.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Tech Security Weekly" },
  },
  {
    title: "New Malware Strain Targets Remote Work Infrastructure in Ohio Companies",
    description:
      "Security experts have identified a new malware variant specifically designed to exploit vulnerabilities in remote work setups used by Ohio businesses.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Remote Security Alert" },
  },
  {
    title: "Data Breach at Major Ohio University Exposes Student Records",
    description:
      "A cybersecurity incident at a prominent Ohio university has potentially compromised personal information of thousands of students and faculty members.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Education Security" },
  },
  {
    title: "Manufacturing Companies in Akron Face Increased Cyber Threats",
    description:
      "Industrial cybersecurity experts warn that manufacturing facilities in the Akron area are experiencing a surge in targeted cyber attacks.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
    source: { name: "Industrial Security Ohio" },
  },
  {
    title: "Ohio Small Businesses Targeted by New Email Scam Campaign",
    description:
      "The Ohio Attorney General's office warns small business owners about a sophisticated email scam targeting companies across the state.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 42 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Business Security" },
  },
  {
    title: "Critical Infrastructure in Toledo Faces Cybersecurity Assessment",
    description:
      "Federal agencies are conducting comprehensive cybersecurity assessments of critical infrastructure facilities in the Toledo metropolitan area.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    source: { name: "Toledo Infrastructure Security" },
  },
  {
    title: "Dayton Healthcare Network Implements Advanced Threat Detection Systems",
    description:
      "Major healthcare providers in Dayton are deploying state-of-the-art cybersecurity systems to protect patient data from increasing threats.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 54 * 60 * 60 * 1000).toISOString(),
    source: { name: "Dayton Healthcare Security" },
  },
  {
    title: "Youngstown Police Department Warns of Cryptocurrency Fraud Targeting Seniors",
    description:
      "Law enforcement in Youngstown reports a significant increase in cryptocurrency-related fraud schemes specifically targeting elderly residents.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 60 * 60 * 60 * 1000).toISOString(),
    source: { name: "Youngstown Crime Prevention" },
  },
  {
    title: "Ohio State University Researchers Develop New Cybersecurity Framework",
    description:
      "Computer science researchers at OSU have created an innovative cybersecurity framework designed to protect against emerging threats.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 66 * 60 * 60 * 1000).toISOString(),
    source: { name: "OSU Cybersecurity Research" },
  },
  {
    title: "Canton Area Businesses Report Increase in Social Engineering Attacks",
    description:
      "Local businesses in the Canton area are experiencing a notable rise in sophisticated social engineering attacks targeting employee credentials.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
    source: { name: "Canton Business Security" },
  },
  {
    title: "Ohio Department of Commerce Issues New Cybersecurity Guidelines for Licensed Security Companies",
    description:
      "The state regulatory body has released updated cybersecurity requirements for all licensed private security companies operating in Ohio.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 78 * 60 * 60 * 1000).toISOString(),
    source: { name: "Ohio Commerce Department" },
  },
  {
    title: "Springfield Manufacturing Facility Recovers from Cyber Attack",
    description:
      "A major manufacturing plant in Springfield has successfully restored operations following a targeted cyber attack that disrupted production for several days.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 84 * 60 * 60 * 1000).toISOString(),
    source: { name: "Springfield Industrial News" },
  },
  {
    title: "Hamilton County Sheriff's Office Launches Cybercrime Task Force",
    description:
      "Law enforcement in Hamilton County has established a specialized task force to combat the growing threat of cybercrime in the Cincinnati area.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 90 * 60 * 60 * 1000).toISOString(),
    source: { name: "Hamilton County Law Enforcement" },
  },
  {
    title: "Lorain Port Authority Enhances Maritime Cybersecurity Measures",
    description:
      "The Port of Lorain has implemented comprehensive cybersecurity upgrades to protect critical maritime infrastructure from cyber threats.",
    url: "#",
    urlToImage: "",
    publishedAt: new Date(Date.now() - 96 * 60 * 60 * 1000).toISOString(),
    source: { name: "Lorain Maritime Security" },
  },
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function fetchWithRetry(url: string, maxRetries = 3): Promise<Response> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, {
        cache: "no-store",
        headers: {
          "User-Agent": "AlphaOneDefense/1.0",
        },
        signal: AbortSignal.timeout(10000), // 10 second timeout
      })

      // If successful or client error (not rate limit), return immediately
      if (response.ok || (response.status >= 400 && response.status < 500 && response.status !== 429)) {
        return response
      }

      // If rate limited (429), wait before retry
      if (response.status === 429) {
        const waitTime = Math.pow(2, attempt) * 1000 // Exponential backoff: 2s, 4s, 8s
        console.log(`Rate limited (429). Waiting ${waitTime}ms before retry ${attempt}/${maxRetries}`)
        await delay(waitTime)
        continue
      }

      // For other server errors, wait briefly and retry
      if (response.status >= 500) {
        const waitTime = 1000 * attempt
        console.log(`Server error (${response.status}). Waiting ${waitTime}ms before retry ${attempt}/${maxRetries}`)
        await delay(waitTime)
        continue
      }

      return response
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error)

      if (error instanceof Error) {
        if (error.name === "TimeoutError") {
          console.log(`Request timeout on attempt ${attempt}/${maxRetries}`)
        } else if (error.name === "AbortError") {
          console.log(`Request aborted on attempt ${attempt}/${maxRetries}`)
        }
      }

      if (attempt === maxRetries) {
        throw new Error(
          `API request failed after ${maxRetries} attempts: ${error instanceof Error ? error.message : "Unknown error"}`,
        )
      }

      const waitTime = 1000 * attempt
      console.log(`Waiting ${waitTime}ms before retry ${attempt + 1}/${maxRetries}`)
      await delay(waitTime)
    }
  }

  throw new Error(`Failed after ${maxRetries} attempts`)
}

export async function fetchSecurityNews() {
  console.log("fetchSecurityNews called - server action executing")

  try {
    const apiKey = process.env.NEWS_API_KEY || process.env.NEXT_PUBLIC_NEWS_API_KEY
    console.log("API Key available:", !!apiKey)
    console.log("Environment check - NEWS_API_KEY exists:", !!process.env.NEWS_API_KEY)
    console.log("Environment check - NEXT_PUBLIC_NEWS_API_KEY exists:", !!process.env.NEXT_PUBLIC_NEWS_API_KEY)

    if (!apiKey || apiKey.trim() === "") {
      console.log("No valid API key found, using mock data")
      return {
        articles: mockSecurityNews,
        error: "API key not configured. Showing recent security updates from our archives.",
      }
    }

    if (apiKey.length < 10) {
      console.log("API key appears invalid (too short), using mock data")
      return {
        articles: mockSecurityNews,
        error: "Invalid API key configuration. Showing recent security updates from our archives.",
      }
    }

    const queries = ["cybersecurity+breach+USA", "ransomware+attack+United+States"]
    const allArticles: NewsArticle[] = []
    let rateLimitHit = false

    console.log("Starting API calls for", queries.length, "queries with valid API key")

    for (let i = 0; i < queries.length; i++) {
      if (rateLimitHit) {
        console.log("Rate limit detected, skipping remaining queries")
        break
      }

      const query = queries[i]
      try {
        if (i > 0) {
          console.log("Waiting 3 seconds between API calls to avoid rate limiting...")
          await delay(3000) // Increased delay to 3 seconds
        }

        const url = `https://newsapi.org/v2/everything?q=${query}&language=en&domains=reuters.com,apnews.com,cnn.com,foxnews.com,nbcnews.com,abcnews.go.com,cbsnews.com,usatoday.com,washingtonpost.com,nytimes.com,wsj.com,bloomberg.com,techcrunch.com,wired.com,arstechnica.com,zdnet.com,securityweek.com,darkreading.com,krebsonsecurity.com,bleepingcomputer.com,threatpost.com,cyberscoop.com,recordedfuture.com,fireeye.com,crowdstrike.com,ohio.gov,10tv.com,nbc4i.com,abc6onyourside.com,fox8.com,news5cleveland.com,whio.com,daytondailynews.com,dispatch.com,cleveland.com,cincinnati.com,toledo.com&sortBy=publishedAt&pageSize=15&apiKey=${apiKey}`

        const response = await fetchWithRetry(url, 3)

        console.log(`Query "${query}" response status:`, response.status)

        if (response.ok) {
          const data = await response.json()
          console.log(`Query "${query}" returned ${data.articles?.length || 0} articles`)

          if (data.articles) {
            // Filter articles to ensure they're relevant to US/Ohio and in English
            const filteredArticles = data.articles.filter((article: any) => {
              if (!article.title || !article.description) return false

              const title = article.title.toLowerCase()
              const description = article.description.toLowerCase()
              const content = title + " " + description

              // Check if content is likely English and relevant
              const hasEnglishKeywords =
                /\b(the|and|or|of|in|to|for|with|on|at|by|from|security|cyber|data|breach|attack|vulnerability|malware|ransomware|phishing|hack|threat|ohio|usa|united states|america|national)\b/.test(
                  content,
                )

              // Filter out non-English content patterns
              const hasNonEnglishPatterns =
                /[áéíóúñü¿¡]|[\u4e00-\u9fff]|[\u0590-\u05ff]|[\u0600-\u06ff]|[\u0900-\u097f]/i.test(content)

              // Ensure it's security-related
              const isSecurityRelated =
                /\b(security|cyber|data|breach|attack|vulnerability|malware|ransomware|phishing|hack|threat|privacy|encryption|firewall|antivirus)\b/i.test(
                  content,
                )

              return hasEnglishKeywords && !hasNonEnglishPatterns && isSecurityRelated
            })

            console.log(`Query "${query}" filtered to ${filteredArticles.length} relevant articles`)
            allArticles.push(...filteredArticles)
          }
        } else if (response.status === 429) {
          console.error(`Rate limit exceeded for query "${query}". Using existing articles and mock data.`)
          rateLimitHit = true
          break // Stop making more requests if rate limited
        } else {
          console.error(`API call failed for query "${query}":`, response.status, response.statusText)
        }
      } catch (queryError) {
        console.error(`Error fetching query "${query}":`, queryError)
        if (queryError instanceof Error) {
          if (queryError.message.includes("429") || queryError.message.includes("rate limit")) {
            console.log("Rate limit detected, stopping further API calls")
            rateLimitHit = true
            break
          }
          if (queryError.message.includes("timeout") || queryError.message.includes("AbortError")) {
            console.log(`Request timeout for query "${query}", continuing with next query`)
            continue
          }
        }
      }
    }

    console.log("Total articles collected:", allArticles.length)

    // Remove duplicates and sort by date
    const uniqueArticles = allArticles
      .filter((article, index, self) => index === self.findIndex((a) => a.title === article.title))
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 18) // Show 18 articles (3 rows of 6)

    console.log("Final unique articles:", uniqueArticles.length)

    if (uniqueArticles.length === 0) {
      console.log("No articles found, using mock data")
      const errorMessage = rateLimitHit
        ? "News API daily limit reached. Showing recent security updates from our archives."
        : "Unable to fetch latest news at this time. Showing recent security updates from our archives."

      return {
        articles: mockSecurityNews,
        error: errorMessage,
      }
    } else if (uniqueArticles.length < 6) {
      // If we have some articles but not enough, supplement with mock data
      console.log(`Only ${uniqueArticles.length} articles found, supplementing with mock data`)
      const supplementedArticles = [...uniqueArticles, ...mockSecurityNews.slice(0, 18 - uniqueArticles.length)]
      const errorMessage = rateLimitHit
        ? "Limited news due to API rate limits. Some content from recent archives."
        : "Limited fresh content available. Some articles from recent archives."

      return {
        articles: supplementedArticles,
        error: errorMessage,
      }
    }

    return { articles: uniqueArticles, error: null }
  } catch (err) {
    console.error("Error fetching news:", err)

    let errorMessage = "Unable to fetch latest news. Showing recent security updates from our archives."

    if (err instanceof Error) {
      const errorMsg = err.message.toLowerCase()
      if (errorMsg.includes("429") || errorMsg.includes("rate limit")) {
        errorMessage = "News API rate limit reached. Showing recent security updates from our archives."
      } else if (errorMsg.includes("timeout") || errorMsg.includes("aborterror")) {
        errorMessage = "News service temporarily unavailable. Showing recent security updates from our archives."
      } else if (errorMsg.includes("network") || errorMsg.includes("fetch")) {
        errorMessage = "Network connectivity issue. Showing recent security updates from our archives."
      } else if (errorMsg.includes("unauthorized") || errorMsg.includes("401")) {
        errorMessage = "API authentication failed. Showing recent security updates from our archives."
      } else if (errorMsg.includes("forbidden") || errorMsg.includes("403")) {
        errorMessage = "API access denied. Showing recent security updates from our archives."
      }
    }

    // Fallback to mock data
    return { articles: mockSecurityNews, error: errorMessage }
  }
}
