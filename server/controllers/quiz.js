import Quiz from '../models/quiz.js';
import Question from '../models/question.js';

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
      });
      return res.status(201).json({
        msg: 'Quiz created',
        id: quiz.id,
      });
    }
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
    const {
      title,
      instructions,
      description,
      author,
      timeLimit,
      startDateTime,
      endDateTime,
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
