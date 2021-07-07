import QuizResponse from '../models/quizResponse.js';

export const addQuizResponse = async (req, res) => {
  const { quizId, response } = req.body;
  const user = req.user._id;

  try {
    await QuizResponse.create({
      quizId,
      response,
      user,
    });

    return res.status(201).json({
      msg: 'Quiz submitted. You can now view your score',
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
