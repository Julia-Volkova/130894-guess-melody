import GenreView from "./genreView";
import {levels, results, statisticLose} from "./gameData";
import {switchScreen} from "./util";
import renderHeaderTemplate from "./header";
import drawResultLoseScreen from "./drawResultLoseScreen";
import drawResultWinScreen from "./drawResultWinScreen";
import calculateFinalResults from "./computeFinalResult";

export default function drawGenreScreen(state) {
  const genreView = new GenreView(levels[state.level]);

  switchScreen(genreView.element, renderHeaderTemplate(state));

  genreView.onSwitch = (evt) => {
    evt.preventDefault();
    state.level++;

    let currentCorrect = () => {
      const playerChecks = genreView.element.querySelectorAll(`.genre-answer input`);
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
      state.lives--;
    }

    if (state.lives === 0) {
      drawResultLoseScreen(statisticLose.livesEnd);
    } else if (state.time === 0) {
      drawResultLoseScreen(statisticLose.timeEnds);
    } else if (state.level === 11) {
      drawResultWinScreen(calculateFinalResults());
    } else {
      drawGenreScreen(state);
    }
  };
}
