"use client"

import Image from "next/image"
import { Github, ExternalLink, Cpu, Youtube } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { sideProjects } from "@/lib/data"

export function SideProjectsSection() {
  return (
    <section id="side-projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50" suppressHydrationWarning>
      <div className="max-w-5xl mx-auto" suppressHydrationWarning>
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Side Projects</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Small experiments that keep my tooling sharp between research deployments.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a
              href="https://github.com/kungslowjam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              suppressHydrationWarning
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sideProjects.map((project, index) => (
            <Card
              key={index}
              className="group border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {project.image ? (
                  <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 border border-border/60 bg-muted">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                ) : null}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-secondary rounded-lg group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-4">
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-red-500 transition-colors"
                        suppressHydrationWarning
                      >
                        <Youtube className="w-4 h-4 mr-1" />
                        YouTube
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                      suppressHydrationWarning
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      GitHub
                    </a>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item, stackIndex) => (
                    <span key={stackIndex} className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
