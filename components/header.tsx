"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#F9A825] to-[#FB8C00]">
              <span className="font-bold text-base text-white">SK</span>
            </div>
            <span className="font-bold text-lg md:text-xl text-[#1E3A8A]">Sunkode</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="/#features" className="text-sm font-medium text-gray-700 hover:text-[#1E3A8A] transition-colors">
              Features
            </a>
            <a
              href="/#why-sunkode"
              className="text-sm font-medium text-gray-700 hover:text-[#1E3A8A] transition-colors"
            >
              Why Sunkode
            </a>
            <a
              href="/#testimonials"
              className="text-sm font-medium text-gray-700 hover:text-[#1E3A8A] transition-colors"
            >
              Case Studies
            </a>
            <a href="/#services" className="text-sm font-medium text-gray-700 hover:text-[#1E3A8A] transition-colors">
              Services
            </a>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-[#1E3A8A] transition-colors">
              Blog
            </Link>
            <a href="/#contact" className="text-sm font-medium text-gray-700 hover:text-[#1E3A8A] transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#F9A825] text-white hover:bg-[#FB8C00] font-semibold">Book Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="/#features" className="block text-sm font-medium text-gray-700 hover:text-[#1E3A8A]">
              Features
            </a>
            <a href="/#why-sunkode" className="block text-sm font-medium text-gray-700 hover:text-[#1E3A8A]">
              Why Sunkode
            </a>
            <a href="/#testimonials" className="block text-sm font-medium text-gray-700 hover:text-[#1E3A8A]">
              Case Studies
            </a>
            <a href="/#services" className="block text-sm font-medium text-gray-700 hover:text-[#1E3A8A]">
              Services
            </a>
            <Link href="/blog" className="block text-sm font-medium text-gray-700 hover:text-[#1E3A8A]">
              Blog
            </Link>
            <a href="/#contact" className="block text-sm font-medium text-gray-700 hover:text-[#1E3A8A]">
              Contact
            </a>
            <Button className="w-full bg-[#F9A825] text-white hover:bg-[#FB8C00] font-semibold">Book Demo</Button>
          </div>
        )}
      </div>
    </header>
  )
}
