import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sunkode - Solar Proposal Software",
    short_name: "Sunkode",
    description: "Create professional solar proposals in 60 seconds. Built for EPC companies and installers.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#F9A825",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
