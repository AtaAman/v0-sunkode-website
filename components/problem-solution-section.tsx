import { CheckCircle2, X } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ProblemSolutionSection() {
  return (
    <section id="why-sunkode" className="py-12 md:py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1E3A8A] mb-3 md:mb-4 text-balance">
            Still Using Manual Methods?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 text-pretty">
            It's time to upgrade your proposal process
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {/* Problems Card */}
          <Card className="p-5 md:p-6 lg:p-8 border-2 border-red-100 bg-red-50/30">
            <h3 className="font-bold text-xl md:text-2xl text-red-900 mb-4 md:mb-6">The Old Way</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <X className="h-5 w-5 md:h-6 md:w-6 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">Takes hours to prepare proposals</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <X className="h-5 w-5 md:h-6 md:w-6 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">Lost deals due to slow response</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <X className="h-5 w-5 md:h-6 md:w-6 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Manual designs, no branding consistency
                </p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <X className="h-5 w-5 md:h-6 md:w-6 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">Hiring proposal staff = extra cost</p>
              </div>
            </div>

            <div className="mt-6 md:mt-8 rounded-lg overflow-hidden">
              <img src="/messy-spreadsheet.jpg" alt="Manual Proposal" className="w-full" />
            </div>
          </Card>

          {/* Solutions Card */}
          <Card className="p-5 md:p-6 lg:p-8 border-2 border-green-200 bg-green-50/30">
            <h3 className="font-bold text-xl md:text-2xl text-[#1E3A8A] mb-4 md:mb-6">With Sunkode</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">Generate proposals in 60 seconds</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Deliver via WhatsApp & Email instantly
                </p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">Use professional branded templates</p>
              </div>
              <div className="flex items-start gap-2 md:gap-3">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Customize pricing, BOM, logos, terms
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-8 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/clean-professional-solar-proposal-template-with-br.jpg"
                alt="Sunkode Proposal"
                className="w-full"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
