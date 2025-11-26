import { Linkedin, Youtube, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#F9A825] to-[#FB8C00]">
                <span className="font-bold text-base md:text-lg text-white">SK</span>
              </div>
              <span className="font-bold text-lg md:text-xl text-white">Sunkode</span>
            </div>
            <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-5 lg:mb-6 max-w-md leading-relaxed">
              The fastest way to create professional solar proposals. Built for EPC companies and installers.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-[#F9A825] transition-colors"
              >
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-[#F9A825] transition-colors"
              >
                <Youtube className="h-4 w-4 md:h-5 md:w-5" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-gray-800 hover:bg-[#F9A825] transition-colors"
              >
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base md:text-lg text-white mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm md:text-base hover:text-[#F9A825] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm md:text-base hover:text-[#F9A825] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm md:text-base hover:text-[#F9A825] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm md:text-base hover:text-[#F9A825] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base md:text-lg text-white mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 md:h-4 md:w-4 text-[#F9A825]" />
                <a
                  href="mailto:hello@sunkode.in"
                  className="text-sm md:text-base hover:text-[#F9A825] transition-colors"
                >
                  hello@sunkode.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-[#F9A825]" />
                <a href="#" className="text-sm md:text-base hover:text-[#F9A825] transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-10 lg:mt-12 pt-6 md:pt-8 border-t border-gray-800 text-center text-gray-500 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Sunkode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
