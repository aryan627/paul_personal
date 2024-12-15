'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">About Me</h2>
      <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardContent>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto pt-6"
          >
            I am a Junior in Mechanical Engineering at UIUC, passionate about motorcycles and all things with motors. I enjoy weight lifting, taking on challenging tasks, meeting new people, and making a positive impact. My love for building things drives me to innovate and create.
          </motion.p>
        </CardContent>
      </Card>
    </motion.section>
  )
}

