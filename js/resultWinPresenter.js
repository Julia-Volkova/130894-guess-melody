import ResultWinView from "./resultWinView";
import {switchScreen, backToInitialState} from "./util";
import Router from "./router";

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
      Router.showWelcomeScreen();
      backToInitialState();
      this.model.initialState();
    };

    this.content.onDrawWelcome = () => {
      Router.showWelcomeScreen();
      backToInitialState();
      this.model.initialState();
    };
  }

  init() {
    this.showResult();
  }
}
