# Sanity CMS Blog Setup Guide

This guide will help you set up Sanity CMS for your Sunkode blog.

## Step 1: Create a Sanity Account

1. Go to [sanity.io](https://www.sanity.io/)
2. Sign up for a free account
3. Create a new project called "Sunkode Blog"
4. Choose "Clean project with no predefined schemas"

## Step 2: Install Dependencies

\`\`\`bash
npm install next-sanity @sanity/client @portabletext/react @sanity/vision sanity
\`\`\`

## Step 3: Set Up Environment Variables

Create a `.env.local` file in your project root:

\`\`\`env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
\`\`\`

Replace `your_project_id_here` with your actual Sanity project ID from the Sanity dashboard.

## Step 4: Initialize Sanity Studio

The Sanity schema files are already created in the `/sanity` folder. To run Sanity Studio:

\`\`\`bash
npx sanity init
\`\`\`

Follow the prompts and use the existing configuration.

## Step 5: Run Sanity Studio Locally

\`\`\`bash
npx sanity dev
\`\`\`

This will start Sanity Studio at `http://localhost:3333`

## Step 6: Deploy Sanity Studio (Optional)

To deploy your Sanity Studio to the cloud:

\`\`\`bash
npx sanity deploy
\`\`\`

## Step 7: Create Content

1. Open Sanity Studio (locally or deployed)
2. Create some authors first
3. Create categories (e.g., "Solar Tips", "Case Studies", "Industry News")
4. Create blog posts with:
   - Title
   - Slug (auto-generated)
   - Excerpt
   - Featured Image
   - Content (rich text)
   - Category
   - Tags
   - Author
   - Published Date
   - SEO metadata

## Step 8: Configure CORS

In your Sanity dashboard:
1. Go to Settings > API
2. Add your domain(s) to CORS origins:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)

## Content Structure

### Post Schema
- Title (required)
- Slug (required, auto-generated)
- Excerpt (required, max 200 chars)
- Featured Image
- Content (rich text with images)
- Category (reference)
- Tags (array of strings)
- Author (reference, required)
- Published Date (required)
- SEO metadata (optional)

### Category Schema
- Title (required)
- Slug (required)
- Description

### Author Schema
- Name (required)
- Slug
- Avatar
- Bio

## Features Included

- SEO-friendly URLs (`/blog/your-post-slug`)
- Open Graph and Twitter Card metadata
- JSON-LD structured data for rich results
- Dynamic sitemap generation
- Incremental Static Regeneration (ISR)
- Responsive design with Tailwind CSS
- Mobile-friendly blog layout
- Author bio sections
- Category filtering
- Tag system
- Read time calculation
- Featured images with fallbacks

## Blog URLs

- Blog homepage: `/blog`
- Single post: `/blog/[slug]`
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`

## ISR Configuration

Blog pages revalidate every hour (3600 seconds). You can adjust this in:
- `app/blog/page.tsx` - `export const revalidate = 3600`
- `app/blog/[slug]/page.tsx` - `export const revalidate = 3600`

## Need Help?

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router)
\`\`\`

\`\`\`json file="" isHidden
