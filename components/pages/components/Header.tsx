'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-background/80 backdrop-blur-sm sticky top-0 z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/" className="text-2xl font-bold text-primary">Paul Klapperich</Link>
        </motion.div>
        <ul className="flex space-x-2">
          {['About', 'Experience', 'Skills', 'Projects'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" asChild>
                <Link href={`#${item.toLowerCase()}`}>{item}</Link>
              </Button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

