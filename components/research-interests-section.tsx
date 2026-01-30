import { Sparkles, Eye, Cpu, Sprout, Users } from "lucide-react"
import { researchInterests } from "@/lib/data"

const iconMap: Record<string, any> = {
  Sparkles,
  Eye,
  Cpu,
  Sprout,
  Users,
}

export function ResearchInterestsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto" suppressHydrationWarning>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase sticky top-24">
              Research Interests
            </h2>
          </div>
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-4">
              {researchInterests.map((interest, index) => {
                const Icon = iconMap[interest.icon] || Sparkles
                return (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="p-2 bg-secondary rounded-lg group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-foreground">{interest.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
