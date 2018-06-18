import WelcomeView from "./welcome-view";
import {currentState, levels, results, statisticLose} from "./game-data";
import {switchScreen, backToInitialState} from "./util";
import renderHeaderTemplate from "./header";
import PerformerView from "./performer-view";
import ResultLose from "./result-lose";
import GenreView from "./genre-view";
import ResultWin from "./result-win";
import {calculateFinalResults} from "./computeFinalResult";

export default () => {
  const welcomeView = new WelcomeView();
  const performerView = (level) => {
    return new PerformerView(levels[level]);
  };
  const resultLoseLivesView = new ResultLose(statisticLose.livesEnd);
  const resultLoseTimesView = new ResultLose(statisticLose.timeEnds);
  const genreView = (level) => {
    return new GenreView(levels[level]);
  };
  const resultWinView = new ResultWin(calculateFinalResults());

  switchScreen(welcomeView.element);

  welcomeView.onSwitch = () => {
    currentState.level++;
    switchScreen(performerView(currentState.level).element, renderHeaderTemplate(currentState));
  };

  performerView(currentState.level).onSwitch = (evt) => {
    currentState.level++;

    let currentCorrect = evt.target.getAttribute(`data-correct`);
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
      switchScreen(resultLoseLivesView.element, renderHeaderTemplate(currentState));
    } else if (currentState.time === 0) {
      switchScreen(resultLoseTimesView.element, renderHeaderTemplate(currentState));
    } else if (levels[currentState.level].type === `genre`) {
      switchScreen(genreView(currentState.level).element, renderHeaderTemplate(currentState));
    } else {
      switchScreen(performerView(currentState.level).element, renderHeaderTemplate(currentState));
    }
  };

  resultLoseLivesView.onSwitch = () => {
    switchScreen(welcomeView.element);
    backToInitialState();
  };

  resultLoseTimesView.onSwitch = () => {
    switchScreen(welcomeView.element);
    backToInitialState();
  };


  genreView(currentState.level).onSwitch = (evt) => {
    evt.preventDefault();
    currentState.level++;

    let currentCorrect = () => {
      const playerChecks = this.element.querySelectorAll(`.genre-answer input`);
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
      switchScreen(resultLoseLivesView.element, renderHeaderTemplate(currentState));
    } else if (currentState.time === 0) {
      switchScreen(resultLoseTimesView.element, renderHeaderTemplate(currentState));
    } else if (currentState.level === 11) {
      switchScreen(resultWinView.element, renderHeaderTemplate(currentState));
    } else {
      switchScreen(genreView(currentState.level).element, renderHeaderTemplate(currentState));
    }
  };

  resultWinView.onSwitch = () => {
    switchScreen(welcomeView.element);
    backToInitialState();
  };
};
