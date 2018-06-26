import {switchScreen} from "./util";
import WelcomeView from "./welcomeView";
import {Router} from "./router";

export default class WelcomePresenter {
  constructor(model) {
    this.model = model;
    this.content = new WelcomeView();
    this.root = switchScreen(this.content.element);
  }

  get element() {
    return this.root;
  }

  startGame() {
    this.content.onSwitch = () => {
      this.model.nextLevel();
      this.model.creationTimeFormat();
      Router.showPerformerScreen();
    };
  }

  init() {
    this.startGame();
  }
}


