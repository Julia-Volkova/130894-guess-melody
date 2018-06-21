import ResultLoseView from "./resultLoseView";
import {backToInitialState, switchScreen} from "./util";
import {currentState} from "./gameData";
import WelcomePresenter from "./welcomePresenter";
import GameModel from "./gameModel";

export default class ResultLosePresenter {
  constructor(model, type) {
    this.model = model;
    this.type = type;
    this.content = new ResultLoseView(this.type);
    this.root = switchScreen(this.content.element);
  }

  get element() {
    return this.root;
  }

  showResults() {
    this.content.onSwitch = () => {
      new WelcomePresenter(new GameModel(currentState)).init();
      backToInitialState();
    };

    this.content.onDrawWelcome = () => {
      new WelcomePresenter(new GameModel(currentState)).init();
      backToInitialState();
    };
  }

  init() {
    this.showResults();
  }
}
