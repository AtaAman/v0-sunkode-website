import { Card } from "@/components/ui/card"
import { Users, Briefcase, Package, FileText, Calendar } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "CRM & Lead Management",
    description: "Track leads, manage customer relationships, and never miss a follow-up.",
  },
  {
    icon: Briefcase,
    title: "Project Planning & Execution",
    description: "Plan, track, and manage solar installations from start to finish.",
  },
  {
    icon: Package,
    title: "Inventory & Purchase Management",
    description: "Track panels, inverters, and equipment. Manage suppliers and orders.",
  },
  {
    icon: FileText,
    title: "Invoicing & Payment Tracking",
    description: "Generate invoices, track payments, and manage your finances.",
  },
  {
    icon: Calendar,
    title: "Task & Team Coordination",
    description: "Assign tasks, coordinate teams, and keep everyone on the same page.",
  },
]

export function ComingSoonSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#F9A825]/10 text-[#F9A825] font-semibold text-sm mb-4">
            COMING SOON
          </div>
          <h2 className="font-bold text-4xl lg:text-5xl text-[#1E3A8A] mb-4 text-balance">
            Building the Complete Solar Business Suite
          </h2>
          <p className="text-xl text-gray-600 text-pretty max-w-3xl mx-auto">
            We're working on features that will manage every aspect of your solar business
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 bg-white relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-semibold text-[#F9A825] bg-[#F9A825]/10 px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-[#1E3A8A] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
