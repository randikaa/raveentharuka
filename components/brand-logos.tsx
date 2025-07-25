import Image from "next/image"

export function BrandLogos() {
  const logos = [
    { name: "Brand 1", src: "/placeholder.svg?height=60&width=120" },
    { name: "Brand 2", src: "/placeholder.svg?height=60&width=120" },
    { name: "Brand 3", src: "/placeholder.svg?height=60&width=120" },
    { name: "Brand 4", src: "/placeholder.svg?height=60&width=120" },
    { name: "Brand 5", src: "/placeholder.svg?height=60&width=120" },
    { name: "Brand 6", src: "/placeholder.svg?height=60&width=120" },
    { name: "Brand 7", src: "/placeholder.svg?height=60&width=120" },
    { name: "Brand 8", src: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={120}
                height={60}
                className="max-w-full h-auto filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
