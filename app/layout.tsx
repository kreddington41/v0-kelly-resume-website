import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { siteConfig } from "@/lib/site"

const inter = Inter({ subsets: ["latin"] })

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: `mailto:${siteConfig.email}`,
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      knowsAbout: siteConfig.knowsAbout,
      sameAs: siteConfig.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      about: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile`,
      url: siteConfig.url,
      name: siteConfig.title,
      mainEntity: { "@id": `${siteConfig.url}/#person` },
      isPartOf: { "@id": `${siteConfig.url}/#website` },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "Kelly Reddington",
    "AI-native product marketer",
    "product marketing",
    "brand strategist",
    "GTM leader",
    "go-to-market strategy",
    "content strategy",
    "copywriting",
    "AI automations",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    firstName: "Kelly",
    lastName: "Reddington",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
