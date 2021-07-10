const calculateScore = (response) => {
  let score = 0;

  for (let i = 0; i < response.length; i++) {
    let correct = 0;
    const answers = response[i].answers;

    for (let j = 0; j < answers.length; j++) {
      if (answers[j].isSelected === answers[j].isCorrect) {
        correct = 1;
      } else {
        correct = -1;
        break;
      }
    }
    if (correct === 1) {
      score += response[i].marks;
    } else if (correct === -1) {
      score += -1 * response[i].negativePenalty;
    }
  }

  return score;
};

export default calculateScore;
