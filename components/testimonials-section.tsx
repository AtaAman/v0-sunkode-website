"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"

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
  const [mounted, setMounted] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getCardWidth = () => {
    if (!scrollContainerRef.current) return 0
    const card = scrollContainerRef.current.firstElementChild as HTMLElement
    if (!card) return 0
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

        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto mb-8 md:mb-12 pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`flex-shrink-0 w-[300px] md:w-[350px] lg:w-[400px] p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 snap-start ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F9A825] text-[#F9A825]" />
                ))}
              </div>

              <blockquote className="text-base md:text-lg text-[#111827] mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <Avatar className="h-10 w-10 md:h-12 md:w-12 ring-2 ring-[#F9A825]/20">
                  <AvatarImage
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-[#F9A825] text-white font-semibold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-sm md:text-base text-[#1E3A8A]">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-[#374151]">{testimonial.role}</div>
                  <div className="text-xs text-[#6B7280]">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={scrollToPrev}
            size="icon"
            variant="outline"
            className="h-10 w-10 rounded-full bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            onClick={scrollToNext}
            size="icon"
            variant="outline"
            className="h-10 w-10 rounded-full bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
