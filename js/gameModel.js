import {timeCount, calcScores, showResultScreen} from "./gameData";

export default class GameModel {
  constructor(data) {
    this.data = data;
    this.state = {
      points: 0,
      lives: 3,
      time: 300,
      level: 0,
      fastAnswers: 0,
      statistics: ``,
      timeFormat: ``,
      results: []
    };
    this.timer = timeCount(this.state.time);
    this.tick = this.tick.bind(this);
  }

  get currentState() {
    return this.state;
  }

  calcScores() {
    if (this.state.results.length < 9 && this.state.lives > 0 || this.state.lives === 0) {
      return -1;
    }

    this.state.results.forEach((elem) => {
      if (elem.correct && elem.time >= 30) {
        this.state.points++;
      } else if (elem.correct && elem.time < 30) {
        this.state.points += 2;
      } else if (!elem.correct) {
        this.state.points -= 2;
      }
    });

    if (this.state.points < 0) {
      this.state.points = 0;
    }
    return this.state.points;
  }

  computeFinalResult(otherResults) {
    let calcFastAnswers = (arr) => {
      let count = 0;
      arr.forEach((elem) => {
        if (elem.time < 30) {
          count++;
        }
      });
      return count;
    };
    let statisticsInfo = showResultScreen(otherResults, this.state.points);

    this.state.fastAnswers = calcFastAnswers(this.state.results);
    this.state.statistics = statisticsInfo;

    return this.state;
  }

  getLevelNumber(levelNumber) {
    return this.data[levelNumber];
  }

  getFirstLevelType() {
    return this.data[0].type;
  }

  nextLevel() {
    return this.state.level++;
  }

  loseLive() {
    return this.state.lives--;
  }

  tick() {
    this.timer.tick();
  }

  updateTimer(min, sec) {
    min.innerHTML = this.state.timeFormat.min;
    sec.innerHTML = this.state.timeFormat.sec;
  }

  creationTimeFormat() {
    let minutes = Math.floor(this.timer.remainingTime / 60);
    let seconds = this.timer.remainingTime - (minutes * 60);
    if (minutes.toString().length < 2) {
      minutes = `0` + minutes;
    }
    if (seconds.toString().length < 2) {
      seconds = `0` + seconds;
    }

    this.state.timeFormat = {
      min: minutes,
      sec: seconds
    };
  }
}
