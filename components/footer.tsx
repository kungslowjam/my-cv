import { footerData } from "@/lib/data"

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border" suppressHydrationWarning>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4" suppressHydrationWarning>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {footerData.copyrightName}. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  )
}
