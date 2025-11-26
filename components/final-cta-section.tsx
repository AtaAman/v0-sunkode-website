import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-8">
          <h2 className="font-bold text-4xl lg:text-6xl text-white mb-6 text-balance leading-tight">
            Stop Losing Solar Deals. Start Closing Faster.
          </h2>

          <p className="text-xl lg:text-2xl text-blue-100 text-pretty max-w-3xl mx-auto">
            Your customers don't wait — your proposals shouldn't either.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-[#F9A825] text-white hover:bg-[#FB8C00] font-semibold text-lg px-8">
              Book Free Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] font-semibold text-lg px-8 bg-transparent"
            >
              Try It Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
