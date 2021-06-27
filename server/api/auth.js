import express from 'express';
import * as controllers from '../controllers/auth.js';

const router = express.Router();

router.post('/login', controllers.login);
router.post('/register', controllers.register);
router.get('/logout', controllers.logout);

export default router;
