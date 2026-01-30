"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { projects, type ProjectMedia } from "@/lib/data"

const getYouTubeId = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:shorts\/|watch\?v=|embed\/))([\w-]+)/)
  return match ? match[1] : null
}

const getYouTubeEmbedUrl = (url: string) => {
  const id = getYouTubeId(url)
  return id ? `https://www.youtube.com/embed/${id}` : url
}

const getYouTubeThumbnail = (url: string) => {
  const id = getYouTubeId(url)
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null
}

export function ProjectsSection() {
  const [lightboxMedia, setLightboxMedia] = useState<ProjectMedia | null>(null)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
      <div className="max-w-6xl mx-auto" suppressHydrationWarning>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">Selected Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg bg-card"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-secondary rounded-lg group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {project.media?.length ? (
                  <div className="mb-6">
                    {project.media.length === 1 ? (
                      // Single media: Full width
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 bg-muted/30 group/media">
                        <button
                          type="button"
                          onClick={() => setLightboxMedia(project.media![0])}
                          className="w-full h-full focus-visible:outline-none"
                        >
                          {project.media[0].type === "image" ? (
                            <Image
                              src={project.media[0].src}
                              alt={project.media[0].alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover/media:scale-105"
                              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            />
                          ) : project.media[0].type === "video" ? (
                            <video
                              src={project.media[0].src}
                              className="w-full h-full object-cover"
                              muted
                              autoPlay
                              loop
                              playsInline
                            />
                          ) : (
                            <div className="relative w-full h-full">
                              <Image
                                src={getYouTubeThumbnail(project.media[0].src) || ""}
                                alt={project.media[0].alt}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                <Play className="w-10 h-10 text-white fill-white" />
                              </div>
                            </div>
                          )}
                        </button>
                      </div>
                    ) : (
                      // Multiple media: Horizontal scroll
                      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted-foreground/20">
                        {project.media.map((item, mediaIndex) => {
                          const youtubeThumbnail = item.type === "youtube" ? getYouTubeThumbnail(item.src) : null
                          return (
                            <button
                              type="button"
                              key={`${project.title}-${mediaIndex}`}
                              onClick={() => setLightboxMedia(item)}
                              className="relative flex-shrink-0 w-[280px] sm:w-[320px] aspect-video rounded-xl overflow-hidden border border-border/50 bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all hover:border-foreground/20 snap-start"
                            >
                              {item.type === "image" ? (
                                <Image
                                  src={item.src}
                                  alt={item.alt}
                                  fill
                                  sizes="240px"
                                  className="object-cover"
                                />
                              ) : item.type === "video" ? (
                                <video src={item.src} className="w-full h-full object-cover" muted autoPlay loop playsInline />
                              ) : (
                                <div className="relative w-full h-full">
                                  <Image src={youtubeThumbnail || ""} alt={item.alt} fill className="object-cover" />
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                    <Play className="w-8 h-8 text-white fill-white" />
                                  </div>
                                </div>
                              )}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ) : null}
                <div className="mb-3">
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Dialog open={!!lightboxMedia} onOpenChange={(open: boolean) => !open && setLightboxMedia(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/95 border-none sm:rounded-2xl">
          <DialogTitle className="sr-only">{lightboxMedia?.alt || "Project Media"}</DialogTitle>
          <div className="relative w-full h-[60vh] flex items-center justify-center">
            {lightboxMedia && (
              <>
                {lightboxMedia.type === "image" ? (
                  <Image
                    src={lightboxMedia.src}
                    alt={lightboxMedia.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                ) : lightboxMedia.type === "video" ? (
                  <video
                    src={lightboxMedia.src}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <iframe
                    src={`${getYouTubeEmbedUrl(lightboxMedia.src)}?autoplay=1`}
                    title={lightboxMedia.alt}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </>
            )}
          </div>
          {lightboxMedia && (
            <div className="p-4 text-center bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
              <p className="text-sm text-white/90 font-medium">{lightboxMedia.alt}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
