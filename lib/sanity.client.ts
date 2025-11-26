import { createClient } from "next-sanity"

const hasValidConfig =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "" &&
  process.env.NEXT_PUBLIC_SANITY_DATASET &&
  process.env.NEXT_PUBLIC_SANITY_DATASET !== ""

export const client = hasValidConfig
  ? createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2024-01-01",
      useCdn: false,
    })
  : null

// Helper function to generate image URLs from Sanity
export function urlForImage(source: any) {
  if (!source?.asset?._ref) return ""
  if (!hasValidConfig) return ""

  const ref = source.asset._ref
  const [, id, dimensions, format] = ref.split("-")
  return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}-${dimensions}.${format}`
}
