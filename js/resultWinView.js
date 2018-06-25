import AbstractView from "./abstractView";
import renderHeaderTemplate from "./header";

export default class ResultWinView extends AbstractView {
  constructor(model, result) {
    super();
    this.model = model;
    this.result = result;
  }

  get template() {
    return renderHeaderTemplate(this.model.state) + `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${this.result.points} баллов (${this.result.fastAnswers} быстрых)
      <br>совершив ${3 - this.result.lives} ошибки</div>
    <span class="main-comparison">${this.result.statistics}</span>
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
