import GenreView from "./genreView";
import {currentState, levels, statisticLose, results, startTimer, stopTimer} from "./gameData";
import {switchScreen, backToInitialState} from "./util";
import drawResultLoseScreen from "./drawResultLoseScreen";
import drawResultWinScreen from "./drawResultWinScreen";
import calculateFinalResults from "./computeFinalResult";
import drawWelcomeScreen from "./drawWelcomeScreen";

export default function drawGenreScreen(state) {
  const genreView = new GenreView(levels[state.level]);

  switchScreen(genreView.element);

  genreView.onSwitch = (evt, result, answers) => {
    evt.preventDefault();
    state.level++;
    stopTimer();

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
      startTimer();
    }
  };

  genreView.onDrawWelcome = () => {
    drawWelcomeScreen(currentState);
    backToInitialState();
    stopTimer();
  };
}
