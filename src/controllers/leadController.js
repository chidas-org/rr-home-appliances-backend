import Lead from '../models/Lead.js';

export const createLead = async (req, res) => {
  try {
    const newLead = await Lead.create(req.body);
    res.status(201).json(newLead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ submittedAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedLead = await Lead.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedLead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteLead = async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lead deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};