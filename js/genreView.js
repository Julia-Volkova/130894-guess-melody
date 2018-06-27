import AbstractView from "./abstractView";
import controlPlayer from "./controlPlayer";
import renderHeaderTemplate from "./header";

export default class GenreView extends AbstractView {
  constructor(modelState, level) {
    super();
    this.modelState = modelState;
    this.level = level;
  }

  get template() {
    return renderHeaderTemplate(this.modelState) + `<div class="main-wrap">
      <h2 class="title">Уровень - ${this.modelState.level + 1} - ${this.level.question}</h2>
      <form class="genre">
      
      ${this.level.answers.map((answer, i) =>
    `<div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${answer.audio}" ${i === 0 ? `autoplay` : ``}></audio>
              <button class="player-control ${i === 0 ? `player-control--pause` : `player-control--play`}"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-${i + 1}" id="a-${i + 1}" data-correct="${answer.correct}">
          <label class="genre-answer-check" for="a-${i + 1}"></label>
        </div>`
  ).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>`;
  }

  bind() {
    const playerChecks = this.element.querySelectorAll(`.genre-answer input`);
    const btnAnswered = this.element.querySelector(`.genre-answer-send`);
    const playerControls = this.element.querySelectorAll(`.player-control`);
    const btnPlayAgain = this.element.querySelector(`.play-again__wrap`);
    let checkState = [];
    let checkOne;

    [...playerControls].forEach((elem) => {
      let audio = elem.previousElementSibling;
      controlPlayer(elem, audio);
    });

    btnAnswered.setAttribute(`disabled`, `disabled`);
    [...playerChecks].forEach((elem) => {
      elem.addEventListener(`click`, () => {
        checkState = [];
        [...playerChecks].forEach((el) => {
          if (el.checked) {
            checkState.push(true);
          } else {
            checkState.push(false);
          }
        });

        checkOne = checkState.some((el) => {
          return el === true;
        });

        if (checkOne) {
          btnAnswered.removeAttribute(`disabled`);
        } else {
          btnAnswered.setAttribute(`disabled`, `disabled`);
        }
      });
    });

    let answers = [];
    let result = ``;
    [...playerChecks].forEach((elem) => {
      elem.addEventListener(`click`, () => {
        let correct = elem.getAttribute(`data-correct`);
        let isCorrect = (correct === `true`);
        if (elem.checked) {
          answers.push(isCorrect);
        }
      });
    });

    btnAnswered.addEventListener(`click`, (evt) => {
      this.onSwitch(evt, result, answers);
    });

    btnPlayAgain.addEventListener(`click`, () => {
      this.onDrawWelcome();
    });

    this.timerContainer = this.element.querySelector(`.timer-value`);
    this.timerMin = this.element.querySelector(`.timer-value-mins`);
    this.timerSec = this.element.querySelector(`.timer-value-secs`);
  }

  onSwitch() {

  }

  onDrawWelcome() {

  }
}
