'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "President, Chief Engineer",
    company: "Ghost Electric Motorcycles",
    date: "Jan 2024 - Present",
    description: "Co-founder and President, actively involved in various aspects of the organization including project management, CAD design, and overseeing all operations."
  },
  {
    title: "Machinist",
    company: "Klapperich Tool Inc",
    date: "Jun 2016 - Jan 2024",
    description: "Apprentice using manual and CNC mills, lathes, surface grinders, and other tools. Involved in welding, brazing, and inventory management."
  },
  {
    title: "Robotics Engineer",
    company: "FIRST",
    date: "Sep 2016 - Apr 2022",
    description: "Part of FIRST robotics club Got Robot? FTC team #5037. Experience with CAD, technical drawings, manufacturing, and team leadership."
  }
]

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="text-primary mr-2" />
                  <span>{exp.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="mr-2" />
                  <p>{exp.company} | {exp.date}</p>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

