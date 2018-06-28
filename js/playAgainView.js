import AbstractView from "./abstractView";

export default class playAgainView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <section class="modal-confirm modal-confirm__wrap" style="z-index: 2;">
    <form class="modal-confirm__inner">
      <button class="modal-confirm__close" type="button">Закрыть</button>
      <h2 class="modal-confirm__title">Подтверждение</h2>
      <p class="modal-confirm__text">Вы уверены что хотите начать игру заново?</p>
      <div class="modal-confirm__btn-wrap">
        <button class="modal-confirm__btn modal-confirm__success">Ок</button>
        <button class="modal-confirm__btn modal-confirm__cancel">Отмена</button>
      </div>
    </form>
  </section>
    `;
  }

  bind() {
    const closeModal = this.element.querySelector(`.modal-confirm__close`);
    const backToStartBtn = this.element.querySelector(`.modal-confirm__success`);
    const cancelBtn = this.element.querySelector(`.modal-confirm__cancel`);
    closeModal.addEventListener(`click`, () => {
      this.onCloseModal();
    });
    backToStartBtn.addEventListener(`click`, () => {
      this.onBackToStartGame();
    });
    cancelBtn.addEventListener(`click`, () => {
      this.onCloseModal();
    });
  }

  onBackToStartGame() {

  }

  onCloseModal() {

  }
}
