"use client"

import { Card } from "@/components/ui/card"
import { Users, Briefcase, Package, FileText, Calendar } from "lucide-react"
import { useEffect, useState } from "react"

const features = [
  {
    icon: Users,
    title: "CRM & Lead Management",
    description: "Track leads, manage customer relationships, and never miss a follow-up.",
  },
  {
    icon: Briefcase,
    title: "Project Planning & Execution",
    description: "Plan, track, and manage solar installations from start to finish.",
  },
  {
    icon: Package,
    title: "Inventory & Purchase Management",
    description: "Track panels, inverters, and equipment. Manage suppliers and orders.",
  },
  {
    icon: FileText,
    title: "Invoicing & Payment Tracking",
    description: "Generate invoices, track payments, and manage your finances.",
  },
  {
    icon: Calendar,
    title: "Task & Team Coordination",
    description: "Assign tasks, coordinate teams, and keep everyone on the same page.",
  },
]

export function ComingSoonSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#F9FAFB] via-white to-[#FEF9F3] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 right-20 w-40 h-40 bg-[#F9A825]/10 rounded-full blur-3xl transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute bottom-20 left-20 w-40 h-40 bg-[#2563EB]/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F9A825] to-[#FB8C00] px-5 py-2 text-sm font-semibold text-white shadow-md mb-5 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>COMING SOON</span>
          </div>
          <h2
            className={`font-bold text-3xl md:text-4xl lg:text-5xl text-[#1E3A8A] mb-4 md:mb-5 text-balance transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Building the Complete Solar Business Suite
          </h2>
          <p
            className={`text-lg md:text-xl text-[#374151] text-pretty max-w-3xl mx-auto transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            We're working on features that will manage every aspect of your solar business
          </p>
        </div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`p-5 md:p-6 bg-white border border-gray-100 hover:shadow-xl hover:border-[#2563EB]/20 transition-all duration-300 hover:-translate-y-1 rounded-xl relative overflow-hidden ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-semibold text-[#F9A825] bg-[#F9A825]/10 px-2.5 py-1 rounded-full border border-[#F9A825]/20">
                    Coming Soon
                  </span>
                </div>
                <div className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] mb-4 shadow-md shadow-[#2563EB]/30">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-[#1E3A8A] mb-2">{feature.title}</h3>
                <p className="text-[#374151] text-sm leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
