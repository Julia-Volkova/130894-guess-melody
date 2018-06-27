import {switchScreen} from "./util";
import WelcomeView from "./welcomeView";
import Router from "./router";

export default class WelcomePresenter {
  constructor(model) {
    this.model = model;
    this.content = new WelcomeView();
    this.root = switchScreen(this.content.element);
  }

  get element() {
    return this.root;
  }

  startInitialisation() {
    this.content.main.style.cursor = `wait`;
    this.content.playBtn.style.cursor = `wait`;
    this.content.playBtn.setAttribute(`disabled`, `disabled`);
  }

  stopInitialisation() {
    this.content.main.style.cursor = `default`;
    this.content.playBtn.style.cursor = `default`;
    this.content.playBtn.removeAttribute(`disabled`);
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


