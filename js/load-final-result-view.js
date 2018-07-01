import AbstractView from "./abstract-view";
import renderHeaderTemplate from "./header";

export default class LoadFinalResultView extends AbstractView {
  constructor(modelState) {
    super();
    this.modelState = modelState;
  }

  get template() {
    return renderHeaderTemplate(this.modelState) + `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Подождите, загружается.....</h2>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
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
