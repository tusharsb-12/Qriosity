import express from 'express';
import auth from '../middleware/auth.js';
import * as controllers from '../controllers/quiz.js';

const router = express.Router();

router.post('/create', auth, controllers.createQuiz);
router.get('/created-quizzes', auth, controllers.getCreatedQuiz);
router.get('/active-quizzes', auth, controllers.getActiveQuizzes);
router.get('/attempted-quizzes', auth, controllers.getAttemptedQuizzes);
router.get('/:quizId', auth, controllers.getQuiz);
router.delete('/:quizId', auth, controllers.deleteQuiz);

export default router;
