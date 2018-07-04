import GenreView from "./genre-view";
import {calculateLevelTime, switchScreen} from "./util";
import Router from "./router";

let timer;

export default class GenrePresenter {
  constructor(model) {
    this._model = model;
    this._content = new GenreView(this._model.currentState, this._model.getLevelNumber(this._model.state.level - 1));
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
    } else if (this._model.getLevelNumber(this._model.state.level - 1).type === `performer`) {
      Router.showPerformerScreen();
    } else {
      Router.showGenreScreen();
    }
  }

  changeLevel() {
    const start = new Date();
    this._content.onSwitch = (evt, result, answers) => {
      evt.preventDefault();
      const data = this._model.data[this._model.state.level - 1];
      const countOfCorrectAnswers = data.answers.reduce((acc, next) => acc + (next.correct ? 1 : 0), 0);

      this._model.nextLevel();
      result = answers.every((el) => {
        return el === true;
      });
      if (result) {
        result = (answers.length === countOfCorrectAnswers);
      }
      let currentAnswer = {
        correct: result,
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
