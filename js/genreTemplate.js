import {render, switchScreen, clearAndSwitchScreen} from "./util";
import {currentState, levelGenre, results} from "./game-data";
import renderHeaderTemplate from "./header";
import renderResultExpireChance from "./resultExpireChance";
import renderResultTimeout from "./resultTimeout";
import resultWinElement from "./resultWin";
import {calculateFinalResults} from "./computeFinalResult";
import controlPlayer from "./controlPlayer";

export default function renderGenreTemplate(level) {
  const genreTemplate =
    `<div class="main-wrap">
      <h2 class="title">Выберите ${level.genre} треки</h2>
      <form class="genre">
           
        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${level.answers[0].audio}" autoplay></audio>
              <button class="player-control player-control--pause"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-1" data-correct="${level.answers[0].correct}">
          <label class="genre-answer-check" for="a-1"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${level.answers[1].audio}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2" data-correct="${level.answers[1].correct}">
          <label class="genre-answer-check" for="a-2"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${level.answers[2].audio}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-3" data-correct="${level.answers[2].correct}">
          <label class="genre-answer-check" for="a-3"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${level.answers[3].audio}"></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-4" data-correct="${level.answers[3].correct}">
          <label class="genre-answer-check" for="a-4"></label>
        </div>

        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
`;

  const genreElement = render(genreTemplate);

  const playerChecks = genreElement.querySelectorAll(`.genre-answer input`);
  const btnAnswered = genreElement.querySelector(`.genre-answer-send`);
  const playerControls = genreElement.querySelectorAll(`.player-control`);
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
    evt.preventDefault();
    currentState.level++;

    let currentCorrect = () => {
      let answers = [];
      let result = ``;
      [...playerChecks].forEach((elem) => {
        let correct = elem.getAttribute(`data-correct`);
        let isCorrect = (correct === `true`);
        if (elem.checked === true) {
          answers.push(isCorrect);
        }
      });
      result = answers.every((el) => {
        return el === true;
      });
      return result;
    };

    let currentAnswer = {
      correct: currentCorrect(),
      time: 30
    };
    results.push(currentAnswer);
    if (currentAnswer.correct === false) {
      currentState.lives--;
    }

    if (currentState.lives === 0) {
      clearAndSwitchScreen(renderHeaderTemplate(currentState));
      switchScreen(renderResultExpireChance());
    } else if (currentState.time === 0) {
      clearAndSwitchScreen(renderHeaderTemplate(currentState));
      switchScreen(renderResultTimeout());
    } else if (currentState.level === 11) {
      clearAndSwitchScreen(renderHeaderTemplate(currentState));
      switchScreen(resultWinElement(calculateFinalResults()));
    } else {
      clearAndSwitchScreen(renderHeaderTemplate(currentState));
      switchScreen(renderGenreTemplate(levelGenre[currentState.level]));
    }
  });

  return genreElement;
}
