import { client } from "./sanity.client"

const isSanityAvailable = () => {
  if (!client) {
    console.warn(
      "[Sanity] Client not configured. Please add NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET environment variables.",
    )
    return false
  }
  return true
}

// Fetch all blog posts for the listing page
export async function getAllPosts() {
  if (!isSanityAvailable()) return []

  try {
    return await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        featuredImage,
        publishedAt,
        "readTime": round(length(pt::text(content)) / 5 / 180),
        category->{
          title,
          slug
        },
        author->{
          name,
          avatar
        }
      }`,
    )
  } catch (error) {
    console.error("[Sanity] Error fetching posts:", error)
    return []
  }
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug: string) {
  if (!isSanityAvailable()) return null

  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        featuredImage,
        content,
        publishedAt,
        "readTime": round(length(pt::text(content)) / 5 / 180),
        category->{
          title,
          slug,
          description
        },
        tags,
        author->{
          name,
          bio,
          avatar
        },
        seo {
          metaTitle,
          metaDescription,
          keywords
        }
      }`,
      { slug },
    )
  } catch (error) {
    console.error("[Sanity] Error fetching post:", error)
    return null
  }
}

// Fetch all post slugs for static generation
export async function getAllPostSlugs() {
  if (!isSanityAvailable()) return []

  try {
    return await client.fetch(
      `*[_type == "post"] {
        "slug": slug.current
      }`,
    )
  } catch (error) {
    console.error("[Sanity] Error fetching slugs:", error)
    return []
  }
}

// Fetch all categories
export async function getAllCategories() {
  if (!isSanityAvailable()) return []

  try {
    return await client.fetch(
      `*[_type == "category"] {
        _id,
        title,
        slug,
        description
      }`,
    )
  } catch (error) {
    console.error("[Sanity] Error fetching categories:", error)
    return []
  }
}

export async function getPostsByCategory(categorySlug: string) {
  if (!isSanityAvailable()) return []

  try {
    return await client.fetch(
      `*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        featuredImage,
        publishedAt,
        "readTime": round(length(pt::text(content)) / 5 / 180),
        category->{
          title,
          slug
        },
        author->{
          name,
          avatar
        }
      }`,
      { categorySlug },
    )
  } catch (error) {
    console.error("[Sanity] Error fetching posts by category:", error)
    return []
  }
}
