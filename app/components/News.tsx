"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Shield,
  AlertTriangle,
  Loader2,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Copy,
  Check,
} from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "sonner"
import { fetchSecurityNews } from "../actions/fetch-news"

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

export default function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  useEffect(() => {
    loadSecurityNews()
  }, [])

  const loadSecurityNews = async () => {
    try {
      setLoading(true)
      const { articles: newsArticles, error: newsError } = await fetchSecurityNews()
      setArticles(newsArticles)
      setError(newsError)
    } catch (err) {
      console.error("Error loading news:", err)
      setError("Failed to load security news")
    } finally {
      setLoading(false)
    }
  }

  const getCategoryIcon = (title: string, description: string) => {
    const content = (title + " " + description).toLowerCase()

    if (content.includes("breach") || content.includes("hack")) {
      return <AlertTriangle className="h-4 w-4 text-red-500" />
    }
    if (content.includes("vulnerability") || content.includes("exploit")) {
      return <Shield className="h-4 w-4 text-orange-500" />
    }
    return <Shield className="h-4 w-4 text-[#92EBFF]" />
  }

  const getCategoryBadge = (title: string, description: string) => {
    const content = (title + " " + description).toLowerCase()

    if (content.includes("breach") || content.includes("hack")) {
      return (
        <Badge variant="destructive" className="text-xs">
          Security Breach
        </Badge>
      )
    }
    if (content.includes("vulnerability") || content.includes("exploit")) {
      return (
        <Badge variant="secondary" className="text-xs bg-orange-500/10 text-orange-500">
          Vulnerability
        </Badge>
      )
    }
    if (content.includes("ransomware") || content.includes("malware")) {
      return (
        <Badge variant="destructive" className="text-xs">
          Malware
        </Badge>
      )
    }
    return (
      <Badge variant="outline" className="text-xs">
        Cybersecurity
      </Badge>
    )
  }

  const shareOnFacebook = (article: NewsArticle, index: number) => {
    const shareText = `${article.title} - Stay informed about cybersecurity threats with Alpha One Defense. Professional security services across Ohio.`
    const shareUrl = `https://alphaonedefense.com/#security-news`
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`
    window.open(facebookUrl, "_blank", "width=600,height=400")

    // Track sharing event
    console.log("Share event:", {
      method: "Facebook",
      content_type: "news_article",
      item_id: `news_${index}`,
    })
  }

  const shareOnX = (article: NewsArticle, index: number) => {
    const shareText = `🚨 SECURITY ALERT: ${article.title}\n\n${article.description?.substring(0, 80)}...\n\nStay protected with Alpha One Defense - Ohio's premier security company.\n\n#Cybersecurity #SecurityNews #AlphaOneDefense #OhioSecurity`
    const shareUrl = `https://alphaonedefense.com/#security-news`
    const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    window.open(xUrl, "_blank", "width=600,height=400")

    // Track sharing event
    console.log("Share event:", {
      method: "X",
      content_type: "news_article",
      item_id: `news_${index}`,
    })
  }

  const shareOnLinkedIn = (article: NewsArticle, index: number) => {
    const shareText = `${article.title}\n\n${article.description}\n\nAlpha One Defense keeps you informed about the latest cybersecurity threats. Professional security services across Ohio.`
    const shareUrl = `https://alphaonedefense.com/#security-news`
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(article.title)}&summary=${encodeURIComponent(shareText)}`
    window.open(linkedinUrl, "_blank", "width=600,height=400")

    // Track sharing event
    console.log("Share event:", {
      method: "LinkedIn",
      content_type: "news_article",
      item_id: `news_${index}`,
    })
  }

  const shareViaEmail = (article: NewsArticle, index: number) => {
    const subject = `Security Alert: ${article.title}`
    const body = `I thought you might be interested in this important security news:\n\n${article.title}\n\n${article.description}\n\nSource: ${article.source.name}\n\nFor more security intelligence and updates, visit Alpha One Defense:\nhttps://alphaonedefense.com/#security-news\n\nAlpha One Defense - Professional Security Services in Ohio\nLicensed PISG Company serving all 88 Ohio counties\nCall us 24/7: 1-800-731-9221\n\nStay secure!`
    const emailUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = emailUrl

    // Track sharing event
    console.log("Share event:", {
      method: "Email",
      content_type: "news_article",
      item_id: `news_${index}`,
    })
  }

  const copyToClipboard = async (article: NewsArticle, index: number) => {
    const shareText = `🚨 SECURITY ALERT: ${article.title}\n\n${article.description}\n\nSource: ${article.source.name}\nPublished: ${formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}\n\nStay informed about cybersecurity threats with Alpha One Defense\nProfessional Security Services in Ohio | Licensed PISG Company\nhttps://alphaonedefense.com/#security-news\n\nCall us 24/7: 1-800-731-9221`

    try {
      await navigator.clipboard.writeText(shareText)
      setCopiedIndex(index)
      toast.success("News article copied to clipboard!")

      // Reset copied state after 2 seconds
      setTimeout(() => setCopiedIndex(null), 2000)

      // Track sharing event
      console.log("Share event:", {
        method: "Copy",
        content_type: "news_article",
        item_id: `news_${index}`,
      })
    } catch (err) {
      toast.error("Failed to copy to clipboard")
    }
  }

  if (loading) {
    return (
      <section id="security-news" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-[#92EBFF] mx-auto mb-4" />
            <p className="text-muted-foreground">Loading latest security intelligence...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="security-news" className="py-20 bg-secondary" itemScope itemType="https://schema.org/NewsArticle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Latest Security Intelligence & Cybersecurity News
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about the latest cybersecurity threats, data breaches, security vulnerabilities, and industry
            developments in Ohio and nationwide. Knowledge is your first line of defense against cyber attacks.
          </p>
        </motion.div>

        {error && (
          <div className="text-center mb-8">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={loadSecurityNews} variant="outline">
              Try Again
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card
                className="h-full bg-background/50 backdrop-blur-sm hover:bg-background/60 transition-all duration-300 group"
                itemScope
                itemType="https://schema.org/NewsArticle"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(article.title, article.description || "")}
                      {getCategoryBadge(article.title, article.description || "")}
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Share2 className="h-4 w-4" />
                          <span className="sr-only">Share article</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem onClick={() => shareOnFacebook(article, index)}>
                          <Facebook className="mr-2 h-4 w-4 text-blue-600" />
                          Share on Facebook
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => shareOnX(article, index)}>
                          <Twitter className="mr-2 h-4 w-4 text-black dark:text-white" />
                          Share on X
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => shareOnLinkedIn(article, index)}>
                          <Linkedin className="mr-2 h-4 w-4 text-blue-700" />
                          Share on LinkedIn
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => shareViaEmail(article, index)}>
                          <Mail className="mr-2 h-4 w-4 text-gray-600" />
                          Share via Email
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => copyToClipboard(article, index)}>
                          {copiedIndex === index ? (
                            <Check className="mr-2 h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="mr-2 h-4 w-4 text-gray-600" />
                          )}
                          {copiedIndex === index ? "Copied!" : "Copy to Clipboard"}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardTitle
                    className="text-lg leading-tight line-clamp-3 group-hover:text-[#92EBFF] transition-colors"
                    itemProp="headline"
                  >
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  {article.description && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3" itemProp="description">
                      {article.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <time dateTime={article.publishedAt} itemProp="datePublished">
                        {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
                      </time>
                    </span>
                    <span
                      className="truncate max-w-[120px]"
                      itemProp="publisher"
                      itemScope
                      itemType="https://schema.org/Organization"
                    >
                      <span itemProp="name">{article.source.name}</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={loadSecurityNews} className="bg-[#92EBFF] text-background hover:bg-[#92EBFF]/90">
            Refresh Security News
          </Button>
        </div>
      </div>
    </section>
  )
}
