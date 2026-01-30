"use client"

import { contactInfo } from "@/lib/data"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase sticky top-24">
              Contact
            </h2>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Feel free to reach out for collaborations, research opportunities, or just to say hello.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-2 bg-secondary rounded-lg">
                    <info.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-foreground hover:text-muted-foreground transition-colors"
                        suppressHydrationWarning
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
