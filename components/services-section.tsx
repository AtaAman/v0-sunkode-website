import { Card } from "@/components/ui/card"
import { Globe, Smartphone, FileImage } from "lucide-react"

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
  return (
    <section id="services" className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1E3A8A] mb-3 md:mb-4 text-balance">
            We Also Help You With
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 text-pretty">
            Complete digital solutions for your solar business
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-5 md:p-6 lg:p-8 text-center hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50"
              >
                <div className="flex h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#F9A825] to-[#FB8C00] mx-auto mb-4 md:mb-5 lg:mb-6">
                  <Icon className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#1E3A8A] mb-2 md:mb-3 lg:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
