import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PortableText } from "@portabletext/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getPostBySlug, getAllPostSlugs } from "@/lib/sanity.queries"
import { urlForImage } from "@/lib/sanity.client"
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Post } from "@/lib/sanity.types"

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post: Post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt
  const imageUrl = post.featuredImage ? urlForImage(post.featuredImage) : "/og-image.jpg"

  return {
    title,
    description,
    keywords: post.seo?.keywords || post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      type: "article",
      title,
      description,
      images: [imageUrl],
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

export const revalidate = 3600 // Revalidate every hour

// Portable Text components for rich text rendering
const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlForImage(value) || "/placeholder.svg"}
          alt={value.alt || "Blog image"}
          width={1200}
          height={675}
          className="rounded-lg w-full"
        />
        {value.caption && <p className="text-sm text-gray-500 text-center mt-2">{value.caption}</p>}
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-12 mb-4 text-[#111827]">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-semibold mt-8 mb-3 text-[#111827]">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl font-semibold mt-6 mb-2 text-[#111827]">{children}</h4>,
    normal: ({ children }: any) => <p className="text-lg text-gray-700 leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#F9A825] pl-6 py-2 my-6 italic text-gray-700 bg-gray-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">{children}</ul>,
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-[#111827]">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-[#2563EB] hover:text-[#1E3A8A] underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: Post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage ? urlForImage(post.featuredImage) : undefined,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Sunkode",
      logo: {
        "@type": "ImageObject",
        url: "https://sunkode.com/logo.png",
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero Section */}
        <article className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 -ml-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            {/* Category Badge */}
            {post.category && (
              <Badge className="mb-4 bg-[#F9A825] text-white hover:bg-[#f9a825e6]">{post.category.title}</Badge>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                {post.author.avatar ? (
                  <Image
                    src={urlForImage(post.author.avatar) || "/placeholder.svg"}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-medium">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <span className="font-medium text-[#111827]">{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12">
                <Image
                  src={urlForImage(post.featuredImage) || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.content} components={portableTextComponents} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-5 h-5 text-gray-500" />
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            {post.author.bio && (
              <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-start gap-4">
                  {post.author.avatar ? (
                    <Image
                      src={urlForImage(post.author.avatar) || "/placeholder.svg"}
                      alt={post.author.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-xl font-medium flex-shrink-0">
                      {post.author.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-[#111827] mb-2">About {post.author.name}</h3>
                    <p className="text-gray-700">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
