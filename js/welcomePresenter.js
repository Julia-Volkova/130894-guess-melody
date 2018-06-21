import {switchScreen} from "./util";
import {currentState} from "./gameData";
import WelcomeView from "./welcomeView";
import PerformerPresenter from "./performerPresenter";
import GameModel from "./gameModel";

export default class WelcomePresenter {
  constructor(model) {
    this.model = model;
    this.content = new WelcomeView();
    this.root = switchScreen(this.content.element);
  }

  get element() {
    return this.root;
  }

  activateTimer() {
    this.model.tick();
  }

  changeLevel() {
    this.content.onSwitch = () => {
      this.model.nextLevel();
      this.model.creationTimeFormat();
      new PerformerPresenter(new GameModel(currentState)).init();
      this.activateTimer();
    };
  }

  init() {
    this.changeLevel();
  }
}


