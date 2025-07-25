import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { BrandLogos } from "@/components/brand-logos"
import { HighlightsSection } from "@/components/highlights-section"
import { PlaylistSection } from "@/components/playlist-section"
import { GallerySection } from "@/components/gallery-section"
import { BookingSection } from "@/components/booking-section"
import { SpotifyPlayer } from "@/components/spotify-player"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <BrandLogos />
        <HighlightsSection />
        <PlaylistSection />
        <GallerySection />
        <BookingSection />
      </main>
      <SpotifyPlayer />
      <Footer />
    </div>
  )
}
