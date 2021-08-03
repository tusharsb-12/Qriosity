import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CreateQuestion from '../../components/CreateQuestion/CreateQuestion';
import { createQuiz } from '../../redux/actions/quiz';

import classes from './CreateQuiz.module.css';

const CreateQuiz = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: 'No description provided',
    instructions: 'No instructions provided',
    timeLimit: '',
    questions: [],
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const quizData = useSelector((state) => state.quizReducer);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const callbackFunction = (data, index) => {
    console.log(data);
    const values = [...formData.questions];
    values[index] = data;
    setFormData({
      ...formData,
      questions: values,
    });
  };

  const addQuestion = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      questions: [...formData.questions, {}],
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createQuiz(formData, history));

    if (quizData.err?.msg) {
      window.alert(quizData.err.msg);
    }
  };

  return (
    <form className={classes.quizContainer} onSubmit={onSubmit}>
      <h1>Create Quiz</h1>
      <input
        type='text'
        name='title'
        placeholder='Quiz name'
        onChange={onChange}
        className={classes.quizInput}
      />
      <textarea
        name='description'
        placeholder='Description'
        onChange={onChange}
      ></textarea>
      <textarea
        name='instructions'
        placeholder='Instructions'
        onChange={onChange}
      ></textarea>
      <input
        type='number'
        name='timeLimit'
        placeholder='Time limit'
        onChange={onChange}
        className={classes.quizInput}
      />
      {formData.questions.map((question, index) => {
        return (
          <CreateQuestion
            key={index}
            parentCallback={callbackFunction}
            id={index}
          />
        );
      })}
      <button type='button' onClick={addQuestion}>
        Add Question
      </button>
      <button type='submit' onClick={onSubmit}>
        Create quiz
      </button>
    </form>
  );
};

export default CreateQuiz;
