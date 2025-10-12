import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ThinkBihar Research Foundation</h3>
            <p className="text-gray-300 mb-4">
              Building education and research from the grassroots to the global — empowering communities, 
              strengthening institutions, nurturing ideas.
            </p>
            <div className="text-gray-300">
              <p>Email: info@thinkbihar.org</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/programs" className="text-gray-300 hover:text-white">Programs</Link></li>
              <li><Link href="/publications" className="text-gray-300 hover:text-white">Publications</Link></li>
              <li><Link href="/get-involved" className="text-gray-300 hover:text-white">Get Involved</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Bihar, India</li>
              <li>info@thinkbihar.org</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 ThinkBihar Research Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}