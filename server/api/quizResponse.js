import express from 'express';
import auth from '../middleware/auth.js';
import * as controllers from '../controllers/quizResponse.js';

const router = express.Router();

router.post('/save-response', auth, controllers.addQuizResponse);

export default router;
