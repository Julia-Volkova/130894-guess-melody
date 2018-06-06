export const INITIAL_GAME = {
  points: 0,
  level: 0,
  lives: 2,
  time: 0
};

let restantLives = INITIAL_GAME.lives;

const calcScores = (answers, lives) => {
  let points = 0;
  answers.forEach((elem) => {
    if (elem.text === true && elem.time >= 30 && lives >= 0) {
      points++;
    } else if (elem.text === true && elem.time < 30 && lives >= 0) {
      points += 2;
    } else if (elem.text === false && lives >= 0) {
      points -= 2;
    }
  });

  if (answers.length < 10 && lives === restantLives) {
    return -1;
  }

  if (points < 0) {
    points = 0;
  }

  return points;
};

export {calcScores};
