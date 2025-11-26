"use client"

import { Card } from "@/components/ui/card"
import { Globe, Smartphone, FileImage } from "lucide-react"
import { useEffect, useState } from "react"

const services = [
  {
    icon: Globe,
    title: "Website Creation",
    description: "Professional, conversion-focused websites for solar installers.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Custom mobile and web applications for your solar business.",
  },
  {
    icon: FileImage,
    title: "Brochure Design",
    description: "Stunning marketing materials that help you win more clients.",
  },
]

export function ServicesSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="services"
      className="relative py-12 md:py-20 lg:py-28 bg-gradient-to-br from-[#FEF9F3] via-white to-[#F9FAFB] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-10 left-10 w-32 h-32 bg-[#F9A825]/10 rounded-full blur-3xl transition-all duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute bottom-10 right-10 w-40 h-40 bg-[#2563EB]/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-[#4CAF50]/15 px-4 py-1.5 text-sm font-medium text-[#1E3A8A] border border-[#4CAF50]/30 mb-4 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <span>Additional Services</span>
          </div>
          <h2
            className={`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1E3A8A] mb-3 md:mb-4 text-balance transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            We Also Help You With
          </h2>
          <p
            className={`text-base md:text-lg lg:text-xl text-[#374151] text-pretty transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Complete digital solutions for your solar business
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`p-5 md:p-6 lg:p-8 text-center bg-white border border-gray-100 hover:shadow-xl hover:border-[#4CAF50]/20 transition-all duration-300 hover:-translate-y-1 rounded-xl ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] mx-auto mb-4 md:mb-5 lg:mb-6 shadow-md shadow-[#4CAF50]/30">
                  <Icon className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#1E3A8A] mb-2 md:mb-3 lg:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-[#374151] leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
