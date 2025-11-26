"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Target, FileText, Smartphone, FolderOpen, Edit3 } from "lucide-react"
import { useEffect, useState } from "react"

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

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleGetStarted = () => {
    window.open("https://www.sunkode.com/login", "_blank")
  }

  return (
    <section
      id="features"
      className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-br from-white via-[#F9FAFB] to-[#FEF9F3] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 right-10 w-32 h-32 bg-[#2563EB]/10 rounded-full blur-3xl transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute bottom-20 left-20 w-40 h-40 bg-[#4CAF50]/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-[#2563EB]/15 px-4 py-1.5 text-sm font-medium text-[#1E3A8A] border border-[#2563EB]/30 mb-4 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <span>Powerful Features</span>
          </div>
          <h2
            className={`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1E3A8A] mb-3 md:mb-4 text-balance transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Everything You Need to Close Faster
          </h2>
          <p
            className={`text-base md:text-lg lg:text-xl text-[#374151] text-pretty max-w-3xl mx-auto transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Powerful features for solar EPC companies and installers
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8 md:mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`p-4 md:p-5 lg:p-6 bg-white border border-gray-100 hover:shadow-xl hover:border-[#F9A825]/20 transition-all duration-300 hover:-translate-y-1 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F9A825] to-[#FB8C00] mb-3 md:mb-4 shadow-md shadow-[#F9A825]/30">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#1E3A8A] mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-[#374151] leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="bg-[#F9A825] text-white hover:bg-[#FB8C00] font-semibold px-8 py-6 rounded-lg shadow-lg shadow-[#F9A825]/30 transition-all hover:shadow-xl hover:shadow-[#F9A825]/40 hover:-translate-y-1"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
