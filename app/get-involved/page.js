'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'
import ScrollToTop from '../components/ScrollToTop'

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const roles = [
    { value: 'Volunteer', label: 'Volunteer', description: 'Contribute your time and skills to our programs' },
    { value: 'Partner', label: 'Partner', description: 'Collaborate with us on institutional partnerships' },
    { value: 'Researcher', label: 'Researcher', description: 'Join our research initiatives and projects' },
    { value: 'Donor', label: 'Donor', description: 'Support our mission through financial contributions' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch('/api/volunteers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      if (data.success) {
        toast.success('Thank you for your interest! We will contact you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          role: '',
          message: ''
        })
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      toast.error(error.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50 font-[Noto_Serif_Devanagari]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Get Involved</h1>
          <p className="text-2xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
            Join us in building a stronger, more equitable future for Bihar. There are many ways to contribute to our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Role Options */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ways to Contribute</h2>
            <div className="space-y-6">
              {roles.map((role) => (
                <div key={role.value} className="card">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
                        {role.value === 'Volunteer' && '🤝'}
                        {role.value === 'Partner' && '🤝'}
                        {role.value === 'Researcher' && '🔬'}
                        {role.value === 'Donor' && '💝'}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{role.label}</h3>
                      <p className="text-gray-600">{role.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Impact Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Community Members Reached</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                <div className="text-gray-600">Active Programs</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Join Our Community</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                    How would you like to contribute? *
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a role</option>
                    {roles.map((role) => (
                      <option key={role.value} value={role.value}>
                        {role.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about yourself and your interests *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Share your background, skills, and how you'd like to contribute to our mission..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h3>
            <p className="text-gray-600 mb-6">
              Have questions about getting involved? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@thinkbihar.org" className="btn-primary">
                Email Us
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}