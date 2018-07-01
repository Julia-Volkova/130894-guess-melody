import {switchScreen} from "./util";
import WelcomeView from "./welcome-view";
import Router from "./router";

export default class WelcomePresenter {
  constructor(model) {
    this._model = model;
    this._content = new WelcomeView();
    this.root = switchScreen(this._content.element);
  }

  get element() {
    return this.root;
  }

  startGame() {
    this._content.onSwitch = () => {
      this._model.nextLevel();
      this._model.creationTimeFormat();
      if (this._model.getFirstLevelType() === `performer`) {
        Router.showPerformerScreen();
      } else {
        Router.showGenreScreen();
      }
    };
  }

  init() {
    this.startGame();
  }
}


