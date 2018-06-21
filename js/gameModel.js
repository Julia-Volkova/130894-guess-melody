import {timeCount, calcScores, showResultScreen, results} from "./gameData";

let timer;
const ONE_SECOND = 1000;

export default class GameModel {
  constructor(state) {
    this._state = state;
  }

  get state() {
    return this._state;
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

  initialState() {
    this.state.points = 0;
    this.state.fastAnswers = 0;
  }

  tick() {
    this.creationTimeFormat();
    timer = setTimeout(() => {
      this.state.time = timeCount(this.state.time).tick();
      this.creationTimeFormat();
      this.tick();
    }, ONE_SECOND);
  }

  stopTimer() {
    clearTimeout(timer);
  }

  creationTimeFormat() {
    let minutes = Math.floor(this.state.time / 60);
    let seconds = this.state.time - (minutes * 60);
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
