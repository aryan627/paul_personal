'use client'

import { motion } from 'framer-motion'
import { PenToolIcon as Tool, Cpu, Users, Mic, Wrench, PrinterIcon as Printer3d } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: "Project Management", icon: Tool },
  { name: "Research and Development (R&D)", icon: Cpu },
  { name: "CAD Design", icon: Cpu },
  { name: "Mechanical Engineering", icon: Wrench },
  { name: "Team Leadership", icon: Users },
  { name: "Public Speaking", icon: Mic },
  { name: "Tool & Die", icon: Wrench },
  { name: "CNC Operation", icon: Cpu },
  { name: "Welding", icon: Tool },
  { name: "3D Printing", icon: Printer3d }
]

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ 
              scale: 1.05,
              rotate: 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg group">
              <CardContent className="flex flex-col items-center justify-center h-full p-6">
                <skill.icon className="text-primary mb-2 transition-transform duration-300 group-hover:scale-125" size={24} />
                <span className="text-center">{skill.name}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
