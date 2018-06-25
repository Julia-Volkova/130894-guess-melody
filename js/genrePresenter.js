import GenreView from "./genreView";
import {levels, results} from "./gameData";
import {switchScreen} from "./util";
import {Router, router} from "./router";
import GameModel from "./gameModel";

let timerValue;

export default class GenrePresenter {
  constructor(model) {
    this.model = model;
    this.content = new GenreView(this.model, levels[this.model.state.level]);
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
    } else if (this.model.state.level === 11) {
      Router.showResultWinScreen();
    } else {
      Router.showGenreScreen();
      this.model.tick();
    }
  }

  changeLevel() {
    this.content.onSwitch = (evt, result, answers) => {
      evt.preventDefault();
      this.model.nextLevel();
      this.model.stopTimer();
      this.stopTimerValue();

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
      router.model = new GameModel();
      Router.showWelcomeScreen();
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
    this.changeLevel();
    this.setTimerValue();
  }
}
