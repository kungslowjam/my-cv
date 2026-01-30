import Image from "next/image"
import { GraduationCap } from "lucide-react"
import { education } from "@/lib/data"

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto" suppressHydrationWarning>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase sticky top-24">
              Education
            </h2>
          </div>
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center bg-secondary rounded-lg overflow-hidden border border-border/50">
                    {edu.logo ? (
                      <Image
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        width={40}
                        height={40}
                        className="object-contain p-1"
                      />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-foreground leading-tight" suppressHydrationWarning>{edu.degree}</h3>
                      {edu.current && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-foreground text-background w-fit">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-1" suppressHydrationWarning>{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-3" suppressHydrationWarning>{edu.year}</p>
                    {edu.highlights?.length ? (
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5 marker:text-foreground/60" suppressHydrationWarning>
                        {edu.highlights.map((item, itemIndex) => (
                          <li key={itemIndex} suppressHydrationWarning>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
