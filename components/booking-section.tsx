"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Mail, Phone, MapPin } from "lucide-react"

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    time: "",
    venue: "",
    expectedGuests: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Booking request:", formData)
    alert("Booking request submitted! We will get back to you soon.")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      date: "",
      time: "",
      venue: "",
      expectedGuests: "",
      budget: "",
      message: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-wider">
              BOOK <span className="text-green-400">RAVEEN THARUKA</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring underground vibes to your event? Let's create an unforgettable experience with Raveen
              Tharuka.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Event Details</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type *</Label>
                    <Select onValueChange={(value) => handleChange("eventType", value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="live-concert">Live in Concert</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="wedding">Weddings</SelectItem>
                        <SelectItem value="other">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Event Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Start Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="venue">Venue/Location *</Label>
                  <Input
                    id="venue"
                    value={formData.venue}
                    onChange={(e) => handleChange("venue", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Venue name and address"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guests">Expected Guests</Label>
                    <Select onValueChange={(value) => handleChange("expectedGuests", value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50-100">50-100</SelectItem>
                        <SelectItem value="100-250">100-250</SelectItem>
                        <SelectItem value="250-500">250-500</SelectItem>
                        <SelectItem value="500-1000">500-1000</SelectItem>
                        <SelectItem value="1000+">1000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Select band</Label>
                    <Input
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => handleChange("budget", e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="Enter band name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white min-h-[120px]"
                    placeholder="Tell us more about your event, special requirements, or any questions you have..."
                  />
                </div>

                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3">
                  Submit Booking Request
                </Button>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div className="bg-gray-800 rounded-lg p-8">
                <h4 className="text-xl font-bold mb-4">What to Expect</h4>
                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-green-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Quick Response</p>
                      <p className="text-sm">We'll get back to you within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-green-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Flexible Timing</p>
                      <p className="text-sm">Available for events worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-green-400 mt-1" />
                    <div>
                      <p className="font-semibold text-white">Professional Service</p>
                      <p className="text-sm">Full production support available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-8">
                <h4 className="text-xl font-bold mb-4">Contact Information</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-green-400" />
                    <span>booking@raveentharuka.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-400" />
                    <span>+94 77 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-400" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-8 border border-green-500/30">
                <h4 className="text-xl font-bold mb-2">Premium Package</h4>
                <p className="text-gray-300 mb-4">
                  Get the full Raveen Tharuka experience with custom visuals, extended set times, and exclusive
                  unreleased tracks.
                </p>
                <Button
                  variant="outline"
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
