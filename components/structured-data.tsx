import Script from "next/script"

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sunkode",
    url: "https://sunkode.com",
    logo: "https://sunkode.com/sunkodeLogo.png",
    description:
      "Professional solar proposal software for EPC companies and installers. Create accurate solar proposals in 60 seconds.",
    sameAs: [
      "https://www.linkedin.com/company/sunkode",
      "https://www.instagram.com/sun_kode/",
      "https://www.facebook.com/profile.php?id=61582344062437",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98765-43210",
      contactType: "Customer Service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "IN",
    },
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Sunkode",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free trial available",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
    description: "Create professional solar proposals in 60 seconds. Solar design software for EPC companies.",
    screenshot: "https://sunkode.com/Sunkode-title.jpg",
    author: {
      "@type": "Organization",
      name: "Sunkode",
    },
    datePublished: "2024-01-01",
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sunkode.com",
      },
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sunkode",
    url: "https://sunkode.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sunkode.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Sunkode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sunkode is a professional solar proposal software designed for EPC companies and installers to create accurate, branded solar proposals in just 60 seconds.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can I create a solar proposal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With Sunkode, you can create professional solar proposals in just 60 seconds, dramatically reducing the time from hours to minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Who is Sunkode built for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sunkode is specifically built for solar EPC companies and installers in India who need to create professional proposals quickly and efficiently.",
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
