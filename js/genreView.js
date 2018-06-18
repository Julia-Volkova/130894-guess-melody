import AbstractView from "./abstractView";
import controlPlayer from "./controlPlayer";

export default class GenreView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `<div class="main-wrap">
      <h2 class="title">Выберите ${this.level.genre} треки</h2>
      <form class="genre">
      
      ${this.level.answers.map((answer, i) =>
    `<div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${answer.audio}" ${answer.autoplay ? `autoplay` : ``}></audio>
              <button class="player-control ${answer.autoplay ? `player-control--pause` : `player-control--play`}"></button>
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

    btnAnswered.addEventListener(`click`, (evt) => {
      this.onSwitch(evt);
    });
  }

  onSwitch() {

  }
}
