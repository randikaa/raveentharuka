"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, Phone, MapPin, Users, DollarSign, Check, X } from "lucide-react"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })

  // Mock booking data
  const bookings = [
    {
      id: 1,
      name: "John Smith",
      email: "john@example.com",
      phone: "+94 77 123 4567",
      eventType: "Club Night",
      date: "2024-02-15",
      time: "22:00",
      venue: "Club Infinity, Colombo",
      expectedGuests: "250-500",
      budget: "$50k - $100k",
      message: "Looking for a 3-hour set with deep house and techno vibes.",
      status: "pending",
      submittedAt: "2024-01-20T10:30:00Z",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@events.com",
      phone: "+94 71 987 6543",
      eventType: "Festival",
      date: "2024-03-10",
      time: "20:00",
      venue: "Galle Face Green, Colombo",
      expectedGuests: "1000+",
      budget: "$250k+",
      message: "Main stage performance for electronic music festival.",
      status: "approved",
      submittedAt: "2024-01-18T14:15:00Z",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike@company.com",
      phone: "+94 76 555 1234",
      eventType: "Corporate Event",
      date: "2024-02-28",
      time: "19:30",
      venue: "Hilton Colombo",
      expectedGuests: "100-250",
      budget: "$100k - $250k",
      message: "Corporate anniversary celebration, need sophisticated electronic music.",
      status: "rejected",
      submittedAt: "2024-01-15T09:45:00Z",
    },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication (in production, use proper authentication)
    if (credentials.username === "admin" && credentials.password === "raveentharuka2024") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials")
    }
  }

  const updateBookingStatus = (id: number, status: "approved" | "rejected") => {
    // In a real app, this would update the database
    console.log(`Booking ${id} status updated to: ${status}`)
    alert(`Booking ${status} successfully!`)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Card className="w-full max-w-md bg-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={credentials.username}
                  onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
                  className="bg-gray-800 border-gray-700"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black">
                Login
              </Button>
            </form>
            <p className="text-sm text-gray-400 mt-4 text-center">Demo credentials: admin / raveentharuka2024</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Booking Management</h1>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline" className="border-gray-600">
            Logout
          </Button>
        </div>

        <div className="grid gap-6">
          {bookings.map((booking) => (
            <Card key={booking.id} className="bg-gray-900 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{booking.name}</CardTitle>
                    <p className="text-gray-400">Submitted: {new Date(booking.submittedAt).toLocaleDateString()}</p>
                  </div>
                  <Badge
                    variant={
                      booking.status === "approved"
                        ? "default"
                        : booking.status === "rejected"
                          ? "destructive"
                          : "secondary"
                    }
                    className={
                      booking.status === "approved"
                        ? "bg-green-500 text-black"
                        : booking.status === "rejected"
                          ? "bg-red-500"
                          : "bg-yellow-500 text-black"
                    }
                  >
                    {booking.status.toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-green-400" />
                    <span className="text-sm">{booking.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-400" />
                    <span className="text-sm">{booking.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-green-400" />
                    <span className="text-sm">
                      {booking.date} at {booking.time}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-green-400" />
                    <span className="text-sm">{booking.venue}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-green-400" />
                    <span className="text-sm">{booking.expectedGuests} guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-400" />
                    <span className="text-sm">{booking.budget}</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Event Type: {booking.eventType}</h4>
                  <p className="text-gray-300 text-sm">{booking.message}</p>
                </div>

                {booking.status === "pending" && (
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => updateBookingStatus(booking.id, "approved")}
                      className="bg-green-500 hover:bg-green-600 text-black"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                    <Button onClick={() => updateBookingStatus(booking.id, "rejected")} variant="destructive">
                      <X className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
