let currentState = {
  points: 0,
  lives: 3,
  time: 300,
  level: 0
};

const levelPerformer = {
  '1': {
    audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
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
    audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
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
  }
};

const levelGenre = {
  '6': {
    genre: `Jazz`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`,
        correct: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`,
        correct: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: false
      }
    ]
  },
  '7': {
    genre: `Electronic`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: true
      }
    ]
  },
  '8': {
    genre: `Country`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `R&B`,
        correct: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: true
      }
    ]
  },
  '9': {
    genre: `Pop`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        genre: `Jazz`,
        correct: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: false
      }
    ]
  },
  '10': {
    genre: `Rock`,
    answers: [
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `Country`,
        correct: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Pop`,
        correct: false
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `Rock`,
        correct: true
      },
      {
        audio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `Electronic`,
        correct: false
      }
    ]
  }
};

let results = [];

let finalResults = {};

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

export {levelPerformer, levelGenre, currentState, results, finalResults, calcScores, showResultScreen, timeCount};
