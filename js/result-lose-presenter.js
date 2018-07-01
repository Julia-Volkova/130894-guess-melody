import ResultLoseView from "./result-lose-view";
import {switchScreen} from "./util";
import Router from "./router";

export default class ResultLosePresenter {
  constructor(model, type) {
    this._model = model;
    this._type = type;
    this._content = new ResultLoseView(this._model.currentState, this._type);
    this.root = switchScreen(this._content.element);
  }

  get element() {
    return this.root;
  }

  showResults() {
    this._content.onSwitch = () => {
      Router.showWelcomeScreen();
    };

    this._content.onDrawWelcome = () => {
      Router.start();
    };
  }

  init() {
    this.showResults();
  }
}
