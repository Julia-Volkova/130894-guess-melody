import {timeCount, showResultScreen} from "./game-data";
import {getMinutesAndSeconds} from "./util";

const LIVE_COUNT = 3;
const START_TIME = 300;
const LEVEL_COUNT = 10;
const BORDER_TIME_FAST_ANSWER = 30;
const POINTS_STEP = 2;
const TIME_LENGTH = 2;

export default class GameModel {
  constructor(data) {
    this.data = data;
    this.state = {
      points: 0,
      lives: LIVE_COUNT,
      time: START_TIME,
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

  get currentTime() {
    return this.timer;
  }

  calcScores() {
    if (this.state.results.length < LEVEL_COUNT - 1 && this.state.lives > 0 || this.state.lives === 0) {
      return -1;
    }

    this.state.results.forEach((elem) => {
      if (elem.correct && elem.time >= BORDER_TIME_FAST_ANSWER) {
        this.state.points++;
      } else if (elem.correct && elem.time < BORDER_TIME_FAST_ANSWER) {
        this.state.points += POINTS_STEP;
      } else if (!elem.correct) {
        this.state.points -= POINTS_STEP;
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
        if (elem.time < BORDER_TIME_FAST_ANSWER) {
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
    let {minutes, seconds} = getMinutesAndSeconds(this.timer.remainingTime);
    if (minutes.toString().length < TIME_LENGTH) {
      minutes = `0` + minutes;
    }

    if (seconds.toString().length < TIME_LENGTH) {
      seconds = `0` + seconds;
    }

    this.state.timeFormat = {
      min: minutes,
      sec: seconds
    };
  }
}
