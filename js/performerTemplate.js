import {render, switchScreen, clearAndSwitchScreen} from "./util";
import {currentState, levelPerformer, levelGenre, results} from "./game-data";
import renderHeaderTemplate from "./header";
import renderGenreElement from "./genreTemplate";
import renderResultExpireChance from "./resultExpireChance";
import renderResultTimeout from "./resultTimeout";
import controlPlayer from "./controlPlayer";

export default function renderPerformerTemplate(stage) {
  const performerTemplate =
    `<div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${stage.audio}" autoplay></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
      ${stage.answers.map((answer) =>
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

  const performerElement = render(performerTemplate);

  const answerElements = performerElement.querySelectorAll(`.main-answer-wrapper`);
  const audio = performerElement.querySelector(`.player audio`);
  const playerControl = performerElement.querySelector(`.player-control`);

  controlPlayer(playerControl, audio);

  [...answerElements].forEach((answer) => {
    answer.addEventListener(`click`, () => {
      currentState.level++;

      let currentCorrect = answer.getAttribute(`data-correct`);
      let isCorrect = (currentCorrect === `true`);
      let currentAnswer = {
        correct: isCorrect,
        time: 30
      };
      results.push(currentAnswer);
      if (isCorrect === false) {
        currentState.lives--;
      }

      if (currentState.lives === 0) {
        clearAndSwitchScreen(renderHeaderTemplate(currentState));
        switchScreen(renderResultExpireChance());
      } else if (currentState.time === 0) {
        clearAndSwitchScreen(renderHeaderTemplate(currentState));
        switchScreen(renderResultTimeout());
      } else if (currentState.level === 6) {
        clearAndSwitchScreen(renderHeaderTemplate(currentState));
        switchScreen(renderGenreElement(levelGenre[currentState.level]));
      } else {
        clearAndSwitchScreen(renderHeaderTemplate(currentState));
        switchScreen(renderPerformerTemplate(levelPerformer[currentState.level]));
      }
    });
  });

  return performerElement;
}
