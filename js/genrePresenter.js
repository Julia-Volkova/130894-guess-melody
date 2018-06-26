import GenreView from "./genreView";
import {levels, results} from "./gameData";
import {switchScreen} from "./util";
import Router from "./router";

let timer;

export default class GenrePresenter {
  constructor(model) {
    this.model = model;
    this.content = new GenreView(this.model.currentState, levels[this.model.state.level]);
    this.root = switchScreen(this.content.element);
    this.timer = timer;
    this.isTimerInit = false;
  }

  get element() {
    return this.root;
  }

  answer() {
    if (this.model.state.lives === 0) {
      Router.showResultLoseLivesEndScreen();
    } else if (this.model.state.time === 0) {
      Router.showResultLoseTimesEndScreen();
    } else if (this.model.state.level === 11) {
      Router.showResultWinScreen();
    } else {
      Router.showGenreScreen();
    }
  }

  changeTimer() {
    if (this.model.timer.isTimeout) {
      Router.showResultLoseTimesEndScreen();
      this.stopTimer();
    }
    this.model.creationTimeFormat();
    this.model.updateTimer(this.content.timerMin, this.content.timerSec);
    this.model.tick();
    if (this.model.timer.remainingTime <= 30) {
      this.content.timerContainer.classList.add(`timer-value--finished`);
    }
    this.timer = setTimeout(() => {
      this.changeTimer();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  changeLevel() {
    this.content.onSwitch = (evt, result, answers) => {
      evt.preventDefault();
      this.model.nextLevel();
      this.stopTimer();
      this.isTimerInit = true;

      result = answers.every((el) => {
        return el === true;
      });

      let currentAnswer = {
        correct: result,
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
    };
  }

  init() {
    this.changeLevel();

    if (this.isTimerInit === false) {
      this.changeTimer();
    }
  }
}
