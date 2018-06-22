import PerformerView from "./performerView";
import {levels, results} from "./gameData";
import {switchScreen, backToInitialState} from "./util";
import Router from "./router";

let timerValue;

export default class PerformerPresenter {
  constructor(model) {
    this.model = model;
    this.content = new PerformerView(levels[this.model.state.level]);
    this.root = switchScreen(this.content.element);
    this.timerValue = timerValue;
  }

  get element() {
    return this.root;
  }

  answer() {
    if (this.model.state.lives === 0) {
      Router.showResultLoseLivesEndScreen();
    } else if (this.model.state.time === 0) {
      Router.showResultLoseTimesEndScreen();
    } else if (levels[this.model.state.level].type === `genre`) {
      Router.showGenreScreen();
      this.model.tick();
    } else {
      Router.showPerformerScreen();
      this.model.tick();
    }
  }

  changeLevel() {
    this.content.onSwitch = (isCorrect) => {
      this.model.nextLevel();
      this.model.stopTimer();
      this.stopTimerValue();

      let currentAnswer = {
        correct: isCorrect,
        time: 30
      };
      results.push(currentAnswer);

      if (currentAnswer.correct === false) {
        this.model.loseLive();
      }

      this.answer();
    };

    this.content.onDrawWelcome = () => {
      Router.showWelcomeScreen();
      backToInitialState();
      this.model.stopTimer();
      this.stopTimerValue();
    };
  }

  setTimerValue() {
    this.content.timerMin.innerHTML = this.model.state.timeFormat.min;
    this.content.timerSec.innerHTML = this.model.state.timeFormat.sec;
    this.timerValue = setTimeout(() => {
      this.setTimerValue();
    }, 1000);
    if (this.model.state.time === 0) {
      this.stopTimerValue();
    }
  }

  stopTimerValue() {
    clearTimeout(this.timerValue);
  }

  init() {
    this.setTimerValue();
    this.changeLevel();
  }
}
