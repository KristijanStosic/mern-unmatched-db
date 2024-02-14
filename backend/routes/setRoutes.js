import express from 'express';

const router = express.Router();

import { getSets, getSetById, createSet, updateSet, deleteSet } from '../controllers/setController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.get('/', getSets);
router.get('/:id', getSetById);
router.post('/', protect, admin, createSet);
router.put('/:id', protect, admin, updateSet);
router.delete('/:id', protect, admin, deleteSet);

export default router;