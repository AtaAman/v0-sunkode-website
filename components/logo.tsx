import Image from "next/image"

export function Logo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 160, height: 53 },
    lg: { width: 200, height: 66 },
  }

  const sizeConfig = sizes[size]

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/sunkodeLogo.png"
        alt="Sunkode Logo"
        width={sizeConfig.width}
        height={sizeConfig.height}
        priority
        className="object-contain"
      />
    </div>
  )
}
