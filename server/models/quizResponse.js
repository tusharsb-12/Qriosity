import mongoose from 'mongoose';

const quizResponseSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  response: [
    {
      marks: Number,
      negativePenalty: Number,
      questionText: String,
      answers: [
        {
          answerText: String,
          isCorrect: Boolean,
          isSelected: Boolean,
        },
      ],
    },
  ],
  score: Number,
  correctQuestions: Number,
  totalMarks: Number,
});

const QuizResponse = mongoose.model('quizResponse', quizResponseSchema);

export default QuizResponse;
