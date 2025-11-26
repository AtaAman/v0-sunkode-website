export interface Author {
  name: string
  bio?: string
  avatar?: any
}

export interface Category {
  title: string
  slug: {
    current: string
  }
  description?: string
}

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  featuredImage?: any
  content: any[]
  publishedAt: string
  readTime: number
  category: Category
  tags?: string[]
  author: Author
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}
