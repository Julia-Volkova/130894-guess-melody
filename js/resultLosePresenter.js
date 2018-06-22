import ResultLoseView from "./resultLoseView";
import {backToInitialState, switchScreen} from "./util";
import Router from "./router";

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
      Router.showWelcomeScreen();
      backToInitialState();
    };

    this.content.onDrawWelcome = () => {
      Router.showWelcomeScreen();
      backToInitialState();
    };
  }

  init() {
    this.showResults();
  }
}
