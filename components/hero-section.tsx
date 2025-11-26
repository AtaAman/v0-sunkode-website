"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleGetStarted = () => {
    window.open("https://www.sunkode.com/login", "_blank")
  }

  const handleScheduleDemo = () => {
    const phoneNumber = "919876543210"
    const message = "Hi! I'd like to schedule a demo of Sunkode."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section className="relative bg-gradient-to-br from-white via-[#F0F9FF] to-[#E0F2FE] py-12 md:py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-10 w-32 h-32 bg-[#8ecae6]/20 rounded-full blur-3xl transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        />
        <div
          className={`absolute bottom-40 right-20 w-40 h-40 bg-[#219ebc]/20 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        />
        <div
          className={`absolute top-1/2 right-1/3 w-24 h-24 bg-[#ffb703]/15 rounded-full blur-2xl transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-5 lg:space-y-7">
            <div
              className={`inline-flex items-center gap-2 rounded-full bg-[#ffb703]/15 px-4 py-1.5 text-sm font-medium text-[#023047] border border-[#ffb703]/30 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              <Sparkles className="h-4 w-4 text-[#ffb703] animate-pulse" />
              <span>Transform Your Solar Business</span>
            </div>

            <h1
              className={`font-normal text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#111827] leading-tight transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              Create Solar Proposals <span className="text-[#023047]">in 60 Seconds</span>{" "}
              <span className="italic font-light text-[#ffb703] block mt-1">or Less</span>
            </h1>

            <p
              className={`text-base md:text-lg text-[#374151] leading-relaxed max-w-xl transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              Seamlessly create designs, deliver branded proposals instantly, and close deals faster with Sunkode's
              solar software solutions.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 pt-2 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-[#fb8500] text-white hover:bg-[#ffb703] font-semibold text-base px-6 py-5 rounded-lg shadow-lg shadow-[#fb8500]/30 transition-all hover:shadow-xl hover:shadow-[#fb8500]/40 hover:-translate-y-1 hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={handleScheduleDemo}
                size="lg"
                variant="outline"
                className="border-2 border-[#023047] text-[#023047] hover:bg-[#023047] hover:text-white font-semibold text-base px-6 py-5 rounded-lg bg-white transition-all hover:-translate-y-1 hover:scale-105"
              >
                Schedule Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Product Mockup with floating cards */}
          <div
            className={`relative transition-all duration-1000 delay-400 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="rounded-xl lg:rounded-2xl bg-white p-2 md:p-3 shadow-2xl border-2 border-white hover:shadow-3xl transition-shadow duration-300">
              <div className="aspect-[4/3] rounded-lg lg:rounded-xl bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden">
                <img
                  src="/hero.webp"
                  alt="Sunkode Solar Proposal Interface"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div
              className={`absolute -top-4 -right-4 bg-white rounded-lg shadow-xl p-3 border border-gray-100 hidden md:block transition-all duration-1000 delay-600 hover:scale-110 hover:shadow-2xl ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}
              style={{
                animation: mounted ? "float 3s ease-in-out infinite" : "none",
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#219ebc] flex items-center justify-center animate-pulse">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#111827]">PDF Report Ready!</div>
                  <div className="text-xs text-[#6B7280]">For Download</div>
                </div>
              </div>
            </div>

            <div
              className={`absolute -bottom-6 -left-6 bg-white rounded-lg p-3 shadow-xl border border-gray-100 hidden lg:block transition-all duration-1000 delay-700 hover:scale-110 hover:shadow-2xl ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                animation: mounted ? "float 3s ease-in-out infinite 1.5s" : "none",
              }}
            >
              <div className="text-xs text-[#6B7280] mb-1">Trusted by</div>
              <div className="text-2xl font-bold text-[#111827]">100+ Users</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}
