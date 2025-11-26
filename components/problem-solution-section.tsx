"use client"

import { CheckCircle2, X, Sparkles, FileText } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

export function ProblemSolutionSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="why-sunkode"
      className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 right-20 w-32 h-32 bg-[#F9A825]/10 rounded-full blur-3xl transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute bottom-20 left-20 w-40 h-40 bg-[#2563EB]/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 space-y-4">
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-[#F9A825]/10 px-4 py-1.5 text-sm font-medium text-[#F9A825] border border-[#F9A825]/20 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <Sparkles className="h-4 w-4 text-[#F9A825]" />
            <span>Why Sunkode</span>
          </div>

          <h2
            className={`font-normal text-3xl md:text-4xl lg:text-5xl text-white leading-tight transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Still Using Manual Methods?
          </h2>
          <p
            className={`text-base md:text-lg text-blue-100 text-pretty max-w-2xl mx-auto transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            It's time to upgrade your proposal process
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {/* Problems Card */}
          <Card
            className={`p-6 md:p-8 border border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-block rounded-full bg-red-100 px-4 py-1.5 mb-4">
              <h3 className="font-semibold text-lg text-red-900">The Old Way</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-red-100 p-1 flex-shrink-0 mt-0.5">
                  <X className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-base text-[#374151] leading-relaxed">Takes hours to prepare proposals</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-red-100 p-1 flex-shrink-0 mt-0.5">
                  <X className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-base text-[#374151] leading-relaxed">Lost deals due to slow response</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-red-100 p-1 flex-shrink-0 mt-0.5">
                  <X className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-base text-[#374151] leading-relaxed">Manual designs, no branding consistency</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-red-100 p-1 flex-shrink-0 mt-0.5">
                  <X className="h-4 w-4 text-red-600" />
                </div>
                <p className="text-base text-[#374151] leading-relaxed">Hiring proposal staff = extra cost</p>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-red-50 to-red-100/50 p-8 border border-red-200">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <FileText className="h-20 w-20 text-red-400/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <X className="h-12 w-12 text-red-600" />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-red-800 mt-4 font-medium">Manual & Time-Consuming</p>
            </div>
          </Card>

          {/* Solutions Card */}
          <Card
            className={`p-6 md:p-8 border-2 border-[#4CAF50]/30 bg-gradient-to-br from-white to-green-50/50 shadow-lg hover:shadow-xl transition-all duration-500 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="inline-block rounded-full bg-[#4CAF50]/15 px-4 py-1.5 mb-4 border border-[#4CAF50]/30">
              <h3 className="font-semibold text-lg text-[#1E3A8A]">With Sunkode</h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#4CAF50]/15 p-1 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-[#4CAF50]" />
                </div>
                <p className="text-base text-[#374151] leading-relaxed">Generate proposals in 60 seconds</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#4CAF50]/15 p-1 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-[#4CAF50]" />
                </div>
                <p className="text-base text-[#374151] leading-relaxed">Deliver via WhatsApp & Email instantly</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#4CAF50]/15 p-1 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-[#4CAF50]" />
                </div>
                <p className="text-base text-[#374151] leading-relaxed">Use professional branded templates</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#4CAF50]/15 p-1 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-[#4CAF50]" />
                </div>
                <p className="text-base text-[#374151] leading-relaxed">Customize pricing, BOM, logos, terms</p>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-green-50 to-[#4CAF50]/10 p-8 border-2 border-[#4CAF50]/20">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <FileText className="h-20 w-20 text-[#4CAF50]/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CheckCircle2 className="h-12 w-12 text-[#4CAF50]" />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-[#1E3A8A] mt-4 font-medium">Professional & Instant</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
