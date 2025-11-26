"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Logo } from "@/components/logo"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [pathname])

  const handleBookDemo = () => {
    const phoneNumber = "919876543210"
    const message = "Hi! I'd like to book a free demo of Sunkode."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (pathname === "/") {
      // Same page - smooth scroll
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        window.history.pushState(null, "", `#${hash}`)
      }
    } else {
      // Different page - navigate to home with hash
      router.push(`/#${hash}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Logo size="sm" />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="/#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="text-sm font-medium text-gray-700 hover:text-[#023047] transition-colors"
            >
              Features
            </a>
            <Link
              href="/why-sunkode"
              className="text-sm font-medium text-gray-700 hover:text-[#023047] transition-colors"
            >
              Why Sunkode
            </Link>
            <a
              href="/#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
              className="text-sm font-medium text-gray-700 hover:text-[#023047] transition-colors"
            >
              Case Studies
            </a>
            <Link
              href="/coming-soon"
              className="text-sm font-medium text-gray-700 hover:text-[#023047] transition-colors"
            >
              Coming Soon
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-[#023047] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-[#023047] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button onClick={handleBookDemo} className="bg-[#fb8500] text-white hover:bg-[#ffb703] font-semibold">
              Book Demo
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="/#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="block text-sm font-medium text-gray-700 hover:text-[#023047]"
            >
              Features
            </a>
            <Link
              href="/why-sunkode"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-[#023047]"
            >
              Why Sunkode
            </Link>
            <a
              href="/#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
              className="block text-sm font-medium text-gray-700 hover:text-[#023047]"
            >
              Case Studies
            </a>
            <Link
              href="/coming-soon"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-[#023047]"
            >
              Coming Soon
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-[#023047]"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-[#023047]"
            >
              Contact
            </Link>
            <Button
              onClick={handleBookDemo}
              className="w-full bg-[#fb8500] text-white hover:bg-[#ffb703] font-semibold"
            >
              Book Demo
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
