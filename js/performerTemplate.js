import {render, switchScreen, clearAndSwitchScreen} from "./util";
import {currentState, levelPerformer, levelGenre, results} from "./game-data";
import renderHeaderTemplate from "./header";
import renderGenreElement from "./genreTemplate";
import renderResultExpireChance from "./resultExpireChance";
import renderResultTimeout from "./resultTimeout";

export default function renderPerformerTemplate(step) {
  const performerTemplate = (stage) =>
    `<div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${stage.audio}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">

        <div class="main-answer-wrapper" data-correct="${stage.answers[0].correct}">
          <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1"/>
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" src="${stage.answers[0].pic}"
                 alt="${stage.answers[0].artist}" width="134" height="134">
            ${stage.answers[0].artist}
          </label>
        </div>

        <div class="main-answer-wrapper" data-correct="${stage.answers[1].correct}">
          <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-2"/>
          <label class="main-answer" for="answer-2">
            <img class="main-answer-preview" src="${stage.answers[1].pic}"
                 alt="${stage.answers[1].artist}" width="134" height="134">
            ${stage.answers[1].artist}
          </label>
        </div>

        <div class="main-answer-wrapper" data-correct="${stage.answers[2].correct}">
          <input class="main-answer-r" type="radio" id="answer-3" name="answer" value="val-3"/>
          <label class="main-answer" for="answer-3">
            <img class="main-answer-preview" src="${stage.answers[2].pic}"
                 alt="${stage.answers[2].artist}" width="134" height="134">
            ${stage.answers[2].artist}
          </label>
        </div>

      </form>
    </div>`;

  const performerElement = render(performerTemplate(levelPerformer[currentState.level]));

  const answerElements = performerElement.querySelectorAll(`.main-answer-wrapper`);
  const answerElementsArr = Array.from(answerElements);
  answerElementsArr.forEach((answer) => {
    answer.addEventListener(`click`, () => {
      currentState.level++;
      console.log(`Уровень: ${currentState.level}`);

      let currentCorrect = answer.getAttribute(`data-correct`);
      let isCorrect = (currentCorrect === `true`);
      let currentAnswer = {
        correct: isCorrect,
        time: 30
      };
      results.push(currentAnswer);
      console.log(results);
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
