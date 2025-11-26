# Sunkode Blog Setup Guide

Complete guide to set up and use the Sanity CMS blog for your Sunkode website.

## Quick Start

### 1. Install Dependencies

All required dependencies are already in `package.json`:
- `next-sanity` - Sanity integration for Next.js
- `@portabletext/react` - Render rich text content
- `sanity` - Sanity Studio
- `@sanity/vision` - Query testing tool

### 2. Set Up Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and create a free account
2. Create a new project called "Sunkode Blog"
3. Choose "Clean project with no predefined schemas"
4. Copy your Project ID from the dashboard

### 3. Configure Environment Variables

Create a `.env.local` file in your project root:

\`\`\`env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_SANITY_DATASET=production
\`\`\`

Replace `your_actual_project_id` with your Sanity project ID.

### 4. Configure CORS Settings

In your Sanity dashboard (sanity.io/manage):
1. Go to Settings → API
2. Add CORS origins:
   - `http://localhost:3000` (development)
   - Your production domain (e.g., `https://sunkode.com`)
3. Click "Add CORS origin" and save

### 5. Access Sanity Studio

Your Sanity Studio is embedded in your Next.js app:

**Local Development:**
\`\`\`bash
npm run dev
\`\`\`
Then visit: `http://localhost:3000/studio`

You can also run Sanity Studio separately:
\`\`\`bash
npm run sanity:dev
\`\`\`

### 6. Create Your First Content

1. Open Studio at `/studio`
2. Create an **Author** first:
   - Name: Your name
   - Bio: Brief description
   - Avatar: Upload profile image (optional)

3. Create **Categories**:
   - "Solar Installation Tips"
   - "Case Studies"
   - "Industry News"
   - "Product Updates"

4. Create a **Blog Post**:
   - Title: Your blog title
   - Slug: Auto-generated (e.g., "solar-installation-tips")
   - Excerpt: Short summary (max 200 chars)
   - Featured Image: Upload image
   - Content: Write your article with rich text
   - Category: Select category
   - Tags: Add relevant tags
   - Author: Select author
   - Published Date: Choose date
   - SEO: Add meta title, description, keywords

## File Structure

\`\`\`
app/
├── blog/
│   ├── page.tsx              # Blog listing page
│   └── [slug]/
│       └── page.tsx          # Single blog post page
├── studio/
│   └── [[...tool]]/
│       ├── page.tsx          # Sanity Studio page
│       └── layout.tsx        # Studio layout
lib/
├── sanity.client.ts          # Sanity client configuration
├── sanity.queries.ts         # Data fetching queries
└── sanity.types.ts           # TypeScript types
sanity/
├── schemaTypes/
│   ├── post.ts               # Blog post schema
│   ├── category.ts           # Category schema
│   ├── author.ts             # Author schema
│   └── index.ts              # Export all schemas
└── sanity.config.ts          # Sanity configuration (legacy)
sanity.config.ts              # Root Sanity config (for Studio)
\`\`\`

## Features

### SEO Optimized
- Dynamic metadata for each post
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD structured data for rich results
- Auto-generated sitemap with all blog posts
- Custom meta titles and descriptions

### Performance
- Incremental Static Regeneration (ISR)
- Revalidates every hour
- Static generation at build time
- Optimized images with Next.js Image component

### Content Features
- Rich text editor with headings, lists, quotes
- Inline images in content
- Featured images with fallbacks
- Author bio sections
- Category filtering
- Tag system
- Read time calculation
- Responsive design

## URLs

- Homepage: `/`
- Blog listing: `/blog`
- Single post: `/blog/[slug]` (e.g., `/blog/solar-installation-tips`)
- Sanity Studio: `/studio`
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`

## Content Schema

### Post
- **Title**: Main heading (required)
- **Slug**: URL-friendly identifier (auto-generated, required)
- **Excerpt**: Short summary for listing (required, max 200 chars)
- **Featured Image**: Main post image
- **Content**: Rich text with images, headings, lists, quotes
- **Category**: Reference to category (required)
- **Tags**: Array of keyword tags
- **Author**: Reference to author (required)
- **Published Date**: Publication date (required)
- **SEO**: Custom meta title, description, keywords

### Category
- **Title**: Category name (required)
- **Slug**: URL-friendly identifier (required)
- **Description**: Category description

### Author
- **Name**: Author name (required)
- **Slug**: URL-friendly identifier
- **Avatar**: Profile image
- **Bio**: Author biography

## Customization

### Adjust Revalidation Time

Edit `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`:

\`\`\`typescript
export const revalidate = 3600 // Change to your preferred seconds
\`\`\`

### Modify Content Display

Edit the Portable Text components in `app/blog/[slug]/page.tsx`:

\`\`\`typescript
const portableTextComponents = {
  // Customize heading styles, image rendering, etc.
}
\`\`\`

### Add More Content Types

Create new schema files in `sanity/schemaTypes/`:

\`\`\`typescript
// sanity/schemaTypes/newsletter.ts
export default defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  // ... your fields
})
\`\`\`

Then add to `sanity/schemaTypes/index.ts`.

## Deployment

### Deploy Sanity Studio (Optional)

If you want a standalone Studio URL:

\`\`\`bash
npm run sanity:deploy
\`\`\`

This creates a hosted Studio at `https://your-project.sanity.studio`

### Deploy Next.js App

Your blog is part of your Next.js app, so deploy normally:

\`\`\`bash
npm run build
\`\`\`

Then deploy to Vercel or your preferred hosting.

## Troubleshooting

### "Project ID not found"
- Check your `.env.local` file has the correct project ID
- Restart your dev server after adding env vars

### CORS Errors
- Add your domain to CORS origins in Sanity dashboard
- Make sure to add both HTTP and HTTPS versions

### Images Not Loading
- Check your Sanity project ID in the `urlForImage` function
- Verify images are published in Sanity Studio

### Studio Not Loading
- Make sure you're accessing `/studio` not `/admin`
- Check browser console for errors
- Verify `sanity.config.ts` has correct project ID

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router)
- [Portable Text Documentation](https://github.com/portabletext/react-portabletext)

## Support

For questions or issues with the blog setup, check:
1. This README
2. SANITY_SETUP.md for detailed setup steps
3. Sanity documentation
4. Next.js documentation
