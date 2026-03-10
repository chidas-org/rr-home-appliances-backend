import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  service: { type: String, required: true },
  address: { type: String },
  message: { type: String },
  status: { 
    type: String, 
    default: "New", 
    enum: ["New", "In Progress", "Resolved"] 
  },
  submittedAt: { type: Date, default: Date.now }
});

const Lead = mongoose.model('Lead', leadSchema);
export default Lead;