"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "EPC Owner",
    location: "Pune, Maharashtra",
    avatar: "/professional-indian-businessman.png",
    quote:
      "Now we generate proposals during client site visits. Our conversion rate increased by 40%. SunCode has transformed how we do business.",
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

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-white mb-4 text-balance">
            Trusted by Solar EPC Installers
          </h2>
          <p className="text-xl text-blue-100 text-pretty">Join hundreds of successful solar companies across India</p>
        </div>

        {/* Main Testimonial */}
        <Card className="max-w-4xl mx-auto p-8 lg:p-12 mb-8">
          <div className="flex gap-1 mb-6 justify-center">
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#F9A825] text-[#F9A825]" />
            ))}
          </div>

          <blockquote className="text-xl lg:text-2xl text-gray-700 text-center mb-8 leading-relaxed text-balance">
            "{testimonials[activeIndex].quote}"
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
              />
              <AvatarFallback>
                {testimonials[activeIndex].name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-bold text-lg text-[#1E3A8A]">{testimonials[activeIndex].name}</div>
              <div className="text-gray-600">{testimonials[activeIndex].role}</div>
              <div className="text-sm text-gray-500">{testimonials[activeIndex].location}</div>
            </div>
          </div>
        </Card>

        {/* Testimonial Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors ${index === activeIndex ? "bg-white" : "bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
