import GenreView from "./genreView";
import {currentState, levels, statisticLose, results} from "./gameData";
import {switchScreen, backToInitialState} from "./util";
import calculateFinalResults from "./computeFinalResult";
import WelcomePresenter from "./welcomePresenter";
import GameModel from "./gameModel";
import ResultLosePresenter from "./resultLosePresenter";
import ResultWinPresenter from "./resultWinPresenter";

export default class GenrePresenter {
  constructor(model) {
    this.model = model;
    this.content = new GenreView(levels[this.model.state.level]);
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
    } else if (this.model.state.level === 11) {
      new ResultWinPresenter(new GameModel(currentState), this.model.computeFinalResult()).init();
    } else {
      new GenrePresenter(new GameModel(currentState)).init();
      this.activateTimer();
    }
  }

  changeLevel() {
    this.content.onSwitch = (evt, result, answers) => {
      evt.preventDefault();
      this.model.nextLevel();
      this.model.stopTimer();

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
    this.changeLevel();
    this.setTimerValue();
  }
}
