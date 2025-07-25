"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Play, Music, Headphones, Mic, Volume2, Award, Users, Clock } from "lucide-react"

export default function ProductionPage() {
  const musicVideos = [
    {
      id: 1,
      title: "Watoto",
      artist: "Barbatos, RAVEEN THARUKA",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video IDs
      thumbnail: "/placeholder.svg?height=315&width=560",
      views: "2.1M",
      duration: "4:12",
    },
    {
      id: 2,
      title: "Midnight Groove",
      artist: "RAVEEN THARUKA",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=315&width=560",
      views: "1.8M",
      duration: "5:28",
    },
    {
      id: 3,
      title: "Hypnotic Dreams",
      artist: "RAVEEN THARUKA ft. Luna",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=315&width=560",
      views: "3.2M",
      duration: "6:15",
    },
    {
      id: 4,
      title: "Electric Pulse",
      artist: "RAVEEN THARUKA",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=315&width=560",
      views: "1.5M",
      duration: "4:45",
    },
    {
      id: 5,
      title: "Deep Ocean",
      artist: "RAVEEN THARUKA x Mystic",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=315&width=560",
      views: "2.7M",
      duration: "7:02",
    },
    {
      id: 6,
      title: "Underground Anthem",
      artist: "RAVEEN THARUKA",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=315&width=560",
      views: "4.1M",
      duration: "5:33",
    },
  ]

  const features = [
    {
      icon: <Music className="h-8 w-8" />,
      title: "Original Productions",
      description:
        "Unique electronic tracks crafted with precision and creativity, blending deep house and techno elements.",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Professional Mixing",
      description: "State-of-the-art mixing and mastering techniques ensuring crystal clear sound quality.",
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Vocal Collaborations",
      description: "Working with talented vocalists to create atmospheric and hypnotic vocal tracks.",
    },
    {
      icon: <Volume2 className="h-8 w-8" />,
      title: "Sound Design",
      description: "Custom sound design and synthesis creating unique textures and atmospheric elements.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award-Winning Quality",
      description: "Recognition from industry professionals and underground music communities worldwide.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Artist Collaborations",
      description: "Collaborating with international artists to create cross-cultural electronic music experiences.",
    },
  ]

  const stats = [
    { number: "100+", label: "Original Tracks", icon: <Music className="h-6 w-6" /> },
    { number: "50+", label: "Music Videos", icon: <Play className="h-6 w-6" /> },
    { number: "25M+", label: "Total Views", icon: <Users className="h-6 w-6" /> },
    { number: "8+", label: "Years Experience", icon: <Clock className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-wider">
              MUSIC <span className="text-green-400">PRODUCTION</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Over the years, Raveen Tharuka has developed a unique sound that defines the underground electronic scene.
              It's all about tapping into the mood and using deep hypnotic grooves and atmospheric vocals to get your
              head and feet moving.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2 text-green-400">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Music Videos Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center tracking-wider">
              MUSIC <span className="text-green-400">VIDEOS</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {musicVideos.map((video) => (
                <div
                  key={video.id}
                  className="group bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300"
                >
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{video.artist}</p>

                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{video.views} views</span>
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center tracking-wider">
              PRODUCTION <span className="text-green-400">FEATURES</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-wider">
              READY TO <span className="text-green-400">COLLABORATE?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Looking for original music production, remixes, or collaboration opportunities? Let's create something
              extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3">
                Start a Project
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black bg-transparent px-8 py-3"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
