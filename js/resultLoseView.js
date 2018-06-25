import AbstractView from "./abstractView";
import renderHeaderTemplate from "./header";

export default class ResultLoseView extends AbstractView {
  constructor(model, data) {
    super();
    this.model = model;
    this.data = data;
  }

  get template() {
    return renderHeaderTemplate(this.model.state) + `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">${this.data.title}</h2>
    <div class="main-stat">${this.data.description}</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;
  }

  bind() {
    const replayBtn = this.element.querySelector(`.main-replay`);
    const btnPlayAgain = this.element.querySelector(`.play-again__wrap`);

    replayBtn.addEventListener(`click`, () => {
      this.onSwitch();
    });

    btnPlayAgain.addEventListener(`click`, () => {
      this.onDrawWelcome();
    });
  }

  onSwitch() {

  }

  onDrawWelcome() {

  }
}
