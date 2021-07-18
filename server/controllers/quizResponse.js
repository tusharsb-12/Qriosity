import Quiz from '../models/quiz.js';
import QuizResponse from '../models/quizResponse.js';
import User from '../models/user.js';

// Save quiz response
export const addQuizResponse = async (req, res) => {
  const { quizId, response, score } = req.body;
  const userId = req.user._id;

  try {
    const { title, totalMarks } = await Quiz.findById(quizId);
    console.log(title, totalMarks);

    await QuizResponse.create({
      quizId,
      response,
      user: userId,
      score,
      totalMarks,
    });

    const user = await User.findById(userId);
    user.attemptedQuiz.push({ quiz: quizId, title, score, totalMarks });
    user.save();

    return res.status(201).json({
      msg: 'Quiz submitted. You can now view your score',
      score,
      totalMarks,
    });
  } catch (err) {
    return res.status(500).json({
      err: {
        msg: 'Server error',
      },
    });
  }
};

// Get quiz response
export const getQuizResponse = async (req, res) => {
  const quizId = req.params.quizId;
  const user = req.user._id;

  try {
    const response = await QuizResponse.findOne({
      quizId,
      user,
    });
    return res.status(200).json({
      response,
    });
  } catch (err) {
    return res.status(500).json({
      err: {
        msg: 'Server error',
      },
    });
  }
};
