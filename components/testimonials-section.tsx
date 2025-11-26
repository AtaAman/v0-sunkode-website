"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "EPC Owner",
    location: "Pune, Maharashtra",
    avatar: "/professional-indian-businessman.png",
    quote:
      "Now we generate proposals during client site visits. Our conversion rate increased by 40%. Sunkode has transformed how we do business.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Solar Installer",
    location: "Bangalore, Karnataka",
    avatar: "/team-member-2.png",
    quote:
      "Used to take us 3-4 hours per proposal. Now it takes 60 seconds. Our team can handle 10x more clients without hiring additional staff.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Project Manager",
    location: "Ahmedabad, Gujarat",
    avatar: "/professional-indian-project-manager.jpg",
    quote:
      "The branded templates make us look like a premium company. Clients are impressed before we even start the conversation.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="testimonials"
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-[#F9FAFB] to-[#FEF9F3] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#2563EB]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#4CAF50]/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-[#2563EB]/15 px-4 py-1.5 text-sm font-medium text-[#1E3A8A] border border-[#2563EB]/30 mb-4 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <span>Client Success Stories</span>
          </div>
          <h2
            className={`font-bold text-3xl md:text-4xl lg:text-5xl text-[#1E3A8A] mb-3 md:mb-4 text-balance transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Trusted by Solar EPC Installers
          </h2>
          <p
            className={`text-lg md:text-xl text-[#374151] text-pretty transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            Join hundreds of successful solar companies across India
          </p>
        </div>

        <Card
          className={`max-w-4xl mx-auto p-6 md:p-10 lg:p-12 mb-8 bg-white rounded-2xl shadow-2xl border-0 transition-all duration-700 delay-300 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="flex gap-1 mb-6 justify-center">
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#F9A825] text-[#F9A825]" />
            ))}
          </div>

          <blockquote className="text-lg md:text-xl lg:text-2xl text-[#111827] text-center mb-8 leading-relaxed text-balance font-normal">
            "{testimonials[activeIndex].quote}"
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <Avatar className="h-14 w-14 md:h-16 md:w-16 ring-4 ring-[#F9A825]/20">
              <AvatarImage
                src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
                className="object-cover"
              />
              <AvatarFallback className="bg-[#F9A825] text-white font-semibold">
                {testimonials[activeIndex].name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="font-bold text-base md:text-lg text-[#1E3A8A]">{testimonials[activeIndex].name}</div>
              <div className="text-sm md:text-base text-[#374151]">{testimonials[activeIndex].role}</div>
              <div className="text-xs md:text-sm text-[#6B7280]">{testimonials[activeIndex].location}</div>
            </div>
          </div>
        </Card>

        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 hover:scale-110 ${index === activeIndex ? "bg-white w-8" : "bg-white/40 w-2.5 hover:bg-white/60"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
