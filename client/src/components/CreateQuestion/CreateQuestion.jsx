import React, { useState } from 'react';

import classes from './CreateQuestion.module.css';

const CreateQuestion = (props) => {
  const [question, setQuestion] = useState({
    questionText: '',
    answers: [
      { answerText: '', isCorrect: false },
      { answerText: '', isCorrect: false },
      { answerText: '', isCorrect: false },
      { answerText: '', isCorrect: false },
    ],
    marks: 1,
    negativePenalty: 0,
  });

  const onChange = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const onAnswerChange = (e, index) => {
    let answers = [...question.answers];
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    answers[index][e.target.name] = value;

    setQuestion({ ...question, answers });
  };

  const onSubmitQuestion = () => {
    props.parentCallback(question, props.id);
  };

  return (
    <div>
      <textarea
        name='questionText'
        placeholder='Question Text'
        onChange={onChange}
      />
      {question.answers.map((answer, index) => (
        <div className={classes.answer} key={index}>
          <input
            type='checkbox'
            name='isCorrect'
            onChange={(e) => onAnswerChange(e, index)}
          />
          <input
            type='text'
            name='answerText'
            value={answer.answerText}
            onChange={(e) => onAnswerChange(e, index)}
          />
        </div>
      ))}
      <button
        type='button'
        onClick={onSubmitQuestion}
        className={classes.submitQuestionButton}
      >
        Submit / Update question
      </button>
    </div>
  );
};

export default CreateQuestion;
