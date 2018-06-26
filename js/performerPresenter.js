import PerformerView from "./performerView";
import {levels, results} from "./gameData";
import {switchScreen} from "./util";
import {Router, router} from "./router";
import GameModel from "./gameModel";

let timer;

export default class PerformerPresenter {
  constructor(model) {
    this.model = model;
    this.content = new PerformerView(this.model, levels[this.model.state.level]);
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
    } else if (levels[this.model.state.level].type === `genre`) {
      Router.showGenreScreen();
    } else {
      Router.showPerformerScreen();
    }
  }

  changeLevel() {
    this.content.onSwitch = (isCorrect) => {
      this.model.nextLevel();
      this.stopTimer();
      this.isTimerInit = true;
      console.log(this.model.state); 

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
      // router.model = new GameModel();
      Router.showWelcomeScreen();
    };
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


  init() {
    this.changeLevel();

    if (this.isTimerInit === false) {
      this.changeTimer();
    }
  }
}
