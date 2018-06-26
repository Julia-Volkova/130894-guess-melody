import ResultWinView from "./resultWinView";
import {switchScreen} from "./util";
import {Router, router} from "./router";
import GameModel from "./gameModel";

export default class ResultWinPresenter {
  constructor(model, obj) {
    this.model = model;
    this.obj = obj;
    this.content = new ResultWinView(this.model, this.obj);
    this.root = switchScreen(this.content.element);
  }

  get element() {
    return this.root;
  }

  showResult() {
    this.content.onSwitch = () => {
      // router.model = new GameModel();
      Router.showWelcomeScreen();
    };

    this.content.onDrawWelcome = () => {
      // router.model = new GameModel();
      Router.showWelcomeScreen();
    };
  }

  init() {
    this.showResult();
  }
}
