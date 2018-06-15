// import {switchScreen} from "./util";
// import welcomeScreenElement from "./welcomeScreen";
//
//
// switchScreen(welcomeScreenElement());


import WelcomeView from "./welcome-view";
import {currentState, levels, results, statisticLose} from "./game-data";
import {backToInitialState, switchScreen} from "./util";
import renderHeaderTemplate from "./header";
import PerformerView from "./performer-view";
import ResultLose from "./result-lose";
import GenreView from "./genre-view";

const welcomeView = new WelcomeView();
const performerView = new PerformerView(levels[currentState.level]);
const resultLoseLives = new ResultLose(statisticLose.livesEnd);
const resultLoseTimes = new ResultLose(statisticLose.timeEnds);
const genreView = new GenreView(levels[currentState.level]);

switchScreen(welcomeView.element);

welcomeView.onSwitch = () => {
  currentState.level++;
  switchScreen(performerView.element, renderHeaderTemplate(currentState));
};

performerView.onSwitch = (evt) => {
  currentState.level++;

  let currentCorrect = evt.getAttribute(`data-correct`);
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
    switchScreen(resultLoseLives.element, renderHeaderTemplate(currentState));
  } else if (currentState.time === 0) {
    switchScreen(resultLoseTimes.element, renderHeaderTemplate(currentState));
  } else if (levels[currentState.level].type === `genre`) {
    switchScreen(genreView.element, renderHeaderTemplate(currentState));
  } else {
    switchScreen(performerView.element, renderHeaderTemplate(currentState));
  }
};

ResultLose.onSwitch = () => {
  switchScreen(welcomeView.element);
  backToInitialState();
};

genreView.onSwitch = (evt) => {
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
    switchScreen(resultLoseLives.element, renderHeaderTemplate(currentState));
  } else if (currentState.time === 0) {
    switchScreen(resultLoseTimes.element, renderHeaderTemplate(currentState));
  } else if (currentState.level === 11) {
    // switchScreen(resultWinView.element, renderHeaderTemplate(currentState));
  } else {
    switchScreen(genreView.element, renderHeaderTemplate(currentState));
  }
};
