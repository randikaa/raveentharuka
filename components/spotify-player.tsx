"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SpotifyPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState({
    name: "Watoto",
    artist: "Barbatos, RAVEEN THARUKA",
    image: "/placeholder.svg?height=60&width=60",
    duration: 240000, // 4 minutes in milliseconds
    position: 120000, // 2 minutes in milliseconds
  })

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const progressPercentage = (currentTrack.position / currentTrack.duration) * 100

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Track Info */}
          <div className="flex items-center space-x-4 flex-1">
            <Image
              src={currentTrack.image || "/placeholder.svg"}
              alt={currentTrack.name}
              width={60}
              height={60}
              className="rounded-lg"
            />
            <div className="min-w-0">
              <div className="font-semibold text-white truncate">{currentTrack.name}</div>
              <div className="text-sm text-gray-400 truncate">{currentTrack.artist}</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={togglePlayPause}
              className="bg-green-500 hover:bg-green-600 text-black rounded-full p-2"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            <Button variant="ghost" size="sm">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>

          {/* Progress and Spotify Logo */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-400">
              <span>{formatTime(currentTrack.position)}</span>
              <div className="w-32 h-1 bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span>{formatTime(currentTrack.duration)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Powered by</span>
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xs">♪</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
