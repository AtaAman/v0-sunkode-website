import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PortableText } from "@portabletext/react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { getPostBySlug, getAllPostSlugs } from "@/lib/sanity.queries"
import { urlForImage } from "@/lib/sanity.client"
import { Calendar, Clock, ArrowLeft, Tag, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Post } from "@/lib/sanity.types"

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post: Post = await getPostBySlug(slug)

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
      <div className="my-10 -mx-4 md:mx-0">
        <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src={urlForImage(value) || "/placeholder.svg"}
            alt={value.alt || "Blog image"}
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
        {value.caption && <p className="text-sm text-gray-500 text-center mt-4 italic">{value.caption}</p>}
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-[#111827] scroll-mt-24">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-5 text-[#111827] scroll-mt-24">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-[#111827] scroll-mt-24">{children}</h4>
    ),
    normal: ({ children }: any) => <p className="text-lg text-gray-700 leading-relaxed mb-6">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#F9A825] pl-8 py-4 my-8 italic text-xl text-gray-700 bg-gradient-to-r from-[#FEF9F3] to-transparent rounded-r-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside ml-6 space-y-3 mb-8 text-lg text-gray-700">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside ml-6 space-y-3 mb-8 text-lg text-gray-700">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-[#111827]">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-[#2563EB] hover:text-[#1E3A8A] underline decoration-2 underline-offset-2 font-medium transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post: Post = await getPostBySlug(slug)

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
      <ScrollToTop />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero Section */}
        {/* Hero Section */}
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] py-10 md:py-14">
          {/* Grid pattern background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            {/* Back Button */}
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 -ml-4 hover:bg-white/10 text-white font-medium h-8 text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                {/* Category Badge */}
                {post.category && (
                  <Badge className="mb-4 bg-[#F9A825] text-white hover:bg-[#f9a825e6] px-3 py-1 text-xs font-bold uppercase tracking-wide border-0">
                    {post.category.title}
                  </Badge>
                )}

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
                  {post.title}
                </h1>

                {/* Author Card */}
                <div className="flex flex-wrap items-center gap-5">
                  <div className="flex items-center gap-3">
                    {post.author.avatar ? (
                      <Image
                        src={urlForImage(post.author.avatar) || "/placeholder.svg"}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full ring-2 ring-white/30"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg ring-2 ring-white/30">
                        {post.author.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-white text-base">{post.author.name}</p>
                      <p className="text-xs text-blue-100">Copywriter</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-blue-100">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Image in Hero */}
              {post.featuredImage && (
                <div className="relative w-full h-[250px] md:h-[350px] rounded-xl overflow-hidden shadow-2xl ring-4 ring-white/10">
                  <Image
                    src={urlForImage(post.featuredImage) || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <article className="py-10 md:py-14 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">

            {/* Content - Enhanced typography */}
            <div className="prose prose-lg prose-gray max-w-none">
              <PortableText value={post.content} components={portableTextComponents} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-16 pt-10 border-t border-gray-200">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag className="w-5 h-5 text-gray-400" />
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-sm px-4 py-1.5 rounded-full border-gray-300 hover:bg-[#F9A825] hover:text-white hover:border-[#F9A825] transition-all"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio Card */}
            {post.author.bio && (
              <div className="mt-16 p-8 bg-gradient-to-br from-[#FEF9F3] to-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-start gap-6">
                  {post.author.avatar ? (
                    <Image
                      src={urlForImage(post.author.avatar) || "/placeholder.svg"}
                      alt={post.author.name}
                      width={80}
                      height={80}
                      className="rounded-full ring-4 ring-white shadow-lg"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 ring-4 ring-white shadow-lg">
                      {post.author.name.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#111827] mb-3">About {post.author.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-16 p-10 bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] rounded-2xl text-center text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Solar Business?</h3>
              <p className="text-blue-100 mb-6 text-lg">Create professional solar proposals in minutes with Sunkode</p>
              <Button
                asChild
                className="bg-[#F9A825] text-white hover:bg-[#f9a825e6] font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:scale-105 transition-all"
              >
                <Link href="https://www.sunkode.com/login" target="_blank" rel="noopener noreferrer">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
