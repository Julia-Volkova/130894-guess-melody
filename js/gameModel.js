import {timeCount, calcScores, showResultScreen, results} from "./gameData";

// let timer;
// const ONE_SECOND = 1000;

export default class GameModel {
  constructor() {
    this.state = {
      points: 0,
      lives: 3,
      time: 300,
      level: 0,
      fastAnswers: 0,
      statistics: ``,
      timeFormat: ``
    };
    this.timer = timeCount(this.state.time);
    this.tick = this.tick.bind(this);
  }

  computeFinalResult() {
    this.state.points = calcScores(results, this.state.lives);

    let calcFastAnswers = (arr) => {
      let count = 0;
      arr.forEach((elem) => {
        if (elem.time < 30) {
          count++;
        }
      });
      return count;
    };
    let statisticsInfo = showResultScreen([3, 7, 19, 14, 5, 13, 11], this.state);

    this.state.fastAnswers = calcFastAnswers(results);
    this.state.statistics = statisticsInfo;

    return this.state;
  }

  nextLevel() {
    return this.state.level++;
  }

  loseLive() {
    return this.state.lives--;
  }

  tick() {
    this.creationTimeFormat();
    this.timer.tick();
    this.state.time = this.timer.remainingTime;
  }

  // tick() {
  //   this.creationTimeFormat();
  //   this.state.time = timeCount(this.state.time).tick();
  //   timer = setTimeout(() => {
  //     this.tick();
  //   }, ONE_SECOND);
  //   if (this.state.time === 0) {
  //     this.stopTimer();
  //   }
  // }

  // stopTimer() {
  //   clearTimeout(timer);
  //   this.creationTimeFormat();
  // }

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
