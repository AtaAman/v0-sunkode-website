import type React from "react"
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  title: "Sunkode Blog Studio",
  description: "Content management for Sunkode blog",
}
