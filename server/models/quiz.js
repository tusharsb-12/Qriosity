import mongoose from 'mongoose';

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
