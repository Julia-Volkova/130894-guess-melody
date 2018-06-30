import AbstractView from "./abstractView";

export default class SplashScreen extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <div class="modal-error__wrap" style="cursor: not-allowed;">
        <div class="load-container load4">
             <div class="loader"></div>
    </div>
</div>
    `;
  }

  bind() {
    this.wrap = this.element.querySelector(`.modal-error__wrap`);
  }
}
