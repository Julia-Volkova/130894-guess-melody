import PerformerView from "./performer-view";
import {calculateLevelTime, switchScreen} from "./util";
import Router from "./router";

let timer;

export default class PerformerPresenter {
  constructor(model) {
    this._model = model;
    this._content = new PerformerView(this._model.currentState, this._model.getLevelNumber(this._model.state.level - 1));
    this.root = switchScreen(this._content.element);
    this._timer = timer;
    this.isTimerInit = false;
  }

  get element() {
    return this.root;
  }

  _answer() {
    if (this._model.state.lives === 0) {
      Router.showResultLoseLivesEndScreen();
    } else if (this._model.state.time === 0) {
      Router.showResultLoseTimesEndScreen();
    } else if (this._model.state.level === 11) {
      Router.showStatisticScreen();
    } else if (this._model.getLevelNumber(this._model.state.level - 1).type === `genre`) {
      Router.showGenreScreen();
    } else {
      Router.showPerformerScreen();
    }
  }

  changeLevel() {
    const start = new Date();
    this._content.onSwitch = (isCorrect) => {
      this._model.nextLevel();
      let currentAnswer = {
        correct: isCorrect,
        time: calculateLevelTime(start)
      };
      this._model.state.results.push(currentAnswer);

      if (currentAnswer.correct === false) {
        this._model.loseLive();
      }
      this._answer();
      this._stopTimer();
      this.isTimerInit = true;
    };

    this._content.onDrawWelcome = () => {
      Router.showModalConfirmation();
    };
  }

  changeTimer() {
    if (this._model.timer.isTimeout) {
      Router.showResultLoseTimesEndScreen();
      this._stopTimer();
    }
    this._model.creationTimeFormat();
    this._model.updateTimer(this._content.timerMin, this._content.timerSec);
    this._model.tick();
    if (this._model.timer.remainingTime <= 30) {
      this._content.timerContainer.classList.add(`timer-value--finished`);
    }
    this._timer = setTimeout(() => {
      this.changeTimer();
    }, 1000);
  }

  _stopTimer() {
    clearInterval(this._timer);
  }


  init() {
    this.changeLevel();

    if (this.isTimerInit === false) {
      this.changeTimer();
    }
  }
}
