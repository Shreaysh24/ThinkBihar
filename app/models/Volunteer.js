import mongoose from 'mongoose'

const VolunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['Volunteer', 'Partner', 'Researcher', 'Donor'],
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
})

export default mongoose.models.Volunteer || mongoose.model('Volunteer', VolunteerSchema)