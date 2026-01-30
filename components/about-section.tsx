import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { about, contactInfo } from "@/lib/data"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
      <div className="max-w-4xl mx-auto" suppressHydrationWarning>
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase sticky top-24">About</h2>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed" suppressHydrationWarning>
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className={index === 0 ? "text-lg text-foreground" : ""} suppressHydrationWarning>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild variant="outline" className="rounded-full">
                <a href={about.resumeUrl} target="_blank" rel="noopener noreferrer" suppressHydrationWarning>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <div className="flex items-center gap-2">
                {contactInfo.map((item, index) => {
                  if (!item.href) return null;
                  return (
                    <Button key={index} asChild variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-full">
                      <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} suppressHydrationWarning>
                        <item.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
