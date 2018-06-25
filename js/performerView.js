import AbstractView from "./abstractView";
import controlPlayer from "./controlPlayer";
import renderHeaderTemplate from "./header";

export default class PerformerView extends AbstractView {
  constructor(model, level) {
    super();
    this.model = model;
    this.level = level;
  }

  get template() {
    return renderHeaderTemplate(this.model.state) + `<div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${this.level.audio}" autoplay></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
      ${this.level.answers.map((answer) =>
    `<div class="main-answer-wrapper" data-correct="${answer.correct}">
      <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1"/>
       <label class="main-answer" for="answer-1">
      <img class="main-answer-preview" src="${answer.pic}"
             alt="${answer.artist}" width="134" height="134">
        ${answer.artist}
     </label>
     </div>`
  ).join(``)}
      </form>
    </div>`;
  }

  bind() {
    const answerElements = this.element.querySelectorAll(`.main-answer-wrapper`);
    const audio = this.element.querySelector(`.player audio`);
    const playerControl = this.element.querySelector(`.player-control`);
    const btnPlayAgain = this.element.querySelector(`.play-again__wrap`);

    controlPlayer(playerControl, audio);

    [...answerElements].forEach((answer) => {
      answer.addEventListener(`click`, () => {
        let currentCorrect = answer.getAttribute(`data-correct`);
        let isCorrect = (currentCorrect === `true`);
        this.onSwitch(isCorrect);
      });
    });

    btnPlayAgain.addEventListener(`click`, () => {
      this.onDrawWelcome();
    });

    this.timerMin = this.element.querySelector(`.timer-value-mins`);
    this.timerSec = this.element.querySelector(`.timer-value-secs`);
  }

  onSwitch() {

  }

  onDrawWelcome() {

  }
}
