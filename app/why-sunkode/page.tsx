import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { ServicesSection } from "@/components/services-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Why Choose Sunkode - Best Solar Proposal Software for EPC Companies",
  description:
    "Discover why solar EPC companies choose Sunkode for professional proposal generation. Generate branded proposals in 60 seconds, not hours. Increase win rates and close deals faster.",
  keywords: [
    "why choose sunkode",
    "solar proposal benefits",
    "EPC software advantages",
    "solar business automation",
    "proposal software ROI",
    "solar CRM benefits",
  ],
  openGraph: {
    title: "Why Choose Sunkode - Transform Your Solar Business",
    description: "Generate branded solar proposals in 60 seconds and close deals faster with Sunkode.",
    type: "website",
    url: "https://sunkode.com/why-sunkode",
    images: [
      {
        url: "/Sunkode-title.jpg",
        width: 1200,
        height: 630,
        alt: "Why Choose Sunkode Solar Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Sunkode",
    description: "Generate branded solar proposals in 60 seconds and close deals faster.",
    images: ["/Sunkode-title.jpg"],
  },
  alternates: {
    canonical: "https://sunkode.com/why-sunkode",
  },
}

export default function WhySunkodePage() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <main>
        <ProblemSolutionSection />
        <ServicesSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
