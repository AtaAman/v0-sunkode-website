import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllPosts, getAllCategories, getPostsByCategory } from "@/lib/sanity.queries"
import { urlForImage } from "@/lib/sanity.client"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
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
  searchParams: { category?: string }
}) {
  const categorySlug = searchParams.category

  const posts: Post[] = categorySlug ? await getPostsByCategory(categorySlug) : await getAllPosts()

  const categories = await getAllCategories()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Solar Energy <span className="text-[#F9A825]">Insights</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Expert guides, industry trends, and practical tips to help you grow your solar business
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        {categories.length > 0 && (
          <section className="py-8 bg-[#F9FAFB] border-y border-gray-200">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex gap-3 flex-wrap justify-center">
                <Link href="/blog">
                  <Badge
                    variant="outline"
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      !categorySlug
                        ? "bg-[#F9A825] text-white border-[#F9A825] shadow-sm"
                        : "bg-white hover:bg-[#F9A825] hover:text-white hover:border-[#F9A825] border-gray-300"
                    }`}
                  >
                    All Posts
                  </Badge>
                </Link>
                {categories.map((cat: any) => (
                  <Link key={cat._id} href={`/blog?category=${cat.slug.current}`}>
                    <Badge
                      variant="outline"
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                        categorySlug === cat.slug.current
                          ? "bg-[#F9A825] text-white border-[#F9A825] shadow-sm"
                          : "bg-white hover:bg-[#F9A825] hover:text-white hover:border-[#F9A825] border-gray-300"
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

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            {categorySlug && (
              <div className="mb-8">
                <p className="text-gray-600 text-base">
                  Showing posts in{" "}
                  <span className="font-semibold text-[#2563EB]">
                    {categories.find((c: any) => c.slug.current === categorySlug)?.title}
                  </span>
                </p>
              </div>
            )}

            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-gray-600">
                  {categorySlug ? "No posts found in this category." : "No blog posts yet. Check back soon!"}
                </p>
              </div>
            ) : (
              <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link key={post._id} href={`/blog/${post.slug.current}`} className="group">
                    <Card className="overflow-hidden bg-[#F9FAFB] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border-gray-200">
                      {/* Featured Image */}
                      <div className="relative h-56 bg-gray-100 overflow-hidden">
                        {post.featuredImage ? (
                          <Image
                            src={urlForImage(post.featuredImage) || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#F9A825] to-[#2563EB] flex items-center justify-center">
                            <span className="text-white text-5xl">☀️</span>
                          </div>
                        )}
                        {post.category && (
                          <Badge className="absolute top-4 left-4 bg-white text-[#2563EB] hover:bg-white shadow-md border-0 font-semibold">
                            {post.category.title}
                          </Badge>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#111827] mb-3 line-clamp-2 group-hover:text-[#2563EB] transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-5">
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
                            <span>{post.readTime} min</span>
                          </div>
                        </div>

                        {/* Author */}
                        {post.author && (
                          <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                              {post.author.avatar ? (
                                <Image
                                  src={urlForImage(post.author.avatar) || "/placeholder.svg"}
                                  alt={post.author.name}
                                  width={36}
                                  height={36}
                                  className="rounded-md object-cover"
                                />
                              ) : (
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E3A8A] flex items-center justify-center text-white text-sm font-semibold">
                                  {post.author.name.charAt(0)}
                                </div>
                              )}
                              <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-[#2563EB] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </div>
                        )}
                      </div>
                    </Card>
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
