import AbstractView from "./abstractView";

export default class ErrorView extends AbstractView {
  constructor(error) {
    super();
    this.error = error;
    console.log(this.error);
  }

  get template() {
    return `<section class="modal-error modal-error__wrap">
    <div class="modal-error__inner">
      <h2 class="modal-error__title">Произошла ошибка!</h2>
      <p class="modal-error__text">Type: ${this.error.message}</p>
    </div>
  </section>`;
  }
}
