import ResultWinView from "./result-win-view";
import {switchScreen} from "./util";
import Router from "./router";

export default class ResultWinPresenter {
  constructor(model, obj) {
    this._model = model;
    this._obj = obj;
    this._content = new ResultWinView(this._model.currentState, this._obj, this._model.currentTime);
    this.root = switchScreen(this._content.element);
  }

  get element() {
    return this.root;
  }

  backToStartGame() {
    this._content.onSwitch = () => {
      Router.showWelcomeScreen();
    };

    this._content.onDrawWelcome = () => {
      Router.start();
    };
  }

  init() {
    this.backToStartGame();
  }
}
