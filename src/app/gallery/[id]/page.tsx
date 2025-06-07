import ImageModal from "@/components/gallery/ImageModal"

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ImageDetailPage({ params }: PageProps) {
  const { id } = await params
  
  return <ImageModal imageId={id} />
} 