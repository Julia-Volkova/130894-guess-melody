import ResultLoseView from "./resultLoseView";
import {switchScreen} from "./util";
import {Router, router} from "./router";
import GameModel from "./gameModel";

export default class ResultLosePresenter {
  constructor(model, type) {
    this.model = model;
    this.type = type;
    this.content = new ResultLoseView(this.model, this.type);
    this.root = switchScreen(this.content.element);
  }

  get element() {
    return this.root;
  }

  showResults() {
    this.content.onSwitch = () => {
      router.model = new GameModel();
      Router.showWelcomeScreen();
    };

    this.content.onDrawWelcome = () => {
      router.model = new GameModel();
      Router.showWelcomeScreen();
    };
  }

  init() {
    this.showResults();
  }
}
