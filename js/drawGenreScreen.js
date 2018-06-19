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

  genreView.onSwitch = (evt, result, answers) => {
    evt.preventDefault();
    state.level++;

    result = answers.every((el) => {
      return el === true;
    });

    let currentAnswer = {
      correct: result,
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
