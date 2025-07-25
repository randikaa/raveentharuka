import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HighlightsSection() {
  const events = [
    {
      id: 1,
      title: "Underground Vibes",
      date: "2024-02-15",
      time: "22:00",
      venue: "Club Infinity, Colombo",
      image: "/placeholder.svg?height=300&width=400",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Deep House Sessions",
      date: "2024-02-28",
      time: "21:00",
      venue: "Rooftop Lounge, Galle Face",
      image: "/placeholder.svg?height=300&width=400",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Electronic Fusion",
      date: "2024-03-10",
      time: "20:30",
      venue: "Beach Club, Negombo",
      image: "/placeholder.svg?height=300&width=400",
      status: "upcoming",
    },
    {
      id: 4,
      title: "Techno Night",
      date: "2024-01-20",
      time: "23:00",
      venue: "Ministry of Sound, Colombo",
      image: "/placeholder.svg?height=300&width=400",
      status: "past",
    },
    {
      id: 5,
      title: "Festival Main Stage",
      date: "2024-01-05",
      time: "21:30",
      venue: "Galle Face Green",
      image: "/placeholder.svg?height=300&width=400",
      status: "past",
    },
    {
      id: 6,
      title: "Private Corporate Event",
      date: "2023-12-15",
      time: "19:00",
      venue: "Hilton Colombo",
      image: "/placeholder.svg?height=300&width=400",
      status: "past",
    },
  ]

  const upcomingEvents = events.filter((event) => event.status === "upcoming")
  const pastEvents = events.filter((event) => event.status === "past")

  return (
    <section id="highlights" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-6xl font-bold mb-12 tracking-wider text-center">
          EVENT <span className="text-green-400">HIGHLIGHTS</span>
        </h2>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-green-400">UPCOMING EVENTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      UPCOMING
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {event.title}
                  </h4>

                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                        at {event.time}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.venue}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold">
                    Get Tickets
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-400">PAST PERFORMANCES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="group relative overflow-hidden rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">
                    {event.title}
                  </h4>

                  <div className="space-y-2 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
