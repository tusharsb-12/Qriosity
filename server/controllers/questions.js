import Quiz from '../models/quiz.js';
import Question from '../models/question.js';

// Get questions of a quiz
export const getQuestions = async (req, res) => {
  const quizId = req.params.quizId;
  try {
    let { questions, timeLimit } = await Quiz.findById(quizId);
    questions = await Question.find({
      _id: questions,
    });
    // console.log(questions);
    return res.status(200).json({
      quizId: quizId,
      questions,
      timeLimit,
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
