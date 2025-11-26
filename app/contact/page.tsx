"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Company:* ${formData.company}%0A*Message:* ${formData.message}`

    const phoneNumber = "919876543210"
    const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`
    window.open(url, "_blank")

    // Reset form
    setFormData({ name: "", email: "", phone: "", company: "", message: "" })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#FFF9E6] via-white to-[#F0F9FF]">
        {/* Hero Section */}
        <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#F9A825]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#2563EB]/10 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F9A825]/20 mb-4">
                <MessageCircle className="w-4 h-4 text-[#F9A825]" />
                <span className="text-sm font-medium text-gray-700">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A8A] mb-4 md:mb-6">
                Let's Start a <span className="text-[#F9A825]">Conversation</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Have questions about Sunkode? We're here to help you transform your solar business.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col justify-between">
                  <div className="space-y-8">
                    <div>
                      <Mail className="w-6 h-6 text-[#F9A825]" />
                      <h3 className="font-semibold text-lg text-[#1E3A8A] mb-2">Email Us</h3>
                      <p className="text-gray-600 text-sm mb-3">Drop us a line anytime</p>
                      <a href="mailto:sales@sunkode.com" className="text-[#2563EB] hover:underline font-medium">
                        sales@sunkode.com
                      </a>
                    </div>

                    <div>
                      <Phone className="w-6 h-6 text-[#25D366]" />
                      <h3 className="font-semibold text-lg text-[#1E3A8A] mb-2">Call Us</h3>
                      <p className="text-gray-600 text-sm mb-3">Mon-Sat, 9AM to 6PM</p>
                      <a href="tel:+919876543210" className="text-[#2563EB] hover:underline font-medium">
                        +91 98765 43210
                      </a>
                    </div>

                    <div>
                      <MapPin className="w-6 h-6 text-[#2563EB]" />
                      <h3 className="font-semibold text-lg text-[#1E3A8A] mb-2">Visit Us</h3>
                      <p className="text-gray-600 text-sm mb-3">Come say hello</p>
                      <p className="text-gray-700 font-medium">Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg">
                  <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your solar business and how we can help..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-6 text-base flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Send Message via WhatsApp
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you'll be redirected to WhatsApp to complete your message.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
