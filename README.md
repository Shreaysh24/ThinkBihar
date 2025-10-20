# ThinkBihar Research Foundation Website

A complete, production-ready website for ThinkBihar Research Foundation built with Next.js 15, Tailwind CSS, MongoDB Atlas, and Cloudinary.

## Features

- **Modern Design**: Clean, academic-style design with responsive layout
- **Dynamic Content**: MongoDB integration for programs, publications, and user submissions
- **File Uploads**: Cloudinary integration for PDF and image uploads
- **Contact Forms**: Multiple contact forms with validation and database storage
- **Publications Management**: Upload and display research publications
- **Programs Showcase**: Dynamic programs display with category filtering
- **Volunteer Management**: Get involved form for volunteers, partners, researchers, and donors

## Tech Stack

- **Frontend**: Next.js 15, React 18, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB Atlas with Mongoose ODM
- **File Storage**: Cloudinary
- **Notifications**: React Hot Toast

## Pages

1. **Home** (`/`) - Hero section with mission statement and focus areas
2. **About** (`/about`) - Mission, vision, and NEP 2020 alignment
3. **Programs** (`/programs`) - Dynamic programs display with category filtering
4. **Publications** (`/publications`) - PDF upload and display functionality
5. **Get Involved** (`/get-involved`) - Volunteer/partner application form
6. **Contact** (`/contact`) - Contact form and information

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3. MongoDB Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Add it to your `.env.local` file

### 4. Cloudinary Setup

1. Create a Cloudinary account
2. Get your cloud name, API key, and API secret from the dashboard
3. Add them to your `.env.local` file

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Database Collections

### Programs
```javascript
{
  title: String,
  description: String,
  imageUrl: String,
  pdfUrl: String,
  category: String, // 'Research Training & Internships', 'Publications & Knowledge Sharing', 'Community Outreach', 'Policy & Advisory'
  createdAt: Date,
  updatedAt: Date
}
```

### Publications
```javascript
{
  title: String,
  author: String,
  pdfUrl: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Volunteers
```javascript
{
  name: String,
  email: String,
  phone: String,
  role: String, // 'Volunteer', 'Partner', 'Researcher', 'Donor'
  message: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Contacts
```javascript
{
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: Date,
  updatedAt: Date
}
```

## API Routes

- `GET/POST /api/programs` - Manage programs
- `GET/POST /api/publications` - Manage publications
- `POST /api/volunteers` - Submit volunteer applications
- `POST /api/contact` - Submit contact form
- `POST /api/upload` - Upload files to Cloudinary

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: '#1e40af',    // Blue
  secondary: '#059669',  // Green
  accent: '#0ea5e9',     // Light Blue
}
```

### Content
- Update mission, vision, and content in respective page files
- Modify contact information in `Footer.js` and `contact/page.js`
- Add or remove focus areas in `page.js` and `what-we-do/page.js`

## Support

For questions or support, contact: info@thinkbihar.org

## License

This project is licensed under the MIT License.