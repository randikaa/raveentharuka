import Link from "next/link"
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wider">[RAVEEN THARUKA]</h3>
            <p className="text-gray-400">Underground electronic music producer and DJ from Sri Lanka.</p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/highlights" className="block text-gray-400 hover:text-white transition-colors">
                Highlights
              </Link>
              <Link href="/booking" className="block text-gray-400 hover:text-white transition-colors">
                Booking
              </Link>
              <Link href="/playlist" className="block text-gray-400 hover:text-white transition-colors">
                Playlist
              </Link>
              <Link href="/gallery" className="block text-gray-400 hover:text-white transition-colors">
                Gallery
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>booking@raveentharuka.com</p>
              <p>+94 77 123 4567</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Echo Daft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
