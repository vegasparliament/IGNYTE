"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X } from 'lucide-react'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi! How can I help you today?", isUser: false },
  ])
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setMessages([...messages, { text: input, isUser: true }])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! A customer service representative will be with you shortly.",
          isUser: false,
        },
      ])
    }, 1000)
  }

  return (
    <>
      {isOpen ? (
        <Card className="fixed bottom-4 right-4 w-80 z-50">
          <div className="p-4 border-b bg-primary text-primary-foreground flex justify-between items-center">
            <h3 className="font-semibold">Chat Support</h3>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-4 h-80 overflow-y-auto space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.isUser
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
              />
              <Button type="submit">Send</Button>
            </div>
          </form>
        </Card>
      ) : (
        <Button
          className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg z-50"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}
