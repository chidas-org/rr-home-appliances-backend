import express from 'express';
import { 
  createLead, 
  getAllLeads, 
  updateLeadStatus, 
  deleteLead 
} from '../controllers/leadController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route for customers in Nashik
router.post('/', createLead);

// Protected routes for Admin only
router.get('/', protect, getAllLeads);
router.patch('/:id', protect, updateLeadStatus);
router.delete('/:id', protect, deleteLead);

export default router;