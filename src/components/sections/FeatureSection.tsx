import Image from "next/image"

interface FeatureSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imageOnLeft?: boolean
  titleColor?: string
  bgGradient?: string
}

export default function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
  titleColor = "text-red-400",
  bgGradient = "bg-gradient-to-r from-red-950/50 to-black"
}: FeatureSectionProps) {
  return (
    <section className={`py-24 ${bgGradient}`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto grid gap-12 lg:gap-16 items-center ${imageOnLeft ? "md:grid-cols-[3fr_1fr]" : "md:grid-cols-[2fr_2fr]"}`}>
          <div className={imageOnLeft ? "order-1" : "order-2 md:order-1"}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${titleColor}`}>{title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed opacity-90">{description}</p>
          </div>
          <div className={`relative ${imageOnLeft ? "order-2" : "order-1 md:order-2"}`}>
            <div className="aspect-[4/3] relative w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="rounded-lg shadow-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 