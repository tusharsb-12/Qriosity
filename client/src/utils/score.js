const calculateScore = (response) => {
  let score = 0;
  let correctQuestions = 0;

  for (let i = 0; i < response.length; i++) {
    let correct = 0;
    const answers = response[i].answers;
    let solved = false;

    for (let j = 0; j < answers.length; j++) {
      if (answers[j].isSelected === answers[j].isCorrect) {
        correct = 1;
      } else {
        correct = -1;
        break;
      }
    }

    for (let j = 0; j < answers.length; j++) {
      if (answers[j].isSelected === true) {
        solved = true;
      }
    }

    if (solved && correct === 1) {
      score += response[i].marks;
      correctQuestions += 1;
    } else if (solved && correct === -1) {
      score += -1 * response[i].negativePenalty;
    }
  }

  return { score, correctQuestions };
};

export default calculateScore;
