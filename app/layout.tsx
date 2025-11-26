import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Updated font to Poppins as specified in design brief
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sunkode.com"),
  title: {
    default: "Sunkode - Create Solar Proposals in 60 Seconds | Solar Design Software",
    template: "%s | Sunkode",
  },
  description:
    "Deliver branded, professional solar proposals instantly and close deals faster. Built for EPC companies and installers. Create accurate solar proposals, manage leads, and streamline your solar business operations.",
  keywords: [
    "solar proposal software",
    "solar design tool",
    "EPC software India",
    "solar quotation software",
    "solar CRM",
    "solar proposal generator",
    "renewable energy software",
    "solar business management",
    "solar panel design",
    "solar installation software",
  ],
  authors: [{ name: "Sunkode" }],
  creator: "Sunkode",
  publisher: "Sunkode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sunkode.com",
    siteName: "Sunkode",
    title: "Sunkode - Create Solar Proposals in 60 Seconds",
    description:
      "Deliver branded, professional solar proposals instantly and close deals faster. Built for EPC companies and installers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sunkode Solar Proposal Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunkode - Create Solar Proposals in 60 Seconds",
    description:
      "Deliver branded, professional solar proposals instantly and close deals faster. Built for EPC companies and installers.",
    images: ["/og-image.jpg"],
    creator: "@sunkode",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9A825" },
    { media: "(prefers-color-scheme: dark)", color: "#1E3A8A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
