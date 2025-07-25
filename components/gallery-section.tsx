"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Echo Daft performing at Club Infinity",
      category: "Performance",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Studio session recording new tracks",
      category: "Studio",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Festival main stage performance",
      category: "Festival",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Behind the scenes at music video shoot",
      category: "Behind the Scenes",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Collaboration with international artists",
      category: "Collaboration",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Underground club atmosphere",
      category: "Performance",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Equipment and setup showcase",
      category: "Equipment",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Crowd energy at live performance",
      category: "Performance",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Recording session with guest vocalist",
      category: "Studio",
    },
  ]

  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-6xl font-bold mb-12 tracking-wider text-center">
          PHOTO <span className="text-green-400">GALLERY</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category
                  ? "bg-green-500 text-black hover:bg-green-600"
                  : "border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-video overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium truncate">{image.alt}</p>
                <p className="text-green-400 text-xs">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close Button */}
              <Button
                onClick={closeLightbox}
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                onClick={() => navigateImage("prev")}
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                onClick={() => navigateImage("next")}
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-medium">{selectedImageData.alt}</p>
                <p className="text-green-400 text-sm">{selectedImageData.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
