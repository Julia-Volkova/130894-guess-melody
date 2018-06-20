import PerformerView from "./performerView";
import {currentState, levels, statisticLose, results, startTimer, stopTimer} from "./gameData";
import {switchScreen, backToInitialState} from "./util";
import drawGenreScreen from "./drawGenreScreen";
import drawResultLoseScreen from "./drawResultLoseScreen";
import drawWelcomeScreen from "./drawWelcomeScreen";

export default function drawPerformerScreen(state) {
  const performerView = new PerformerView(levels[state.level]);

  switchScreen(performerView.element);

  performerView.onSwitch = (isCorrect) => {
    state.level++;
    stopTimer();

    let currentAnswer = {
      correct: isCorrect,
      time: 30
    };

    results.push(currentAnswer);

    if (isCorrect === false) {
      state.lives--;
    }

    if (state.lives === 0) {
      drawResultLoseScreen(statisticLose.livesEnd);
    } else if (state.time === 0) {
      drawResultLoseScreen(statisticLose.timeEnds);
    } else if (levels[state.level].type === `genre`) {
      drawGenreScreen(state);
      startTimer();
    } else {
      drawPerformerScreen(state);
      startTimer();
    }
  };

  performerView.onDrawWelcome = () => {
    drawWelcomeScreen(currentState);
    backToInitialState();
    stopTimer();
  };
}
