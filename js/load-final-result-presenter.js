import LoadFinalResultView from "./load-final-result-view";
import {switchScreen} from "./util";
import Router from "./router";

export default class ResultWinPresenter {
  constructor(model) {
    this.model = model;
    this.content = new LoadFinalResultView(this.model.currentState);
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
