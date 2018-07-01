import ConfirmationView from "./confirmation-view";
import Router from "./router";
import {showModal, removeElementFromDom} from "./util";

export default class ConfirmationPresenter {
  constructor() {
    this._content = new ConfirmationView();
    this.root = showModal(this._content.element);
  }

  get element() {
    return this.root;
  }

  chooseAction() {
    this._content.onCloseModal = (evt) => {
      evt.preventDefault();
      removeElementFromDom(this._content.modalWrap);
    };

    this._content.onBackToStartGame = (evt) => {
      evt.preventDefault();
      removeElementFromDom(this._content.modalWrap);
      Router.start();
    };
  }

  init() {
    this.chooseAction();
  }
}
