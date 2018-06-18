import PerformerView from "./performerView";
import {levels, results, statisticLose} from "./gameData";
import {switchScreen} from "./util";
import renderHeaderTemplate from "./header";
import drawGenreScreen from "./drawGenreScreen";
import drawResultLoseScreen from "./drawResultLoseScreen";

export default function drawPerformerScreen(state) {
  const performerView = new PerformerView(levels[state.level]);

  switchScreen(performerView.element, renderHeaderTemplate(state));

  performerView.onSwitch = (evt) => {
    state.level++;
    let currentCorrect = evt.currentTarget.getAttribute(`data-correct`);
    let isCorrect = (currentCorrect === `true`);
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
    } else {
      drawPerformerScreen(state);
    }
  };
}
