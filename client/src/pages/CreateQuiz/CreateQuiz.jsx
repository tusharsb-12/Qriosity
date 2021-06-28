import React from 'react';

import classes from './CreateQuiz.module.css';

const CreateQuiz = () => {
  return (
    <form className={classes.quizContainer}>
      <h1>Create Quiz</h1>
      <input type='text' name='title' placeholder='Quiz name' />
      <textarea name='description' placeholder='Description'></textarea>
      <textarea name='instructions' placeholder='Instructions'></textarea>
      <input type='number' placeholder='Time limit' />
      <input type='datetime-local' name='startDateTime' />
      <input type='datetime-local' name='endDateTime' />
      <br />
      <button>Create quiz</button>
    </form>
  );
};

export default CreateQuiz;
