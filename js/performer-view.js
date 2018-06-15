import AbstractView from "./abstract-view";
import {currentState, levels, results} from "./game-data";
import renderResultExpireChance from "./resultExpireChance";
import controlPlayer from "./controlPlayer";
import renderGenreElement from "./genreTemplate";
import renderPerformerTemplate from "./performerTemplate";
import {clearAndSwitchScreen, switchScreen} from "./util";
import renderResultTimeout from "./resultTimeout";
import renderHeaderTemplate from "./header";

export default class PerformerView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    return `<div class="main-wrap">
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

    controlPlayer(playerControl, audio);

    [...answerElements].forEach((answer) => {
      answer.addEventListener(`click`, (evt) => {
        this.onSwitch(evt);
      }
    }
  }

  onSwitch(evt) {

  }
}
