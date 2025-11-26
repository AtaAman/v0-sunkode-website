import { client } from "./sanity.client"

// Fetch all blog posts for the listing page
export async function getAllPosts() {
  return client.fetch(
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
}

// Fetch a single blog post by slug
export async function getPostBySlug(slug: string) {
  return client.fetch(
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
}

// Fetch all post slugs for static generation
export async function getAllPostSlugs() {
  return client.fetch(
    `*[_type == "post"] {
      "slug": slug.current
    }`,
  )
}

// Fetch all categories
export async function getAllCategories() {
  return client.fetch(
    `*[_type == "category"] {
      _id,
      title,
      slug,
      description
    }`,
  )
}

export async function getPostsByCategory(categorySlug: string) {
  return client.fetch(
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
}
