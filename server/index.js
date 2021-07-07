import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './api/auth.js';
import quizRoutes from './api/quiz.js';
import questionRoutes from './api/questions.js';
import quizResponseRoutes from './api/quizResponse.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI;

// Connection to DB
mongoose.connect(
  DB_URI,
  {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Connected to database')
);

// Middleware
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/question', questionRoutes);
app.use('/api/response/', quizResponseRoutes);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
