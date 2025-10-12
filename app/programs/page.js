'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Programs() {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Research Training & Internships',
    'Publications & Knowledge Sharing',
    'Community Outreach',
    'Policy & Advisory'
  ]

  useEffect(() => {
    fetchPrograms()
  }, [])

  const fetchPrograms = async () => {
    try {
      const response = await fetch('/api/programs')
      const data = await response.json()
      if (data.success) {
        setPrograms(data.data)
      }
    } catch (error) {
      console.error('Error fetching programs:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredPrograms = selectedCategory === 'All' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory)

  if (loading) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading programs...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Programs & Initiatives</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive programs designed to strengthen education and research ecosystems across Bihar
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No programs found for the selected category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <div key={program._id} className="card">
                {program.imageUrl && (
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={program.imageUrl}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="mb-2">
                  <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {program.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>
                {program.pdfUrl && (
                  <a
                    href={program.pdfUrl.replace('/upload/', '/upload/fl_attachment/')}
                    className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Demo Programs (if no programs in database) */}
        {programs.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Rural Education Initiative',
                category: 'Research Training & Internships',
                description: 'Comprehensive training program for rural educators focusing on modern teaching methodologies and digital integration.',
              },
              {
                title: 'Community Research Fellowship',
                category: 'Research Training & Internships',
                description: 'Fellowship program connecting local researchers with academic institutions to address community-specific challenges.',
              },
              {
                title: 'Bihar Education Policy Brief',
                category: 'Publications & Knowledge Sharing',
                description: 'Annual publication analyzing education trends and policy recommendations for Bihar state.',
              },
              {
                title: 'Village Development Program',
                category: 'Community Outreach',
                description: 'Grassroots initiative focusing on sustainable development and community empowerment in rural Bihar.',
              },
              {
                title: 'Education Policy Advisory',
                category: 'Policy & Advisory',
                description: 'Advisory services for government and NGOs on education policy implementation and best practices.',
              },
              {
                title: 'Digital Literacy Campaign',
                category: 'Community Outreach',
                description: 'Community-wide digital literacy program targeting rural populations and marginalized communities.',
              },
            ].map((program, index) => (
              <div key={index} className="card">
                <div className="mb-2">
                  <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {program.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}