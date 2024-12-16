'use client'

import { motion } from 'framer-motion'
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="mb-4 text-muted-foreground">&copy; {new Date().getFullYear()} Paul Klapperich. All rights reserved.</p>
          <div className="flex space-x-4">
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
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

