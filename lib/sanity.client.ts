import { createClient } from "next-sanity"

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to true for production for faster, cached responses
})

// Helper function to generate image URLs from Sanity
export function urlForImage(source: any) {
  if (!source?.asset?._ref) return ""
  const ref = source.asset._ref
  const [, id, dimensions, format] = ref.split("-")
  const [width, height] = dimensions.split("x")
  return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}-${dimensions}.${format}`
}
