import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllPosts, getAllCategories } from "@/lib/sanity.queries"
import { urlForImage } from "@/lib/sanity.client"
import { Calendar, Clock } from "lucide-react"
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

export const revalidate = 3600 // Revalidate every hour

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts()
  const categories = await getAllCategories()

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A] py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                Solar Energy <span className="text-[#F9A825]">Insights</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                Expert guides, industry trends, and practical tips to help you grow your solar business
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        {categories.length > 0 && (
          <section className="py-8 border-b bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="flex gap-2 flex-wrap justify-center">
                <Link href="/blog">
                  <Badge variant="outline" className="px-4 py-2 hover:bg-[#F9A825] hover:text-white transition-colors">
                    All Posts
                  </Badge>
                </Link>
                {categories.map((cat: any) => (
                  <Link key={cat._id} href={`/blog?category=${cat.slug.current}`}>
                    <Badge
                      variant="outline"
                      className="px-4 py-2 hover:bg-[#F9A825] hover:text-white transition-colors"
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
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg text-gray-600">No blog posts yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link key={post._id} href={`/blog/${post.slug.current}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                      {/* Featured Image */}
                      <div className="relative h-48 bg-gray-200 overflow-hidden">
                        {post.featuredImage ? (
                          <Image
                            src={urlForImage(post.featuredImage) || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#F9A825] to-[#2563EB] flex items-center justify-center">
                            <span className="text-white text-4xl">☀️</span>
                          </div>
                        )}
                        {post.category && (
                          <Badge className="absolute top-3 left-3 bg-[#F9A825] text-white hover:bg-[#f9a825e6]">
                            {post.category.title}
                          </Badge>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-[#111827] mb-3 line-clamp-2 hover:text-[#2563EB] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                                month: "short",
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

                        {/* Author */}
                        {post.author && (
                          <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                            {post.author.avatar ? (
                              <Image
                                src={urlForImage(post.author.avatar) || "/placeholder.svg"}
                                alt={post.author.name}
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-sm font-medium">
                                {post.author.name.charAt(0)}
                              </div>
                            )}
                            <span className="text-sm text-gray-700">{post.author.name}</span>
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
