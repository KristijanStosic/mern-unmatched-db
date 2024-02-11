import express from 'express';

const router = express.Router();

import { addToFavorites, removeFromFavorites, getMyFavoriteCharacters } from '../controllers/myFavoriteController.js';

import { protect } from '../middleware/authMiddleware.js';

router.get('/my-favorite-characters', protect, getMyFavoriteCharacters);
router.post('/add-to-favorites/:characterId', protect, addToFavorites);
router.delete('/remove-from-favorites/:characterId', protect, removeFromFavorites);

export default router;