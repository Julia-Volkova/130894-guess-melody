import ResultWinView from "./resultWinView";
import {switchScreen, backToInitialState} from "./util";
import {currentState} from "./gameData";
import WelcomePresenter from "./welcomePresenter";
import GameModel from "./gameModel";

export default class ResultWinPresenter {
  constructor(model, obj) {
    this.model = model;
    this.obj = obj;
    this.content = new ResultWinView(this.obj);
    this.root = switchScreen(this.content.element);
  }

  get element() {
    return this.root;
  }

  showResult() {
    this.content.onSwitch = () => {
      new WelcomePresenter(new GameModel(currentState)).init();
      backToInitialState();
      this.model.initialState();
    };

    this.content.onDrawWelcome = () => {
      new WelcomePresenter(new GameModel(currentState)).init();
      backToInitialState();
      this.model.initialState();
    };
  }

  init() {
    this.showResult();
  }
}
