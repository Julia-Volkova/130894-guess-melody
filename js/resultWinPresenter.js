import ResultWinView from "./resultWinView";
import {switchScreen} from "./util";
import Router from "./router";

export default class ResultWinPresenter {
  constructor(model, obj) {
    this.model = model;
    this.obj = obj;
    this.content = new ResultWinView(this.model.currentState, this.obj, this.model.currentTime);
    this.root = switchScreen(this.content.element);
  }

  get element() {
    return this.root;
  }

  backToStartGame() {
    this.content.onSwitch = () => {
      Router.showWelcomeScreen();
    };

    this.content.onDrawWelcome = () => {
      Router.start();
    };
  }

  init() {
    this.backToStartGame();
  }
}
