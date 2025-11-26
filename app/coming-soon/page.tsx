import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ComingSoonSection } from "@/components/coming-soon-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Coming Soon - Upcoming Features | Sunkode Solar Software",
  description:
    "Explore upcoming features for Sunkode including CRM integration, advanced project management, inventory tracking, automated invoicing, and team coordination tools for solar EPC businesses.",
  keywords: [
    "solar CRM coming soon",
    "solar project management",
    "inventory management solar",
    "solar invoicing software",
    "team collaboration tools",
    "upcoming solar features",
  ],
  openGraph: {
    title: "Coming Soon - Upcoming Features | Sunkode",
    description: "Exciting new features coming to Sunkode solar proposal software.",
    type: "website",
    url: "https://sunkode.com/coming-soon",
    images: ["/Sunkode-title.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon - Upcoming Features",
    description: "Exciting new features coming to Sunkode solar proposal software.",
    images: ["/Sunkode-title.jpg"],
  },
  alternates: {
    canonical: "https://sunkode.com/coming-soon",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <main>
        <ComingSoonSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
