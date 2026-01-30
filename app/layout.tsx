import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

import { siteMetadata } from "@/lib/data"

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning={true}>
        <Script id="strip-bis-attributes" strategy="beforeInteractive">
          {`document.querySelectorAll('[bis_skin_checked]').forEach((el) => el.removeAttribute('bis_skin_checked'));
document.querySelectorAll('[bis_register]').forEach((el) => el.removeAttribute('bis_register'));`}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
