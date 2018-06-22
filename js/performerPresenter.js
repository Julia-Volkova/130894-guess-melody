import PerformerView from "./performerView";
import {currentState, levels, statisticLose, results} from "./gameData";
import {switchScreen, backToInitialState} from "./util";
import WelcomePresenter from "./welcomePresenter";
import GameModel from "./gameModel";
import GenrePresenter from "./genrePresenter";
import ResultLosePresenter from "./resultLosePresenter";

export default class PerformerPresenter {
  constructor(model) {
    this.model = model;
    this.content = new PerformerView(levels[this.model.state.level]);
    this.root = switchScreen(this.content.element);
    this.activateTimer = this.model.tick;
  }

  get element() {
    return this.root;
  }

  answer() {
    if (this.model.state.lives === 0) {
      new ResultLosePresenter(new GameModel(currentState), statisticLose.livesEnd).init();
    } else if (this.model.state.time === 0) {
      new ResultLosePresenter(new GameModel(currentState), statisticLose.timeEnds).init();
    } else if (levels[this.model.state.level].type === `genre`) {
      new GenrePresenter(new GameModel(currentState)).init();
      this.activateTimer();
    } else {
      new PerformerPresenter(new GameModel(currentState)).init();
      this.activateTimer();
    }
  }

  changeLevel() {
    this.content.onSwitch = (isCorrect) => {
      this.model.nextLevel();
      this.model.stopTimer();
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
      new WelcomePresenter(new GameModel(currentState)).init();
      backToInitialState();
      this.model.stopTimer();
    };
  }

  setTimerValue() {
    this.content.timerMin.innerHTML = this.model.state.timeFormat.min;
    this.content.timerSec.innerHTML = this.model.state.timeFormat.sec;
    setTimeout(() => {
      this.setTimerValue();
    }, 1000);
  }

  init() {
    this.setTimerValue();
    this.changeLevel();
  }
}
