let currentState = {
  points: 0,
  lives: 3,
  time: 300,
  level: 0
};

const levels = {
  '1': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    type: `performer`,
    answers: [
      {
        pic: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        artist: `Gunnar Olsen`,
        correct: true
      },
      {
        pic: `https://i.vimeocdn.com/portrait/992615_300x300`,
        artist: `Jingle Punks`,
        correct: false
      },
      {
        pic: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        artist: `Riot`,
        correct: false
      }
    ]
  },
  '2': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    type: `performer`,
    answers: [
      {
        pic: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        artist: `Riot`,
        correct: false
      },
      {
        pic: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        artist: `Kevin MacLeod`,
        correct: false
      },
      {
        pic: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        artist: `Audionautix`,
        correct: true
      }
    ]
  },
  '3': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    type: `performer`,
    answers: [
      {
        pic: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        artist: `Audionautix`,
        correct: false
      },
      {
        pic: `https://i.vimeocdn.com/portrait/992615_300x300`,
        artist: `Jingle Punks`,
        correct: true
      },
      {
        pic: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        artist: `Gunnar Olsen`,
        correct: false
      }
    ]
  },
  '4': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    type: `performer`,
    answers: [
      {
        pic: `https://i.vimeocdn.com/portrait/992615_300x300`,
        artist: `Jingle Punks`,
        correct: false
      },
      {
        pic: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        artist: `Riot`,
        correct: false
      },
      {
        pic: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        artist: `Kevin MacLeod`,
        correct: true
      }
    ]
  },
  '5': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    type: `performer`,
    answers: [
      {
        pic: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
        artist: `Riot`,
        correct: true
      },
      {
        pic: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        artist: `Audionautix`,
        correct: false
      },
      {
        pic: `https://f4.bcbits.com/img/0004181452_10.jpg`,
        artist: `Gunnar Olsen`,
        correct: false
      }
    ]
  },
  '6': {
    genre: `Jazz`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: false,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`,
        correct: true,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: false,
        autoplay: false
      }
    ]
  },
  '7': {
    genre: `Electronic`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: true,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: true,
        autoplay: false
      }
    ]
  },
  '8': {
    genre: `Country`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`,
        correct: false,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: true,
        autoplay: false
      }
    ]
  },
  '9': {
    genre: `Pop`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: true,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: true,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: false,
        autoplay: false
      }
    ]
  },
  '10': {
    genre: `Rock`,
    type: `genre`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false,
        autoplay: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: false,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: true,
        autoplay: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: false,
        autoplay: false
      }
    ]
  }
};

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

let results = [];

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
    let gamerPercent = (Math.ceil((fractional) * 100) / 100) * 100;
    return `Вы заняли ${place} место из ${gamerCount} игроков. Это лучше, чем у ${gamerPercent}% игроков`;
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

let timer;
const ONE_SECOND = 1000;

const startTimer = () => {
  creationTimeFormat(currentState);
  timer = setTimeout(() => {
    currentState.time = timeCount(currentState.time).tick();
    creationTimeFormat(currentState);
    startTimer();
  }, ONE_SECOND);
};

const stopTimer = () => {
  clearTimeout(timer);
};

const creationTimeFormat = (state) => {
  let minutes = Math.floor(state.time / 60);
  let seconds = state.time - (minutes * 60);
  if (minutes.toString().length < 2) {
    minutes = `0` + minutes;
  }
  if (seconds.toString().length < 2) {
    seconds = `0` + seconds;
  }

  state.timeFormat = {
    min: minutes,
    sec: seconds
  };
};

export {levels, currentState, results, statisticLose, calcScores, showResultScreen, timeCount, startTimer, stopTimer};
