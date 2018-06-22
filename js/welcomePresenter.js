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
    this.activateTimer = this.model.tick;
  }

  get element() {
    return this.root;
  }

  startGame() {
    this.content.onSwitch = () => {
      this.model.nextLevel();
      this.model.creationTimeFormat();
      this.activateTimer();
      new PerformerPresenter(new GameModel(currentState)).init();
    };
  }

  init() {
    this.startGame();
  }
}


