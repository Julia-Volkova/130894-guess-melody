import AbstractView from "./abstractView";
import renderHeaderTemplate from "./header";
import {getMinutesAndSeconds, getNoun} from "./util";

export default class ResultWinView extends AbstractView {
  constructor(modelState, result, timer) {
    super();
    this.modelState = modelState;
    this.result = result;
    this.timer = timer;
    this.passedTime = getMinutesAndSeconds(300 - this.timer.remainingTime);
    this.minutes = this.passedTime.minutes ? `${this.passedTime.minutes}&nbsp;${getNoun(this.passedTime.minutes, `минуту`, `минуты`, `минут`)}` : ``;
    this.seconds = this.passedTime.seconds ? `${this.passedTime.seconds}&nbsp;${getNoun(this.passedTime.seconds, `секунду`, `секунды`, `секунд`)}` : ``;
  }

  get template() {
    return renderHeaderTemplate(this.modelState) + `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;${this.minutes}${this.passedTime.minutes && this.passedTime.seconds ? ` и ` : ``}${this.seconds}
      <br>вы&nbsp;набрали ${this.result.points} ${getNoun(this.result.points, `балл`, `балла`, `баллов`)} (${this.result.fastAnswers} ${getNoun(this.result.points, `быстрый`, `быстрых`, `быстрых`)})
      <br>совершив ${3 - this.result.lives} ${getNoun(3 - this.result.lives, `ошибку`, `ошибки`, `ошибок`)}</div>
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
