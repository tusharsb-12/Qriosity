import express from 'express';
import auth from '../middleware/auth.js';
import * as controllers from '../controllers/quizResponse.js';

const router = express.Router();

router.post('/save-response', auth, controllers.addQuizResponse);
router.get('/get-response/:quizId', auth, controllers.getQuizResponse);

export default router;
