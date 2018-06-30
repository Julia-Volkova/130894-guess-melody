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

  }

  computeFinalResult(otherResults) {
    this.state.points = calcScores(this.state.results, this.state.lives);

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
