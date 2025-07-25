"use client"

import Image from "next/image"
import { Play, Pause, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function PlaylistSection() {
  const [playingTrack, setPlayingTrack] = useState<number | null>(null)

  const playlists = [
    {
      id: 1,
      title: "Underground Essentials",
      description: "Deep house and techno tracks that define the underground scene",
      image: "/placeholder.svg?height=300&width=300",
      trackCount: 25,
      duration: "2h 15m",
      spotifyUrl: "#",
    },
    {
      id: 2,
      title: "Echo Daft Originals",
      description: "Raveen Tharuka's original productions and exclusive remixes",
      image: "/placeholder.svg?height=300&width=300",
      trackCount: 18,
      duration: "1h 45m",
      spotifyUrl: "#",
    },
    {
      id: 3,
      title: "Festival Bangers",
      description: "High-energy tracks perfect for main stage performances",
      image: "/placeholder.svg?height=300&width=300",
      trackCount: 30,
      duration: "2h 45m",
      spotifyUrl: "#",
    },
  ]

  const featuredTracks = [
    {
      id: 1,
      title: "Watoto",
      artist: "Barbatos, RAVEEN THARUKA",
      album: "Underground Sessions Vol. 1",
      duration: "4:12",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      title: "Midnight Groove",
      artist: "RAVEEN THARUKA",
      album: "Deep Vibes EP",
      duration: "5:28",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      title: "Hypnotic Dreams",
      artist: "RAVEEN THARUKA ft. Luna",
      album: "Atmospheric Sounds",
      duration: "6:15",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      title: "Electric Pulse",
      artist: "RAVEEN THARUKA",
      album: "Techno Revolution",
      duration: "4:45",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 5,
      title: "Deep Ocean",
      artist: "RAVEEN THARUKA x Mystic",
      album: "Collaborative Works",
      duration: "7:02",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const togglePlay = (trackId: number) => {
    setPlayingTrack(playingTrack === trackId ? null : trackId)
  }

  return (
    <section id="playlist" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-6xl font-bold mb-12 tracking-wider text-center">
          MUSIC & <span className="text-green-400">PLAYLISTS</span>
        </h2>

        {/* Featured Playlists */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-green-400">CURATED PLAYLISTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="group bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={playlist.image || "/placeholder.svg"}
                    alt={playlist.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute bottom-4 right-4">
                    <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black rounded-full p-3">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{playlist.title}</h4>
                    <p className="text-gray-400 text-sm">{playlist.description}</p>
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{playlist.trackCount} tracks</span>
                    <span>{playlist.duration}</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-green-500 text-green-400 hover:bg-green-500 hover:text-black bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in Spotify
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Tracks */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-green-400">FEATURED TRACKS</h3>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {featuredTracks.map((track, index) => (
              <div
                key={track.id}
                className="flex items-center p-4 hover:bg-gray-700 transition-colors border-b border-gray-700 last:border-b-0"
              >
                <div className="flex items-center space-x-4 flex-1">
                  <div className="relative">
                    <Image
                      src={track.image || "/placeholder.svg"}
                      alt={track.title}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <Button
                      size="sm"
                      onClick={() => togglePlay(track.id)}
                      className="absolute inset-0 bg-black/60 hover:bg-black/40 text-white rounded-lg opacity-0 hover:opacity-100 transition-opacity"
                    >
                      {playingTrack === track.id ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="font-semibold text-white truncate">{track.title}</h5>
                    <p className="text-gray-400 text-sm truncate">{track.artist}</p>
                    <p className="text-gray-500 text-xs truncate">{track.album}</p>
                  </div>

                  <div className="text-gray-400 text-sm">{track.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
