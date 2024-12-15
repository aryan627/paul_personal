'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
  {
    title: "Electric Motorcycle Prototype",
    description: "Designed and built a prototype electric motorcycle as part of the Ghost Electric Motorcycles project.",
    image: "/placeholder.svg",
  },
  {
    title: "Robotics Competition Entry",
    description: "Led the design and construction of a robot for the FIRST Robotics Competition.",
    image: "/placeholder.svg",
  },
  {
    title: "CNC Machined Parts",
    description: "Designed and manufactured custom parts using CNC machines at Klapperich Tool Inc.",
    image: "/placeholder.svg",
  },
  {
    title: "3D Printed Prototypes",
    description: "Created rapid prototypes for various mechanical engineering projects using 3D printing technology.",
    image: "/placeholder.svg",
  },
]

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Projects</h2>
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="flex flex-col items-center p-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={400}
                      className="w-full h-64 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
                    />
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <p className="text-muted-foreground text-center">{project.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.section>
  )
}

