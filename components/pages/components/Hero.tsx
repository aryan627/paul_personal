'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mb-8"
      >
        <Image
          src="/paul.jpeg"
          alt="Paul Klapperich"
          width={200}
          height={200}
          className="rounded-full mx-auto border-4 border-primary"
        />
      </motion.div>
      <h1 className="text-5xl font-bold mb-4 text-primary">Paul Klapperich</h1>
      <p className="text-xl text-muted-foreground mb-8">Mechanical Engineering Student & Innovator</p>
      <motion.div 
        className="flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Button variant="outline" size="icon">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <GitHub className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a href="https://www.linkedin.com/in/paulklapperich/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" onClick={() => window.location.href = 'mailto:paulklapperich12@gmail.com'}>
          <Mail className="h-5 w-5" />
        </Button>
      </motion.div>
    </motion.section>
  )
}

