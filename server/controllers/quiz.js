import Quiz from '../models/quiz.js';
import Question from '../models/question.js';
import User from '../models/user.js';

// Adding questions utility
export const insertQuestions = async (questions) => {
  try {
    // console.log(questions);
    const qs = await Question.insertMany(questions);

    let questionIds = [];
    qs.map((question) => {
      questionIds.push(question._id);
    });

    return questionIds;
  } catch (err) {
    console.log(err);
    return [];
  }
};

// Create a quiz
export const createQuiz = async (req, res) => {
  const author = req.user._id;
  const {
    title,
    description,
    instructions,
    timeLimit,
    startDateTime,
    endDateTime,
    questions,
    totalMarks,
  } = req.body;
  try {
    const questionIds = await insertQuestions(questions);
    // console.log(questionIds);
    if (questionIds.length === 0) {
      return res.status(400).json({
        err: {
          msg: 'No questions are added. Cannot create the quiz',
        },
      });
    } else {
      const quiz = await Quiz.create({
        title,
        description,
        instructions,
        timeLimit,
        startDateTime,
        endDateTime,
        author,
        questions: questionIds,
        totalMarks,
      });

      const user = await User.findById(author);
      user.createdQuiz.push(quiz._id);
      user.save();

      return res.status(201).json({
        msg: 'Quiz created',
        id: quiz.id,
      });
    }
  } catch (err) {
    // console.log(err);
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
    const {
      title,
      instructions,
      description,
      author,
      timeLimit,
      startDateTime,
      endDateTime,
      totalMarks,
    } = await Quiz.findById(quizId);
    return res.status(200).json({
      msg: 'Quiz fetched',
      quiz: {
        title,
        instructions,
        description,
        author,
        timeLimit,
        startDateTime,
        endDateTime,
        totalMarks,
      },
    });
  } catch (err) {
    // console.log(err);
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
    // console.log(err);
    return res.status(500).json({
      err: {
        msg: 'Server error',
      },
    });
  }
};

// Get quizzes created by the user
export const getCreatedQuiz = async (req, res) => {
  const userId = req.user.id;
  try {
    const userQuizzes = await Quiz.find({ author: userId });
    return res.status(200).json({
      quizzes: userQuizzes,
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

// Get active quizzes
export const getActiveQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    return res.status(200).json({ quizzes });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: {
        msg: 'Server error',
      },
    });
  }
};

// Get attempted quizzes
export const getAttemptedQuizzes = async (req, res) => {
  const userId = req.user._id;
  try {
    const { attemptedQuiz } = await User.findById(userId);
    return res.status(200).json({ quizzes: attemptedQuiz });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      err: {
        msg: 'Server error',
      },
    });
  }
};
