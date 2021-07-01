import express from 'express';
import auth from '../middleware/auth.js';
import * as controllers from '../controllers/questions.js';

const router = express.Router();

router.get('/:quizId', auth, controllers.getQuestions);

export default router;
