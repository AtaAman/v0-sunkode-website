"use client"

import { Linkedin, Mail, MessageCircle, MapPin, Phone, Facebook, Instagram } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"
    const message = "Hi! I'm interested in learning more about Sunkode."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <footer id="contact" className="bg-[#023047] text-white py-12 md:py-16 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="md" className="[&>span]:text-white" />
            </div>
            <p className="text-sm text-blue-100 mb-6 leading-relaxed">Solar Proposal Platform</p>
            <p className="text-xs text-blue-200 leading-relaxed">
              Transforming the solar industry with 60-second proposal generation. Join hundreds of solar installers
              who've increased their conversion rates by 40%.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm text-blue-100 hover:text-[#F9A825] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#features" className="text-sm text-blue-100 hover:text-[#F9A825] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/#services" className="text-sm text-blue-100 hover:text-[#F9A825] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-blue-100 hover:text-[#F9A825] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#F9A825] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-blue-200 mb-1">Email Us</p>
                  <a
                    href="mailto:sales@sunkode.com"
                    className="text-sm hover:text-[#F9A825] transition-colors break-all"
                  >
                    sales@sunkode.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#F9A825] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-blue-200 mb-1">Call Us</p>
                  <a href="tel:+919876543210" className="text-sm hover:text-[#F9A825] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#F9A825] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-blue-200 mb-1">Location</p>
                  <p className="text-sm">Mumbai, India</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Connected</h3>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61582344062437"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#F9A825] transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/sun_kode/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#F9A825] transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/sunkode"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#F9A825] transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>

            {/* Stats Badge */}
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
              <div className="text-3xl font-bold text-[#F9A825] mb-1">100+</div>
              <div className="text-xs text-blue-100">Happy Customers</div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p className="text-sm text-blue-100">&copy; {new Date().getFullYear()} Sunkode. All rights reserved.</p>
              <a
                href="/terms"
                className="text-sm text-blue-100 hover:text-[#F9A825] transition-colors underline underline-offset-4"
              >
                Terms & Conditions
              </a>
            </div>
            <p className="text-sm text-blue-100 flex items-center gap-2">
              Made with <span className="text-red-400">❤</span> for Solar Industry
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
