const initialState = {
  points: 0,
  lives: 3,
  time: 0,
  level: `level-6`
};

const levelPerformer = {
  'level-1': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    answers: [
      {
        pic: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        artist: `Gunnar Olsen`
      },
      {
        pic: `https://i.vimeocdn.com/portrait/992615_300x300`,
        artist: `Jingle Punks`
      },
      {
        pic: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        artist: `Riot`
      }
    ]
  }
};

const levelGenre = {
  'level-6': {
    genre: ``,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`
      }
    ]
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

export {levelPerformer, levelGenre, initialState, calcScores, showResultScreen, timeCount};
