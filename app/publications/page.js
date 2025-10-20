'use client'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import ScrollToTop from '../components/ScrollToTop'

export default function Publications() {
  const [publications, setPublications] = useState([])
  const [loading, setLoading] = useState(true)
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    file: null
  })

  useEffect(() => {
    fetchPublications()
  }, [])

  const fetchPublications = async () => {
    try {
      const response = await fetch('/api/publications')
      const data = await response.json()
      if (data.success) {
        setPublications(data.data)
      }
    } catch (error) {
      console.error('Error fetching publications:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.title || !formData.author || !formData.file) {
      toast.error('Please fill all fields and select a file')
      return
    }

    setUploading(true)
    try {
      // Upload file to Cloudinary
      const fileFormData = new FormData()
      fileFormData.append('file', formData.file)

      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: fileFormData
      })
      const uploadData = await uploadResponse.json()

      if (!uploadData.success) {
        throw new Error(uploadData.error)
      }

      // Save publication to database
      const publicationResponse = await fetch('/api/publications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          author: formData.author,
          pdfUrl: uploadData.url
        })
      })

      const publicationData = await publicationResponse.json()
      if (publicationData.success) {
        toast.success('Publication uploaded successfully!')
        setFormData({ title: '', author: '', file: null })
        setShowUploadForm(false)
        fetchPublications()
      } else {
        throw new Error(publicationData.error)
      }
    } catch (error) {
      toast.error(error.message || 'Error uploading publication')
    } finally {
      setUploading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading publications...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50 font-[Noto_Serif_Devanagari]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-20">
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Publications</h1>
            <p className="text-2xl text-gray-700 font-medium leading-relaxed">
              Access our research publications and knowledge resources
            </p>
          </div>
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="btn-primary"
          >
            {showUploadForm ? 'Cancel' : 'Upload Publication'}
          </button>
        </div>

        {/* Upload Form */}
        {showUploadForm && (
          <div className="card mb-8">
            <h2 className="text-2xl font-semibold mb-6">Upload New Publication</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PDF File
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={uploading}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading ? 'Uploading...' : 'Upload Publication'}
              </button>
            </form>
          </div>
        )}

        {/* Publications Grid */}
        {publications.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Publications Yet</h3>
            <p className="text-gray-600 mb-6">Be the first to upload a publication!</p>
            <button
              onClick={() => setShowUploadForm(true)}
              className="btn-primary"
            >
              Upload First Publication
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((publication) => (
              <div key={publication._id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-red-100 text-red-600 rounded-full p-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{publication.title}</h3>
                <p className="text-gray-600 mb-2">By {publication.author}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Published on {formatDate(publication.createdAt)}
                </p>
                <div className="flex gap-2">
                  <a
                    href={publication.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-blue-700 font-medium text-sm"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View
                  </a>
                  <a
                    href={publication.pdfUrl.replace('/upload/', '/upload/fl_attachment/')}
                    className="inline-flex items-center text-secondary hover:text-green-700 font-medium text-sm"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ScrollToTop />
    </div>
  )
}