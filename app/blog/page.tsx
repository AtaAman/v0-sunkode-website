import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { getAllPosts, getAllCategories, getPostsByCategory } from "@/lib/sanity.queries"
import { urlForImage } from "@/lib/sanity.client"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Post } from "@/lib/sanity.types"

export const metadata: Metadata = {
  title: "Solar Energy Blog - Tips, Guides & Industry Insights",
  description:
    "Stay updated with the latest solar energy news, installation guides, cost-saving tips, and renewable energy trends. Expert insights for EPC companies and installers.",
  openGraph: {
    title: "Solar Energy Blog - Sunkode",
    description: "Expert guides and insights on solar energy, proposals, and business growth.",
    type: "website",
  },
}

export const revalidate = 3600

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const categorySlug = category

  const posts: Post[] = categorySlug ? await getPostsByCategory(categorySlug) : await getAllPosts()

  const categories = await getAllCategories()

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] py-12 md:py-20">
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
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight animate-fade-in">
                Our Blog, Resources & Insights
              </h1>
              <p className="text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                The latest industry news, interviews, technologies, and resources.
              </p>
            </div>
          </div>
        </section>

        {categories.length > 0 && (
          <section className="py-6 bg-white border-b border-gray-200 sticky top-0 z-20 backdrop-blur-sm bg-opacity-95">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex gap-2 flex-wrap justify-center">
                <Link href="/blog">
                  <Badge
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      !categorySlug
                        ? "bg-[#F9A825] text-white border-0 shadow-md scale-105"
                        : "bg-[#F9FAFB] text-gray-700 hover:bg-[#F9A825] hover:text-white hover:scale-105 border border-gray-200"
                    }`}
                  >
                    All Posts
                  </Badge>
                </Link>
                {categories.map((cat: any) => (
                  <Link key={cat._id} href={`/blog?category=${cat.slug.current}`}>
                    <Badge
                      className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                        categorySlug === cat.slug.current
                          ? "bg-[#F9A825] text-white border-0 shadow-md scale-105"
                          : "bg-[#F9FAFB] text-gray-700 hover:bg-[#F9A825] hover:text-white hover:scale-105 border border-gray-200"
                      }`}
                    >
                      {cat.title}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-[#F9FAFB]">
          <div className="container mx-auto px-4 max-w-7xl">
            {categorySlug && (
              <div className="mb-8">
                <p className="text-base text-gray-600">
                  Showing posts in{" "}
                  <span className="font-bold text-[#2563EB]">
                    {categories.find((c: any) => c.slug.current === categorySlug)?.title}
                  </span>
                </p>
              </div>
            )}

            {posts.length === 0 ? (
              <div className="text-center py-24">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#F9A825] to-[#2563EB] rounded-full flex items-center justify-center">
                  <span className="text-white text-6xl">📝</span>
                </div>
                <p className="text-xl text-gray-600">
                  {categorySlug ? "No posts found in this category." : "No blog posts yet. Check back soon!"}
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full border border-gray-100">
                      {/* Featured Image */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                        {post.featuredImage ? (
                          <Image
                            src={urlForImage(post.featuredImage) || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#F9A825] via-[#2563EB] to-[#1E3A8A] flex items-center justify-center">
                            <span className="text-white text-6xl">☀️</span>
                          </div>
                        )}
                        {/* Category Badge */}
                        {post.category && (
                          <Badge className="absolute top-4 left-4 bg-white text-[#2563EB] hover:bg-white shadow-md border-0 font-bold px-3 py-1 text-[10px] uppercase tracking-wide">
                            {post.category.title}
                          </Badge>
                        )}
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-[#111827] mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>
                              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                month: "short",
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

                        {/* Author */}
                        {post.author && (
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2.5">
                              {post.author.avatar ? (
                                <Image
                                  src={urlForImage(post.author.avatar) || "/placeholder.svg"}
                                  alt={post.author.name}
                                  width={32}
                                  height={32}
                                  className="rounded-full object-cover ring-2 ring-gray-100"
                                />
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center text-white text-xs font-bold">
                                  {post.author.name.charAt(0)}
                                </div>
                              )}
                              <span className="text-xs font-semibold text-gray-800">{post.author.name}</span>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-[#F9A825] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-300">
                              <ArrowRight className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
