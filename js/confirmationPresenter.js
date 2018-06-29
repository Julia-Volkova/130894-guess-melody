import ConfirmationView from "./confirmationView";
import Router from "./router";
import {showModal, removeElementFromDom} from "./util";

export default class ConfirmationPresenter {
  constructor() {
    this.content = new ConfirmationView();
    this.root = showModal(this.content.element);
  }

  get element() {
    return this.root;
  }

  chooseAction() {
    this.content.onCloseModal = () => {
      removeElementFromDom(this.content.modalWrap);
    };

    this.content.onBackToStartGame = () => {
      removeElementFromDom(this.content.modalWrap);
      Router.start();
    };
  }

  init() {
    this.chooseAction();
  }
}
