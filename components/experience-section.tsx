import { experiences } from "@/lib/data"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto" suppressHydrationWarning>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase sticky top-24">
              Experience
            </h2>
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative pl-8 pb-12 last:pb-0 border-l border-border hover:border-foreground/30 transition-colors duration-300"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-border group-hover:bg-foreground transition-colors duration-300" />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground" suppressHydrationWarning>{exp.title}</h3>
                      <p className="text-muted-foreground" suppressHydrationWarning>{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground whitespace-nowrap" suppressHydrationWarning>{exp.period}</span>
                      {exp.current && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-foreground text-background">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed" suppressHydrationWarning>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
