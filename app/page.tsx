import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ComingSoonSection } from "@/components/coming-soon-section"
import { ServicesSection } from "@/components/services-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ComingSoonSection />
        <ServicesSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
