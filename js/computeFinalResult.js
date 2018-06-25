// import {calcScores, results, showResultScreen, currentState} from "./gameData";
//
// export default () => {
//   currentState.points = calcScores(results, currentState.lives);
//
//   let calcFastAnswers = (arr) => {
//     let count = 0;
//     arr.forEach((elem) => {
//       if (elem.time < 30) {
//         count++;
//       }
//     });
//     return count;
//   };
//   let statisticsInfo = showResultScreen([3, 7, 19, 14, 5, 13, 11], currentState);
//
//   currentState.fastAnswers = calcFastAnswers(results);
//   currentState.statistics = statisticsInfo;
//
//   return currentState;
// };
