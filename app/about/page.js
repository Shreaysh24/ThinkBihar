export default function About() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About ThinkBihar</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Bihar through education, research, and community development
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To strengthen education and research ecosystems across Bihar by connecting grassroots initiatives 
              with advanced research, providing training and internships, and fostering inclusive social, 
              cultural, and economic development.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-secondary mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              An equitable, informed, and resilient society where every person — regardless of gender, caste, 
              religion, or location — has access to quality education, meaningful livelihood opportunities, 
              and the support systems necessary to thrive.
            </p>
          </div>
        </div>

        {/* NEP 2020 Alignment */}
        <div className="mb-16">
          <div className="card">
            <h2 className="text-3xl font-bold text-accent mb-6">Alignment with NEP 2020</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              ThinkBihar Research Foundation is committed to supporting the National Education Policy 2020 
              through our comprehensive approach to education and research development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multidisciplinary Approach</h3>
                <p className="text-gray-700">
                  Promoting interdisciplinary learning and research that breaks down silos between subjects 
                  and encourages holistic understanding.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Inclusive Education</h3>
                <p className="text-gray-700">
                  Ensuring educational opportunities reach all sections of society, with special focus on 
                  marginalized communities and rural areas.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Skill-Based Learning</h3>
                <p className="text-gray-700">
                  Emphasizing practical skills and vocational training alongside academic excellence to 
                  prepare students for the modern workforce.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Research Excellence</h3>
                <p className="text-gray-700">
                  Fostering a culture of research and innovation at all levels of education, from grassroots 
                  to advanced academic institutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
            <p className="text-gray-600">
              Striving for the highest standards in education, research, and community service.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
            <p className="text-gray-600">
              Building partnerships across institutions, communities, and sectors for greater impact.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚖️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Equity</h3>
            <p className="text-gray-600">
              Ensuring equal opportunities and access to resources for all members of society.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}