import type { Metadata } from "next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms and Conditions - Sunkode Solar Proposal Software",
  description:
    "Read the Terms and Conditions for using Sunkode solar proposal platform. Learn about user agreements, subscription policies, data privacy, and legal terms for EPC companies.",
  keywords: ["terms and conditions", "user agreement", "sunkode terms", "solar software terms", "service agreement"],
  openGraph: {
    title: "Terms and Conditions - Sunkode",
    description: "Terms and Conditions for using Sunkode solar proposal platform",
    type: "website",
    url: "https://sunkode.com/terms",
  },
  alternates: {
    canonical: "https://sunkode.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white via-[#FEF9F3] to-[#FFF4E6]">
        <ScrollToTop />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">Terms and Conditions</h1>
            <p className="text-sm text-[#6B7280] mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="prose prose-blue max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">1. Acceptance of Terms</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  By accessing or using Sunkode's solar proposal platform ("Service"), you agree to be bound by these
                  Terms and Conditions. If you do not agree to these terms, please do not use our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">2. Service Description</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  Sunkode provides a cloud-based software platform designed to help solar installers and EPC companies
                  create professional solar proposals, perform system design calculations, and manage customer
                  relationships. Our Service includes:
                </p>
                <ul className="list-disc list-inside text-[#374151] space-y-2 ml-4">
                  <li>Solar proposal generation and customization tools</li>
                  <li>System design and performance calculations</li>
                  <li>Financial analysis and ROI projections</li>
                  <li>Customer relationship management features</li>
                  <li>Integration with third-party services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">3. User Accounts and Registration</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  To use our Service, you must register for an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-[#374151] space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">4. Subscription and Payment</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  Sunkode offers subscription-based pricing plans. By subscribing to our Service, you agree to:
                </p>
                <ul className="list-disc list-inside text-[#374151] space-y-2 ml-4">
                  <li>Pay all applicable subscription fees as per the selected plan</li>
                  <li>Automatic renewal of subscriptions unless cancelled prior to renewal date</li>
                  <li>No refunds for partial subscription periods</li>
                  <li>Price changes with 30 days advance notice</li>
                  <li>Taxes and additional charges as applicable in your jurisdiction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">5. Acceptable Use Policy</h2>
                <p className="text-[#374151] leading-relaxed mb-4">You agree not to:</p>
                <ul className="list-disc list-inside text-[#374151] space-y-2 ml-4">
                  <li>Use the Service for any unlawful purpose or in violation of applicable laws</li>
                  <li>Share your account credentials with unauthorized parties</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                  <li>Transmit any viruses, malware, or harmful code</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Use automated systems to access the Service without permission</li>
                  <li>Resell or redistribute the Service without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">6. Intellectual Property Rights</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  All content, features, and functionality of the Service, including but not limited to software, text,
                  graphics, logos, and trademarks, are owned by Sunkode and protected by intellectual property laws. You
                  retain ownership of the data and proposals you create using our Service, but grant us a license to
                  use, store, and process this data to provide the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">7. Data and Privacy</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  We take data security seriously and implement industry-standard measures to protect your information.
                  Our collection and use of personal data is governed by our Privacy Policy. By using the Service, you
                  consent to our data practices as described in the Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">8. Disclaimer of Warranties</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
                  We do not guarantee that the Service will be uninterrupted, secure, or error-free. Solar energy
                  calculations and projections are estimates based on available data and should be verified
                  independently.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">9. Limitation of Liability</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUNKODE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
                  DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, OR GOODWILL RESULTING FROM YOUR USE OF THE SERVICE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">10. Indemnification</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  You agree to indemnify and hold harmless Sunkode from any claims, damages, liabilities, and expenses
                  arising from your use of the Service, violation of these Terms, or infringement of any rights of
                  another party.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">11. Termination</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  We reserve the right to suspend or terminate your account and access to the Service at any time,
                  without notice, for violation of these Terms or any other reason. Upon termination, you must cease all
                  use of the Service. You may cancel your subscription at any time through your account settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">12. Changes to Terms</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes via
                  email or through the Service. Your continued use of the Service after such modifications constitutes
                  acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">13. Governing Law</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
                  arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts
                  in Mumbai, Maharashtra, India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">14. Contact Information</h2>
                <p className="text-[#374151] leading-relaxed mb-4">
                  For questions or concerns regarding these Terms and Conditions, please contact us:
                </p>
                <div className="bg-[#FEF9F3] rounded-lg p-6 border border-[#F9A825]/20">
                  <p className="text-[#374151] mb-2">
                    <strong className="text-[#111827]">Email:</strong> sales@sunkode.com
                  </p>
                  <p className="text-[#374151] mb-2">
                    <strong className="text-[#111827]">Phone:</strong> +91 98765 43210
                  </p>
                  <p className="text-[#374151]">
                    <strong className="text-[#111827]">Address:</strong> Mumbai, India
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280] text-center">
                By using Sunkode, you acknowledge that you have read, understood, and agree to be bound by these Terms
                and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
