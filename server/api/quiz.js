import express from 'express';
import auth from '../middleware/auth.js';
import { createQuiz, getQuiz, deleteQuiz } from '../controllers/quiz.js';

const router = express.Router();

router.post('/create', auth, createQuiz);
router.get('/:quizId', auth, getQuiz);
router.delete('/:quizId', auth, deleteQuiz);

export default router;
