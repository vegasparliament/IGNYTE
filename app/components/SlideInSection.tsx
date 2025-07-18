'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface SlideInSectionProps {
  children: ReactNode
  fromLeft?: boolean
}

export default function SlideInSection({ children, fromLeft = false }: SlideInSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const variants = {
    hidden: { opacity: 0, x: fromLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
