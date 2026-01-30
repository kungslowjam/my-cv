import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ResearchInterestsSection } from "@/components/research-interests-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SideProjectsSection } from "@/components/side-projects-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <SideProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ResearchInterestsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
