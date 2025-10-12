import Link from 'next/link'

export default function Home() {
  const quickCards = [
    {
      title: 'Education & Capacity Building',
      description: 'Strengthening educational foundations through training, skill development, and institutional support.',
      icon: '🎓',
    },
    {
      title: 'Research & Collaboration',
      description: 'Fostering research partnerships and knowledge exchange between grassroots and academic institutions.',
      icon: '🔬',
    },
    {
      title: 'Social & Cultural Development',
      description: 'Promoting inclusive social development while preserving and celebrating cultural heritage.',
      icon: '🌱',
    },
    {
      title: 'Community Support & Services',
      description: 'Providing essential services and support systems to strengthen community resilience.',
      icon: '🤝',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ThinkBihar Research Foundation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Building education and research from the grassroots to the global — empowering communities, 
            strengthening institutions, nurturing ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Learn More
            </Link>
            <Link href="/get-involved" className="btn-secondary">
              Join Us
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickCards.map((card, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in building a stronger, more equitable future for Bihar through education, research, and community development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="btn-secondary">
              Explore Programs
            </Link>
            <Link href="/contact" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}