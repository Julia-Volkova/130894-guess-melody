const statisticLose = {
  livesEnd: {
    title: `Какая жалость!`,
    description: `У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!`
  },
  timeEnds: {
    title: `Увы и ах!`,
    description: `Время вышло!<br>Вы не успели отгадать все мелодии`
  }
};

const showResultScreen = (otherResults, yourResult) => {
  if (yourResult.time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (yourResult.lives === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else {
    otherResults.push(yourResult);

    let filteredResults = otherResults.sort((a, b) => b - a);
    let yourIndex = filteredResults.indexOf(yourResult);
    let place = yourIndex + 1;
    let gamerCount = filteredResults.length;
    let fractional = ((gamerCount - 1) - yourIndex) / gamerCount;
    let gamerPercent = (Math.ceil((fractional) * 100) / 100) * 100;
    return `Вы заняли ${place} место из ${gamerCount} игроков. Это лучше, чем у ${gamerPercent}% игроков`;
  }
};

const calcScores = (answers, lives) => {
  if (answers.length < 10 && lives > 0 || lives === 0) {
    return -1;
  }

  let points = 0;
  answers.forEach((elem) => {
    if (elem.correct && elem.time >= 30) {
      points++;
    } else if (elem.correct && elem.time < 30) {
      points += 2;
    } else if (!elem.correct) {
      points -= 2;
    }
  });

  if (points < 0) {
    points = 0;
  }

  return points;
};

const timeCount = (startTime) => {
  let time = {
    remainingTime: startTime,
    isTimeout: false,
    tick() {
      if (this.remainingTime > 0) {
        this.remainingTime -= 1;
      }
      this.isTimeout = (this.remainingTime === 0);
      return this.remainingTime;
    }
  };
  if (startTime === 0) {
    time.isTimeout = true;
  }

  return time;
};

export {statisticLose, calcScores, showResultScreen, timeCount};
