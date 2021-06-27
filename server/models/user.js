import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdQuiz: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'quiz',
    },
  ],
  attemptedQuiz: [
    {
      quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quizHistory',
      },
      score: Number,
    },
  ],
});

const User = mongoose.model('user', userSchema);

export default User;
