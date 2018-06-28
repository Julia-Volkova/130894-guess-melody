import PlayAgainView from "./playAgainView";
import Router from "./router";
import {showModal, removeElementFromDom} from "./util";

export default class PlayAgainPresenter {
  constructor() {
    this.content = new PlayAgainView();
    this.root = showModal(this.content.element);
  }

  get element() {
    return this.root;
  }

  ololo() {
    this.content.onCloseModal = () => {
      removeElementFromDom(this.content.element);
    };

    this.content.onBackToStartGame = () => {
      removeElementFromDom(this.content.element);
      Router.start();
    };
  }

  init() {
    this.ololo();
  }
}
