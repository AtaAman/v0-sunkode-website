import type { Metadata } from "next"
import ContactClientPage from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with Sunkode Solar Software",
  description:
    "Contact Sunkode for solar proposal software inquiries. Email: sales@sunkode.com | Call: +91 98765 43210 | Mumbai, India. Get a demo and transform your solar business today.",
  keywords: ["contact sunkode", "solar software support", "sunkode demo", "solar proposal software contact"],
  openGraph: {
    title: "Contact Us - Sunkode",
    description: "Get in touch with Sunkode for solar proposal software inquiries.",
    type: "website",
    url: "https://sunkode.com/contact",
    images: ["/Sunkode-title.jpg"],
  },
  alternates: {
    canonical: "https://sunkode.com/contact",
  },
}

export default function ContactPage() {
  return <ContactClientPage />
}
