import mongoose from 'mongoose'

const ProgramSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: '',
  },
  pdfUrl: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    required: true,
    enum: ['Research Training & Internships', 'Publications & Knowledge Sharing', 'Community Outreach', 'Policy & Advisory'],
  },
}, {
  timestamps: true,
})

export default mongoose.models.Program || mongoose.model('Program', ProgramSchema)