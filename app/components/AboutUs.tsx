'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

const milestones = [
  { year: 2010, title: 'Company Founded', description: 'Alpha One Defense was established with a vision to revolutionize the security industry.' },
  { year: 2013, title: 'Expansion to Corporate Security', description: 'Launched our corporate security division, serving Fortune 500 companies.' },
  { year: 2016, title: 'Introduction of Cutting-edge Technology', description: 'Integrated AI-powered surveillance systems into our service offerings.' },
  { year: 2019, title: 'International Operations', description: 'Expanded our services to international markets, providing global security solutions.' },
  { year: 2022, title: 'Industry Recognition', description: 'Received the "Security Company of the Year" award for excellence in service.' },
]

const teamMembers = [
  { name: 'John Doe', role: 'CEO & Founder', image: '/team/john-doe.jpg', bio: 'Former military officer with 20 years of experience in strategic operations and leadership.' },
  { name: 'Jane Smith', role: 'COO', image: '/team/jane-smith.jpg', bio: 'Security industry veteran with expertise in risk management and corporate security.' },
  { name: 'Mike Johnson', role: 'Head of Technology', image: '/team/mike-johnson.jpg', bio: 'Tech innovator specializing in AI-driven security solutions and cybersecurity.' },
  { name: 'Sarah Brown', role: 'Director of Training', image: '/team/sarah-brown.jpg', bio: 'Former law enforcement officer, expert in tactical training and crisis management.' },
]

const stats = [
  { value: 5000, label: 'Clients Protected', prefix: '+' },
  { value: 98, label: 'Client Satisfaction', suffix: '%' },
  { value: 24, label: 'Hours of Protection', suffix: '/7' },
  { value: 15, label: 'Years of Excellence', suffix: '+' },
]

export default function AboutUs() {
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(null)

  return (
    <section id="about" className="section-padding">
      <div className="container content-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="h2 mb-4">
            About Alpha One Defense
          </h2>
          <p className="lead text-muted-foreground">
            Setting the standard in professional security services with 
            unmatched expertise and dedication.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <Card>
            <CardContent className="p-8 space-y-4">
              <h3 className="h3 mb-4">Our Mission</h3>
              <p className="paragraph text-muted-foreground">
                At Alpha One Defense, we are committed to providing unparalleled 
                security solutions that safeguard lives, assets, and peace of mind. 
                Our mission is to continuously innovate and set new standards in 
                the security industry.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 space-y-4">
              <h3 className="h3 mb-4">Our Values</h3>
              <ul className="space-y-2">
                {[
                  'Unwavering commitment to excellence',
                  'Proactive threat prevention',
                  'Continuous professional development',
                  'Client-focused solutions'
                ].map((value, index) => (
                  <li key={index} className="flex items-center paragraph text-muted-foreground">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                    {value}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="h3 mb-8 text-center">Our Journey</h3>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <Card key={index} className="cursor-pointer" onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="h4 mb-2">{milestone.year}</h4>
                      <h5 className="h5 mb-2">{milestone.title}</h5>
                    </div>
                    {expandedMilestone === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  {expandedMilestone === index && (
                    <p className="mt-4 text-muted-foreground">{milestone.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="h3 mb-8 text-center">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="h4 mb-2">{member.name}</h4>
                  <p className="text-secondary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="h3 mb-8 text-center">Alpha One by the Numbers</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h4 className="h2 mb-2 text-primary">
                      {stat.prefix}{stat.value}{stat.suffix}
                    </h4>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </motion.div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button 
            asChild 
            size="lg" 
            className="btn-hover text-lg px-8 py-6"
          >
            <Link href="#contact">Learn More About Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
