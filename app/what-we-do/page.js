import Link from 'next/link'

export default function WhatWeDo() {
  const focusAreas = [
    {
      title: 'Education & Capacity Building',
      description: 'We strengthen educational foundations through comprehensive training programs, skill development initiatives, and institutional support. Our approach focuses on building local capacity while connecting with global best practices.',
      icon: '🎓',
      features: [
        'Teacher training and professional development',
        'Curriculum development and educational resources',
        'Digital literacy and technology integration',
        'Leadership development programs'
      ]
    },
    {
      title: 'Research & Collaboration',
      description: 'We foster research partnerships and knowledge exchange between grassroots organizations and academic institutions, creating bridges that enable evidence-based solutions to local challenges.',
      icon: '🔬',
      features: [
        'Collaborative research projects',
        'Academic-community partnerships',
        'Research methodology training',
        'Knowledge dissemination platforms'
      ]
    },
    {
      title: 'Social & Cultural Development',
      description: 'We promote inclusive social development while preserving and celebrating Bihar\'s rich cultural heritage, ensuring that progress respects and builds upon local traditions and values.',
      icon: '🌱',
      features: [
        'Cultural preservation initiatives',
        'Community development programs',
        'Social inclusion projects',
        'Heritage documentation and promotion'
      ]
    },
    {
      title: 'Community Support & Services',
      description: 'We provide essential services and support systems to strengthen community resilience, focusing on sustainable solutions that empower local communities to thrive independently.',
      icon: '🤝',
      features: [
        'Community health and wellness programs',
        'Economic empowerment initiatives',
        'Infrastructure development support',
        'Emergency response and disaster preparedness'
      ]
    }
  ]

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to strengthening Bihar through four key focus areas
          </p>
        </div>

        {/* Focus Areas */}
        <div className="space-y-16">
          {focusAreas.map((area, index) => (
            <div key={index} className="card">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl">
                    {area.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{area.title}</h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                          ✓
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href="/programs" 
                    className="inline-block bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                  >
                    View Programs
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-accent text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Involved?</h2>
            <p className="text-xl mb-6">
              Join us in our mission to transform Bihar through education, research, and community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Involved
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}