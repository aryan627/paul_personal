'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import Header from '@/components/pages/components/Header'
import Hero from '@/components/pages/components/Hero'
import About from '@/components/pages/components/About'
import Experience from '@/components/pages/components/Experience'
import Skills from '@/components/pages/components/Skills'
import Projects from '@/components/pages/components/Projects'
import Footer from '@/components/pages/components/Footer'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-dark text-foreground">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary transform-origin-0" style={{ scaleX }} />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

