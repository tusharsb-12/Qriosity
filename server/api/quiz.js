import express from 'express';
import auth from '../middleware/auth.js';
import * as controllers from '../controllers/quiz.js';

const router = express.Router();

router.post('/create', auth, controllers.createQuiz);
router.get('/:quizId', auth, controllers.getQuiz);
router.delete('/:quizId', auth, controllers.deleteQuiz);

export default router;
