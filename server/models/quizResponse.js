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
});

quizResponseSchema.pre('save', function (next) {
  const response = this.response;
  let scores = 0;
  for (let i = 0; i < response.length; i++) {
    let correct = 0;
    const answers = response[i].answers;

    for (let j = 0; j < answers.length; j++) {
      if (answers[j].isSelected === answers[j].isCorrect) {
        correct = 1;
      } else {
        correct = -1;
        break;
      }
    }
    if (correct === 0) {
      scores += response[i].marks;
    } else if (correct === -1) {
      scores += -1 * response[i].negativePenalty;
    }
  }
  this.score = scores;
  next();
});

const QuizResponse = mongoose.model('quizResponse', quizResponseSchema);

export default QuizResponse;
