import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  answers: [
    {
      answerText: String,
      isCorrect: true,
    },
  ],
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
