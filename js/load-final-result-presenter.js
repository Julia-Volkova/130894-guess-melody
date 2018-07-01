import LoadFinalResultView from "./load-final-result-view";
import {switchScreen} from "./util";
import Router from "./router";

export default class ResultWinPresenter {
  constructor(model) {
    this._model = model;
    this._content = new LoadFinalResultView(this._model.currentState);
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
