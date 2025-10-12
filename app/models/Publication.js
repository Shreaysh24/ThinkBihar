import mongoose from 'mongoose'

const PublicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  pdfUrl: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})

export default mongoose.models.Publication || mongoose.model('Publication', PublicationSchema)