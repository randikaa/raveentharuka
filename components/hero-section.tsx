import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Echo Daft performing"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center mt-8">
        <div className="space-y-8">
          <h1 className="text-6xl lg:text-8xl font-bold tracking-wider">RAVEEN THARUKA</h1>

          <p className="text-lg leading-relaxed text-gray-300 max-w-2xl">
            As a silver lining in the underground scene from the island's vibrations, Dinusha alias{" "}
            <span className="text-white font-semibold">Raveen Tharuka</span> came up with his unique ways into the
            industry in 2016. As a DJ, he was able to earn his spot among the up-comers in a fast-growing manner. Raveen
            Tharuka is not only a DJ but a high-class producer. His unique talent has placed him to produce famous
            tracks, and his unique remakes are a highlight fact to the underground scene. His talent and popularity are
            based on the surprising playlists inclusive of unreleased music that pushes him through to earn a popular
            spot in the groove industry of Sri Lanka.
          </p>
        </div>

        {/* Right side image */}
        <div className="relative lg:block hidden">
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Raveen Tharuka DJ Setup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating stats overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">30+</div>
                    <div className="text-xs text-gray-300">Labels</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">300+</div>
                    <div className="text-xs text-gray-300">Events</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">100+</div>
                    <div className="text-xs text-gray-300">Tracks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
