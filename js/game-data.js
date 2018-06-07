export const INITIAL_GAME = {
  points: 0,
  level: 0,
  lives: 3,
  time: 0
};

const calcScores = (answers, lives) => {
  let points = 0;
  answers.forEach((elem) => {
    if (elem.right === true && elem.time >= 30 && lives >= 0) {
      points++;
    } else if (elem.right === true && elem.time < 30 && lives >= 0) {
      points += 2;
    } else if (elem.right === false && lives >= 0) {
      points -= 2;
    }
  });

  if (answers.length < 10 && lives > 0) {
    return -1;
  }

  if (points < 0) {
    points = 0;
  }

  return points;
};

const showResultScreen = (otherResults, yourResult) => {
  if (yourResult.time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (yourResult.lives === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else {
    otherResults.push(yourResult.points);
    let filteredResults = otherResults.sort((a, b) => b - a);
    let yourIndex = filteredResults.indexOf(yourResult.points);
    let place = yourIndex + 1;
    let gamerCount = filteredResults.length;
    let fractional = ((gamerCount - 1) - yourIndex) / gamerCount;
    let gamerProcent = (Math.ceil((fractional) * 100) / 100) * 100;
    return `Вы заняли ${place} место из ${gamerCount} игроков. Это лучше, чем у ${gamerProcent}% игроков`;
  }
};

const timeCount = (startTime) => {
  let time = {
    remainingTime: startTime,
    isTimeout: false,
    tick() {
      if (this.remainingTime > 0) {
        this.remainingTime -= 1;
        return this.remainingTime;
      } else if (this.remainingTime === 0) {
        this.isTimeout = true;
        return false;
      } else if (this.remainingTime === 1) {
        this.remainingTime -= 1;
        this.isTimeout = true;
        return false;
      }
      return false;
    }
  };
  return time;
};

export {calcScores, showResultScreen, timeCount};
