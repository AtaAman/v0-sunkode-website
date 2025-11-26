"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function FinalCTASection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleBookDemo = () => {
    const phoneNumber = "919876543210"
    const message = "Hi! I'd like to book a free demo of Sunkode."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleTryNow = () => {
    window.open("https://www.sunkode.com/login", "_blank")
  }

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#219ebc] to-[#8ecae6] overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-40 h-40 bg-[#F9A825]/20 rounded-full blur-3xl transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute bottom-20 right-10 w-40 h-40 bg-[#4CAF50]/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl transition-all duration-1000 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white border border-white/30 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <Sparkles className="h-4 w-4 text-[#F9A825] animate-pulse" />
            <span>Ready to Transform Your Business?</span>
          </div>

          <h2
            className={`font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 md:mb-6 text-balance leading-tight transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Stop Losing Solar Deals. Start Closing Faster.
          </h2>

          <p
            className={`text-lg md:text-xl lg:text-2xl text-blue-100 text-pretty max-w-3xl mx-auto transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Your customers don't wait — your proposals shouldn't either.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <Button
              onClick={handleBookDemo}
              size="lg"
              className="bg-[#F9A825] text-white hover:bg-[#FB8C00] font-semibold text-base md:text-lg px-8 py-6 rounded-lg shadow-lg shadow-[#F9A825]/30 transition-all hover:shadow-xl hover:shadow-[#F9A825]/50 hover:-translate-y-1 hover:scale-105"
            >
              Book Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={handleTryNow}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] font-semibold text-base md:text-lg px-8 py-6 rounded-lg bg-transparent transition-all hover:-translate-y-1 hover:scale-105"
            >
              Try It Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
