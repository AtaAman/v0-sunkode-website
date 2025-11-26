"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Target, FileText, Smartphone, FolderOpen, Edit3, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const features = [
  {
    icon: Zap,
    title: "Proposals in 60 Seconds",
    description: "Generate complete, professional proposals with just a few clicks.",
  },
  {
    icon: Target,
    title: "100% Custom Branding",
    description: "Add your logo, colors, and company information to reflect your brand.",
  },
  {
    icon: FileText,
    title: "Multiple Proposal Types",
    description: "On-grid, Off-grid, Residential, Commercial - all pre-configured.",
  },
  {
    icon: Smartphone,
    title: "Instant WhatsApp & Email",
    description: "Share proposals directly via WhatsApp or Email instantly.",
  },
  {
    icon: FolderOpen,
    title: "Professional Templates",
    description: "Choose from multiple designed templates that impress clients.",
  },
  {
    icon: Edit3,
    title: "Fully Editable",
    description: "Edit pricing, images, BOM, terms - complete control over everything.",
  },
]

export function FeaturesSection() {
  const [mounted, setMounted] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getCardWidth = () => {
    if (!scrollContainerRef.current) return 0
    const card = scrollContainerRef.current.firstElementChild as HTMLElement
    if (!card) return 0
    // Get gap from computed style or estimate
    const style = window.getComputedStyle(scrollContainerRef.current)
    const gap = parseInt(style.columnGap || style.gap || "24")
    return card.offsetWidth + gap
  }

  const scrollToNext = () => {
    if (!scrollContainerRef.current) return
    const width = getCardWidth()
    scrollContainerRef.current.scrollBy({ left: width, behavior: "smooth" })
  }

  const scrollToPrev = () => {
    if (!scrollContainerRef.current) return
    const width = getCardWidth()
    scrollContainerRef.current.scrollBy({ left: -width, behavior: "smooth" })
  }

  const handleGetStarted = () => {
    window.open("https://www.sunkode.com/login", "_blank")
  }

  return (
    <section
      id="features"
      className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-br from-[#023047] via-[#219ebc] to-[#023047] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className={`absolute top-20 right-10 w-32 h-32 bg-[#8ecae6]/20 rounded-full blur-3xl transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute bottom-20 left-20 w-40 h-40 bg-[#ffb703]/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white border border-white/30 mb-4 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <span>Powerful Features</span>
          </div>
          <h2
            className={`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-3 md:mb-4 text-balance transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Everything You Need to Close Faster
          </h2>
          <p
            className={`text-base md:text-lg lg:text-xl text-blue-100 text-pretty max-w-3xl mx-auto transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Powerful features for solar EPC companies and installers
          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto mb-8 md:mb-12 pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] p-4 md:p-5 lg:p-6 bg-white border border-gray-100 hover:shadow-xl hover:border-[#ffb703]/20 transition-all duration-300 hover:-translate-y-1 snap-start ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffb703] to-[#fb8500] mb-3 md:mb-4 shadow-md shadow-[#ffb703]/30">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#023047] mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-[#374151] leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={scrollToPrev}
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={scrollToNext}
              size="icon"
              variant="outline"
              className="h-10 w-10 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <Button
            onClick={handleGetStarted}
            size="lg"
            className="bg-[#ffb703] text-white hover:bg-[#fb8500] font-semibold px-8 py-6 rounded-lg shadow-lg shadow-[#ffb703]/30 transition-all hover:shadow-xl hover:shadow-[#ffb703]/40 hover:-translate-y-1"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
