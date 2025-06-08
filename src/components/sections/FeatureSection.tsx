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
  titleColor = "text-amber-800",
  bgGradient = "bg-[#fff2d7]"
}: FeatureSectionProps) {
  return (
    <section className={`py-24 ${bgGradient}`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-6xl mx-auto grid gap-12 lg:gap-16 items-center ${imageOnLeft ? "md:grid-cols-[3fr_1fr]" : "md:grid-cols-[2fr_2fr]"}`}>
          <div className={imageOnLeft ? "order-1" : "order-2 md:order-1"}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${titleColor}`}>{title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed opacity-90">{description}</p>
          </div>
          <div className={`relative ${imageOnLeft ? "order-2" : "order-1 md:order-2"}`}>
            <div className="relative w-full h-auto shadow-2xl rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}