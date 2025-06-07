import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">About Awakening Lost Soul</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A dark fantasy action RPG where every choice shapes your destiny. Explore a world torn between light and darkness,
            where ancient magic and modern technology collide.
          </p>
        </div>
      </section>

      {/* Game Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-red-400">Epic Story</h3>
            <p className="text-gray-300">
              Immerse yourself in a rich narrative where your choices matter and multiple endings await.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-red-400">Deep Combat</h3>
            <p className="text-gray-300">
              Master fluid combat mechanics with a variety of weapons and magical abilities.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-red-400">Beautiful World</h3>
            <p className="text-gray-300">
              Explore stunning environments with dynamic weather and day/night cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">The Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Alex Chen", role: "Game Director", image: "/team/director.jpg" },
            { name: "Sarah Williams", role: "Lead Artist", image: "/team/artist.jpg" },
            { name: "Mike Johnson", role: "Lead Developer", image: "/team/developer.jpg" },
            { name: "Emma Davis", role: "Sound Designer", image: "/team/sound.jpg" },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            Have questions about Awakening Lost Soul? We'd love to hear from you!
          </p>
          <a
            href="mailto:contact@awakeninglostsoul.com"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
} 