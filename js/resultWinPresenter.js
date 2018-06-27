import ResultWinView from "./resultWinView";
import {switchScreen} from "./util";
import Router from "./router";
import {results} from "./gameData";

export default class ResultWinPresenter {
  constructor(model, obj) {
    this.model = model;
    this.obj = obj;
    this.content = new ResultWinView(this.model.currentState, this.obj);
    this.root = switchScreen(this.content.element);
    console.log(results);
  }

  get element() {
    return this.root;
  }

  showResult() {
    this.content.onSwitch = () => {
      Router.showWelcomeScreen();
    };

    this.content.onDrawWelcome = () => {
      Router.showWelcomeScreen();
    };
  }

  init() {
    this.showResult();
  }
}
