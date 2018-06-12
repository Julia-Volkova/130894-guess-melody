import {currentState, calcScores, results, showResultScreen} from "./game-data";

export const calculateFinalResults = function () {
  currentState.points = calcScores(results, currentState.lives);

  let calcFastAnswers = (arr) => {
    let count = 0;
    arr.forEach((elem) => {
      if (elem.time < 30) {
        count++;
      }
    });
    return count;
  };
  let statisticsInfo = showResultScreen([3, 7, 19, 14, 5, 13, 11], currentState);

  currentState.fastAnswers = calcFastAnswers(results);
  currentState.statistics = statisticsInfo;

  console.log(currentState);

  return currentState;
};
