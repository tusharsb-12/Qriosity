import QuizResponse from '../models/quizResponse.js';
import User from '../models/user.js';

export const addQuizResponse = async (req, res) => {
  const { quizId, response, score } = req.body;
  const userId = req.user._id;

  try {
    await QuizResponse.create({
      quizId,
      response,
      user: userId,
      score,
    });

    const user = await User.findById(userId);
    user.attemptedQuiz.push(quizId);
    user.save();

    return res.status(201).json({
      msg: 'Quiz submitted. You can now view your score',
      score,
    });
  } catch (err) {
    return res.status(500).json({
      err: {
        msg: 'Server error',
      },
    });
  }
};
