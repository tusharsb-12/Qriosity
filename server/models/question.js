import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  answers: [
    {
      answerText: String,
      isCorrect: Boolean,
    },
  ],
  marks: {
    type: Number,
    required: true,
    default: 1,
  },
  negativePenalty: {
    type: Number,
    default: 0,
  },
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
