import AbstractView from "./abstract-view";

export default class ResultLose extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">${this.data.title}</h2>
    <div class="main-stat">${this.data.description}</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;
  }

  bind() {
    const replayBtn = this.element.querySelector(`.main-replay`);
    replayBtn.addEventListener(`click`, () => {
      this.onSwitch();
    });
  }

  onSwitch() {

  }
}
