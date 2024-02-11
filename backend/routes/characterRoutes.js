import express from 'express';

const router = express.Router();

import { getCharacters, getCharacterById, createCharacter, updateCharacter, deleteCharacter } from '../controllers/characterController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.get('/', getCharacters);
router.get('/:id', getCharacterById);
router.post('/', protect, admin, createCharacter);
router.put('/:id', protect, admin, updateCharacter);
router.delete('/:id', protect, admin, deleteCharacter);

export default router;