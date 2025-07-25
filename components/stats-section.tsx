export function StatsSection() {
  const stats = [
    { number: "30+", label: "Labels" },
    { number: "300+", label: "Events" },
    { number: "100+", label: "Tracks" },
  ]

  return (
    <section className="py-16 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-5xl lg:text-6xl font-bold text-green-400">{stat.number}</div>
              <div className="text-xl font-medium tracking-wider text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
