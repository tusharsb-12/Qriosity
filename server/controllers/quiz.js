import Quiz from '../models/quiz.js';

// Create a quiz
export const createQuiz = async (req, res) => {
  const author = req.user._id;
  const { title, description, timeLimit, startDateTime, endDateTime } =
    req.body;
  try {
    await Quiz.create({
      title,
      description,
      timeLimit,
      startDateTime,
      endDateTime,
      author,
    });
    return res.status(201).json({
      msg: 'Quiz created',
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

// Get a quiz
export const getQuiz = async (req, res) => {
  const quizId = req.params.quizId;
  try {
    const quiz = await Quiz.findById(quizId);
    return res.status(200).json({
      msg: 'Quiz fetched',
      quiz,
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

// Delete a quiz
export const deleteQuiz = async (req, res) => {
  const author = req.user.id;
  const quizId = req.params.quizId;
  try {
    const quiz = await Quiz.findById(quizId);
    if (quiz.author != author) {
      return res.status(401).json({
        err: {
          msg: 'Only the quiz author can delete the quiz',
        },
      });
    }
    await Quiz.findByIdAndDelete(quizId);
    return res.status(204).json({ msg: 'Quiz deleted' });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: {
        msg: 'Server error',
      },
    });
  }
};
