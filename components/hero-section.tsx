"use client"

import { ArrowDown, Download, Mail } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { heroData } from "@/lib/data"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto text-center" suppressHydrationWarning>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700" suppressHydrationWarning>
          <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-border shadow-2xl" suppressHydrationWarning>
            <Image
              src={heroData.avatarUrl}
              alt={heroData.name}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4" suppressHydrationWarning>{heroData.role}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance" suppressHydrationWarning>
            {heroData.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-2" suppressHydrationWarning>{heroData.scholarship}</p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty" suppressHydrationWarning>
            {heroData.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" suppressHydrationWarning>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90"
            >
              <a href={heroData.actions.primary.href} suppressHydrationWarning>{heroData.actions.primary.label}</a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent" asChild>
              <a href={heroData.actions.secondary.href} download suppressHydrationWarning>
                <Download className="w-4 h-4 mr-2" />
                {heroData.actions.secondary.label}
              </a>
            </Button>
            <Button variant="ghost" size="lg" className="rounded-full px-8" asChild>
              <a href={heroData.actions.tertiary.href} suppressHydrationWarning>
                <Mail className="w-4 h-4 mr-2" />
                {heroData.actions.tertiary.label}
              </a>
            </Button>
          </div>

          <a
            href="#about"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border hover:border-foreground transition-colors duration-200 animate-bounce"
            suppressHydrationWarning
          >
            <ArrowDown className="w-4 h-4 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  )
}
