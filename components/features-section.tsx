import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Target, FileText, Smartphone, FolderOpen, Edit3 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Proposals in 60 Seconds",
    description: "Generate complete, professional proposals with just a few clicks.",
  },
  {
    icon: Target,
    title: "100% Custom Branding",
    description: "Add your logo, colors, and company information to reflect your brand.",
  },
  {
    icon: FileText,
    title: "Multiple Proposal Types",
    description: "On-grid, Off-grid, Residential, Commercial - all pre-configured.",
  },
  {
    icon: Smartphone,
    title: "Instant WhatsApp & Email",
    description: "Share proposals directly via WhatsApp or Email instantly.",
  },
  {
    icon: FolderOpen,
    title: "Professional Templates",
    description: "Choose from multiple designed templates that impress clients.",
  },
  {
    icon: Edit3,
    title: "Fully Editable",
    description: "Edit pricing, images, BOM, terms - complete control over everything.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1E3A8A] mb-3 md:mb-4 text-balance">
            Everything You Need to Close Faster
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 text-pretty max-w-3xl mx-auto">
            Powerful features for solar EPC companies and installers
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8 md:mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-4 md:p-5 lg:p-6 bg-white hover:shadow-lg transition-shadow">
                <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#F9A825] to-[#FB8C00] mb-3 md:mb-4">
                  <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-bold text-base md:text-lg lg:text-xl text-[#1E3A8A] mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#F9A825] text-white hover:bg-[#FB8C00] font-semibold">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
