import express from 'express';

const router = express.Router();

import { getBoards, getBoardById, createBoard, updateBoard, deleteBoard } from '../controllers/boardController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.get('/', getBoards);
router.get('/:id', getBoardById);
router.post('/', protect, admin, createBoard);
router.put('/:id', protect, admin, updateBoard);
router.delete('/:id', protect, admin, deleteBoard);

export default router;