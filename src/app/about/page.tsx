import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">About Awakening - Lost Soul</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A 2D psychological adventure game set in nostalgic old Saigon. Through emotionally charged memories and haunting environments, you follow Đăng’s journey to reclaim forgotten truths, confront trauma, and heal from the pain of family violence.
          </p>
        </div>
      </section>

      {/* Game Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-red-400">Narrative Healing</h3>
            <p className="text-gray-300">
              Uncover painful yet tender memories through Đăng’s forgotten diary, as he pieces together the truth behind his sister’s tragic fate.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-red-400">Emotional Puzzle Adventure</h3>
            <p className="text-gray-300">
              Solve narrative-driven puzzles, explore meaningful spaces, and navigate the psychological landscape of grief and trauma.
            </p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-red-400">Illustrated Saigon</h3>
            <p className="text-gray-300">
              Wander through hand-drawn, emotionally symbolic backdrops inspired by the nostalgic charm of old Saigon’s alleys, bookstores, and street vendors.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-red-400">Core Values</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong>Awakening - Lost Soul</strong> is more than a game — it's a message. It reflects the emotional scars of childhood trauma, elevates awareness of mental health, and honors family bonds. We believe in the healing power of empathy, and storytelling as a tool for social change.
          </p>
        </div>
      </section>

      {/* Development Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { name: "Thái Minh Bằng", role: "Developer", image: "/assets/bang.jpg" },
            { name: "Phan Thị Mẫn", role: "Game Designer", image: "/assets/man.jpg" },
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
            Have questions about Awakening - Lost Soul? We'd love to hear from you!
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
