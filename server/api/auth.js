import express from 'express';
import * as controllers from '../controllers/auth.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/login', controllers.login);
router.post('/register', controllers.register);
router.get('/user', auth, controllers.getUser);

export default router;
