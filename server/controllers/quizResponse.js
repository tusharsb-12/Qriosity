import QuizResponse from '../models/quizResponse.js';
import User from '../models/user.js';

export const addQuizResponse = async (req, res) => {
  const { quizId, response } = req.body;
  const userId = req.user._id;

  try {
    const quizResponse = await QuizResponse.create({
      quizId,
      response,
      user: userId,
    });
    const user = await User.findById(userId);
    user.attemptedQuiz.push({ quiz: quizId, score: quizResponse.score });
    user.save();

    return res.status(201).json({
      msg: 'Quiz submitted. You can now view your score',
      score: quizResponse.score,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: {
        msg: 'Server error',
      },
    });
  }
};
