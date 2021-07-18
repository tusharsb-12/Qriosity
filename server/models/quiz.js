import mongoose from 'mongoose';
import Question from './question.js';

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: 'No description provided',
  },
  instructions: {
    type: String,
    required: true,
    default: 'No instructions provided',
  },
  timeLimit: {
    type: Number,
    required: true,
  },
  startDateTime: {
    type: Date,
    required: true,
  },
  endDateTime: {
    type: Date,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },
  ],
  totalMarks: {
    type: Number,
    required: true,
  },
});

const Quiz = mongoose.model('quiz', quizSchema);

export default Quiz;
