import Link from 'next/link'
import ScrollToTop from './components/ScrollToTop'

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
    <div className="bg-gradient-to-b from-white to-gray-50 font-[Noto_Serif_Devanagari]">
      {/* Hero Section */}
      <section className="relative  bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Side Image */}
          <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/logo.png"
              alt="ThinkBihar"
              className="object-contain object-center w-full h-full bg-white/40 backdrop-blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent md:to-white/0"></div>
          </div>

          {/* Right Side Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              ThinkBihar <br /> Research Foundation
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Building education and research from the grassroots to the global —
              empowering communities, strengthening institutions, and nurturing ideas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/about" className="btn-primary bg-primary text-white hover:bg-blue-700">
                Learn More
              </Link>
              <Link href="/get-involved" className="btn-secondary bg-gray-900 text-white hover:bg-gray-800">
                Join Us
              </Link>
            </div>
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
      <ScrollToTop />
    </div>
  )
}